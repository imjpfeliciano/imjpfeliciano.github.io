<template>
  <div class="container mt-8 mx-auto">
    <h1 class="text-4xl text-bold font-semibold text-center">
      Let me call you!
    </h1>
    <card class="mx-auto">
      <form class="form bg-white p-4 my-5 relative mx-auto">
        <p class="text-gray-600">
          To help you choose your properly
        </p>
        <div class="flex space-x-5 mt-3">
          <input
            id=""
            type="text"
            name=""
            placeholder="Your Name"
            class="border p-2  w-1/2"
          >
          <input
            id=""
            type="tel"
            name=""
            placeholder="Your Number"
            class="border p-2 w-1/2"
          >
        </div>
        <input
          id=""
          type="email"
          name=""
          placeholder="Your Email"
          class="border p-2 w-full mt-3"
        >
        <textarea
          id=""
          name=""
          cols="10"
          rows="3"
          placeholder="Tell me about desired property"
          class="border p-2 mt-3 w-full"
        />
        <p class="font-bold text-sm mt-3">
          GDPR Agreement *
        </p>
        <div class="flex items-baseline space-x-2 mt-2">
          <input
            id=""
            type="checkbox"
            name=""
            class="inline-block"
          >
          <p class="text-gray-600 text-sm">
            I consent to having this website store my submitted information so they can respond to my inquiry.
          </p>
        </div>
        <input
          type="submit"
          value="Submit"
          class="w-full mt-6 bg-indigo-400 hover:bg-blue-500 text-white font-semibold p-3"
        >
      </form>
    </card>
  </div>
  
</template>

<script>
import Card from '../ui/card';

export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
</style>
