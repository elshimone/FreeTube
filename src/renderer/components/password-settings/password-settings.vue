<template>
  <ft-settings-section
    :title="'Password'"
  >
    <div>
      <ft-flex-box class="settingsFlexStart460px">
        <ft-input
          :placeholder="'Settings password'"
          :show-action-button="false"
          :show-label="true"
          :password="true"
          :value="currentSettingsPassword"
          @input="handleSettingsPasswordInput"
        />
      </ft-flex-box>
    </div>
  </ft-settings-section>
</template>

<script src="./password-settings.js" />
