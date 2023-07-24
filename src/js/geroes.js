// функция, которая принимает сразу значение health (для проверки теста по массиву героев)
export default function healthControleList(healthData) {
  let result;
  if (healthData > 50) {
    result = 'healthy';
  }
  if (healthData > 15 && healthData <= 50) {
    result = 'wounded';
  }
  if (healthData <= 15) {
    result = 'critical';
  }
  return result;
}
