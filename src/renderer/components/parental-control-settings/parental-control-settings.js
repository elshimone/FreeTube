import Vue from 'vue'
import { mapActions } from 'vuex'
import FtSettingsSection from '../ft-settings-section/ft-settings-section.vue'
import FtToggleSwitch from '../ft-toggle-switch/ft-toggle-switch.vue'
import FtInput from '../ft-input/ft-input.vue'

export default Vue.extend({
  name: 'ParentalControlSettings',
  components: {
    'ft-settings-section': FtSettingsSection,
    'ft-toggle-switch': FtToggleSwitch,
    'ft-input': FtInput
  },
  computed: {
    hideSearchBar: function () {
      return this.$store.getters.getHideSearchBar
    },
    hideUnsubscribeButton: function() {
      return this.$store.getters.getHideUnsubscribeButton
    },
    showFamilyFriendlyOnly: function() {
      return this.$store.getters.getShowFamilyFriendlyOnly
    },
    videoTitleFilter: function() {
      return this.$store.getters.getVideoTitleFilter
    }
  },
  methods: {
    ...mapActions([
      'updateHideSearchBar',
      'updateHideUnsubscribeButton',
      'updateShowFamilyFriendlyOnly',
      'updateVideoTitleFilter'
    ])
  }
})
