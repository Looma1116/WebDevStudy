  var Body={
    setBackColor:function(color){
      //document.querySelector('body').style.backgroundColor=color;
      $('body').css("backgroundColor",color);
    },
    setColor:function(color){
      //document.querySelector('body').style.color=color;
      $('body').css("color",color);
    }
  };

  var Link={
    setColor:function(color){
    //   var link = document.querySelectorAll('a');
    //   for ( var i = 0; i < link.length; i++){
    //     link[i].style.color = color;
    //   }
    $('a').css("color", color);  //jQuery
    }
  };

  function nightMode(self){
    if(self.value === 'night'){
      Body.setBackColor('#2E2E2E');
      Body.setColor('white');
      self.value = 'day';
      Link.setColor('#BCA9F5');
    }
    else{
      Body.setBackColor('white');
      Body.setColor('black');
      self.value = 'night';
      Link.setColor('blue');
    }
  }
