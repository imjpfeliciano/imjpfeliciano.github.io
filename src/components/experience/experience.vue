<template>
  <card class="mx-auto">
    <div class="form bg-white p-4 my-5 relative mx-auto">
      <h3 class="text-2xl text-bold font-semibold">
        Work Experience
      </h3>
      <timeline :items="timelineItems" />
    </div>
  </card>
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
