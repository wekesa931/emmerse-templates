<template>
  <!-- eslint-disable -->
  <div>
    <Header />
    <Breadcrumbs title="Comapre" />
    <!-- <section class="compare-padding">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div v-if="compare.length" class="compare-page">
              <div class="table-wrapper table-responsive">
                <table class="table">
                  <thead>
                    <tr class="th-compare">
                      <td>Action</td>
                      <th v-for="(item,index) in compare" :key="index" class="item-row">
                        <button type="button" class="remove-compare" @click="removeCompareItem(item)">
                          Remove
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table-compare">
                    <tr>
                      <th class="product-name">
                        Product Name
                      </th>
                      <td v-for="(item,index) in compare" :key="index" class="grid-link__title">
                        {{ item.title }}
                      </td>
                    </tr>
                    <tr>
                      <th class="product-name">
                        Product Image
                      </th>
                      <td v-for="(item,index) in compare" :key="index" class="item-row">
                        <img :src="item.imageUrls[0]" alt="" class="featured-image">
                        <div class="product-price product_price">
                          <strong v-if="item.sale">On Sale:</strong>
                          <span>{{ item.price * curr.curr | currency(curr.symbol) }}</span>
                        </div>
                        <form class="variants clearfix">
                          <button title="Add to Cart" class="add-to-cart btn btn-solid" @click="addToCart(item)">
                            Add to Cart
                          </button>
                        </form>
                        <h4 class="grid-link__title hidden pt-2">
                          {{ item.name }}
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <th class="product-name">
                        Product Description
                      </th>
                      <td v-for="(item,index) in compare" :key="index" class="item-row">
                        <p
                          class="description-compare"
                        >
                          {{ item.description }}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th class="product-name">
                        Availability
                      </th>
                      <td v-for="(item,index) in compare" :key="index" class="available-stock">
                        <p>Available In stock</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-if="!compare.length" class="empty-cart-cls text-center">
              <img :src="&quot;@/assets/images/empty-compare.png&quot;" class="img-fluid" alt="empty cart">
              <h3 class="mt-3">
                <strong>Your Compare List is Empty</strong>
              </h3>
              <div class="col-12">
                <nuxt-link :to="{ path: '/'}" class="btn btn-solid">
                  continue shopping
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  computed: {
    ...mapGetters({
      compare: 'products/compareItems',
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    removeCompareItem: function (product) {
      this.$store.dispatch('products/removeCompareItem', product)
    },
    addToCart: function (product) {
      this.$store.dispatch('cart/addToCart', product)
    }
  }
}
</script>
