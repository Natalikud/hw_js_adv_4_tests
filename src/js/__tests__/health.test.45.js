import healthControle from '../health';

test('controle health function h=45', () => {
  const geroes = [
    { name: 'Воин', health: 45 },
  ];
  const result = healthControle(geroes);
  expect(result).toBe('wounded');
});
