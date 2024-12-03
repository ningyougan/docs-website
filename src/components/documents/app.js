// const configUIRn = require('./ui/rn/config.json');
// const configUIVue = require('./ui/vue/1.0/config.json');
// const configUIVueV2 = require('./ui/vue/2.0/config.json');
// const configUIDesign = require('./ui/design/config.json');
// const configUIBiz = require('./ui/biz/config.json');
// const configCliVue = require('./cli/vue/config.json');
// const configServiceV2 = require('./service/components/2.0/config.json');
// const configServiceOther = require('./service/components/other/config.json');
// const configAndroid = require('./app/android/config.json');
// const configIOS = require('./app/ios/config.json');
// const configNativeNoticeBoard = require('./app/nativeNoticeBoard/config.json');
// const configComponents = require('./app/components/config.json');
// const configHarmony = require('./app/harmony/config.json');
// const configLuban = require('./luban/config.json');
// const configBackend = require('./backend/config.json');
// const configReport = require('./extend/report/config.json');
// const configOthers = require('./others/config.json');
// const configHotPublishRN = require('./extend/hotPublishRN/config.json');
// const configPerformance = require('./extend/performance/config.json');

const remoteFlag = true;
export const mapping = [
  { text: '首页', link: '/', route: '/home' },
  {
    text: '浦天开物',
    items: [
      {
        text: '神兵谱-组件中心',
        location: 'http://10.134.13.25:8080/cpct/cms/',
        remote: false,
      },
      {
        text: '倚天剑-互联网渠道研发平台',
        location: 'http://speedstudio:7080/INDPOffical/',
        remote: false,
      },
    ],
  },
  {
    text: '脚手架',
    items: [
      {
        text: 'VUE脚手架',
        link: '/cli/vue/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configCliVue,
      },
      {
        text: 'RN脚手架',
        link: '/cli/rn/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configCliVue,
      },
    ],
  },
  {
    text: 'UI组件',
    items: [
      {
        text: 'UI组件',
        link: '/ui/vue/2.0/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configUIVueV2,
      },
      {
        text: 'RN组件',
        link: '/ui/rn/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configUIRn,
      },
      {
        text: 'UI设计规范',
        link: '/ui/design/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configUIDesign,
      },
      {
        text: '业务组件',
        link: '/ui/biz/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configUIBiz,
      },
      //          { text: 'UI组件1.0(不再维护)', link: '/ui/vue/1.0/', remote: remoteFlag, projectId: 23323, relativePath: 'documents/markdown', branch: 'release', sidebar: configUIVue },
    ],
  },
  {
    text: '服务组件',
    items: [
      {
        text: '服务组件2.0',
        link: '/service/components/2.0/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configServiceV2,
      },
      {
        text: '其他组件',
        link: '/service/components/other/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configServiceOther,
      },
    ],
  },
  {
    text: '原生基座',
    items: [
      {
        text: '安卓-Android',
        link: '/app/android/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configAndroid,
      },
      {
        text: '苹果-IOS',
        link: '/app/ios/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configIOS,
      },
      {
        text: '鸿蒙-harmony',
        link: '/app/harmony/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configHarmony,
      },
      {
        text: '原生公告栏',
        link: '/app/nativeNoticeBoard/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configNativeNoticeBoard,
      },
      {
        text: '组件模块-2.0',
        link: '/app/components/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configComponents,
      },
    ],
  },
  {
    text: '鲁班',
    link: '/luban/',
    remote: remoteFlag,
    projectId: 26808,
    relativePath: 'documents/markdown',
    branch: 'release',
    // sidebar: configLuban,
  },
  {
    text: '后端架构',
    link: '/backend/',
    remote: remoteFlag,
    projectId: 23323,
    relativePath: 'documents/markdown',
    branch: 'release',
    // sidebar: configBackend,
  },
  {
    text: '扩展能力',
    items: [
      {
        text: '性能与体验',
        link: '/extend/performance/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configPerformance,
      },
      {
        text: '监控采集',
        link: '/extend/report/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configReport,
      },
      {
        text: 'RN热发布',
        link: '/extend/hotPublishRN/',
        remote: remoteFlag,
        projectId: 23323,
        relativePath: 'documents/markdown',
        branch: 'release',
        // sidebar: configHotPublishRN,
      },
    ],
  },
  {
    text: '其他',
    link: '/others/',
    remote: remoteFlag,
    projectId: 23323,
    relativePath: 'documents/markdown',
    branch: 'release',
    // sidebar: configOthers,
  },
];

// module.exports = mapping;
