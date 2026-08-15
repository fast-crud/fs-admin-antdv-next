import { describe, expect, it, vi } from 'vitest';

vi.mock('@fast-crud/editor-code', () => ({ FsEditorCode: {} }));
vi.mock('@fast-crud/editor-markdown', () => ({ FsEditorMarkdown: {} }));
vi.mock('@fast-crud/fast-crud', () => ({
  FastCrud: {},
  setLogger: vi.fn(),
  useColumns: () => ({ registerMergeColumnPlugin: vi.fn() }),
  useTypes: () => ({
    addTypes: vi.fn(),
    getType: () => ({ search: {} }),
  }),
  utils: { logger: { debug: vi.fn() } },
}));
vi.mock('@fast-crud/fast-extends', () => ({
  FsExtendsCopyable: {},
  FsExtendsEditor: {},
  FsExtendsInput: {},
  FsExtendsJson: {},
  FsExtendsTime: {},
  FsExtendsUploader: {},
}));
vi.mock('@fast-crud/ui-antdv-next', () => ({ default: {} }));
vi.mock('antdv-next', () => ({ notification: { success: vi.fn() } }));
vi.mock('/@/plugin/fast-crud/column-size-saver', () => ({
  columnSizeSaver: { clear: vi.fn(), get: vi.fn(), save: vi.fn() },
}));
vi.mock('#/api/request', () => ({
  requestClient: { request: vi.fn() },
  requestForMock: vi.fn(),
}));
vi.mock('/@/views/crud/component/uploader/s3/api', () => ({
  GetSignedUrl: vi.fn(),
}));
vi.mock('@vben/preferences', () => ({
  usePreferences: () => ({ isMobile: false }),
}));
vi.mock('../permission', () => ({
  useCrudPermission: () => ({ merge: vi.fn() }),
}));

import fastCrudPlugin from './index';

describe('fast-crud plugin', () => {
  it('installs with the Antdv Next adapter', () => {
    const app = { use: vi.fn() };

    expect(() => fastCrudPlugin.install(app)).not.toThrow();
    expect(app.use).toHaveBeenCalled();
  });
});
