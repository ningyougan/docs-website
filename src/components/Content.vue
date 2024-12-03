<template>
  <!-- <Phone></Phone> -->
  <div v-html="markdownRender" class="markdown w-5/6 px-5 py-8"></div>
</template>
<script setup>
import { watch, ref } from 'vue';
import { getMd, getSideBar } from '@/service';
import { markdownIt } from './markdownCfg/index';
import { useMainStore, useSubRouterLink } from '@/store/index';
import { markdownTestString } from './markdownCfg/test.js';
import Phone from './phone.vue';

const markdownRender = ref();
const store = useMainStore();
let subRouterLink = useSubRouterLink();

watch(
  () => store.clickedLink,
  async () => {
    if (import.meta.env.DEV) {
      let markdownContext = (await getMd(store.clickedLink)).data;
      markdownRender.value = markdownIt.render(`${markdownContext}`);
      // markdownRender.value = markdownIt.render(`${markdownTestString}`);
    } else {
      let markdownContext = (await getMd(store.clickedLink)).data;
      markdownRender.value = markdownIt.render(`${markdownContext}`);
    }
  }
);
watch(
  () => subRouterLink.subRouterLink,
  async () => {
    console.log('content', subRouterLink.subRouterLink);
    let markdownContext = (
      await getMd(
        store.clickedLink + subRouterLink.subRouterLink.replace(/^\//, '')
      )
    ).data;
    markdownRender.value = markdownIt.render(`${markdownContext}`);
  }
);
</script>
<style scoped>
.emoji {
  height: 1.2em;
}
.warning {
  background-color: yellow;
}
</style>
