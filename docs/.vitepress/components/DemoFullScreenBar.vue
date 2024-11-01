<template>
  <BartenderBar class="full-screen-bar" name="full-screen" position="top">
    <div class="full-screen-bar__content">
      <h2>Isn't this a blast?</h2>

      <VPButton
        type="submit"
        size="medium"
        text="Close it"
        v-bartender-close="'full-screen'"
      />
    </div>
  </BartenderBar>

  <VPButton
    type="submit"
    size="medium"
    text="Try full screen bar"
    v-bartender-open="'full-screen'"
  />
</template>

<script setup lang="ts">
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
</script>

<style lang="css">
.full-screen-bar {
  --width: 100dvw;
  --width-fallback: 100vw;
  --max-width: 100dvw;
  --max-width-fallback: 100vw;
  --height: 100dvh;
  --height-fallback: 100vh;
  --max-height: 100dvh;
  --max-height-fallback: 100vh;
  --transition-duration-enter: 500ms;
  --transition-duration-leave: 250ms;
}

.full-screen-bar__content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
}

.full-screen-bar__content h2 {
  font-size: 3em;
  line-height: 1.2;
  text-align: center;
  margin: 0 0 1em 0;
}
</style>
