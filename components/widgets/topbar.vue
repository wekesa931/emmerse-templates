<template>
  <!-- eslint-disable -->
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>Welcome to {{ shopname }}</li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>Call Us:  {{ shopnumber }}
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
      shopname: process.env.shopName,
      shopnumber: process.env.shopNumber,
      isLogin: localStorage.getItem('userlogin')
    }
  }
}
</script>