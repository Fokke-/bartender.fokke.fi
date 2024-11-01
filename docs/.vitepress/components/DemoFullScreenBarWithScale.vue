<template>
  <BartenderBar
    class="full-screen-bar-with-scale"
    name="full-screen-bar-with-scale"
    position="left"
    :overlay="false"
  >
    <div class="full-screen-bar-with-scale__content">
      <h2>Isn't this a blast?</h2>

      <VPButton
        type="submit"
        size="medium"
        text="Close it"
        v-bartender-close="'full-screen-bar-with-scale'"
      />
    </div>
  </BartenderBar>

  <VPButton
    type="submit"
    size="medium"
    text="Try full screen bar with scaling effect"
    v-bartender-open="'full-screen-bar-with-scale'"
  />
</template>

<script setup lang="ts">
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
</script>

<style lang="css">
.full-screen-bar-with-scale {
  --width: 100dvw;
  --width-fallback: 100vw;
  --max-width: 100dvw;
  --max-width-fallback: 100vw;
  --height: 100dvh;
  --height-fallback: 100vh;
  --max-height: 100dvh;
  --max-height-fallback: 100vh;
  --opacity-enter: 1;
  --opacity-leave: 0;
  --transition-duration-enter: 500ms;
  --transition-duration-leave: 250ms;
  --transform-leave: scale(1.25);
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
}

.full-screen-bar-with-scale__content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
}

.full-screen-bar-with-scale__content h2 {
  font-size: 3em;
  line-height: 1.2;
  text-align: center;
  margin: 0 0 1em 0;
}
</style>
