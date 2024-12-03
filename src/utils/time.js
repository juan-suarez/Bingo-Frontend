export const convertNumberToTimer = (number) => {
  if(number === 60){
    return '01:00'
  }

  if(number < 10){
    return `00:0${number}`;
  }

  return `00:${number}`
}