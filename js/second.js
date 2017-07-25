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

	getTarget: function(event) {
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


function getLocalStorage() {
	if(typeof localStorage =="object") {
		return localStorage;
	}else if(typeof globalStorage == "object") {
		return globalStorage[location.host];
	}else {
		throw new Error("Local storage not available");
	}
}
var storage = getLocalStorage();


var SignInClick = function() {

	var username = document.getElementById("usernameId").value;
	var password = document.getElementById("passwordId").value;
	if(storage.getItem(username)){
			if(storage.getItem(username) == password){
			alert("成功登陆");
		}else {
			alert("密码错误")
		}

	}else{
			alert("该用户不存在")
	}
}
var theUlr = "http://localhost:3000";
//创建账号
var CreatClick = function() {
	var event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	document.getElementById("SecurityId").className = "Question";
	document.getElementById("CreatId").className = "Creat divnone";
	document.getElementById("mainId").style.height = "410px";
	document.getElementById("signInId").className = "signIn divnone"
	document.getElementById("RegisterId").className = "Register";

$(document).ready(function(){
	$.ajax({
		ulr:"http://localhost:3000",
		dataType:"jsonp", 
		type:"put",
		date:"22",
		success:function(data){ 
         alert("haha");
        }
	})

});
	// $.ajax({
	// 	ulr:theUlr,
	// 	type:"put",
	// 	date:{
	// 		"linzifan":"linzifan"
	// 	}
	// })
}


var RegisterClick = function() {
	var storage = getLocalStorage();
	var name = document.getElementById("usernameId").value;
	var password = document.getElementById("passwordId").value;
	// var question = document.getElementById("QuestionId").value;
	// var answer = document.getElementById("AnswerId").value;
	storage.setItem(name,password);
	document.getElementById("SecurityId").className = "Security divnone";
	document.getElementById("CreatId").className = "Creat";
	document.getElementById("mainId").style.height = "250px";
	document.getElementById("RegisterId").className = "Register divnone"
	document.getElementById("signInId") .className = "signIn";
}





var SignInbutton = document.getElementById('signInId');
EventUtil.addHandler(SignInbutton,"click",SignInClick);

var CreatButton = document.getElementById("CreatAccount");
EventUtil.addHandler(CreatButton,"click",CreatClick);

var RegisterButton = document.getElementById("RegisterId");
EventUtil.addHandler(RegisterButton,"click",RegisterClick)

