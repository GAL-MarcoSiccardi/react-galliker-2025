export function isValueValid(currentValue: number) {
  if (currentValue === 5) {
    // Simulate a JS error
    throw new Error('I crashed!');
  }
  return true;
}