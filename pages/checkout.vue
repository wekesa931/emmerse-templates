<template>
  <div>
    <Header />
    <Breadcrumbs title="Checkout" />
    <section class="section-b-space">
      <div class="container">
        <div class="checkout-page">
          <div class="checkout-form">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-lg-6 col-sm-12 col-xs-12">
                    <div class="checkout-title">
                      <h3>Customer Details</h3>
                    </div>
                    <div class="column check-out">
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <div class="field-label">
                          Name
                        </div>
                        <ValidationProvider v-slot="{ errors }" rules="required" name="First name">
                          <input v-model="user.firstName" type="text" name="First name">
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <ValidationProvider v-slot="{ errors }" rules="required|digits:10" name="phone Number">
                          <div class="field-label">
                            Phone
                          </div>
                          <input v-model="user.phone" type="text" name="Phone">
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>

                      <b-button type="submit" pill variant="outline-success" :disabled="invalid" class="whatsapp-btn" @click="openWhatsApp">
                        <i class="fa fa-whatsapp" aria-hidden="true"></i> Talk To Us
                      </b-button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 col-xs-12">
                    <div class="checkout-details">
                      <div class="order-box">
                        <div class="title-box">
                          <div>
                            Product
                            <span>Total</span>
                          </div>
                        </div>
                        <ul class="qty">
                          <li>
                            {{ cart.name | uppercase }} X {{ cart.quantity }}
                            <span>{{ (cart.price * curr.curr) * cart.quantity | currency(curr.symbol) }}</span>
                          </li>
                        </ul>
                        <ul class="sub-total">
                          <li>
                            Subtotal
                            <span class="count">{{ cart.price * curr.curr | currency(curr.symbol) }}</span>
                          </li>
                        </ul>
                        <ul class="sub-total">
                          <li>
                            Total
                            <span class="count">{{ cart.price * curr.curr | currency(curr.symbol) }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
/* eslint-disable */
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm'
import { mapGetters } from 'vuex'
import Header from '../components/header/header1'
import Footer from '../components/footer/footer1'
import Breadcrumbs from '../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver
  },
  computed: {
    ...mapGetters({
      cart: 'cart/whatsappCartItems',
      cartTotal: 'cart/cartTotalAmount',
      curr: 'products/changeCurrency'
    })
  },
  data() {
    return {
      user: {
        firstName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
      },
      isLogin: false,
      paypal: {
        sandbox: 'Your Sandbox ID'
      },
      payment: false,
      environment: 'sandbox',
      button_style: {
        label: 'checkout',
        size: 'medium', // small | medium | large | responsive
        shape: 'pill', // pill | rect
        color: 'blue' // gold | blue | silver | black
      },
      amtchar: ''
    }
  },
  methods: {
    openWhatsApp() {
      sendLead()
      openWhatsApp()
    },
     sendLead() {
      window.firebase
        .database()
        .ref(`pwa/leads`)
        .push({
          startedAt: window.firebase.database.ServerValue.TIMESTAMP,
          shop: process.env.shopName,
          shopemail: process.env.shopEmail,
          image: this.cart.image,
          item: this.cart.name,
          name: this.user.firstName,
          phone: this.user.phone
        })
    },

    openWhatsApp() {
      window.open(
        `https://wa.me/254${process.env.shopNumber}?text=Hi! My name is ${
          this.user.firstName
        }. I am interested in this item ${this.cart.name}. Please get back to me.`,
        '_blank'
      )
    },
    order() {
      this.isLogin = localStorage.getItem('userlogin')
      if (this.isLogin) {
        this.payWithStripe()
      } else {
        this.$router.replace('/page/account/login-firebase')
      }
    },
    payWithStripe() {
      const handler = (window).StripeCheckout.configure({
        key: 'PUBLISHBLE_KEY', // 'PUBLISHBLE_KEY' publishble key
        locale: 'auto',
        closed: function () {
          handler.close()
        },
        token: (token) => {
          this.$store.dispatch('products/createOrder', {
            product: this.cart,
            userDetail: this.user,
            token: token.id,
            amt: this.cartTotal
          })
          this.$router.push('/page/order-success')
        }
      })
      handler.open({
        name: 'Multikart ',
        description: 'Reach to your Dream',
        amount: this.cartTotal * 100
      })
    },
    getamt() {
      return this.cartTotal.toString()
    },
    onPaymentComplete: function (data) {
      this.$store.dispatch('products/createOrder', {
        product: this.cart,
        userDetail: this.user,
        token: data.orderID,
        amt: this.cartTotal
      })
      this.$router.push('/page/order-success')
    },
    onCancelled() {
      console.log('You cancelled a window')
    },
    onSubmit() {
      console.log('Form has been submitted!')
    }
  }
}
</script>
<style scoped>
  .whatsapp-btn {
    margin-top: 5%;
    width: 100%;
    font-size: 16px;
    border: 2px solid #48f748;
    color: #48f748;
    text-transform: capitalize;
  }
  .whatsapp-btn :hover {
    background: #48f748;
    color: white;
  }
</style>