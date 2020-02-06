/* eslint-disable */
import products from '../../data/products'

const state = {
  // --------------
  allProducts: [],
  categoryList: [],
  prodCategory: '',
  prodDetailId: '',
  whatsappItem: '',
  searchProducts: [],
  // --------------
  productslist: products.data,
  products: products.data,
  wishlist: [],
  compare: [],
  currency: {
    curr: 'Ksh',
    symbol: 'Ksh'
  },
  order: [],
  locale: 'en',
  searchProduct: []
}
// getters
const getters = {
  returnWhatsappDetail: (state) => {
    return state.whatsappItem
  },
  returnProducts: (state) => {
    return state.allProducts
  },
  returnProductType: (state) => {
    return state.prodCategory
  },
  returnProductId: (state) => {
    return state.prodDetailId
  },
  returnCategories: (state) => {
    return state.categoryList
  },
  getcollectionProduct: (state) => {
    return collection => state.products.filter((product) => {
      return collection === product.collection
    })
  },
  // Get a single product
  getSingleProductById: (state, id) => {
    return state.allProducts
  },
  getProductById: (state) => {
    return id => state.products.find((product) => {
      return product.id === +id
    })
  },
  compareItems: (state) => {
    return state.compare
  },
  wishlistItems: (state) => {
    return state.wishlist
  },
  changeCurrency: (state) => {
    if (state.currency.curr === 'eur') {
      state.currency.curr = 0.90
      return state.currency
    } else if (state.currency.curr === 'inr') {
      state.currency.curr = 70.93
      return state.currency
    } else if (state.currency.curr === 'gbp') {
      state.currency.curr = 0.78
      return state.currency
    } else if (state.currency.curr === 'usd') {
      state.currency.curr = 1
      return state.currency
    }else if (state.currency.curr === 'Ksh') {
      state.currency.curr = 1
      return state.currency
    }
  },
  getOrder: (state) => {
    return state.order
  }
}
// mutations
const mutations = {
  SET_WHATSAPP_FORM(state, prod) {
    state.whatsappItem = prod
  },
  SET_DETAIL_PRODUCTS(state, prod) {
    state.prodCategory = prod
  },
  SET_DETAIL_ID(state, prod) {
    state.prodDetailId = prod
  },
  SET_PRODUCTS(state, items) {
    state.allProducts = items
  },
  SET_CATEGORIES(state, cat) {
    state.categoryList = cat
  },
  changeCurrency: (state, payload) => {
    state.currency = payload
  },
  addToWishlist: (state, payload) => {
    const product = state.products.find(item => item.id === payload.id)
    const wishlistItems = state.wishlist.find(item => item.id === payload.id)
    if (wishlistItems) {
    } else {
      state.wishlist.push({
        ...product
      })
    }
  },
  removeWishlistItem: (state, payload) => {
    const index = state.wishlist.indexOf(payload)
    state.wishlist.splice(index, 1)
  },
  addToCompare: (state, payload) => {
    const product = state.products.find(item => item.id === payload.id)
    const compareItems = state.compare.find(item => item.id === payload.id)
    if (compareItems) {
    } else {
      state.compare.push({
        ...product
      })
    }
  },
  removeCompareItem: (state, payload) => {
    const index = state.compare.indexOf(payload)
    state.compare.splice(index, 1)
  },
  searchProduct: (state, payload) => {
    payload = payload.toLowerCase()
    state.searchProduct = []
    if (payload.length) {
      state.products.filter((product) => {
        if (product.title.toLowerCase().includes(payload)) {
          state.searchProduct.push(product)
        }
      })
    }
  },
  searchProducts: (state, payload) => {
    payload = payload.toLowerCase()
    state.searchProducts = []
    if (payload.length) {
      state.allProducts.filter((product) => {
        if (product.name.toLowerCase().includes(payload)) {
          state.searchProducts.push(product)
        }
      })
    }
  },
  createOrder: (state, payload) => {
    state.order = payload
  }
}
// actions
const actions = {
  addItemToCart: (context, payload) => {
    context.commit('SET_WHATSAPP_FORM', payload)
  },
  addDetailCategory: (context, payload) => {
    context.commit('SET_DETAIL_PRODUCTS', payload)
  },
  addDetailId: (context, payload) => {
    context.commit('SET_DETAIL_ID', payload)
  },
  addProducts: (context, payload) => {
    context.commit('SET_PRODUCTS', payload)
  },
  addCategories: (context, payload) => {
    context.commit('SET_CATEGORIES', payload)
  },
  changeCurrency: (context, payload) => {
    context.commit('changeCurrency', payload)
  },
  addToWishlist: (context, payload) => {
    context.commit('addToWishlist', payload)
  },
  removeWishlistItem: (context, payload) => {
    context.commit('removeWishlistItem', payload)
  },
  addToCompare: (context, payload) => {
    context.commit('addToCompare', payload)
  },
  removeCompareItem: (context, payload) => {
    context.commit('removeCompareItem', payload)
  },
  searchProduct: (context, payload) => {
    context.commit('searchProduct', payload)
  },
  searchProducts: (context, payload) => {
    context.commit('searchProducts', payload)
  },
  createOrder: (context, payload) => {
    context.commit('createOrder', payload)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
