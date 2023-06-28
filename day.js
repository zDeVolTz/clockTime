// var isScriptPaused = false;

// function pauseScript() {
//     isScriptPaused = true;
  
//     // Остановка на 5 минут
//     setTimeout(function() {
//       isScriptPaused = false;
//     }, 5* 60 * 1000); // 5 минут * 60 секунд * 1000 миллисекунд
//   }

function getCurrentTime() {

  // if (isScriptPaused) {
  //   // Выполнение приостановлено, не выполняем код
  //   return;
  // }
    var savedColor = getCookie("color");
    if (savedColor) {
      var clockColorElement = document.getElementById('clock');
      clockColorElement.style.color = savedColor;
      document.getElementById('myInput').value = savedColor;
      
      // Цвет уже задан в куки, останавливаем выполнение кода
      return;
    }

  isDayScriptRunning = true;
  fetch('clock.php')
    .then(response => response.json())
    .then(data => {
      var daysTime = data.dayTime;
      var clockColor = data.clockColor;
      var displayColor = data.displayColor;
      displayDay(daysTime);
      displayColorClock(clockColor);
      displayColorValue(displayColor);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}

// Отображение значения dayTime на странице
function displayDay(day) {
  var dayElement = document.getElementById('lol');
  dayElement.textContent = day;
}
 function displayColorClock(clockColor) {
   var clockColorElement = document.getElementById('clock');
   clockColorElement.style.color = clockColor;
 }
function displayColorValue(displayColor) {
  var displayColorElement = document.querySelector('.centered-div');;
  displayColorElement.style.backgroundColor = displayColor;
}

// Вызов функции для получения и отображения текущего времени
setInterval(getCurrentTime, 1000);
