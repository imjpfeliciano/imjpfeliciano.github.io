<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://www.w3schools.com/w3css/img_avatar2.png" alt="">
          </figure>
        </div>

        <div class="media-content">
          <p class="title">{{ companyName }}</p>
          <p class="subtitle">{{ role }}</p>
        </div>
      </div>
    </div>

    <div class="content">
      Tempor duis eu amet nulla eiusmod consectetur exercitation officia Lorem sit irure. Eiusmod amet minim ut eiusmod cillum ad quis tempor magna excepteur excepteur tempor laboris. Sunt exercitation duis tempor minim nulla nisi voluptate cillum velit ullamco labore sint. Cupidatat in adipisicing cupidatat excepteur velit elit sit eiusmod duis. Incididunt ipsum dolor duis dolor reprehenderit ullamco consectetur irure elit. Laboris cillum aliquip et veniam eu enim proident est cillum laborum exercitation sint aliquip eu. Minim ullamco enim nostrud aute Lorem.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companyName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>