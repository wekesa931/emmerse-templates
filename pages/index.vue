<template>
  <div>
    <Fashion />
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
const Fashion = () => import('./shop/fashion/index')
export default {
  components: {
    Fashion
  },
  async created(){
    try {
      const { data } = await axios.get(
        `https://e-merse.firebaseio.com/pwa/products.json?orderBy=%22shopid%22&equalTo=%22${process.env.shopID}%22`
      );
      
      const orderbydatearray = Object.values(data).sort((a, b) => {
        return new Date(b.date_created) - new Date(a.date_created);
      });
      const items = orderbydatearray.filter((el) => el.item)
      this.$store.dispatch('products/addProducts', items)
      const categories = orderbydatearray.filter((el) => el.categoryname)
      this.$store.dispatch('products/addCategories', categories)
    } catch (err) {
      console.log("===>", err);
    }
  }
}
</script>
