<template>
  <div class="section" id="services">
    <div class="container">
      <div class="title has-text-centered">Services</div>
      <div class="columns is-desktop">
        <div class="column" v-for="(item, index) in services" :key="index">
          <div class="card">
            <div class="card-content">
              <div class="icon-container has-text-centered">
                <i :class="item.icon" />
              </div>
              <div class="subtitle has-text-centered">{{ item.title }}</div>
              <div class="content">
                <p class="has-text-centered">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      services: [
        {
          icon: "fas fa-desktop",
          title: "Web Design",
          description:
            "Design your site according to your section requirements, personal blogs, cms, landing pages, etc..."
        },
        {
          icon: "fas fa-mobile-alt",
          title: "Responsive",
          description:
            "You don't need to pay for different devices designs, projects includes mocks that can perfectly work on distinct devices."
        },
        {
          icon: "fab fa-wordpress-simple",
          title: "Integrations",
          description:
            "Take your ideas and integrates it with your current CMS."
        },
        {
          icon: "fas fa-users",
          title: "Workshops",
          description:
            "Different topics to help your team to improve its technical skills."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  min-height: 300px;
}

.icon-container {
  margin-bottom: 10px;

  i {
    font-size: 38px;
    color: $primary-color;
  }
}
</style>
