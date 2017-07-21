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

//添加事件
var handler = function() {
	var menu = document.getElementById("menu");
	var ifbottom = document.getElementById("bottomid");
	var event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget();

		// if (target.value == "") {
		// 	event.preventDefault(event);
		// }
		 if(event.keyCode == 13 && target.value != ""){ 
			if(ifbottom) {
				menu.removeChild(ifbottom);
			};
        var div = document.createElement("div");
        var span1 = document.createElement("span");
        var input = document.createElement("input");
        span1.className = "getsParent";
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

        	if(menu.className == "onCompleted") {
        		div.className = "child divnone";
        	}
 			menu.appendChild(div);


        //计数器
        var getLength = menu.childNodes.length;
        var number=0;
          for(var i=0;i<getLength;i++) {
			if(menu.childNodes[i].className == "child" || menu.childNodes[i].className == "child divnone") {
				document.getElementById("aSId").className = "text2";
				number++;
			}
		}


         var buttomDiv = document.createElement("div");
         buttomDiv.className = "bottom";
         buttomDiv.id = "bottomid";
        buttomDiv.innerHTML = '<span class="bottomText">'+
  				'<strong>'+number+'</strong>'+
  				'items left'+
  			'</span>'+
  			'<ul id="ulbottom">'+
  				'<li>'+
  					'<button class="All">All</button>'+
  				'</li>'+
  				'<li>'+
  					'<button class="Active">Active</button>'+
  				'</li>'+
  				'<li>'+
  					'<button class="Completed">Completed</button>'+
  				'</li>'+
  				'<li class="lastLi">'+
  					'<button class="clearCompleted divnone" id = "lastliID">clear Completed</button>'+
  				'</li>'+
  			'</ul>';
  			 menu.appendChild(buttomDiv);
//取消aS按钮
             document.getElementById("aSId").className = "text2";

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

//删除按钮
	if(className == "removeButton") {
		document.getElementById("lastliID").className = "clearCompleted divnone";
	   var ifbottom = document.getElementById("bottomid");
	   menu.removeChild(target.parentNode);

        //计数器
        var getLength = menu.childNodes.length;
        var number=0;
          for(var i=0;i<getLength;i++) {
			if(menu.childNodes[i].className == "child") {
				document.getElementById("aSId").className = "text2";
				number++;
			}
		}
		strongSet = document.getElementsByTagName("strong");
	   	strongSet[0].innerHTML = number;


	   if(number == "0") {
	   		menu.removeChild(ifbottom);
	   		document.getElementById("aSId").className = "text2";
	   }
//判断取消删除按钮
		var getLength = menu.childNodes.length;
          for(var i=0;i<getLength;i++) {
		    if(menu.childNodes[i].className == "child childGet") {
				document.getElementById("lastliID").className = "clearCompleted";
			}
		}
	}

//完成事件按钮
	if(className == "text3") {
		var number = 0;
		document.getElementById("lastliID").className = "clearCompleted";
		document.getElementById("aSId").className = "text2 get";
		target.className = "text3 get";
		target.parentNode.nextSibling.className = "childText get2";
		target.parentNode.parentNode.className = "child childGet";

		if(menu.className == "onActive") {
			target.parentNode.parentNode.className = "child childGet divnone";
		}



		var getLength = menu.childNodes.length;
		for(var i=0;i<getLength;i++) {
			if(menu.childNodes[i].className == "child") {
				document.getElementById("aSId").className = "text2";
				number++;
			}
		}
		strongSet = document.getElementsByTagName("strong");
	   	strongSet[0].innerHTML = number;
	}

//取消完成事件按钮
	if(className == "text3 get") {
		var number = 0;
		document.getElementById("lastliID").className = "clearCompleted divnone";
		target.className = "text3";
		target.parentNode.nextSibling.className = "childText";
		target.parentNode.parentNode.className = "child";

		if (menu.className == "onCompleted") {
			target.parentNode.parentNode.className = "child divnone";
		}

//取消aS按钮
          document.getElementById("aSId").className = "text2";
//取消清除按钮
		var getLength = menu.childNodes.length;
          for(var i=0;i<getLength;i++) {
		    if(menu.childNodes[i].className == "child childGet") {
				document.getElementById("lastliID").className = "clearCompleted";
			}
			//计数器
			if(menu.childNodes[i].className == "child" ||menu.childNodes[i].className == "child divnone") {
				document.getElementById("aSId").className = "text2";
				number++;
			}
		}

		strongSet = document.getElementsByTagName("strong");
	   	strongSet[0].innerHTML = number;
	}


//未完成按钮
	if(className == "Active") {
		menu.className = "onActive";
		var getLength = menu.childNodes.length;
		for(var i = 0;i<getLength;i++) {
			if(menu.childNodes[i].className == "child childGet"){
				menu.childNodes[i].className = "child childGet divnone";
			}
			if(menu.childNodes[i].className == "child divnone"){
				menu.childNodes[i].className = "child";
			}
		}
	}

//"全部按钮"
 	if(className =="All") {
 		menu.className = "onAll";
 		var getLength = menu.childNodes.length;
 		for(var i = 0;i<getLength;i++) {
 			if(menu.childNodes[i].className == "child childGet divnone") {
 				menu.childNodes[i].className = "child childGet";
 			}
 			if(menu.childNodes[i].className == "child divnone") {
 				menu.childNodes[i].className = "child";
 			}
 		}
 	}


 //已完成的事件按钮
 	if(className == "Completed") {
 		menu.className = "onCompleted";
 		var getLength = menu.childNodes.length;
 		for(var i = 0;i<getLength;i++) {
 			if(menu.childNodes[i].className == "child childGet divnone") {
 				menu.childNodes[i].className = "child childGet";
 			}
 			if (menu.childNodes[i].className == "child") {
 				menu.childNodes[i].className = "child divnone";
 			}
 		}
 	}


//全选按钮
	if(className =='text2') {
		document.getElementById("lastliID").className = "clearCompleted";
		target.className = "text2 get"
		var getLength = menu.childNodes.length;
		for(var i=0;i<getLength;i++) {
			if (menu.childNodes[i].className == "child") {
				var childgetLength= menu.childNodes[i].childNodes.length;
					for(var j=0;j<childgetLength;j++) {
						if(menu.childNodes[i].childNodes[j].className =="getsParent") {
							menu.childNodes[i].childNodes[j].childNodes[0].className = "text3 get";
						};
						if(menu.childNodes[i].childNodes[j].className == "childText") {
							menu.childNodes[i].childNodes[j].className = "childText get2";
						}
					}
				menu.childNodes[i].className = "child childGet";
			}			
		}

		strongSet = document.getElementsByTagName("strong");
	   	strongSet[0].innerHTML = "0";
	}




	if(className =="text2 get") {
		target.className = "text2";
		var getLength = menu.childNodes.length;
		document.getElementById("lastliID").className = "clearCompleted divnone";
		for(var i=0;i<getLength;i++) {
			if (menu.childNodes[i].className == "child childGet") {
				var childgetLength= menu.childNodes[i].childNodes.length;
					for(var j=0;j<childgetLength;j++) {
						if(menu.childNodes[i].childNodes[j].className =="getsParent") {
							menu.childNodes[i].childNodes[j].childNodes[0].className = "text3";
						};
						if(menu.childNodes[i].childNodes[j].className == "childText get2") {
							menu.childNodes[i].childNodes[j].className = "childText";
						}
					}
				menu.childNodes[i].className = "child";
			}			
		}


		        //计数器
        var getLength = menu.childNodes.length;
        var number=0;
          for(var i=0;i<getLength;i++) {
			if(menu.childNodes[i].className == "child") {
				document.getElementById("aSId").className = "text2";
				number++;
			}
		}
		strongSet = document.getElementsByTagName("strong");
	   	strongSet[0].innerHTML = number;
	}


//删除已完成事件按钮
	if(className == "clearCompleted") {
	 	var getLength = menu.childNodes.length;
	 	for(var i=0;i<getLength;i++) {
	 		if(menu.childNodes[i] != undefined){
	 			if (menu.childNodes[i].className == "child childGet") {
	 		     menu.removeChild(menu.childNodes[i]);
	 		     i--;
	 		}
	 		}

	 	}
		document.getElementById("lastliID").className = "clearCompleted divnone";
		 document.getElementById("aSId").className = "text2";
	 }


}


EventUtil.addHandler(menu,"click",menuFunction);
