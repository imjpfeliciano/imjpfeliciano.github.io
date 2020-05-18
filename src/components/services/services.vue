<template>
  <div class="container mt-8 mx-auto" id="services">
    <h3 class="text-4xl text-bold font-semibold text-center">
      Services
    </h3>
    <div class="flex">
      <service-item
        v-for="(service, index) in ServicesItems"
        :key="index"
        :product="service"
      />
    </div>
  </div>
</template>

<script>
import Card from '../ui/card';
import ServicesItems from './services-items';
import ServiceItem from './service-item';

export default {
  components: {
    Card,
    ServiceItem,
  },
  data() {
    return {
      ServicesItems,
    };
  },
  computed: {
    className() {
      return 'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2';
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
