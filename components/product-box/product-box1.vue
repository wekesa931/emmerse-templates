<template>
  <!-- eslint-disable -->
  <div>
    <div class="img-wrapper">
      <div class="lable-block">
        <span v-if="product.new" class="lable3">new</span>
        <span v-if="product.sale" class="lable4">on sale</span>
      </div>
      <div class="front">
        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
          <img
            :id="product.id"
            :key="index"
            :src="product.imageUrls[0]"
            class="img-fluid bg-img"
            :alt="product.name"
            style="width: 100%;height: 285px; objectFit: cover; border-radius: 7px;"
          />
        </nuxt-link>
      </div>
      <ul class="product-thumb-list">
        <li
          v-for="(image,index) in product.images"
          :key="index"
          class="grid_thumb_img"
          :class="{active: imageSrc == image.src}"
        >
          <a href="javascript:void(0);">
            <img :src="getImgUrl(image.src)" />
          </a>
        </li>
      </ul>
      <div class="cart-info cart-wrap" style="color: white">
        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
          <button
          v-b-modal.modal-cart
          data-toggle="modal"
          data-target="#addtocart"
          title="Add to cart"
          variant="primary"
          @click="addToCart(product)"
        >
          <i class="ti-shopping-cart" style="color: white" />
        </button>
        </nuxt-link>        
        <a href="javascript:void(0)" title="Wishlist">
          <i
            class="ti-heart"
            aria-hidden="true"
            style="color: white"
          />
        </a>
        <a
          v-b-modal.modal-lg
          href="javascript:void(0)"
          title="Quick View"
          variant="primary"
          @click="showQuickview(product)"
        >
          <i class="ti-search" aria-hidden="true" style="color: white" />
        </a>
        <a
          v-b-modal.modal-compare
          href="javascript:void(0)"
          title="Comapre"
          variant="primary"
        >
          <i class="ti-reload" aria-hidden="true" style="color: white" />
        </a>
      </div>
    </div>
    <div class="product-detail">
      <div class="rating">
      </div>
      <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
        <h6>{{ product.name }}</h6>
      </nuxt-link>
      <p>{{ product.description }}</p>
      <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
      <div style="display: flex;margin-top:10px;">
        <!-- <v-btn
          style="width: 100%; marginTop: 7px; textTransform: capitalize; fontWeight: 700; fontSize: 12px"
          dark
          color="#25D366"
          rounded
          outlined
          @click="openWhatsAppForm"
        >
          <v-icon left dark>mdi-whatsapp</v-icon>
          Talk to Us
        </v-btn>-->
        <b-button pill variant="outline-success" class="whatsapp-btn" @click="openWhatsAppForm">
          <i class="fa fa-whatsapp" aria-hidden="true"></i> Talk To Us
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapGetters } from "vuex";
export default {
  props: ["product", "index"],
  data() {
    return {
      imageSrc: "",
      quickviewProduct: {},
      compareProduct: {},
      cartProduct: {},
      showquickview: false,
      showCompareModal: false,
      cartval: false,
      variants: {
        productId: "",
        image: ""
      },
      dismissSecs: 5,
      dismissCountDown: 0
    };
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    }),
    ...mapGetters({
      curr: "products/changeCurrency"
    })
  },
  methods: {
    openWhatsAppForm() {
      const items = {
        name: this.product.name,
        id: this.product.id,
        price: this.product.price,
        image: this.product.imageUrls[0],
        quantity: 1
      };
      this.$store.dispatch("cart/addItemToCart", items);
      this.$router.push("/checkout");
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    addToCart: function(product) {
      this.cartval = true;
      this.cartProduct = product;
      this.$emit("opencartmodel", this.cartval, this.cartProduct);
      this.$store.dispatch("cart/addToCart", product);
    },
    addToWishlist: function(product) {
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("products/addToWishlist", product);
    },
    showQuickview: function(productData) {
      this.showquickview = true;
      this.quickviewProduct = productData;
      this.$emit("openquickview", this.showquickview, this.quickviewProduct);
    },
    addToCompare: function(product) {
      this.showCompareModal = true;
      this.compareProduct = product;
      this.$emit(
        "showCompareModal",
        this.showCompareModal,
        this.compareProduct
      );
      this.$store.dispatch("products/addToCompare", product);
    },
    Color(variants) {
      const uniqColor = [];
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color);
        }
      }
      return uniqColor;
    },
    productColorchange(color, product) {
      product.variants.map(item => {
        if (item.color === color) {
          product.images.map(img => {
            if (img.image_id === item.image_id) {
              this.imageSrc = img.src;
            }
          });
        }
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
      this.$emit("alertseconds", this.dismissCountDown);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    }
  }
};
// style="width: 100%; marginTop: 7px; textTransform: capitalize; fontWeight: 700; fontSize: 12px"
</script>

<style scoped>
.whatsapp-btn {
  width: 100%;
  font-size: 16px;
  border: 1px solid #48f748;
  color: #48f748;
  text-transform: capitalize;
}
.whatsapp-btn :hover {
  background: #48f748;
  color: white;
}
</style>