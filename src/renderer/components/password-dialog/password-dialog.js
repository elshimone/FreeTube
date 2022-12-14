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
  name: 'PasswordDialog',
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
      showIncorrectPassword: false
    }
  },
  computed: {
    getStoredPassword: function() {
      return this.$store.getters.getSettingsPassword
    },
    incorrectPassword: function() {
      return this.password !== '' && !this.unlocked
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
  mounted: function () {
    this.propagateUnlockStatus()
  },
  methods: {
    handleLock: function () {
      this.password = ''
      this.showIncorrectPassword = false
    },
    handleUnlock: function () {
      this.showIncorrectPassword = !this.unlocked
    },
    propagateUnlockStatus: function() {
      this.$emit('settingsUnlocked', this.unlocked)
    },

    ...mapActions([
      'updateSettingsPassword'
    ]),

  }
})
