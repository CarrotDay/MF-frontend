export const checkNumber = value => {
  return !isNaN(value) ? Number(value) : null;
}