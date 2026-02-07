const user ={
    name : "sidakpreet singh",
    age : 18,
    college:"baba farid college",
    course:"B.tech CSE"
};

const student = {
    personal:{firstname:"sidakpreet",lastname:"singh"},
    acedmics:{branch:"btech",year:2},

}
const {firstname,lastname} = student.personal;
const {year,branch} = student.acedmics;
// const {lastname} = student.personal;
// const {branch} = student.acedmics;

console.log(`firstname:${firstname} lastname:${lastname} year :${year} branch:${branch}`)

// console.log(`${name} studies ${course} at ${college}`);

const greet =({name,course})=>{
    console.log(`hey! it's me ${name} and i m pursuing ${course}`);
    
};

greet(user);
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];

const [first, third , ] = products;

const {name : name1 , price : price1}=first;
const {name : name2 , price : price2}=third;

console.log(`${name1} costs ₹${price1}`);
console.log(`${name2} costs ₹${price2}`);


const settings = {
  theme: "dark",
  notifications: true
};

const {theme : apptheme ,notifications:notify}=settings;

console.log(`${apptheme} and ${notify}`);
// Object.freeze(settings);
settings.language ="english";
console.log(settings);

const obj3 = Object.assign({},user,student);
console.log(obj3);