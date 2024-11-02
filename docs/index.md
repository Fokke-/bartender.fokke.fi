---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Bartender.js"
  text: "Accessible off-canvas bars and modals"
  actions:
    - theme: brand
      text: Getting started
      link: /getting-started
    - theme: alt
      text: Overview
      link: /overview

features:
  - icon: 🍻
    title: Any number of bars
    details: Add any number of bars to any side of the viewport. Multiple bars can be open simultaneously.
  - icon: 🥰
    title: Accessible
    details: The use of dialog elements provides native accessibility.
  - icon: 📦
    title: Typed lightweight API with zero dependencies
    details: Integrable to the frameworks.
  - icon: 🎨
    title: Easily stylable
    details: Looks nice enough out of the box though.
---

<TryItOut>
  <BasicLeftAlignedBar />
  <CenteredDialog />
  <FullScreenBar />
  <CenteredFullScreenBar />
  <BarWithAnimation />
</TryItOut>
