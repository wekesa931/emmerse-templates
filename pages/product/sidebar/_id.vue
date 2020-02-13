<template>
  <!-- eslint-disable -->
  <div>
    <Header />
    <Breadcrumbs :title="getDetail.name" />
    <section class="section-b-space">
      <!--  -->



<div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
            <productSidebar />
            </div>
            <div class="col-lg-9 col-sm-12 col-xs-12 productdetail">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6">
                    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                      <div class="swiper-wrapper">
                        <div
                          class="swiper-slide"
                          v-for="(product,index) in getDetail.imageUrls"
                          :key="index"
                        >
                          <img
                            :src="product"
                            :id="product"
                            class="img-fluid bg-img"
                            alt="productImage"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 slider-nav-images">
                        <div v-swiper:mySwiper1="swiperOption1">
                          <div class="swiper-wrapper">
                            <div
                              class="swiper-slide"
                              v-for="(product,index) in getDetail.imageUrls"
                              :key="index"
                            >
                              <img
                                :src="product"
                                :id="product"
                                class="img-fluid bg-img"
                                alt="productImage"
                                @click="slideTo(index)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 rtl-text">
                    <div class="product-right">
                      <h2>{{ getDetail.name }}</h2>
                      <!-- <h4 v-if="getDetail.sale">
                        <del>{{ getDetail.price * curr.curr | currency(curr.symbol) }}</del>
                        <span>{{ getDetail.discount }}% off</span>
                      </h4> -->
                      <!-- <h3 v-if="getDetail.sale">{{ discountedPrice(getDetail) * curr.curr | currency(curr.symbol) }}</h3> -->
                      <h3>Ksh {{ getDetail.price * curr.curr }}</h3>
                      <!-- <ul class="color-variant">
                        <li
                          v-bind:class="{ active: activeColor == variant}"
                          v-for="(variant,variantIndex) in Color(getDetail.variants)"
                          :key="variantIndex"
                        >
                          <a
                            :class="[variant]"
                            v-bind:style="{ 'background-color' : variant}"
                            @click="sizeVariant(getDetail.variants[variantIndex].image_id, variantIndex, variant)"
                          ></a>
                        </li>
                      </ul> -->
                      <div class="pro_inventory">
                        <p class="active"> Hurry! We have few products in stock. </p>
                        <div class="inventory-scroll">
                          <span style="width: 95%;"></span>
                        </div>
                      </div>
                      <div class="product-description border-product">
                        <!-- <h6 class="product-title size-text">
                          select size
                          <span>
                            <a href="javascript:void(0)" v-b-modal.modal-1>size chart</a>
                          </span>
                        </h6> -->
                        <!-- <div class="size-box">
                          <ul>
                            <li
                              class="product-title"
                              v-bind:class="{ active: selectedSize == size}"
                              v-for="(size,index) in size"
                              :key="index"
                            >
                              <a
                                href="javascript:void(0)"
                                @click="changeSizeVariant(size)"
                              >{{size}}</a>
                            </li>
                          </ul>
                        </div> -->
                        <h5 class="avalibility">
                          <span>In Stock</span>
                        </h5>
                        <!-- <h5 class="avalibility" v-if="counter > getDetail.stock">
                          <span>Out of Stock</span>
                        </h5> -->
                        <!-- <h6 class="product-title">quantity</h6> -->
                        <div class="qty-box">
                          <div class="input-group">
                            <!-- <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-left-minus"
                                data-type="minus"
                                data-field
                                @click="decrement()"
                              >
                                <i class="ti-angle-left"></i>
                              </button>
                            </span> -->
                            <!-- <input
                              type="text"
                              name="quantity"
                              class="form-control input-number"
                              :disabled="counter > getDetail.stock"
                              v-model="counter"
                            /> -->
                            <!-- <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-right-plus"
                                data-type="plus"
                                data-field
                                @click="increment()"
                              >
                                <i class="ti-angle-right"></i>
                              </button>
                            </span> -->
                          </div>
                        </div>
                      </div>
                      <div class="product-buttons">
                        <nuxt-link :to="{ path: '/checkout'}">
                          <button
                            class="btn btn-solid"
                            title="Add to cart"
                            @click="openWhatsAppForm"
                          >Get product</button>
                        </nuxt-link>
                        <!-- <button
                            class="btn btn-solid"
                            title="buy now"
                            @click="buyNow(getDetail, counter)"
                          >Buy Now</button> -->
                      </div>
                      <div class="border-product">
                        <h6 class="product-title">product details</h6>
                        <p>{{getDetail.description.substring(0,200)+"...."}}</p>
                      </div>
                      <div class="border-product">
                        <h6 class="product-title">share it</h6>
                        <div class="product-icon">
                          <ul class="product-social">
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fa fa-whatsapp"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fa fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                          <!-- <form class="d-inline-block">
                            <button class="wishlist-btn" @click="addToWishlist(product)">
                              <i class="fa fa-heart"></i>
                              <span class="title-font">Add To WishList</span>
                            </button>
                          </form> -->
                        </div>
                      </div>
                      <div class="border-product">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!--  -->
     
      <relatedProduct :productTYpe="productTYpe" :productId="productId" />
      <b-modal id="modal-1" size="md" centered hide-footer>
        <template v-slot:modal-title>{{getDetail.name}}</template>
        <!-- <img src="../../../assets/images/size-chart.jpg" alt="size-chart" class="img-fluid" /> -->
      </b-modal>
    </section>
    <Footer />
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapGetters } from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
import Timer from '../../../components/widgets/timer'
import productSidebar from '../../../components/widgets/product-sidebar'
import relatedProduct from '../../../components/widgets/related-products'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    Timer,
    productSidebar,
    relatedProduct
  },
  data() {
    return {
      getDetail: {},
      counter: 1,
      activeColor: '',
      selectedSize: '',
      qty: '',
      size: [],
      productTYpe: '',
      productId: '',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        centeredSlides: false
      }
    }
  },
  computed: {
    ...mapState({
      currency: state => state.products.currency
    }),
    ...mapGetters({
      curr: 'products/changeCurrency'
    }),
    // getDetail(){
    //   const products = this.$store.getters['products/returnProducts']
    //   const singleProduct = products.filter(product => {
    //     return product.id === this.$route.params.id})
    //   return singleProduct[0];
    // },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created() {
    const products = this.$store.getters['products/returnProducts']
    if(products.length === 0) {
      this.$router.push("/");
    }
    const singleProduct = products.filter(product => {
        return product.id === this.$route.params.id})
    this.getDetail = singleProduct[0]

    this.$store.dispatch('products/addDetailCategory', this.getDetail.category[0])
    this.$store.dispatch('products/addDetailId', this.getDetail.id)
    this.productTYpe = this.getDetail.category[0]
      this.productId = this.getDetail.id

    // For displaying default color and size on pageload
    // this.uniqColor = this.getDetail.variants[0].color
    // this.sizeVariant(this.getDetail.variants[0].image_id)
    // Active default color
    this.activeColor = this.uniqColor
    // this.changeSizeVariant(this.getDetail.variants[0].size)
    // related product type
    // this.relatedProducts()
  },
  methods: {
    priceCurrency: function () {
      this.$store.dispatch('products/changeCurrency')
    },
    addToWishlist: function (product) {
      this.$store.dispatch('products/addToWishlist', product)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    },
    // Related Products display
    relatedProducts() {
      this.productTYpe = this.getDetail.category[0]
      this.productId = this.getDetail.id
    },
    // Display Unique Color
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    // add to cart
    addToCart: function (product, qty) {
      product.quantity = qty || 1
      this.$store.dispatch('cart/addToCart', product)
    },
    openWhatsAppForm() {
      const items = {
        name: this.getDetail.name,
        id: this.getDetail.id,
        price: this.getDetail.price,
        image: this.getDetail.imageUrls[0],
        quantity: 1
      };
      this.$store.dispatch("cart/addItemToCart", items);
      this.$router.push("/checkout");
    },
    buyNow: function (product, qty) {
      product.quantity = qty || 1
      this.$store.dispatch('cart/addToCart', product)
      this.$router.push('/checkout')
    },
    // Item Count
    increment() {
      this.counter++
    },
    decrement() {
      if (this.counter > 1) this.counter--
    },
    // Change size variant
    changeSizeVariant(variant) {
      this.selectedSize = variant
    },
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false)
    },
    sizeVariant(id, slideId, color) {
      this.swiper.slideTo(slideId, 1000, false)
      this.size = []
      this.activeColor = color
      this.getDetail.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size)
        }
      })
    }
  }
}
</script>
