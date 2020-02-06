<template>
  <!-- eslint-disable -->
  <div>
    <header>
      <div class="mobile-fix-option" />
      <!-- <TopBar /> -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="navbar">
                  <a @click="left_sidebar">
                    <div class="bar-style">
                      <!-- <i class="fa fa-bars sidebar-bar" aria-hidden="true" /> -->
                    </div>
                  </a>
                  <!-- <LeftSidebar :left-sidebar-val="leftSidebarVal" @closeVal="closeBarValFromChild" /> -->
                </div>
                <div class="brand-logo">
                  <nuxt-link :to="{ path: '/shop/fashion'}">
                    <img :src="&quot;@/assets/images/fasionImage/loggo.png&quot;" class="img-fluid" alt>
                  </nuxt-link>
                </div>
              </div>
              <div class="menu-right pull-right">
                <HeaderWidgets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
/* eslint-disable */
import TopBar from '../widgets/topbar'
import LeftSidebar from '../widgets/left-sidebar'
import Nav from '../widgets/navbar'
import HeaderWidgets from '../widgets/header-widgets'
export default {
  components: {
    TopBar,
    LeftSidebar,
    Nav,
    HeaderWidgets
  },
  data() {
    return {
      leftSidebarVal: false
    }
  },
  methods: {
    left_sidebar() {
      this.leftSidebarVal = true
    },
    closeBarValFromChild(val) {
      this.leftSidebarVal = val
    }
  }
}
</script>
