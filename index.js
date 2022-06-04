document.write('Hello, world!');
console.log('Hello, developers!');

while (true) {
// Задание 1
    let meanNumber = Math.floor(Math.random() * 1000);
    console.log(meanNumber);
    // Опрашиваем пользователя

    // Валидация. Без цикла
    // let userNumber = window.prompt();
    // console.log(userNumber);

    // Валидация. Цикл покуглил
    let userNumber

    do {
        userNumber = window.prompt("Загадайте число. Ну только число ;)");
    }
    while (isNaN(userNumber) || userNumber === "" ) 
    
    // Нашел что кнопка отмены возвращает null. не понял почему isNaN пропускает null
    if (userNumber === null) {
        break;
    }
    console.log(userNumber);
    // Сравниваем
    if (userNumber == meanNumber) {
        alert("Как вы угадали, в консоль подглядывали?")
    } else {
        alert("Вы не угадали")
    }
}
