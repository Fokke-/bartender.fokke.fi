<template>
  <BartenderBar
    class="centered-full-screen-bar"
    name="centered-full-screen-bar"
    position="center"
  >
    <h2>Isn't this a blast?</h2>

    <VPButton
      type="submit"
      size="medium"
      text="Close it"
      v-bartender-close="'centered-full-screen-bar'"
    />
  </BartenderBar>

  <VPButton
    type="submit"
    size="medium"
    text="Try centered full screen bar"
    v-bartender-open="'centered-full-screen-bar'"
  />
</template>

<script setup lang="ts">
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
</script>

<style lang="css">
.centered-full-screen-bar {
  --overlay-opacity: 0.85;
  --transition-duration-enter: 500ms;
  --transition-duration-leave: 250ms;
  text-align: center;
  color: #fff;
  background: transparent;
}

.centered-full-screen-bar h2 {
  font-size: 3em;
  line-height: 1.2;
  margin: 0 0 1em 0;
}
</style>
