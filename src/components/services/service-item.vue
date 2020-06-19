<template>
  <card class="w-1/4 mx-1 overflow-hidden">
    <div>
      <img
        class="w-full h-64"
        :src="serviceImage"
        alt="Sunset in the mountains"
      >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-center">
          {{ product.title }}
        </div>

        <p class="text-gray-700 text-base text-center">
          {{ product.description }}
        </p>
      </div>
    </div>
  </card>
</template>

<script>
import Card from '../ui/card';

export default {
  components: {
    Card,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    serviceImage() {
      // eslint-disable-next-line
      return require(`../../assets/images/services/${this.product.image}.svg`).default;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
