function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let funcArr = birds.filter((i) => !geese.includes(i))

  return funcArr
}
