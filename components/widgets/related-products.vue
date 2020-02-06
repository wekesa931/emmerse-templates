<template>
  <!-- eslint-disable -->
  <div>
    <section class="ratio_asos">
      <div class="container">
        <div class="col-12 product-related">
          <h2>{{ title }}</h2>
        </div>
        <div class="row m-0">
          <div
            v-for="(product,index) in productArray"
            :key="index"
            class="col-xl-2 col-md-4 col-sm-6"
          >
            <div class="product-box">
              <productBox1
                :product="product"
                :index="index"
                @opencartmodel="showCart"
                @showCompareModal="showCoampre"
                @openquickview="showQuickview"
                @showalert="alert"
                @alertseconds="alert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
    <quickviewModel :open-modal="showquickviewmodel" :product-data="quickviewproduct" />
    <compareModel :open-compare="showcomparemodal" :product-data="comapreproduct" @closeCompare="closeCompareModal" />
    <!-- <cartModel :open-cart="showcartmodal" :product-data="cartproduct" :products="products" @closeCart="closeCartModal" /> -->
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import productBox1 from '../product-box/product-box1'
// import cartModel from '../cart-model/cart-modal-popup'
import quickviewModel from './quickview'
import compareModel from './compare-popup'
export default {
  components: {
    productBox1,
    quickviewModel,
    compareModel,
    // cartModel
  },
  props: ['productTYpe', 'productId'],
  data() {
    return {
      relatedProdList: [],
      title: 'Related Products',
      products: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.allProducts
    }),
    productArray() {
      const similartProds = []
      const products = this.$store.getters['products/returnProducts']
      const productType = this.$store.getters['products/returnProductType']
      const productId = this.$store.getters['products/returnProductId']
      products.map((item) => {
        if (item.category[0] === productType) {
          if (item.id !== productId) {
            similartProds.push(item)
          }
        }
      })
      return similartProds
    }
  },
  created() {
    this.productsArray()
  },
  methods: {
    // relatedProducts() {
    //   this.$store.dispatch('products/relatedProducts', {
    //     productTYpe: this.productTYpe,
    //     productId: this.productId
    //   })
    // },
    productsArray() {
      const similartProds = []
      const products = this.$store.getters['products/returnProducts']
      const productType = this.$store.getters['products/returnProductType']
      const productId = this.$store.getters['products/returnProductId']
      this.relatedProdList = products.map((item) => {
        if (item.category[0] === this.productType) {
          if (item.id !== productId) {
            similartProds.push(item)
          }
        }
      })
      this.relatedProdList = similartProds
    },
    alert(item) {
      this.dismissCountDown = item
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item
      this.comapreproduct = productData
    },
    closeCompareModal(item) {
      this.showcomparemodal = item
    },
    showCart(item, productData) {
      this.showcartmodal = item
      this.cartproduct = productData
    },
    closeCartModal(item) {
      this.showcartmodal = item
    }
  }
}
</script>
