import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('demos.title'),
    },
    name: 'Demos',
    path: '/demos',
    children: [
      {
        meta: {
          title: $t('demos.antd'),
        },
        name: 'AntDesignDemos',
        path: '/demos/ant-design-next',
        component: () => import('#/views/demos/antd/index.vue'),
      },
      {
        meta: {
          icon: 'lucide:table-2',
          title: 'Fast CRUD HelloWorld',
        },
        name: 'FastCrudHelloWorld',
        path: '/demos/fast-crud/helloworld',
        component: () =>
          import('#/views/demos/fast-crud/helloworld/index.vue'),
      },
    ],
  },
];

export default routes;
