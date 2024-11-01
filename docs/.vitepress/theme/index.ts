// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Bartender } from '@fokke-/bartender.js'
import { createBartender, BartenderBar } from '@fokke-/vue-bartender.js'
import '@fokke-/bartender.js/dist/bartender.css'
import './style.css'
import BarConfig from '../components/BarConfig.vue'
import Demo from '../components/Demo.vue'
import DemoFullScreenBar from '../components/DemoFullScreenBar.vue'
import DemoFullScreenBarWithScale from '../components/DemoFullScreenBarWithScale.vue'
import DemoBarWithAnimation from '../components/DemoBarWithAnimation.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    const bartender = createBartender({ debug: false })

    app.use(bartender)
    app.component('BartenderBar', BartenderBar)
    app.component('BarConfig', BarConfig)
    app.component('Demo', Demo)
    app.component('DemoFullScreenBar', DemoFullScreenBar)
    app.component('DemoFullScreenBarWithScale', DemoFullScreenBarWithScale)
    app.component('DemoBarWithAnimation', DemoBarWithAnimation)
    // ...
  },
} satisfies Theme
