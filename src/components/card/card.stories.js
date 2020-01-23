import Vue from 'vue'
import Card from './card'

export default { title: 'Card' }
export const asAComponent = () => ({
  components: { Card },
  template: '<card :company-name="wizeline"></card>'
})