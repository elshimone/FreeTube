import Vue from 'vue'
import { mapActions } from 'vuex'
import FtSettingsSection from '../ft-settings-section/ft-settings-section.vue'
import FtSelect from '../ft-select/ft-select.vue'
import FtInput from '../ft-input/ft-input.vue'
import FtToggleSwitch from '../ft-toggle-switch/ft-toggle-switch.vue'
import FtFlexBox from '../ft-flex-box/ft-flex-box.vue'
import FtButton from '../ft-button/ft-button.vue'
import FtPrompt from '../ft-prompt/ft-prompt.vue'

export default Vue.extend({
  name: 'PasswordSettings',
  components: {
    'ft-settings-section': FtSettingsSection,
    'ft-select': FtSelect,
    'ft-input': FtInput,
    'ft-toggle-switch': FtToggleSwitch,
    'ft-flex-box': FtFlexBox,
    'ft-button': FtButton,
    'ft-prompt': FtPrompt,
  },
  emits: ['settingsUnlocked'],
  data: function() {
    return {
      password: '',
    }
  },
  computed: {
    getStoredPassword: function() {
      return this.$store.getters.getSettingsPassword
    },
    hasStoredPassword: function() {
      return this.getStoredPassword !== ''
    },
    unlocked: function() {
      return this.getStoredPassword === '' || this.password === this.getStoredPassword
    }
  },
  watch: {
    unlocked(val, oldVal) {
      if (val !== oldVal) {
        this.propagateUnlockStatus()
      }
    },
  },
  methods: {
    handleSetPassword: function () {
      this.updateSettingsPassword(this.password)
      this.password = ''
    },
    handleRemovePassword: function () {
      this.updateSettingsPassword('')
      this.password = ''
    },
    propagateUnlockStatus: function() {
      this.$emit('settingsUnlocked', this.unlocked)
    },

    ...mapActions([
      'updateSettingsPassword'
    ]),

  }
})
