<template>
  <!-- instagram section -->
  <section class="instagram">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 p-0">
          <h2 class="title-borderless">
            {{ title }}
          </h2>
          <div class="slide-7 no-arrow">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div v-for="(user, index) in instagram.slice(0, 15)" :key="index" class="swiper-slide">
                  <div>
                    <div>
                      <div class="instagram-box">
                        <img alt :src="user.images.standard_resolution.url">
                        <div class="overlay">
                          <i class="fa fa-instagram" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- instagram section end -->
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '#instagram',
      swiperOption: {
        loop: true,
        slideSpeed: 300,
        slidesPerView: 7,
        slidesToScroll: 7,
        breakpoints: {
          1199: {
            slidesPerView: 5
          },
          991: {
            slidesPerView: 3
          },
          480: {
            slidesPerView: 2
          }
        }
      },
      instagram: []
    }
  },
  mounted() {
    axios
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc&count=15')
      .then((response) => { this.instagram = response.data.data })
  }
}
</script>
