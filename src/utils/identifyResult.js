export const getColumnInfo = (num) => {
  let column, color;

  if (num >= 1 && num <= 15) {
    column = 'B';
    color = 'red'; 
  } else if (num >= 16 && num <= 30) {
    column = 'I';
    color = 'orange'; 
  } else if (num >= 31 && num <= 45) {
    column = 'N';
    color = 'yellow'; 
  } else if (num >= 46 && num <= 60) {
    column = 'G';
    color = 'green'; 
  } else if (num >= 61 && num <= 75) {
    column = 'O';
    color = 'blue';
  } else {
    column = null;
    color = 'neutral'
  }

  return { column, color };
};