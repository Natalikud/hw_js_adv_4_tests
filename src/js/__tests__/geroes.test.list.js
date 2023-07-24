import healthControleList from '../geroes';

test.each([
  ['Маг', 90, 'healthy'],
  ['Воин', 30, 'wounded'],
  ['Лесоруб', 10, 'critical'],
])(
  ('testing health list with %s name and %i health'),
  (name, health, expected) => {
    const result = healthControleList(health);
    expect(result).toEqual(expected);
  },
);

/* другой вариант теста по массиву (пример лекции)

const handler = test.each(healthList);
const healthList = [
  ['Маг', 90, 'healthy'],
  ['Воин', 30, 'wounded'],
  ['Лесоруб', 10, 'critical'],
];
handler('testing health list with %n name and %h health', (name,health,expected) => {
  const result = healthControle(health);
  expected(result).toBe(expected)
}); */
