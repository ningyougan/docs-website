<template>
  <div v-html="markdownRender" class="markdown w-5/6 px-5 py-8"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { getMd } from '../service';
import { markdownIt } from './markdownCfg/index';
import { markdownTestString } from './markdownCfg/test.js';

const markdownRender = ref();

onMounted(async () => {
  if (import.meta.env.DEV) {
    // let markdownContext = (await getMd()).data;
    // console.log('env', import.meta.env, markdownContext);
    // markdownRender.value = markdownIt.render(`${markdownContext}`);
    markdownRender.value = markdownIt.render(`${markdownTestString}`);
  } else {
    let markdownContext = (await getMd()).data;
    markdownRender.value = markdownIt.render(`${markdownContext}`);
  }
});
</script>
<style scoped>
.emoji {
  height: 1.2em;
}
.warning {
  background-color: yellow;
}
</style>
