import type { RouteRecordRaw } from 'vue-router';

import { describe, expect, it, vi } from 'vitest';

import crudRoutes from './fast-crud';
import {
  createCrudRoutes,
  crudRoutes as configuredCrudRoutes,
} from './fast-crud-routes';

const crudPageModules = import.meta.glob('/src/views/crud/**/index.vue');

function flattenRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  return routes.flatMap((route) => [
    route,
    ...flattenRoutes((route.children ?? []) as RouteRecordRaw[]),
  ]);
}

describe('createCrudRoutes', () => {
  it('creates full nested routes and preserves the configured menu order', () => {
    const routes = createCrudRoutes([
      {
        children: [
          {
            component: vi.fn(),
            name: 'FastCrudComponentText',
            path: 'text',
            title: '文本输入(input)',
          },
        ],
        icon: 'lucide:component',
        name: 'FastCrudComponent',
        path: 'component',
        title: '组件示例',
      },
      {
        component: vi.fn(),
        name: 'FastCrudDebug',
        path: 'debug',
        title: 'Debug',
      },
    ]);
    const flatRoutes = flattenRoutes(routes);

    expect(routes.map((route) => route.path)).toEqual([
      '/crud/component',
      '/crud/debug',
    ]);
    expect(flatRoutes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          meta: expect.objectContaining({ title: '组件示例' }),
          name: 'FastCrudComponent',
          path: '/crud/component',
        }),
        expect.objectContaining({
          name: 'FastCrudComponentText',
          path: '/crud/component/text',
        }),
      ]),
    );
  });

  it('registers every CRUD page in the route module', () => {
    const pageRoutes = flattenRoutes(crudRoutes).filter(
      (route) =>
        route.path !== '/crud/helloworld' &&
        route.path?.startsWith('/crud/') &&
        route.component,
    );

    expect(pageRoutes).toHaveLength(121);
    expect(pageRoutes.map((route) => route.path).sort()).toEqual(
      [
        ...Object.keys(crudPageModules).map((modulePath) =>
          modulePath
            .replace('/src/views', '')
            .replace('/index.vue', ''),
        ),
        '/crud/form/new-page/edit',
      ].sort(),
    );
    expect(pageRoutes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ path: '/crud/advanced/in-dialog/crud' }),
        expect.objectContaining({ path: '/crud/component/uploader/s3' }),
        expect.objectContaining({ path: '/crud/form/inner/area' }),
        expect.objectContaining({ path: '/crud/form/new-page/edit' }),
      ]),
    );
  });

  it('keeps the Antdv4 top-level menu order', () => {
    expect(
      flattenRoutes(crudRoutes).find(
        (route) => route.path === '/crud/helloworld',
      )?.meta?.hideInMenu,
    ).toBe(true);
    expect(configuredCrudRoutes.map((route) => route.path)).toEqual([
      '/crud/debug',
      '/crud/basis',
      '/crud/dict',
      '/crud/row-handle',
      '/crud/component',
      '/crud/form',
      '/crud/feature',
      '/crud/editable',
      '/crud/slots',
      '/crud/advanced',
    ]);
  });
});
