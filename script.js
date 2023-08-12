let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  arr.forEach(function(item){
    if(item.profession=='developer'){
       console.log(item);
    }
  });
  
   
}

function addData() {
  //Write your code here, just console.log
  let newdata={id:4,name:"susan",age:20,profession:"intern"};
  arr.push(newdata);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
 arr.forEach(function(item){
    if(item.profession=='admin'){
       arr.pop();
    }
  });
  console.log(arr);
}
let arr2 = [
  { id: 5, name: "Rock", age: 22, profession: "Analyst" },
  { id: 6, name: "Singh", age: 18, profession: "Manager" },
  { id: 7, name: "jim", age: 20, profession: "Aperetership" },
];

function concatenateArray() {
  //Write your code here, just console.log
  let arrconcat= arr.concat(arr2);
  console.log(arrconcat);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
