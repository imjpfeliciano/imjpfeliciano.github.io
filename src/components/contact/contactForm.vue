<template>
  <div class="container mt-8 mx-auto" id="contact">
    <h1 class="text-4xl text-bold font-semibold text-center">
      Let me call you!
    </h1>
    <card class="mx-auto">
      <form
        class="form bg-white p-4 my-5 relative mx-auto"
        :action="`https://formspree.io/${userEmail}`"
        method="POST"
        @submit="validateForm"
      >
        <p class="text-gray-600">
          To help you choose your properly
        </p>
        <div class="flex space-x-5 mt-3">
          <input
            id=""
            type="text"
            name="name"
            placeholder="Your Name"
            class="border p-2  w-1/2"
            v-model="contactName"
          >
          <input
            id=""
            type="tel"
            name="phone"
            placeholder="Your Number"
            class="border p-2 w-1/2"
            v-model="contactPhone"
          >
        </div>
        <input
          id=""
          type="email"
          name="email"
          placeholder="Your Email"
          class="border p-2 w-full mt-3"
          v-model="contactEmail"
        >
        <textarea
          id=""
          name="message"
          cols="10"
          rows="3"
          placeholder="Tell me about desired property"
          class="border p-2 mt-3 w-full"
          v-model="contactMessage"
        />
        <p class="font-bold text-sm mt-3">
          GDPR Agreement *
        </p>
        <div class="flex items-baseline space-x-2 mt-2">
          <input
            id=""
            type="checkbox"
            name="gdpr-agreement"
            class="inline-block"
            v-model="contactGDPRAgreement"
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
  data() {
    return {
      userEmail: 'jperazafeliciano@gmail.com',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      contactMessage: '',
      contactGDPRAgreement: false,
      formErrors: [],
    };
  },
  methods: {
    validateForm(event) {
      this.formErrors = [];
      if (this.contactName && this.contactEmail && this.contactGDPRAgreement) return true;

      if (!this.contactName) {
        this.formErrors.push('Name required.');
      }

      if (!this.contactEmail) {
        this.formErrors.push('Email required.');
      }

      if (!this.contactGDPRAgreement) {
        this.formErrors.push('GDPR check required.');
      }

      event.preventDefault();
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
