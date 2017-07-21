var EventUtil = {
	
	addHandler: function(element,type,handler) {
		if(element.addEventListener) {
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent) {
			element.attachEvent("on" + type,handler);
		}else {
			element["on" +type] = handler;
		}
	},

	getEvent: function(event) {
		return event ? event : window.event;
	},

	getTarget: function() {
		return event.target || event.srcElement;
	},

	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}else {
			event.returnValue = false;
		}
	}
}

var text = document.getElementById("text");
var handler = function() {
	var menu = document.getElementById("menu");
	var ifbottom = document.getElementById("bottomid");
	var event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget();

		if (target.value == "") {
			event.preventDefault(event);
		}
		else if(event.keyCode == 13){ 
			if(ifbottom) {
				menu.removeChild(ifbottom);
			};
        var div = document.createElement("div");
        var span1 = document.createElement("span");
        var input = document.createElement("input");
        input.className = "text3";
        input.type = "button";
        input.value = "get";
        span1.appendChild(input);
        div.appendChild(span1);
        var span2 = document.createElement("span");
        span2.className = "childText";
        span2.innerHTML = target.value;
        div.appendChild(span2);
        var span3 = document.createElement("span");
        span3.className = "removeButton";
        span3.innerHTML = "X";
        div.appendChild(span3);
        div.className = "child";
        menu.appendChild(div);

         var buttomDiv = document.createElement("div");
         buttomDiv.className = "bottom";
         buttomDiv.id = "bottomid";
        // var buttomSpan = document.createElement("span")
        // buttomSpan.className = "bottomText";
        // var buttomStrong = document.createElement("strong");
        // buttomStrong.innerHTML = menu.childNodes.length-2;
        // buttomSpan.appendChild(buttomStrong);
        // var text11 = "items left";
        // buttomSpan.appendChild(text11);
        // buttomDiv.appendChild(buttomSpan)
        buttomDiv.innerHTML = '<span class="bottomText">'+
  				'<strong>'+(menu.childNodes.length-7)+'</strong>'+
  				'items left'+
  			'</span>'+
  			'<ul id="ulbottom">'+
  				'<li>'+
  					'<a href="#">All</a>'+
  				'</li>'+
  				'<li>'+
  					'<a href="#" class="Active">Active</a>'+
  				'</li>'+
  				'<li>'+
  					'<a href="#">Completed</a>'+
  				'</li>'+
  				'<li class="lastLi">'+
  					'<a href="#">clear Completed</a>'+
  				'</li>'+
  			'</ul>';
  				
  			 menu.appendChild(buttomDiv);

        target.value = "";
        event.preventDefault(event);

  }    
};

EventUtil.addHandler(text,"keypress",handler);




var menu = document.getElementById("menu");



var menuFunction = function() {
	var event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget();
	var className = target.className;


	if(className == "removeButton") {
	   var ifbottom = document.getElementById("bottomid");
	   menu.removeChild(target.parentNode);
	   strongSet = document.getElementsByTagName("strong");
	   strongSet[0].innerHTML = (menu.childNodes.length-7)+""-1;
	   if((menu.childNodes.length-7)==1) {
	   		menu.removeChild(ifbottom);
	   }
	}


	if(className == "text3") {
		target.className = "text3 get";
		target.parentNode.nextSibling.className = "childText get2";

	}

	if(className == "Active") {
		target.parentNode.parentNode.parentNode.previousSibling
	}


}


EventUtil.addHandler(menu,"click",menuFunction);
