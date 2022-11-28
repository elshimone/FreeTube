import Vue from 'vue'
import { mapActions, mapMutations } from 'vuex'
import FtSettingsSection from '../ft-settings-section/ft-settings-section.vue'
import FtSelect from '../ft-select/ft-select.vue'
import FtInput from '../ft-input/ft-input.vue'
import FtToggleSwitch from '../ft-toggle-switch/ft-toggle-switch.vue'
import FtFlexBox from '../ft-flex-box/ft-flex-box.vue'
import FtButton from '../ft-button/ft-button.vue'

import debounce from 'lodash.debounce'
import { showToast } from '../../helpers/utils'

export default Vue.extend({
  name: 'PasswordSettings',
  components: {
    'ft-settings-section': FtSettingsSection,
    'ft-select': FtSelect,
    'ft-input': FtInput,
    'ft-toggle-switch': FtToggleSwitch,
    'ft-flex-box': FtFlexBox,
    'ft-button': FtButton
  },
  data: function () {
    return {
    }
  },
  computed: {
    currentSettingsPassword: function () {
      return this.$store.getters.getCurrentSettingsPassword
    },

  },
  mounted: function () {
    this.setCurrentSettingsPassword("")
  },
  beforeDestroy: function () {
    this.setCurrentSettingsPassword("")
  },

  methods: {
    handleSettingsPasswordInput: function (input) {
      this.setCurrentSettingsPassword(input)
    },

    ...mapMutations([
      'setCurrentSettingsPassword'
    ]),

  }
})
