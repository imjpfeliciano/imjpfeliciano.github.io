<template>
  <timeline-list :items="items" />
</template>

<script>
import TimelineList from './timelineList';

export default {
  components: {
    TimelineList,
  },
  props: {
    items: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
