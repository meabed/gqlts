import { prettify } from '../../../helpers/prettify';
import { RenderContext } from '../RenderContext';

describe('RenderContext', () => {
  test('prettify', async () => {
    const ctx = new RenderContext();
    ctx.addCodeBlock('interface A{}');
    expect(await ctx.toCode('typescript', true)).toBe(await prettify(`interface A{}`, 'typescript'));
  });

  test('raw', async () => {
    const ctx = new RenderContext();
    ctx.addCodeBlock('raw string');
    expect(await ctx.toCode()).toBe('raw string');
  });
});
