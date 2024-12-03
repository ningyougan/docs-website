<template>
  <nav
    x-data="{ isOpen: false }"
    class="relative bg-white shadow dark:bg-gray-800"
  >
    <div class="container px-6 w-full whitespace-nowrap md:flex">
      <div class="flex items-center justify-between">
        <a href="#">
          <img
            class="w-auto h-6 sm:h-7"
            src="https://merakiui.com/images/full-logo.svg"
            alt=""
          />
        </a>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <!-- @click="isOpen = !isOpen" -->
          <button
            x-cloak
            x-on:click="isOpen = !isOpen"
            type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg
              x-show="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              x-show="isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        x-cloak
        :class="[
          isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full',
        ]"
        class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between"
      >
        <div class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
          <a
            v-for="linkObj in links"
            :key="linkObj.text"
            class="px-2.5 my-1 leading-7 text-sm text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
            @mouseenter="handleMouseEnter(linkObj)"
            @mouseleave="handleMouseLeave(linkObj)"
          >
            <!-- @click="handleClick(linkObj)" -->
            {{ linkObj.text }}
            <div
              v-if="isExpanded[linkObj.text]"
              class="absolute bg-white shadow-md rounded-md py-2 px-3 z-10"
            >
              <a
                v-for="item in linkObj.items"
                :key="item.text"
                class="block py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100"
                @click="handleItemClick(item.link)"
              >
                <!-- :href="item.link" -->
                {{ item.text }}
              </a>
            </div>
          </a>
        </div>

        <div class="relative mt-4 md:mt-0">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            class="w-full py-1 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapping } from './documents/app';
import { useMainStore } from '../store/index';
export default {
  data() {
    return {
      links: mapping,
      isExpanded: {},
    };
  },
  methods: {
    handleItemClick(link) {
      const store = useMainStore();
      store.setClickedLink(link);
    },
    handleMouseEnter(linkObj) {
      if (linkObj.items) {
        this.isExpanded[linkObj.text] = true;
      }
    },
    handleMouseLeave(linkObj) {
      if (linkObj.items) {
        this.isExpanded[linkObj.text] = false;
      }
    },
  },
  mounted() {
    for (const linkObj of mapping) {
      this.isExpanded[linkObj.text] = false;
    }
  },
};
</script>
