// დაწერეთ ფუნქცია, სადაც მომხმარებელი შემოიტანს მის სახელს პატარა ასოებით, თქვენი დავალებაა, რომ დაწეროთ კოდი ისე, რომ შემოტანილი სახელის პირველი ასო გაადიდოთ და შემდეგ მიესალმოთ მომხმარებელს შემდეგნაირად: "Hello Name" - (name - ში უნდა ჩაჯდეს მომხმარებლის შემოტანილი სახელი).

let name = prompt("Enter your name: ")
let name1 = name[0].toUpperCase() + name.slice(1, -1)

alert(`Hello, ${name1}`)
