import type { RouteRecordRaw } from 'vue-router';


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
    redirect: '/crud/helloworld',
    children: [
      {
        meta: {
          title: 'Fast CRUD HelloWorld',
        },
        name: 'FastCrudHelloWorld',
        path: '/crud/helloworld',
        component: () =>
          import('#/views/demos/fast-crud/helloworld/index.vue'),
      },
      {
        meta: {
          icon: 'lucide:component',
          title: '组件示例',
        },
        name: 'FastCrudComponent',
        path: '/crud/component',
        children: [
          {
            meta: {
              title: '文本输入(input)',
            },
            name: 'ComponentText',
            path: '/crud/component/text',
            component: () =>
              import('#/views/crud/component/text/index.vue'),
          },
          {
            meta: {
              title: '选择(select)',
            },
            name: 'ComponentSelect',
            path: '/crud/component/select',
            component: () =>
              import('#/views/crud/component/select/index.vue'),
          },
        ],
      },
    ],
  },
];

export default routes;
