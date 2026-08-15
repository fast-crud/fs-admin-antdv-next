import type { RouteRecordRaw } from 'vue-router';

type CrudRouteConfig = {
  children?: CrudRouteConfig[];
  component?: RouteRecordRaw['component'];
  hideInMenu?: boolean;
  icon?: string;
  isPage?: boolean;
  keepAlive?: boolean;
  path: string;
  title: string;
  view?: string;
};

const crudViews = import.meta.glob('/src/views/crud/**/*.vue');

const group = (
  title: string,
  path: string,
  children: CrudRouteConfig[],
  icon?: string,
): CrudRouteConfig => ({ children, icon, path, title });

const page = (
  title: string,
  path: string,
  options: Omit<CrudRouteConfig, 'path' | 'title'> = {},
): CrudRouteConfig => ({ ...options, isPage: true, path, title });

const crudRouteConfig: CrudRouteConfig[] = [
  page('Debug', 'debug', { hideInMenu: true }),
  group('基本特性', 'basis', [
    page('FirstDemo', 'first'),
    page('HelloWorld', 'helloworld'),
    page('动态计算', 'compute'),
    page('动态计算-更多示例', 'compute-more'),
    page('国际化', 'i18n'),
    page('ValueChange', 'value-change'),
    page('Card布局', 'layout-card'),
    page('自定义布局', 'layout-custom'),
    page('自定义组件', 'custom'),
    page('列设置', 'columns-set'),
    page('字段合并插件', 'column-merge-plugin'),
    page('ResetCrudOptions', 'reset', { keepAlive: true }),
    page('CrudOptions插件', 'plugin'),
    page('Ts定义测试', 'ts'),
  ], 'ion:disc-outline'),
  group('数据字典', 'dict', [
    page('单例', 'single'),
    page('分发复制', 'cloneable'),
    page('原型复制', 'prototype'),
    group('页面间共享', 'shared', [
      page('共享字典数据管理', 'manager'),
      page('共享字典使用', 'use'),
    ]),
  ], 'ion:book-outline'),
  group('操作列', 'row-handle', [
    page('Tooltip', 'tooltip'),
    page('按钮折叠', 'dropdown'),
  ], 'ion:build-outline'),
  group('组件示例', 'component', [
    page('文本输入(input)', 'text'),
    page('选择(select)', 'select'),
    page('表格选择(table-select)', 'table-select'),
    page('级联(cascader)', 'cascader'),
    page('多选(checkbox)', 'checkbox'),
    page('单选(radio)', 'radio'),
    page('开关(switch)', 'switch'),
    page('日期时间(date)', 'date'),
    page('按钮链接', 'button'),
    page('数字', 'number'),
    page('树形选择', 'tree'),
    page('图片裁剪上传', 'uploader/cropper'),
    page('表单本地上传', 'uploader/form'),
    page('阿里云 OSS 上传', 'uploader/alioss'),
    page('腾讯云 COS 上传', 'uploader/cos'),
    page('七牛云上传', 'uploader/qiniu'),
    page('S3 上传', 'uploader/s3'),
    page('富文本编辑器', 'editor'),
    page('代码编辑器', 'code'),
    page('Markdown 编辑器', 'markdown'),
    page('图标', 'icon'),
    page('JsonEditor', 'json'),
    page('手机号输入框', 'phone'),
    page('组件独立使用', 'independent'),
  ], 'ion:cube-outline'),
  group('Form表单', 'form', [
    page('基本表单', 'base'),
    page('表单Grid布局', 'layout-grid'),
    page('表单Flex布局', 'layout-flex'),
    page('表单动态布局', 'layout'),
    page('表单单列模式', 'single-column'),
    page('表单校验', 'validation'),
    page('抽屉表单', 'drawer'),
    page('表单分组', 'group'),
    page('表单分组(tabs)', 'group-tabs'),
    page('自定义表单', 'custom-form'),
    page('字段帮助说明', 'helper'),
    page('页面内部弹出表单', 'inner', { keepAlive: true }),
    page('地区字典管理', 'inner/area', { hideInMenu: true }),
    page('新页面编辑', 'new-page'),
    page('新页面编辑表单', 'new-page/edit', {
      hideInMenu: true,
      view: 'form/new-page/edit.vue',
    }),
    page('独立使用表单', 'independent'),
    page('重置表单', 'reset'),
    page('嵌套数据结构', 'nest'),
    page('字段组件render', 'render'),
    page('查看表单使用单元格组件', 'view'),
    page('initialForm', 'initial'),
    page('表单Watch', 'watch'),
  ], 'ion:document-text-outline'),
  group('表格特性', 'feature', [
    page('部件显隐', 'hide'),
    page('多选&批量删除', 'selection'),
    page('单选', 'selection-radio'),
    page('表头过滤', 'filter'),
    page('行展开', 'expand'),
    page('树形表格', 'tree'),
    page('多级表头', 'header-group'),
    page('自定义表头', 'header'),
    page('合并单元格', 'merge'),
    page('序号', 'index'),
    page('排序', 'sortable'),
    page('固定列', 'fixed'),
    page('不固定高度', 'height'),
    page('查询框', 'search'),
    page('查询框多行模式', 'search-multi'),
    page('Tabs快捷查询', 'tabs'),
    page('字段排序', 'column-sort'),
    page('ValueBuilder', 'value-builder'),
    page('列设置', 'columns-set'),
    page('本地化编辑', 'local'),
    page('v-model', 'local-v-model'),
    page('导入', 'local-import'),
    page('导出', 'export'),
    page('自定义删除', 'remove'),
    page('调整列宽', 'column-resize'),
    page('单元格编辑', 'editable'),
    page('行编辑', 'editable-row'),
  ], 'ion:beer-outline'),
  group('可编辑', 'editable', [
    page('自由编辑', 'free'),
    page('行编辑', 'row'),
    page('单元格编辑', 'cell'),
    page('子表格编辑', 'vmodel'),
    page('自由编辑子表格', 'vmodel/free', { hideInMenu: true }),
    page('子CRUD', 'sub-crud'),
    page('行编辑子CRUD', 'sub-crud/row', { hideInMenu: true }),
    page('行编辑VModel', 'menus'),
  ], 'ion:create-outline'),
  group('插槽', 'slots', [
    page('页面占位插槽', 'layout'),
    page('表单占位插槽', 'form'),
    page('查询字段插槽', 'search'),
    page('单元格插槽', 'cell'),
    page('表单字段插槽', 'form-item'),
  ], 'ion:extension-puzzle-outline'),
  group('复杂需求', 'advanced', [
    page('选择联动', 'linkage'),
    page('后台加载crud', 'from-backend'),
    page('本地分页', 'local-pagination'),
    page('嵌套子表格', 'nest'),
    page('侧边子表格', 'nest/aside-table', { hideInMenu: true }),
    page('子表格', 'nest/sub-table', { hideInMenu: true }),
    page('对话框中显示crud', 'in-dialog'),
    page('对话框内 CRUD', 'in-dialog/crud', { hideInMenu: true }),
    page('抽屉中显示crud', 'in-drawer'),
    page('抽屉样式时间选择', 'in-drawer/drawer-class-time', {
      hideInMenu: true,
    }),
    page('大量数据', 'big-data'),
    page('列表以card方式显示', 'card'),
    page('多列数据', 'many-columns'),
  ], 'ion:flame-outline'),
];

function getRouteName(path: string) {
  return `FastCrud${path
    .split('/')
    .flatMap((segment) => segment.split('-'))
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('')}`;
}

function getViewPath(fullPath: string, view?: string) {
  return `/src/views/crud/${view ?? `${fullPath.replace('/crud/', '')}/index.vue`}`;
}

export function createCrudRoutes(
  configs: CrudRouteConfig[],
  parentPath = '/crud',
): RouteRecordRaw[] {
  return configs.map((config) => {
    const fullPath = `${parentPath}/${config.path}`;
    const route: RouteRecordRaw = {
      meta: {
        ...(config.hideInMenu ? { hideInMenu: true } : {}),
        ...(config.icon ? { icon: config.icon } : {}),
        ...(config.keepAlive ? { keepAlive: true } : {}),
        title: config.title,
      },
      name: getRouteName(fullPath.replace('/crud/', '')),
      path: fullPath,
    };

    if (config.component) {
      route.component = config.component;
    } else if (config.isPage) {
      const viewPath = getViewPath(fullPath, config.view);
      route.component = crudViews[viewPath];
      if (!route.component) {
        throw new Error(`Configured CRUD view does not exist: ${viewPath}`);
      }
    }

    if (config.children) {
      route.children = createCrudRoutes(config.children, fullPath);
    }

    return route;
  });
}

export const crudRoutes = createCrudRoutes(crudRouteConfig);
