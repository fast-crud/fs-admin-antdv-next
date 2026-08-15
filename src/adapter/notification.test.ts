import { describe, expect, it } from 'vitest';

import { normalizeNotificationContext } from '../../../../ui/ui-antdv-next/src/notification';

describe('Antdv Next notification adapter', () => {
  it('maps generic message and text fields to the native notification fields', () => {
    expect(normalizeNotificationContext({ message: '保存成功', text: '记录已更新' })).toEqual({
      title: '保存成功',
      description: '记录已更新',
    });
  });

  it('uses a string notification as the native title', () => {
    expect(normalizeNotificationContext('保存成功')).toEqual({ title: '保存成功' });
  });

  it('preserves explicit native notification fields', () => {
    expect(
      normalizeNotificationContext({
        message: '兼容标题',
        text: '兼容内容',
        title: '原生标题',
        description: '原生内容',
      }),
    ).toEqual({
      title: '原生标题',
      description: '原生内容',
    });
  });
});
