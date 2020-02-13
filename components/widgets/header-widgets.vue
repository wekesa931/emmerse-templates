<template>
  <div>
    <div class="icon-nav">
      <ul>
        <li class="onhover-div mobile-search">
          <div>
            <img
              alt
              :src="&quot;@/assets/images/icon/layout4/search.png&quot;"
              class="img-fluid"
              @click="openSearch()"
            >
            <i class="ti-search" @click="openSearch()" />
          </div>
          <div id="search-overlay" class="search-overlay" :class="{ opensearch:search }">
            <div>
              <span class="closebtn" title="Close Overlay" @click="closeSearch()">×</span>
              <div class="overlay-content">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-12">
                      <form>
                        <div class="form-group mb-0">
                          <input
                            v-model="searchString"
                            type="text"
                            class="form-control"
                            placeholder="Search a Product"
                            @keyup="searchProduct"
                          >
                        </div>
                        <button type="submit" class="btn btn-primary">
                          <i class="fa fa-search" />
                        </button>
                      </form>
                      <ul v-if="searchItems.length" class="search-results">
                        <li v-for="(product,index) in searchItems" :key="index" class="product-box">
                          <div class="img-wrapper">
                            <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                              <img
                              :key="index"
                              :src="product.imageUrls[0]"
                              class="img-fluid bg-img"
                            >
                            </nuxt-link>
                          </div>
                          <div class="product-detail">
                            <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                              <h6>{{ product.name }}</h6>
                            </nuxt-link>
                            <h4>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="onhover-div mobile-setting">
          <div>
            <img alt :src="&quot;@/assets/images/icon/layout4/setting.png&quot;" class="img-fluid">
            <i class="ti-settings" />
          </div>
          <div class="show-div setting">
            <h6>currency</h6>
            <ul class="list-inline">
              <!-- <li>
                <a href="javascript:void(0)" @click="updateCurrency('eur', '€')">eur</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('inr', '₹')">inr</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('gbp', '£')">gbp</a>
              </li> -->
              <li>
                <a href="javascript:void(0)">Ksh</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="onhover-div mobile-cart">
          <div>
            <img alt :src="&quot;@/assets/images/icon/layout4/cart.png&quot;" class="img-fluid">
            <i class="ti-shopping-cart" />
            <span class="cart_qty_cls">{{ cart.length }}</span>
          </div>
          <ul v-if="!cart.length" class="show-div shopping-cart">
            <li>Your cart is currently empty.</li>
          </ul>
          <ul v-if="cart.length" class="show-div shopping-cart">
            <li v-for="(item,index) in cart" :key="index">
              <div class="media">
                <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                  <!-- <img alt class="mr-3" :src="getImgUrl(item.images[0].src)"> -->
                </nuxt-link>
                <div class="media-body">
                  <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                    <h4>{{ item.title }}</h4>
                  </nuxt-link>
                  <h4>
                    <span>{{ item.quantity }} x {{ item.price | currency }}</span>
                  </h4>
                </div>
              </div>
              <div class="close-circle">
                <a href="#" @click="removeCartItem(item)">
                  <i class="fa fa-times" aria-hidden="true" />
                </a>
              </div>
            </li>
            <li>
              <div class="total">
                <h5>
                  subtotal :
                  <span>{{ cartTotal | currency }}</span>
                </h5>
              </div>
            </li>
            <li>
              <div class="buttons">
                <nuxt-link :to="{ path: '/page/account/cart'}" :class="'view-cart'">
                  view cart
                </nuxt-link>
                <nuxt-link :to="{ path: '/checkout'}" :class="'checkout'">
                  checkout
                </nuxt-link>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      currencyChange: {},
      search: false,
      searchString: ''
    }
  },
  computed: {
    ...mapState({
      searchItems: state => state.products.searchProducts
    }),
    ...mapGetters({
      cart: 'cart/cartItems',
      cartTotal: 'cart/cartTotalAmount',
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    openSearch() {
      this.search = true
    },
    closeSearch() {
      this.search = false
    },
    searchProduct() {
      this.$store.dispatch('products/searchProducts', this.searchString)
    },
    removeCartItem: function (product) {
      this.$store.dispatch('cart/removeCartItem', product)
    },
    updateCurrency: function (currency, currSymbol) {
      this.currencyChange = { curr: currency, symbol: currSymbol }
      this.$store.dispatch('products/changeCurrency', this.currencyChange)
    }
  }
}
</script>
