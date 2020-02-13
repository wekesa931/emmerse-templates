<template>
  <div>
    <footer class="footer-light">
      <div class="light-layout" />
      <section class="section-b-space light-layout">
        <div class="container">
          <div class="row footer-theme partition-f">
            <div class="col-lg-4 col-md-6">
              <div class="footer-title footer-mobile-title">
                <h4>about</h4>
              </div>
              <div class="footer-contant">
                <div class="footer-logo">
                  <img :src="logo" alt="logo" style="width: 40%">
                </div>
                <div class="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-whatsapp" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- <div class="col offset-xl-1">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>categories</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <p href="/product/categories/Kente%20Designs">
                        Kente Designs
                      </p>
                    </li>
                    <li>
                      <p href="/product/categories/Avengers%20vibes">
                        Avengers Vibes
                      </p>
                    </li>
                    <li>
                      <p href="/product/categories/Off-shoulders">
                        Off Shoulder
                      </p>
                    </li>
                    <li>
                      <p href="/product/categories/Ankara%20Polo%20Casual%20Shirts">
                        Polo Casual
                      </p>
                    </li>
                    <li>
                      <p href="/product/categories/Dashiki">
                        Dashiki
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div> -->
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>why choose us</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <a href="#">delivery countrywide</a>
                    </li>
                    <li>
                      <a href="#">secure shopping</a>
                    </li>
                    <li>
                      <a href="#">wide variety of items</a>
                    </li>
                    <li>
                      <a href="#">great prices</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>store information</h4>
                </div>
                <div class="footer-contant">
                  <ul class="contact-list">
                    <li>
                      <i class="fa fa-map-marker" />{{ location }}
                      <p>Authentic ankara wear for ladies and men.</p>
                    </li>
                    <li>
                      <i class="fa fa-phone" />Call Us: {{ phone }}
                    </li>
                    <li>
                      <i class="fa fa-envelope-o" />Email Us:
                      <a href="#">{{ email }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
    <TapTop />
  </div>
</template>

<script>
/* eslint-disable */
import TapTop from '../widgets/tap-to-top'
export default {
  data() {
    return {
      logo: process.env.logo,
      location: process.env.location,
      phone: process.env.shopNumber,
      email: process.env.shopEmail,
    }
  },
  components: {
    TapTop
  }
}
</script>

<style>
.light-layout {
  background: white; 
}
</style>