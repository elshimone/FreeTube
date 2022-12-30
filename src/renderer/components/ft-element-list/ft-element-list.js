import Vue from 'vue'
import FtAutoGrid from '../ft-auto-grid/ft-auto-grid.vue'
import FtListLazyWrapper from '../ft-list-lazy-wrapper/ft-list-lazy-wrapper.vue'

export default Vue.extend({
  name: 'FtElementList',
  components: {
    'ft-auto-grid': FtAutoGrid,
    'ft-list-lazy-wrapper': FtListLazyWrapper
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      required: false
    }
  },
  computed: {
    listType: function () {
      return this.$store.getters.getListType
    },
    filteredData: function () {
      const re = RegExp(this.filter, 'gi')
      return this.data.filter(r => {
        if (!this.filter) {
          return true
        } else if (!Object.hasOwn(r, 'title')) {
          return true
        } else {
          return !r.title.match(re)
        }
      })
    }
  }
})
