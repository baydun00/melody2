$(document).ready(function () {
    var currentFloor = 2;// переменная с текущим этажом
    var floorPath = $(".home-image path"); // каждый отдельный этаж в svg
    var counterUp = $(".counter-up"); /* кнопка увеличения этажа */ 
    var counterDown = $(".counter-down"); /* кнопка увеличения этажа */ 

    //функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажа
        currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
   });

   counterUp.on("click", function() {
    if (currentFloor < 18) {
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, 
        useGroupping: false });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
   });

   counterDown.on('click', function() {
    if(currentFloor > 2) {
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, 
        useGroupping: false });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
   })
});