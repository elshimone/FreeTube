<template>
  <ft-settings-section
    :title="$t('Settings.Parental Control Settings.Parental Control Settings')"
  >
    <div class="switchColumnGrid">
      <div class="switchColumn">
        <ft-toggle-switch
          :label="$t('Settings.Parental Control Settings.Hide Unsubscribe Button')"
          :compact="true"
          :default-value="hideUnsubscribeButton"
          @change="updateHideUnsubscribeButton"
        />
        <ft-toggle-switch
          :label="$t('Settings.Parental Control Settings.Show Family Friendly Only')"
          :compact="true"
          :default-value="showFamilyFriendlyOnly"
          @change="updateShowFamilyFriendlyOnly"
        />
      </div>
      <div class="switchColumn">
        <ft-toggle-switch
          :label="$t('Settings.Parental Control Settings.Hide Search Bar')"
          :compact="true"
          :default-value="hideSearchBar"
          @change="updateHideSearchBar"
        />
      </div>
      <div class="switchColumn">
        <ft-toggle-switch
          :label="$t('Settings.Parental Control Settings.Hide Featured Videos')"
          :compact="true"
          :default-value="hideFeaturedVideos"
          @change="updateHideFeaturedVideos"
        />
      </div>
      <div class="">
        <ft-input
          :placeholder="$t('Settings.Parental Control Settings.Video title filter')"
          :show-action-button="false"
          :show-label="true"
          :value="videoTitleFilter"
          @input="updateVideoTitleFilter"
        />
      </div>
    </div>
  </ft-settings-section>
</template>

<script src="./parental-control-settings.js" />
