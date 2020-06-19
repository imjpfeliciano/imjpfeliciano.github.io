<template>
  <li class="mb-2">
    <div class="flex items-center mb-1">
      <div class="bg-indigo-200 rounded-full h-4 w-4 ml-2" />
      <div class="flex-1 ml-4 font-medium text-gray-600">
        {{ title }}
      </div>
    </div>

    <div class="ml-12 text-gray-700">
      {{ description }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
