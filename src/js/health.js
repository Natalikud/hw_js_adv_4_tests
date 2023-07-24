// Реализуйте функцию, которая на вход принимает объект вида: {name: 'Маг', health: 90}
export default function healthControle(healthData) {
  let result;
  healthData.forEach((i) => {
    if (i.health > 50) {
      result = 'healthy';
    }

    if (i.health > 15 && i.health <= 50) {
      result = 'wounded';
    }

    if (i.health <= 15) {
      result = 'critical';
    }
  });
  return result;
}
