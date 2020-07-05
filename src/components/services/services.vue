<template>
  <container>
    <div
      id="services"
    >
      <h3 class="text-4xl text-bold font-semibold text-center">
        Services
      </h3>
      <div class="block sm:flex sm:flex-wrap">
        <service-item
          v-for="(service, index) in ServicesItems"
          :key="index"
          :product="service"
        />
      </div>
    </div>
  </container>
</template>

<script>
import { Container } from 'UI-Components';
import ServicesItems from './services-items';
import ServiceItem from './service-item';

export default {
  components: {
    Container,
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
