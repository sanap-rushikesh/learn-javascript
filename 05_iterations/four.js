const myObject = {
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby',
  swift: 'swift by apple'
}

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(`The key is ${key} and value is ${programming[key]}`);
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

for (const key in map) {
  console.log(key);
  
}