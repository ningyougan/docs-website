import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    clickedLink: '',
  }),
  actions: {
    setClickedLink(link) {
      this.clickedLink = link;
    },
  },
});

export const useSubRouterLink = defineStore('subLink', {
  state: () => ({
    subRouterLink: '',
  }),
  actions: {
    setSubRouterLink(link) {
      this.subRouterLink = link;
    },
    delSubRouterLink() {
      this.routerLink = '';
    },
  },
});

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    sidebarInfo: '',
  }),
  actions: {
    setSidebarInfo(info) {
      this.sidebarInfo = info;
    },
  },
});
