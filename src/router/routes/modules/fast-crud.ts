import type { RouteRecordRaw } from 'vue-router';

import { crudRoutes } from './fast-crud-routes';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: "Fast CRUD",
    },
    name: 'FastCrud',
    path: '/crud',
    redirect: '/crud/basis/i18n',
    children: [
      {
        meta: {
          hideInMenu: true,
          title: 'Fast CRUD HelloWorld',
        },
        name: 'FastCrudHelloWorld',
        path: '/crud/helloworld',
        component: () =>
          import('#/views/demos/fast-crud/helloworld/index.vue'),
      },
      ...crudRoutes,
    ],
  },
];

export default routes;
