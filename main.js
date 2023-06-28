
function getCurrentTime() {
    fetch('clock.php')
      .then(response => response.json())
      .then(data => {
        var currentTime = data.time;
        
        displayTime(currentTime);
        
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }
  
  // Отображение текущего времени на странице
  function displayTime(time) {
    var timeElement = document.getElementById('clock');
    timeElement.textContent = time;
  }
  
  
  // Обновление времени каждую секунду
  setInterval(getCurrentTime, 1000);