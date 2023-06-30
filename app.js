
//  time start 
const  color = '';
const boxTime =  document.getElementById('time');
const time = function (){
    let time  = new Date();
    const data = time.getHours() + ":" + 
    (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()) + ":" + 
    (time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds() );
    return boxTime.innerHTML = data}
setInterval(() => { time() }, 1000);
// time end 
// color  start
const BoxTimeColor = (boxTime, color = '') => {
  console.log($.cookie('color'));
  let colorbox = () =>{
    let time  = new Date();
    if (time.getHours() > '19' || color == '' || ($.cookie('color'))) {
      if($.cookie('color')){
        return $.cookie('color')
      }else{
        return 'red'
      }
    }else{
      $.cookie('color' , color)
      return color;
    }
  };
  boxTime.style.color = colorbox();
  return boxTime
}
BoxTimeColor(boxTime, color)
// end  end 
// forms start 
$("#colorsform").submit(function(e) {
  e.preventDefault();
    let dataform = {
      'color': $('#getcolor').val(),
    }
  $.ajax({
      type: "POST",
      url: "index.php",
      data: dataform,
      success: function(response)
      {
        let data = $.parseJSON(response);
        return BoxTimeColor(boxTime, data.color)
      }
  });
});
// forms end 

