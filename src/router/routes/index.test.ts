import { describe, expect, it } from 'vitest';

import { accessRoutes } from './index';

describe('access routes', () => {
  it('loads CRUD routes without loading route test modules', () => {
    expect(accessRoutes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'FastCrud' }),
      ]),
    );
  });
});
