//  ДЗ 2. Задача 2
//
// Код проверки работы функций списка в конце

"use strict";

// Объявление функций и переменных
let globListPointer; // глоб. переменная для передачи  параметром функций
let globListPointerX; // глоб. переменная для передачи  параметром функций
let globListPointerY; // глоб. переменная для передачи  параметром функций


//1. объявляем функцию - конструктор с именем Node типа данных узла списка
function Node (value) {
    this.value = value;
    this.next = null;
}

//2. функция, которая будет принимать на вход число любой длины в формате строки,
// представлять его в виде списка и возвращать указатель на список
function numToList (num) {
let i = 0;
let listPointer;  //объявляем указатель на список
let tmp = null;   //объявляем промежуточный указатель на список
let val = 0; // пер. для цифр списка
num = String(num);
for (i=0; i < num.length; i++) {
    let val = Number(num.charAt(i));
    if (isNaN(val)) continue; //проверка - отбрасывание не цифр из списка - переход к след. символу
    listPointer = new Node(val);//создаем новый узел с параметром - символом, соответствующем цифре
    if (i != 0) listPointer.next = tmp; // присваиваем в новом узле ссылку на узел - 
    // - созданный в предыдущей итерации (кроме самого первого,т.к. там null автоматом присваивается)
    tmp = listPointer; // сохранение временно указателя для следующего узла
    
    
}
   
return listPointer;
}


//3. функция, которая будет выводить созданный список
function ListOutput (listPointer) {
while (listPointer) {
    console.log (listPointer.value);
    listPointer = listPointer.next;
}
}    

//4. функция, которая будет суммировать 2 числа, представленных в виде списков
function  sum (listPointerX, listPointerY) {
let sum = 0;
sum = listToNum(listPointerX) + listToNum(listPointerY); 
return numToList (sum);// создание списка из суммы и возврат указателя на него
}

//5. функция преобразования из списка в число
function listToNum (listPointer) { 
let str = 0;
while (listPointer) {
    str = 10*str + listPointer.value;
    listPointer = listPointer.next;
}
return str;
}

// ***************************************************************************************************
// конец описания функций
// ***************************************************************************************************

// Проверка работы функций списка



//  Задача 2
//************************************************************************************************************* */


console.log("Задача 2");  
console.log("создание списка X");
globListPointerX = numToList("342");



console.log("создание списка Y");
globListPointerY = numToList("465");

globListPointer = sum (globListPointerX, globListPointerY);

console.log("вывод списка числа Y (голова вверху):");
ListOutput (globListPointerY);
console.log ();

console.log("вывод списка числа X (голова вверху):");
ListOutput (globListPointerX);
console.log ();

console.log("3. вывод списка суммы X + Y (голова вверху):");
ListOutput (globListPointer);
console.log ();