import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.hunantv.imgo.activity.MainActivity',
      rules: [
        {
          matches: '[id="com.hunantv.imgo.activity:id/layout_boot_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/12472612',
        },
        {
          matches: '[id="com.hunantv.imgo.activity:id/ivAd"] >n [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12472612',
        },
      ],
    },
    {
      key: 0,
      name: '青少年模式弹窗',
      activityIds: [
        'com.hunantv.imgo.activity.MainActivity',
        'miuix.appcompat.app.m',
      ],
      rules:
        '[id="com.hunantv.imgo.activity:id/llSetAgeMode"] + [id="com.hunantv.imgo.activity:id/btnIknow"]',
      snapshotUrls: 'https://i.gkd.li/import/12832447',
    },
    {
      key: 1,
      name: '首页推荐流-卡片广告',
      activityIds: 'com.hunantv.imgo.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.hunantv.imgo.activity:id/layout_logo"] > [id="com.hunantv.imgo.activity:id/tv_ad_logo"]',
          snapshotUrls: 'https://i.gkd.li/import/12472616',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[id="com.hunantv.imgo.activity:id/close_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/12472615',
        },
      ],
    },
    {
      key: 2,
      name: '应用内广告弹窗',
      activityIds: 'com.hunantv.imgo.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.hunantv.imgo.activity:id/imgPromotion"] + [id="com.hunantv.imgo.activity:id/vClosePromotionView"]',
          snapshotUrls: 'https://i.gkd.li/import/12818464',
        },
        {
          key: 1,
          matches: '@TextView[id=null][text=""] - View > Image[id="hotGif"]',
          snapshotUrls: 'https://i.gkd.li/import/12818528',
        },
      ],
    },
    {
      key: 3,
      name: '右侧悬浮广告',
      activityIds: 'com.hunantv.imgo.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.hunantv.imgo.activity:id/apperience_close"] + [id="com.hunantv.imgo.activity:id/apperience_enter"]',
          snapshotUrls: 'https://i.gkd.li/import/12818430',
        },
        {
          key: 1,
          matches:
            '@[id="com.hunantv.imgo.activity:id/iv_float_close"] + [id="com.hunantv.imgo.activity:id/iv_float_content"]',
          snapshotUrls: 'https://i.gkd.li/import/12818481',
        },
      ],
    },
  ],
});
