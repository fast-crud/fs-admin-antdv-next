import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { findViewMockFiles } from './vite.mock';

describe('findViewMockFiles', () => {
  it('registers both dictionaries used by the async-compute demo', async () => {
    const source = await readFile(
      path.resolve(process.cwd(), 'vite.mock.ts'),
      'utf8',
    );

    expect(source).toContain("/mock/dicts/OpenStatusEnum");
    expect(source).toContain("/mock/dicts/moreOpenStatusEnum");
    expect(source).toContain("method === 'GET' || method === 'POST'");
  });

  it('finds every view mock, including legacy and Vben demo pages', async () => {
    const mockFiles = await findViewMockFiles(
      path.resolve(process.cwd(), 'src/views'),
    );

    expect(mockFiles).toContain(
      path.resolve(process.cwd(), 'src/views/crud/component/text/mock.ts'),
    );
    expect(mockFiles).toContain(
      path.resolve(
        process.cwd(),
        'src/views/demos/fast-crud/component/text/mock.ts',
      ),
    );
    expect(mockFiles).toHaveLength(113);
  });

  it('uses POST for every buildMock pagination request', async () => {
    const mockFiles = await findViewMockFiles(
      path.resolve(process.cwd(), 'src/views'),
    );
    const apiFiles = mockFiles.map((mockFile) =>
      mockFile.replace(/mock\.ts$/, 'api.ts'),
    );
    const apiSources = await Promise.all(
      apiFiles.map((apiFile) => readFile(apiFile, 'utf8').catch(() => '')),
    );

    expect(
      apiSources.filter((source) =>
        /url: apiPrefix \+ "\/page",\s*method: "get"/.test(source),
      ),
    ).toEqual([]);
  });
});
