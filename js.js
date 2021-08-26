/* 1.	Напишите функцию, которая возвращает сумму элементов больше 5 в данном массиве.
sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77
sumFive([1, 2, 3, 4]) ➞ 0
sumFive([10, 12, 28, 47, 55, 100]) ➞ 252
Используйте для суммы все элементы больше 5, но не элементы которые равны 5 и меньше. */

function sumFive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            sum += arr[i];
        }
    }
    console.log(sum);
}
sumFive([1, 5, 20, 30, 4, 9, 18]);
sumFive([1, 2, 3, 4]);
sumFive([10, 12, 28, 47, 55, 100]);



/* 2.	Напишите функцию, преобразующую объект в массив ключей и значений.
objectToArray({
D: 1,
B: 2,
C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
likes: 2,
dislikes: 3,
followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]] */

function objectToArray(obj) {
    let arr = [];
    for (key in obj) {
        arr.push([key, obj[key]]);
    }
    console.log(arr);
}

objectToArray({
    D: 1,
    B: 2,
    C: 3
});
objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
});

/* 3.	Массивы могут включать в себя разные типы данных. Ваша задача  - просуммировать все числовые элементы в данном массиве. Создайте функцию, которая принимает массив и возвращает сумму всех чисел в массиве.
numbersSum([1, 2, "13", "4", "645"]) ➞ 3
numbersSum([true, false, "123", "75"]) ➞ 0
numbersSum([1, 2, 3, 4, 5, true]) ➞ 15 */

function numbersSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    console.log(sum);
}
numbersSum([1, 2, "13", "4", "645"]);
numbersSum([true, false, "123", "75"]);
numbersSum([1, 2, 3, 4, 5, true]);


/* 4. Создайте функцию, которая принимает объект и возвращает ключи и значения в виде отдельных массивов. Возвращает ключи, отсортированные в алфавитном порядке, и их соответствующие значения в том же порядке.
keysAndValues({ a: 1, b: 2, c: 3 })➞ [["a", "b", "c"], [1, 2, 3]]
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
keysAndValues({ key1: true, key2: false, key3: undefined })➞ [["key1", "key2", "key3"], [true, false, undefined]] */

function keysAndValues(obj) {
    let arr = [];
    arr.push(Object.keys(obj), Object.values(obj))
    console.log(arr);
}

keysAndValues({ a: 1, b: 2, c: 3 });
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
keysAndValues({ key1: true, key2: false, key3: undefined })