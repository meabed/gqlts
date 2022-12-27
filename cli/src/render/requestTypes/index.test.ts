import { TypeRenderer, typeRenderTestCase } from '../../testHelpers/render';
import { inputObjectType } from './inputObjectType';
import { objectType } from './objectType';
import { unionType } from './unionType';

test('unionType', () =>
  typeRenderTestCase(__dirname, 'unionType', unionType as TypeRenderer, ['Union', 'UnionD', 'UnionMD']));

test('inputObjectType', () =>
  typeRenderTestCase(__dirname, 'inputObjectType', inputObjectType as TypeRenderer, [
    'InputF',
    'Input',
    'InputD',
    'InputMD',
  ]));

test('objectType', () =>
  typeRenderTestCase(__dirname, 'objectType', objectType as TypeRenderer, ['Interface', 'Object', 'InterfaceField']));
