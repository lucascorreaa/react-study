function SomaNumeros(numeroOne, numeroTwo) {
  return numeroOne + numeroTwo;
}

// console.log(SomaNumeros(10, 20))

const person = {
  name: "lyan",
  age: 18,
  gender: "male",
};

// console.log(person.name)
// console.log(person.age)
// console.log(person.gender)

const { age, gender, name } = person;

console.log(age);
console.log(gender);
console.log(name);

const numbers = [1, 2, 3, 4, 5]

console.log(
  numbers.forEach((num, index) => {
    console.log(num * 2)
  })
)
