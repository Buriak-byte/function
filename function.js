//1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
const array1 = ["кіт", "Петро", "машина", "вікно", "камінь"];
function logItems(array1) {
  for (let i1 = 0; i1 < array1.length; i1++) {
    console.log(`${i1 + 1} - ${array1[i1]}`);
  }
}
console.log(logItems(array1));
//2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
const message = "сережки кільце";
function calculateEngravingPrice(message, pricePerWord) {
  const suma = message.split(" ");
  const h = suma.length;
  return pricePerWord * h;
}
console.log(calculateEngravingPrice("сережки кільце", 15000));
//3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
const string1 = "Сьогодні на вулиці дуже тепла погода";

function findLongestWord(string1) {
     const words = string1.split(" ");
     let theBiggestWord = "";

     for (const word of words) {
       if (word.length > theBiggestWord.length) {
         theBiggestWord = word;
       }
     }

     return theBiggestWord;
}
console.log(findLongestWord(string1))
//4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.



// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
const string2 =
  "JavaScript (JS) — це високорівнева, інтерпретована мова програмування, що є основою інтерактивності в сучасній веб-розробці. Вона дозволяє створювати динамічний вміст, анімовану графіку, керувати мультимедіа та оновлювати сторінки без їх перезавантаження. JS працює як у браузері (клієнтська частина), так і на сервері (Node.js).";
function formatString(string2){
if(string2.length >= 40){
const stringWhatSlice = string2.slice(0, 40)
return stringWhatSlice + "..."
}
}
console.log(formatString(string2))