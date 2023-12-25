function calculateWeight() {
  const mealCalories = parseFloat(document.getElementById('meal').value) || 0;
  const runningMinutes = parseFloat(document.getElementById('run').value) || 0;

  const caloriesBurned = runningMinutes * 100;
  const totalCalories = 2000 - caloriesBurned + mealCalories;
  const weightChange = (totalCalories - 2100) / 1000;

  const resultElement = document.getElementById('result');
  resultElement.textContent = `You gained/lost ${weightChange.toFixed(2)} kilos.`;
}
