---
layout: home

hero:
  name: 小潘的学习历程
  text: 加油&努力
  tagline: html->css->js->vue->react(了解)->node(学习中)->java(学习中)
  image:
    src: /favicon.ico
    alt: 网站的 logo 图片
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/front-end/node-js
    - theme: alt
      text: 在 github 上查看
      link: https://github.com/vuejs/vitepress
features:
  - icon: ⚡️
    title: 前端知识区
    details: html css js vue react node uniapp在这里
  - icon: 🖖
    title: 后端知识区
    details: java 服务器
  - icon: 🛠️
    title: 扩展知识区
    details: 遇到的各种问题及解决方案在这里
  - icon: 😍
    title: 你懂的
    details: 你想的就在这里面
---
<style>

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

</style>
