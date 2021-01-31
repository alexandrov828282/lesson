`Дана JSON строка '["Коля", "Вася", "Петя"]'. 
Преобразуйте ее в массив JavaScript и выведите на экран элемент "Петя".`

let str_json = '["Коля", "Вася", "Петя"]';

let json = JSON.parse(str_json);

console.log(json);