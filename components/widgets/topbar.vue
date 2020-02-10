<template>
  <!-- eslint-disable -->
  <div class="top-header" style="background: #f8f8f8;">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>Welcome to our store Chessa Creations</li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>Call Us:  0704233752
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'
export default {
  data() {
    return {
      isLogin: localStorage.getItem('userlogin')
    }
  }
}
</script>