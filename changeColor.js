

function changeColor() {
    var inputValue = document.getElementById('myInput').value;
    var colorRegex = /^#[0-9A-Fa-f]{6}$/;
  
    if (colorRegex.test(inputValue)) {
      console.log('Верный формат цвета');
    //   pauseScript();
      // Сохранение цвета в куки
      document.cookie = "color=" + encodeURIComponent(inputValue) + "; max-age=20";
        
      // Далее выполняем необходимую логику для изменения цвета
      var clockColorElement = document.getElementById('clock');
      clockColorElement.style.color = inputValue;
      
      // Здесь вы можете выполнить дополнительную логику для правильного формата цвета
      
    } else {
      console.log('Неверный формат цвета');
    }
    
    // Вывод значения куки в консоль
    console.log('Значение куки "color":', getCookie("color"));
  }
  
  // Функция для получения значения куки по имени
  function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(name + '=') === 0) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
    return null;
  }
  
  // При загрузке страницы проверяем наличие сохраненного цвета в куки
  window.onload = function() {
    var savedColor = getCookie("color");
    if (savedColor) {
      var clockColorElement = document.getElementById('clock');
      clockColorElement.style.color = savedColor;
      document.getElementById('myInput').value = savedColor;
    }
    // Вывод значения куки в консоль
    console.log('Значение куки "color":', savedColor);
  };
    
  
    