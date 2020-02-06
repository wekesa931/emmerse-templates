<template>
  <div>
    <!-- <h2 class="title">{{ $t('home.title') }}</h2> -->
    <!-- <h2 class="subtitle">{{ $t('home.introduction') }}</h2> -->
    <!-- Home slider -->
    <section class="p-0">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in items" :key="index" class="swiper-slide">
              <div
                class="home text-center"
                :class="item.alignclass"
                :style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4>{{ item.title }}</h4>
                          <h1>{{ item.subtitle }}</h1>
                          <nuxt-link :to="{ path: '/collection/leftsidebar/all'}" class="btn btn-solid">
                            shop now
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
        </div>
      </div>
    </section>
    <!-- Home slider end -->
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/home-banner/banner1.jpg'),
          title: 'welcome to fashion',
          subtitle: 'women fashion',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/banner2.jpg'),
          title: 'welcome to fashion',
          subtitle: 'men fashion',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
