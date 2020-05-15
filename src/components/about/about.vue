<template>
<div class="flex bg-white" style="height: 600px;">
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">I'm <span class="text-indigo-600">{{ PageInformation.title }}</span></h2>
                <p
                  class="mt-2 text-sm text-gray-500 md:text-base"
                  v-for="(paragraph, index) in PageInformation.description"
                  :key="index"
                >
                  {{ paragraph }}
                </p>
                <!-- <div class="flex justify-center lg:justify-start mt-6">
                    <a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                    <a class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                </div> -->
            </div>
        </div>
        <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
            <div class="bg-no-repeat h-screen object-fill"
              :style="{ 'background-image': `url(${heroImage})` }"
            >
                <div class="h-full bg-black opacity-25"></div>
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
      return require(`../../assets/images/${this.PageInformation.image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
