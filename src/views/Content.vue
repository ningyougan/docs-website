<script setup>
import Sidebar from '../components/Sidebar.vue';
import { ref } from 'vue';
import { marked } from 'marked';

const md = ref();
md.value = marked.parse('# markdown');
</script>
<template>
  <!-- <Sidebar /> -->
  <!-- <p> -->
  <!-- {{ md }} -->
  <!-- </p> -->
  <div v-html="md"></div>
  <!-- <div>{{ parseMarkdown('# Hello, Markdown!') }}</div> -->
</template>
