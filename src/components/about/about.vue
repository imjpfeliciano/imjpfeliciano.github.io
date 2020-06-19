<template>
  <div
    id="about"
    class="flex bg-white"
    style="height: 600px;"
  >
    <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
      <div>
        <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
          I'm <span class="text-indigo-600">{{ PageInformation.title }}</span>
        </h2>
        <p
          v-for="(paragraph, index) in PageInformation.description"
          :key="index"
          class="mt-2 text-sm text-gray-500 md:text-base"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div
      class="hidden lg:block lg:w-1/2"
      style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
    >
      <div
        class="bg-no-repeat h-screen object-fill"
        :style="{ 'background-image': `url(${heroImage})` }"
      >
        <div class="h-full bg-black opacity-25" />
      </div>
    </div>
  </div>
</template>

<script>
import PageInformation from './hero-info';

export default {
  data() {
    return {
      PageInformation,
    };
  },
  computed: {
    heroImage() {
      // eslint-disable-next-line
      return require(`../../assets/images/${this.PageInformation.image}`).default;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
