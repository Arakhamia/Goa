// პაროლის გამოცნობა
// შექმენით password ცვლადი და მიანიჭეთ მნიშვნელობა 'Group 41 is best'
// თქვენი დავალებაა, რომ შექმნათ ფუნქცია და გამოიცნოთ პაროლი იქამდე, სანამ პაროლი არ იქნება სწორი, მთლიანობაში გაქვთ 3 ცდა, როდესაც ცდების რაოდენობა გამოილევა, alert - ის დახმარებით გამოიტანეთ მესიჯი 'თქვენ ამოგეწურათ ცდების რაოდენობა', როდესაც პაროლი იქნება სწორი, გამოიტანეთ ' თქვენი შეყვანილი პაროლი სწორია'.

let pas = "Group 41 is the best"

for(let i = 0; i < 3; i++){
    let pass = prompt("Enter the password: ")

    if(pass == pas){
        alert("You guessed!")
        break
    } else{
        alert("Try again")
        continue
    }
}