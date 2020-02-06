<template>
  <div>
    <Header />
    <Slider />
    <CollectionBanner />
    <ProductSlider
      :products="productslist"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
    />
    <ProductTab
      :products="productslist"
      :cat="categorylist"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
    />
    <Services />
    <Footer />
    <quickviewModel :open-modal="showquickviewmodel" :product-data="quickviewproduct" />
    <compareModel
      :open-compare="showcomparemodal"
      :product-data="comapreproduct"
      @closeCompare="closeCompareModal"
    />
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import { mapState } from "vuex";
import Header from "../../../components/header/header1";
import Footer from "../../../components/footer/footer1";
import quickviewModel from "../../../components/widgets/quickview";
import compareModel from "../../../components/widgets/compare-popup";
import Slider from "./components/slider";
import CollectionBanner from "./components/collection_banner";
import ProductSlider from "./components/product_slider";
import Banner from "./components/banner";
import ProductTab from "./components/product_tab";
import Services from "./components/services";
import Blog from "./components/blog";
import Instagram from "./components/instagram";
import LogoSlider from "./components/logo_slider";

export default {
  components: {
    Header,
    Slider,
    CollectionBanner,
    ProductSlider,
    Banner,
    ProductTab,
    Services,
    Blog,
    Instagram,
    LogoSlider,
    Footer,
    quickviewModel,
    compareModel,
  },
  data() {
    return {
      products: [],
      category: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {}
    };
  },
  computed: {
    productslist(){
      return this.$store.getters['products/returnProducts']
    },
    categorylist(){
      return this.$store.getters['products/returnCategories']
    }
  },
  async created() {
    try {
      const { data } = await axios.get(
        `https://e-merse.firebaseio.com/pwa/products.json?orderBy=%22shopid%22&equalTo=%22${process.env.shopID}%22`
      );
      
      const orderbydatearray = Object.values(data).sort((a, b) => {
        return new Date(b.date_created) - new Date(a.date_created);
      });
      const categories = orderbydatearray.filter((el) => el.categoryname)
      this.$store.dispatch('products/addCategories', categories)
      const items = orderbydatearray.filter((el) => el.item)
      this.$store.dispatch('products/addProducts', items)
    } catch (err) {
      console.log("===>", err);
    }
  },
  methods: {
    productsArray: function() {
      this.productslist.map(item => {
        if (item.type === "fashion") {
          this.products.push(item);
          item.collection.map(i => {
            const index = this.category.indexOf(i);
            if (index === -1) this.category.push(i);
          });
        }
      });
    },
    updateProducts(){
      this.productslist = this.$store.getters['products/returnProducts']
      this.categorylist = this.$store.getters['products/returnCategories']
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item;
      this.comapreproduct = productData;
    },
    closeCompareModal(item) {
      this.showcomparemodal = item;
    },
    showCart(item, productData) {
      this.showcartmodal = item;
      this.cartproduct = productData;
    },
    closeCartModal(item) {
      this.showcartmodal = item;
    }
  }
};
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 100ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
