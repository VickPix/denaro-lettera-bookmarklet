;(function(){


var init = function(){

  // Inject the Div
  setupBox();

  // Gather elements to update
  label = document.getElementById('letDenBox-label');
  box = document.getElementById('letDenBox')
  
  // Fill the Div
  fillVars();

  // Update the Div
  setInterval( fillVars, 3000 );

}

var fillVars = function(){
  var sumDenaro = 0, sumLettera = 0
	var denaro = document.querySelectorAll('td:nth-child(3)')
	var lettera = document.querySelectorAll('td:nth-child(6)')
	for (var i = 0; i < denaro.length; i++) {
		 sumDenaro += isNaN(parseInt(denaro[i].innerText.replace('.',''))) ? 0 : parseInt(denaro[i].innerText.replace('.',''));
		 sumLettera += isNaN(parseInt(lettera[i].innerText.replace('.',''))) ? 0 : parseInt(lettera[i].innerText.replace('.',''));
	}
  label.innerHTML = (sumLettera-sumDenaro).toLocaleString();
  if(sumLettera-sumDenaro > 0){
	  box.style.color = '#00ff00';
  }else{
	  box.style.color = '#ee3333';
  }

}

var setupBox = function(){

  if ( !document.getElementById('letDenBox') ) {
    var newDiv = document.createElement('div');
    var newContent = '<div id=letDenBox-label></div> ';
    newContent += '';
    newDiv.setAttribute('id', 'letDenBox');
    newDiv.style.position = 'fixed';
    newDiv.style.bottom = '0';
    //newDiv.style.right = '0';
    newDiv.style.backgroundColor = 'rgba(58, 58, 58, 0.4)';
    newDiv.style.padding = '.3em .3em';
    newDiv.style.color = '#00CC00';
    newDiv.style.fontFamily = 'monospace';
    newDiv.style.setProperty('text-shadow','1px 1px #fff, -1px 1px #fff, 1px -1px #fff, -1px -1px #fff')
    newDiv.style.transition = "all 1s";	  
    newDiv.style.fontSize = '3em';
    newDiv.style.zIndex = '9999';
    newDiv.style.opacity = '1';
    newDiv.innerHTML = newContent;
    document.body.appendChild(newDiv);
  }
  document.getElementById('letDenBox').onmouseover = function() {
    this.style.opacity = '0';
  }
  document.getElementById('letDenBox').onmouseleave = function() {
    this.style.opacity = '1';
  }

};

init();

})(window);
