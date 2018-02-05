const testData = [1, 2, 3, 4, 5];

function sumFor(list) {
  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testData));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(testData));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}
console.log(sumRecursion(testData));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (temp, index) {
    return temp + index;
  });
}

console.log(sumTheSimpleWay(testData));
