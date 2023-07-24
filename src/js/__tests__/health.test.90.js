import healthControle from '../health';

test('controle health function h=90', () => {
  const geroes = [
    { name: 'Маг', health: 90 },
  ];
  const result = healthControle(geroes);
  expect(result).toBe('healthy');
});
