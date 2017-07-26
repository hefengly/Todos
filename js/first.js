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

var key = function() {

//添加事件
var handler = function() {
	var menu = document.getElementById("menu");
	var ifbottom = document.getElementById("bottomid");
	var event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget();
	if(target.className == "text") {
		 if(event.keyCode == 13 && target.value != ""){ 
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
        var img = document.createElement("img");
        img.src = "images/beforeClick.png";
        img.className = "mainImg beforeClick";
        div.appendChild(img);
        div.className = "child";

        	if(menu.className == "onCompleted") {
        		div.className = "child divnone";
        	}
 			menu.appendChild(div);
  			document.getElementById("bottomid").className = "bottom";

  			        //计数器
       numbertest();

//取消aS按钮
        document.getElementById("aSId").className = "text2";
        target.value = "";
        event.preventDefault(event);

  } 



          var getLength = menu.childNodes.length;
        var number=0;
          for(var i=0;i<getLength;i++) {
			if(menu.childNodes[i].className == "child"||menu.childNodes[i].className == "child divnone") {
				document.getElementById("aSId").className = "text2";
				number++;
			}
		}
		strongSet = document.getElementsByTagName("strong");
	   	strongSet[0].innerHTML = number;
	   	   ChangeSave();
}

if(target.className == "childText") {
	var event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget();
	if(event.keyCode == 13) {

//删除修改后空格的节点
	if(target.id != "text") {
			if(target.innerHTML == "") {
		menu.removeChild(target.parentNode);
		numbertest();
	}
	}




		if(document.getElementById("onContenteditable")) {
	var onContent = document.getElementById("onContenteditable");

    onContent.id = null;
	onContent.setAttribute("contenteditable","false");
	}
	}
	   ChangeSave();
} 
	
};

EventUtil.addHandler(document,"keypress",handler);


}

var menu = document.getElementById("menu");



var menuFunction = function() {
	var event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget();
	var className = target.className;

//删除按钮
	if(className == "removeButton") {
		var menu = document.getElementById("menu");
		document.getElementById("lastliID").className = "clearCompleted divnone";
	   // var ifbottom = document.getElementById("bottomid");
	   // alert(target.parentNode.className)
	   menu.removeChild(target.parentNode);

        //计数器
       numbertest();
       var getLength = menu.childNodes.length;
       var number=0;
          for(var i=0;i<getLength;i++) {
			if(menu.childNodes[i].className == "child"||menu.childNodes[i].className == "child divnone"||menu.childNodes[i].className == "child childGet divnone"||menu.childNodes[i].className == "child childGet") {
				number++;
			}
		}

	   if(number == "0") {
	   		document.getElementById("bottomid").className = "bottom divnone";
	   		document.getElementById("aSId").className = "text2";
	   }
//判断取消删除按钮
		var getLength = menu.childNodes.length;
          for(var i=0;i<getLength;i++) {
		    if(menu.childNodes[i].className == "child childGet") {
				document.getElementById("lastliID").className = "clearCompleted";
			}
		}
		   ChangeSave();
	}

//完成事件按钮
	if(className == "text3") {
		var menu = document.getElementById("menu");
		var number = 0;
		document.getElementById("lastliID").className = "clearCompleted";
		document.getElementById("aSId").className = "text2 get";
		target.className = "text3 get";
		target.parentNode.nextSibling.className = "childText get2";
		target.parentNode.parentNode.className = "child childGet";

		if(menu.className == "onActive") {
			target.parentNode.parentNode.className = "child childGet divnone";
			document.getElementById("lastliID").className = "clearCompleted divnone";
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
	   	   ChangeSave();
	}

//取消完成事件按钮
	if(className == "text3 get") {
		var menu = document.getElementById("menu");
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
	   	   ChangeSave();
	}


//未完成按钮
	if(className == "Active") {
		var menu = document.getElementById("menu");
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

		document.getElementById("lastliID").className = "clearCompleted divnone";
		   ChangeSave();
	}

//"全部按钮"
 	if(className =="All") {
 		var menu = document.getElementById("menu");
 		menu.className = "onAll";
 		var getLength = menu.childNodes.length;
 		for(var i = 0;i<getLength;i++) {
 			if(menu.childNodes[i].className == "child childGet divnone") {
 				menu.childNodes[i].className = "child childGet";
 			}
 			if(menu.childNodes[i].className == "child divnone") {
 				menu.childNodes[i].className = "child";
 			}

 			if(menu.childNodes[i].className == "child childGet") {
 			    document.getElementById("lastliID").className = "clearCompleted";
 			}
 		}
 		   ChangeSave();
 	}


 //已完成的事件按钮
 	if(className == "Completed") {
 		var menu = document.getElementById("menu");
 		menu.className = "onCompleted";
 		var getLength = menu.childNodes.length;
 		for(var i = 0;i<getLength;i++) {
 			if(menu.childNodes[i].className == "child childGet divnone") {
 				menu.childNodes[i].className = "child childGet";
 			}
 			if (menu.childNodes[i].className == "child") {
 				menu.childNodes[i].className = "child divnone";
 			}
 			if(menu.childNodes[i].className == "child childGet") {
 			document.getElementById("lastliID").className = "clearCompleted";
 			}
 		}
 		   ChangeSave();
 	}


//全选按钮
	if(className =='text2') {
		var menu = document.getElementById("menu");
		document.getElementById("lastliID").className = "clearCompleted";
		target.className = "text2 get";
		var getLength = menu.childNodes.length;

		for(var i=0;i<getLength;i++) {

			if (menu.childNodes[i].className == "child"||menu.childNodes[i].className == "child divnone" ){
				var childgetLength= menu.childNodes[i].childNodes.length;
					for(var j=0;j<childgetLength;j++) {
						if(menu.childNodes[i].childNodes[j].className =="getsParent") {
							menu.childNodes[i].childNodes[j].childNodes[0].className = "text3 get";
						};
						if(menu.childNodes[i].childNodes[j].className == "childText") {
							menu.childNodes[i].childNodes[j].className = "childText get2";
						}
					}

				if(menu.childNodes[i].className == "child")	 {
					menu.childNodes[i].className = "child childGet";
				}
			
				if(menu.childNodes[i].className == "child divnone") {
					menu.childNodes[i].className = "child childGet divnone";
				}

			
		}

	}
		if(menu.className == "onCompleted") {
			var getLength = menu.childNodes.length;
			for(var i=0;i<getLength;i++) {
				if(menu.childNodes[i].className == "child childGet divnone") {
					menu.childNodes[i].className = "child childGet";
				}
			}
		}

		if(menu.className == "onActive") {
			var getLength = menu.childNodes.length;
				for(var i=0;i<getLength;i++) {
				if(menu.childNodes[i].className == "child childGet") {
					menu.childNodes[i].className = "child childGet divnone";
				}
			}
		}

		numbertest();
		   ChangeSave();
		// strongSet = document.getElementsByTagName("strong");
	 //   	strongSet[0].innerHTML = "0";
}




	if(className =="text2 get") {
		var menu = document.getElementById("menu");
		var event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget();
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

		if(menu.className == "onCompleted") {
			var getLength = menu.childNodes.length;
			for(var i=0;i<getLength;i++) {
				if(menu.childNodes[i].className == "child") {
					menu.childNodes[i].className = "child divnone";
				}
			}
		}

		        // 计数器
numbertest();
   ChangeSave();
	}
	

//删除全部已完成事件按钮
		if(className == "clearCompleted") {
			var menu = document.getElementById("menu");
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


		        //计数器
		        	numbertest();


	   if(number == "0") {
	   		document.getElementById("bottomid").className = "bottom divnone";
	   		document.getElementById("aSId").className = "text2";
	   }
	      ChangeSave();
	 }






	 if(target.id != "onContenteditable") {
	 	if(document.getElementById("onContenteditable")) {

	 		var onContenteditable = document.getElementById("onContenteditable");
	 		onContenteditable.id = null;
	 		onContenteditable.setAttribute("contenteditable","false");
	 	}
	 }


//优先级按钮
	if(className == "mainImg beforeClick") {
		var menu = document.getElementById("menu");
		target.className = "mainImg afterClick";
		target.src = "images/afterClick.png";
		menu.insertBefore(target.parentNode,menu.childNodes[3]);
		   ChangeSave();
	}

//取消优先级
	if(className == "mainImg afterClick") {
		var menu = document.getElementById("menu");
		target.className = "mainImg beforeClick";
		target.src = "images/beforeClick.png";
		menu.appendChild(target.parentNode);
		ChangeSave();
	}
}





//双击事件
var menudblFunction = function() {
	var event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget();
	var className = target.className;	

    if (className == "childText" || className =="childText get2") {
    	target.id = "onContenteditable";
    	target.setAttribute("contenteditable",true);

    	target.focus();
    	    ChangeSave();
    }
}




EventUtil.addHandler(document,"click",menuFunction);
EventUtil.addHandler(document,"dblclick",menudblFunction);

//回车确定完成修改的事件

// var keypressonCentent = function() {
// 	var event = EventUtil.getEvent(event);
// 	var target = EventUtil.getTarget();
// 	if(event.keyCode == 13) {

// //删除修改后空格的节点
// 	if(target.id != "text") {
// 			if(target.innerHTML == "") {
// 		menu.removeChild(target.parentNode);
// 		numbertest();
// 	}
// 	}




// 		if(document.getElementById("onContenteditable")) {
// 	var onContent = document.getElementById("onContenteditable");

//     onContent.id = null;
// 	onContent.setAttribute("contenteditable","false");
// 	}
// 	}
// }
// EventUtil.addHandler(menu,"keypress",keypressonCentent);



 //计数器
 var numbertest = function() {
		var menu = document.getElementById("menu");
        var getLength = menu.childNodes.length;
        var number=0;
          for(var i=0;i<getLength;i++) {
			if(menu.childNodes[i].className == "child"||menu.childNodes[i].className == "child divnone") {
				document.getElementById("aSId").className = "text2";
				number++;
			}
		}
		strongSet = document.getElementsByTagName("strong");
	   	strongSet[0].innerHTML = number;
}

// var saveThings = function () {
// 	// // alert('linxi')
// 	// alert("我要刷新啊")
// 	ChangeSave();
// }


// window.onbeforeunload=function (){
// alert("===onbeforeunload===");
// if(event.clientX>document.body.clientWidth && event.clientY < 0 || event.altKey){
//      alert("你关闭了浏览器");
// }else{
//      alert("你正在刷新页面");
// }
// }


// EventUtil.addHandler(document,"beforeunload",saveThings);
// EventUtil.addHandler(document,"DOMSubtreeModified",saveThings);