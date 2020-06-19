<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo-400 p-6 fixed w-full z-10 mb-24 mt-0">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Jonathan Peraza F</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-indigo-200
          border-indigo-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          v-smooth-scroll
          href="#home"
          class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
        >
          Home
        </a>
        <a
          v-smooth-scroll
          href="#about"
          class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
        >
          About
        </a>
        <a
          v-smooth-scroll
          href="#experience"
          class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
        >
          Experience
        </a>
        <a
          v-smooth-scroll
          href="#services"
          class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
        >
          Services
        </a>
        <a
          v-smooth-scroll
          href="#contact"
          class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white"
        >
          Contact
        </a>
      </div>
      <div>
        <a
          :href="resumeLink"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white
            hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0"
          download="jpfeliciano_en"
        >Download</a>
      </div>
    </div>
  </nav>
</template>

<script>
import Resume from '../../assets/docs/EN_resume_cv.pdf';

export default {
  data() {
    return {
      resumeLink: Resume,
    };
  },
};

</script>

<style lang="scss" scoped>
</style>
