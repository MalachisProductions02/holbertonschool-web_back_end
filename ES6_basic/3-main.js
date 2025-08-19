// 3-main.js
import getSumOfHoods from './3-default-parameter.js';

test('default parameters', () => {
  expect(getSumOfHoods(34)).toBe(142);
  expect(getSumOfHoods(34, 3)).toBe(56);
  expect(getSumOfHoods(34, 3, 4)).toBe(41);
});
