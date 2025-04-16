// let students = [
//   { name: "Оля", age: 14 },
//   { name: "Артем", age: 15 },
//   { name: "Катя", age: 13 }
// ];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name, "-", students[i].age, "років");
// }


// let users = [
//   {gmail:"user1@gmail.com", pasword:"user1",nick:"banana"},
//   {gmail:"user2@gmail.com", pasword:"user2",nick:"cactys"},
//   {gmail:"user3@gmail.com", pasword:"user3",nick:"orange"}
// ];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].gmail,":", users[i].pasword,"-",users[i].nick);
// }

// 🧠 Міні-практика:
// ✅ Завдання 1:
// Створи масив обʼєктів products, кожен з яких має:

// title

// price

// Перебери масив циклом і виведи:

// less
// Копировать
// Редактировать
// Продукт: [назва], Ціна: [ціна] грн


let products = [
  {title:"яблуко" , price:30,currency:"грн"},
  {title:"м'ясо" , price:100,currency:"грн"},
  {title:"сир" , price:50,currency:"грн"}
]

for (let i = 0; i < products.length; i++) {
  console.log(products[i].title, ", Ціна:", products[i].price,products[i].currency);
  
}