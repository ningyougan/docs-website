<template>
  <aside
    class="flex flex-col w-[190px] max-h-full px-3 overflow-y-hidden bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"
  >
    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav class="-mx-3 space-y-6">
        <div v-for="categoryItem in dataFlow" :key="categoryItem.title">
          <label
            class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400"
            >{{ categoryItem.title }}</label
          >
          <!-- 如果有子项（children），则循环遍历子项 -->
          <div
            v-if="categoryItem.children"
            v-for="item in categoryItem.children"
            :key="item.title"
          >
            <a
              class="fx-items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              @click="handleLink(item.link)"
            >
              <!-- :href="item.link" -->
              <span class="mx-2 text-sm font-medium">{{ item.title }}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { watch, ref } from 'vue';
import { getSideBar } from '@/service';
import { useMainStore, useSubRouterLink } from '@/store/index';

let dataFlow = ref([]);
let errorMessage = ref('');
let store = useMainStore();
let subLink = useSubRouterLink();

function handleLink(linkParam) {
  subLink.setSubRouterLink(linkParam);
}

watch(
  () => store.clickedLink,
  async () => {
    errorMessage.value = '';
    subLink.delSubRouterLink();
    await getSideBar(store.clickedLink)
      .then((e) => {
        dataFlow.value = e.data;
      })
      .catch((err) => {
        errorMessage.value = `获取侧边栏数据失败：${err.message}`;
      });
  }
);
</script>
