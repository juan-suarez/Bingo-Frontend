export const getAllNumbers = () => {
  const numbers = Array.from({ length: 75 }, (_, i) => i + 1);

  const matrix = [];
  for (let i = 0; i < 5; i++) {
    matrix.push(numbers.slice(i * 15, (i + 1) * 15)); 
  }

  return matrix;
};

export const transformPLayerBoardToMatrix = (numbers) => {

  const matrix = [];
  for (let j = 0; j < 5; j++) {
    matrix.push(numbers.slice(j * 5, (j + 1) * 5)); 
  }

  return matrix;
}