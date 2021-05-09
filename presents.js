function presents(a){
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++)
    result[a[i]-1] = i + 1;
  return result;
}
