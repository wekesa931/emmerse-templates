<template>
  <!-- eslint-disable -->
  <div>
    <header>
      <div class="mobile-fix-option" />
      <TopBar />
      <div class="container" id="myHeader">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="navbar">
                  <a class="hide-nav" @click="left_sidebar">
                    <div class="bar-style">
                      <i aria-hidden="true" class="fa fa-angle-left" style="color: black; fontSize: 30px"></i>
                    </div>
                  </a>
                  <!-- <LeftSidebar :left-sidebar-val="leftSidebarVal" @closeVal="closeBarValFromChild" /> -->
                </div>
                <div class="brand-logo">
                  <nuxt-link :to="{ path: '/'}">
                    <img :src="&quot;@/assets/images/fasionImage/loggo.png&quot;" class="img-fluid" alt>
                  </nuxt-link>
                </div>
              </div>
              <div class="menu-right pull-right">
                <Nav/>
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
    mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const header = window.document.getElementById('myHeader')
      const sticky = header.offsetTop
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    },
    left_sidebar() {
      this.$router.back();
    },
    closeBarValFromChild(val) {
      this.leftSidebarVal = val
    }
  }
}
</script>
<style>
#myHeader {
  z-index: 10;
  max-width: 100%;
  background: white;
  height: auto;
  /* overflow: hidden; */
  }
/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.hide-nav {
  display: none;
}
.brand-logo {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 60px;
}
@media (max-width: 480px) {
  .brand-logo img {
      height: 80px;
  }
}
@media (max-width: 800px) {
  .hide-nav {
    display: block;
  }
}
</style>