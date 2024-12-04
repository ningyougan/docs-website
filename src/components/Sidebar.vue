<template>
  <aside
    class="flex flex-col w-48 max-h-full px-3 overflow-y-hidden bg-white border-r dark:bg-gray-900 dark:border-gray-700 whitespace-nowrap"
  >
    <div v-for="categoryItem in dataFlow" :key="categoryItem.title">
      <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">{{
        categoryItem.title
      }}</label>
      <div
        v-for="firstLevelChild in categoryItem.children"
        :key="firstLevelChild.title"
      >
        <a
          class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
          @click="
            firstLevelChild.children
              ? toggleChildrenVisibility(firstLevelChild)
              : handleLink(firstLevelChild.link)
          "
        >
          <span class="mx-2 text-sm font-medium">{{
            firstLevelChild.title
          }}</span>
          <span
            v-if="firstLevelChild.children && firstLevelChild.showChildren"
            class="mr-2 text-lg"
            >&#8595;</span
          >
          <span
            v-if="firstLevelChild.children && !firstLevelChild.showChildren"
            class="mr-2 text-lg"
            >&#8594;</span
          >
        </a>
        <div v-show="firstLevelChild.showChildren">
          <div
            v-for="secondLevelChild in firstLevelChild.children"
            :key="secondLevelChild.title"
            v-if="firstLevelChild.children"
          >
            <a
              class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              @click="
                secondLevelChild.children
                  ? toggleChildrenVisibility(secondLevelChild)
                  : handleLink(secondLevelChild.link)
              "
            >
              <span class="mx-2 text-sm font-medium">{{
                secondLevelChild.title
              }}</span>
              <span
                v-if="
                  secondLevelChild.children && secondLevelChild.showChildren
                "
                class="mr-2 text-lg"
                >&#8595;</span
              >
              <span
                v-if="
                  secondLevelChild.children && !secondLevelChild.showChildren
                "
                class="mr-2 text-lg"
                >&#8594;</span
              >
            </a>
            <div v-show="secondLevelChild.showChildren">
              <div
                v-for="thirdLevelChild in secondLevelChild.children"
                :key="thirdLevelChild.title"
                v-if="secondLevelChild.children"
              >
                <a
                  class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  @click="
                    thirdLevelChild.children
                      ? toggleChildrenVisibility(thirdLevelChild)
                      : handleLink(thirdLevelChild.link)
                  "
                >
                  <span class="mx-2 text-sm font-medium">{{
                    thirdLevelChild.title
                  }}</span>
                  <span
                    v-if="
                      thirdLevelChild.children && thirdLevelChild.showChildren
                    "
                    class="mr-2 text-lg"
                    >&#8595;</span
                  >
                  <span
                    v-if="
                      thirdLevelChild.children && !thirdLevelChild.showChildren
                    "
                    class="mr-2 text-lg"
                    >&#8594;</span
                  >
                </a>
                <div v-show="thirdLevelChild.showChildren">
                  <div
                    v-for="fourthLevelChild in thirdLevelChild.children"
                    :key="fourthLevelChild.title"
                    v-if="thirdLevelChild.children"
                  >
                    <a
                      class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      @click="handleLink(fourthLevelChild.link)"
                    >
                      <span class="mx-2 text-sm font-medium">{{
                        fourthLevelChild.title
                      }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  console.log('🚀 ~ handleLink ~ linkParam:', linkParam);
  subLink.setSubRouterLink(linkParam);
}

function toggleChildrenVisibility(item) {
  if (item.children) {
    item.showChildren = !item.showChildren;
  }
}
function transformDataFlow(dataFlow) {
  const transformChildren = (children) => {
    if (Array.isArray(children)) {
      if (children.length > 0 && typeof children[0] === 'string') {
        return children.map((path) => {
          const parts = path.split('/').filter((part) => part);
          const title = parts.pop();
          return {
            title,
            link: path,
          };
        });
      }
      return children.map((child) => {
        if (child.children) {
          child.children = transformChildren(child.children);
        }
        return child;
      });
    }
    return children;
  };

  return dataFlow.map((category) => {
    category.children = transformChildren(category.children);
    return category;
  });
}
watch(
  () => store.clickedLink,
  async () => {
    errorMessage.value = '';
    subLink.delSubRouterLink();
    try {
      const response = await getSideBar(store.clickedLink);
      dataFlow.value = transformDataFlow(response.data);
    } catch (err) {
      errorMessage.value = `获取侧边栏数据失败：${err.message}`;
    }
  }
);
</script>
