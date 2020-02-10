<template>
  <section class="section-b-space p-t-6 ratio_40">
    <div class="container">
      <div class="row partition2">
        <div class="col-md-6" v-for="(item, index) in items" :key="index">
          <div>
            <div class="collection-banner p-right text-center">
              <div class="img-part">
                <img
                  :src="item.imagepath"
                  class="img-fluid bg-img"
                  alt
                >
              </div>
              <div class="contain-banner">
                <div>
                  <h4 class="text-white">{{item.subtitle}}</h4>
                  <h2 style="color: white;">{{item.title}}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      items: [
        {
          imagepath: require('@/assets/images/women1.jpg'),
          title: 'men',
          subtitle: 'save 30%'
        },
        {
          imagepath: require('@/assets/images/men1.jpg'),
          title: 'women',
          subtitle: 'save 60%'
        }
      ]
    }
  }
}
</script>
