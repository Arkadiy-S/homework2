
// ДЗ 2. Задача 1
// Код проверки работы функций списка в конце
"use strict";

// Объявление функций и переменных
let globListPointer; // глоб. переменная для передачи  параметром функций


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

//3. функция, которая будет добавлять новый узел

function addToList (val, listPointer) { 

if (listPointer.next == null) { //проверка
    console.log ("Список не создан. Для создания воспользуйтесь функцией numToList() ");
    return;
}
let valForTest = String(val);// переменная для проверки
if (isNaN(valForTest) | valForTest.length != 1) { //проверка
    console.log ("Передаваемое значение не цифра");
    return;
} 
let tmp = listPointer; // сохраняем указатель на текущий узел
listPointer = new Node(val);//создаем новый узел
listPointer.next = tmp;
return listPointer;
}

//4. функция, которая будет выводить созданный список
function ListOutput (listPointer) {
while (listPointer) {
    console.log (listPointer.value);
    listPointer = listPointer.next;
}
}    

//5. функция, которая ищет элемент списка
function listSearch (val, listPointer) {
if (listPointer.next == null) { //проверка
    console.log ("Список не создан. Для создания воспользуйтесь функцией numToList() ");
    return;
}
let valForTest = String(val);// переменная для проверки
if (isNaN(valForTest) | valForTest.length != 1) { //проверка
    console.log ("Передаваемое значение не цифра");
    return;
} 
let i = 0;
let fond_flag = false;
while (listPointer) {
    if (listPointer.value == val) {
        console.log ("значение " + val + " найдено в узле № " + i);
        fond_flag = true;
    };
    i++;
    listPointer = listPointer.next;
}
console.log ("значение " + val + " не найдено в списке");
return fond_flag;
}    

//5. функция, которая удаляет элемент списка
function listDel (val, listPointer) {
if (listPointer.next == null) { //проверка
    console.log ("Список не создан. Для создания воспользуйтесь функцией numToList() ");
    return;
}
let valForTest = String(val);// переменная для проверки
if (isNaN(valForTest) | valForTest.length != 1) { //проверка
    console.log ("Передаваемое значение не цифра");
    return;
} 
//let i = 0;
let previousPointer = listPointer;
let newBeginPointer = listPointer; // указатель на новое начало списка если удаляемый узел в начале
let beginFlag = true;
while (listPointer) {
    if (listPointer.value == val && beginFlag == true) {
    // удаление узла, если он в начале, через указание нового указателя на измененный список
    newBeginPointer = listPointer.next;
    }
    if (listPointer.value == val && beginFlag == false) { //удаление узла если он в середине
        previousPointer.next = listPointer.next;
    }
    if (listPointer.value != val && beginFlag == true) {
        beginFlag = false;
    }
    
    
    previousPointer = listPointer;
    listPointer = listPointer.next; // переход к следующему узлу
}
return newBeginPointer;
}    



// ***************************************************************************************************
// конец описания функций
// ***************************************************************************************************

// Проверка работы функций списка

// Задача 1
//исходные данные 
let test_number = "2021@7n" // - произвольное число - строка для создания списка
let test_value = 2 // произвольное число для создания, поиска, удаления узла

console.log("1. создание списка:");//тест
globListPointer = numToList(test_number);

console.log("3. вывод списка:");
ListOutput (globListPointer);

console.log("2. добавление узла:");//тест
globListPointer = addToList("2", globListPointer);

console.log("3. вывод списка:");
ListOutput (globListPointer);


console.log("2. добавление узла:");//тест
globListPointer = addToList(test_value, globListPointer);

console.log("3. вывод списка:");
ListOutput (globListPointer);
console.log ();

console.log("4. поиск в списке узла, значение которого передано параметром");//тест
listSearch ("2", globListPointer);
console.log ();

console.log("3. вывод списка:");
ListOutput (globListPointer);
console.log ();

console.log("5. удаление в списке узлов, значение которых передано параметром (2 - для теста)");//тест
globListPointer = listDel ("2", globListPointer);
console.log ();

console.log("3. вывод списка:");
ListOutput (globListPointer);
console.log ();

console.log("4. поиск в списке узла, значение которого передано параметром"); //тест
listSearch ("2", globListPointer);
console.log ();

