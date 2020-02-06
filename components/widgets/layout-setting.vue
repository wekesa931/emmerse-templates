<template>
  <div>
    <!-- theme setting -->
    <div class="sidebar-btn dark-light-btn">
      <div class="dark-light">
        <div class="theme-layout-version" @click="customizeLayoutVersion()">
          {{ themeColor }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      themeColor: 'Dark',
      layoutsidebar: false,
      activeItem: 'home',
      layoutType: 'ltr',
      modalShow: false,
      activeColor: localStorage.getItem('color')
    }
  },
  computed: {
    ...mapState({
      layout: state => state.layout.layout
    })
  },
  created() {
    this.$store.dispatch('layout/set')
  },
  methods: {
    openlayoutSidebar() {
      this.layoutsidebar = true
    },
    closelayoutSidebar() {
      this.layoutsidebar = false
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    opensettingcontent: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    },
    customizeLayoutType(val) {
      this.$store.dispatch('layout/setLayoutType', val)
      this.layoutType = val
    },
    selectedColor: function (menuItem) {
      return this.activeColor === menuItem
    },
    customizeThemeColor(val) {
      if (this.activeColor === val) {
        this.activeColor = ''
      } else {
        this.activeColor = val
      }
      this.$store.dispatch('layout/setColorScheme', val)
    },
    customizeLayoutVersion() {
      this.$store.dispatch('layout/setLayoutVersion')
      if (this.themeColor === 'Dark') {
        this.themeColor = 'Light'
      } else this.themeColor = 'Dark'
    }
  }
}
</script>
