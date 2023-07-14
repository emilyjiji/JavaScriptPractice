//sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

//
//const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
//const nameSet = new Set(namesArray);
//console.log(nameSet);

//const uniqueNames = [...nameSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
console.log(ages);