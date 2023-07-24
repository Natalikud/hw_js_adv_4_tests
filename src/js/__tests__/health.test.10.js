import healthControle from '../health';

test('controle health function h=10', () => {
  const geroes = [
    { name: 'Лесоруб', health: 10 },
  ];
  const result = healthControle(geroes);
  expect(result).toBe('critical');
});
