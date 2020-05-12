<template>
  <div class="container mt-4 mx-auto">
    <h3 class="text-2xl text-bold font-semibold">
      Services
    </h3>
    <div class="flex">
      <card class="w-1/4 mx-1 overflow-hidden">
        <div>

        <img class="w-full" :src="CodingImage" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            The Coldest Sunset
          </div>

          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        </div>
      </card>

      <card class="w-1/4 mx-4">
        Hola
      </card>

      <card class="w-1/4 mx-4">
        Hola
      </card>

      <card class="w-1/4 mx-4">
        Hola
      </card>
    </div>
  </div>
</template>

<script>
import Card from '../ui/card';
import CodingImage from '../../assets/images/coding-time.jpg';

export default {
  components: {
    Card,
  },
  data() {
    return {
      CodingImage,
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
