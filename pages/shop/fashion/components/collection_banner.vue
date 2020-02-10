<template>
  <div>
    <section class="pb-0 ratio2_1">
      <div class="container">
        <div class="row partition2">
          <div v-for="(item, index) in items" :key="index" class="col-md-6">
            <div>
              <div class="collection-banner p-right text-center">
                <div class="img-part">
                  <img :src="item.imagepath" class="img-fluid" alt>
                </div>
                <div class="contain-banner">
                  <div>
                    <h4>{{ item.subtitle }}</h4>
                    <h2>{{ item.title }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
