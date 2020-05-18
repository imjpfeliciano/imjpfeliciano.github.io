<template>
  <div class="container mt-8 mx-auto" id="experience">
    <h1 class="text-4xl text-bold font-semibold text-center">
      Work Experience
    </h1>
    <card class="mx-auto">
      <div class="form bg-white p-4 my-5 relative mx-auto">
        <timeline :items="timelineItems" />
      </div>
    </card>
  </div>
</template>

<script>
import Card from '../ui/card';
import Timeline from '../ui/timeline';
import workExperienceItems from './work-experience';

export default {
  components: {
    Card,
    Timeline,
  },
  data() {
    return {
      timelineItems: workExperienceItems,
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
