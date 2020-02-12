<template>
  <!-- eslint-disable -->
  <div>
    <Header />
    <Breadcrumbs title="Contact" />
    <section class="contact-page section-b-space">
      <div class="container">
        <div class="row section-b-space">
          <div class="col-lg-7 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321"
              allowfullscreen
            />
          </div>
          <div class="col-lg-5">
            <div class="contact-right">
              <ul>
                <li>
                  <div class="contact-icon">
                    <img :src="phoneimage" alt="Generic placeholder image">
                    <h6>Contact Us</h6>
                  </div>
                  <div class="media-body">
                    <p>{{ phone1 }}</p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker" aria-hidden="true" />
                    <h6>Address</h6>
                  </div>
                  <div class="media-body">
                    <p v-html="address" />
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <img :src="emailimage" alt="Generic placeholder image">
                    <h6>Email</h6>
                  </div>
                  <div class="media-body">
                    <p>{{ email1 }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" style="display: none">
          <div class="col-sm-12">
            <form class="theme-form" method="post" @submit="checkForm">
              <div v-if="errors.length">
                <ul class="validation-error mb-3">
                  <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                  </li>
                </ul>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <label for="fname">First Name</label>
                  <input
                    id="fname"
                    v-model="fname"
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    name="fname"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label for="lname">Last Name</label>
                  <input
                    id="lname"
                    v-model="lname"
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    name="lname"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label for="phone">Phone number</label>
                  <input
                    id="phone"
                    v-model="phone"
                    type="tel"
                    class="form-control"
                    placeholder="Enter your number"
                    name="phone"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    v-model="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    name="email"
                    required
                  >
                </div>
                <div class="col-md-12">
                  <label for="message">Write Your Message</label>
                  <textarea
                    id="message"
                    v-model="message"
                    class="form-control"
                    placeholder="Write Your Message"
                    name="message"
                    rows="6"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="submit"
                    class="btn btn-solid"
                    value="Send Your Message"
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
/* eslint-disable */
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      phoneimage: require('@/assets/images/icon/phone.png'),
      emailimage: require('@/assets/images/icon/email.png'),
      phone1: '704233752',
      phone2: '+86 163 - 451 - 7894',
      address: 'ABC Complex,Near xyz, New York <br /> USA 123456',
      email1: 'chessacreations@gmail.com',
      email2: 'info@shopcart.com',
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []
      if (!this.fname) {
        this.errors.push('First name required.')
      }
      if (!this.lname) {
        this.errors.push('Last name required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.phone) {
        this.errors.push('Phone Number required.')
      }
      if (!this.message) {
        this.errors.push('Message required.')
      }
      if (!this.errors.length) return true
      e.preventDefault()
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
