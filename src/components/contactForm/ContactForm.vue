<template>
  <div class="section" id="contact">
    <div class="container">
      <div class="title has-text-centered">Get in touch with me</div>
      
      <div class="card">
        <form
          class="contact-form-container"
          action="https://formspree.io/jperazafeliciano@gmail.com"
          method="POST"
          @submit="validateForm"
        >
          <p class="help is-danger" v-if="formErrors.length">
            {{formErrors[0]}}
          </p>
          <div class="field">
            <div class="control">
              <div class="select">
                <select>
                  <option>How can I help you?</option>
                  <option v-for="(item, index) in services" :key="index">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Name: *"
                name="name"
                v-model="contactName"
              >
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="Email: *"
                name="_replyto"
                v-model="contactEmail"
              >
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Company: " name="company">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input class="input" type="tel" placeholder="Phone: " name="phone">
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" name="message"></textarea>
            </div>
          </div>

          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <input type="submit" class="button is-link is-rounded" value="Submit">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        services: [
          'Web design',
          'Development',
          'CMS Integration (Wordpress)',
          'Mentoring (React, Vue, Competitive Programming)',
          'Other',
        ],
        contactName: '',
        contactEmail: '',
        formErrors: [],
      }
    },
    methods: {
      validateForm: function(event) {
        this.formErrors = []
        if (this.contactName && this.contactEmail) return true

        if (!this.contactName) {
          this.formErrors.push('Name Required.')
        }

        if (!this.contactEmail) {
          this.formErrors.push('Email Required.')
        }

        event.preventDefault()
      }
    }
  }
</script>

<style lang="scss" scoped>
.contact-form-container {
  padding: 20px;
  border-radius: 5px;
}
</style>