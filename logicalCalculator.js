


function logicalCalc(array, op){
  if(op == 'AND') return array.reduce((item,current) => item && current);
  if(op == 'OR') return array.reduce((item,current) => item || current);
  if(op == 'XOR') return array.reduce((item,current) => item != current);
}
