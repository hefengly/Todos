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
	 username = document.getElementById("usernameId").value;
	 password = document.getElementById("passwordId").value;
	 // username = document.getElementById("usernameId").value;
	 // password = document.getElementById("passwordId").value;
	if(storage.getItem(username)){
			if(storage.getItem(username) == password){
			alert("成功登陆");
			var All = document.getElementById("allThings")
			document.getElementById("TodosMainId").className = "main";
			document.getElementById("menu").className = null;
			document.getElementById("loginMainId").className = "loginTop divnone";
			document.getElementById("mainId").className = "loginMain divnone";
			document.getElementById("CreatId").className = "Creat divnone";
			name = username;
			passWord = password;

			if(username) {
			         $.ajax({
                     type: 'get',
                     url: 'http://localhost:3000/people/' + username,
                     dataType: "json",
                     success: function(data) {
                     if(data.things) {
                     All.innerHTML = data.things
                        }
                     }
                  });
			}

			key();
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
	
	  $(document).ready(function() {
	$("#Item").addClass("animated hinge");
})
}


var RegisterClick = function() {
    var storage = getLocalStorage();
	 var username = document.getElementById("usernameId").value;
	 var password = document.getElementById("passwordId").value;
	// var question = document.getElementById("QuestionId").value;
	// var answer = document.getElementById("AnswerId").value;
	storage.setItem(username,password);
	document.getElementById("SecurityId").className = "Security divnone";
	document.getElementById("CreatId").className = "Creat";
	document.getElementById("mainId").style.height = "250px";
	document.getElementById("RegisterId").className = "Register divnone"
	document.getElementById("signInId") .className = "signIn";
	savename = username;
	savepassWord = password;
	alert("已经成功注册！")
	save();
}


// 保存缓存
var save = function() {
	// var name = document.getElementById("usernameId").value;
	// var password = document.getElementById("passwordId").value;
	// alert(name);
	         $.ajax({
                 type: 'post',
                 url: 'http://localhost:3000/people',
                 dataType: "json",
                 data: {
                     "name":savename,
                     "password":savepassWord,
                     "id": savename
                 }
             }
             );
}
// name

//动态数据保存
var ChangeSave = function() {
	passWord = localStorage.getItem(name);
	var allThings = document.getElementById("allThings").innerHTML;
		         $.ajax({
                 type: 'put',
                 url: 'http://localhost:3000/people/'+name,
                 dataType: "json",
                 data: {
                 	 "name":name,
                     "password":passWord,
                     "things":allThings
                 }
             }
             );
}

//得到缓存
var get = function() {
	// alert("get")
	// var name = document.getElementById("usernameId").value;
	// var password = document.getElementById("passwordId").value;
	// var allThings = document.getElementById("allThings").innerHTML;
	var All = document.getElementById("allThings")
           $.ajax({
                   type: 'get',
                   url: 'http://localhost:3000/people/' + name,
                   dataType: "json",
                   success: function(data) {
                        if(data.things) {
                            All.innerHTML = data.things;
                         }
                    }
            });

}

window.onload = function() {
var All = document.getElementById("allThings");
// SignInClick();
	if (name) {
           $.ajax({
                   type: 'get',
                   url: 'http://localhost:3000/people/' + name,
                   dataType: "json",
                   success: function(data) {
                        if(data.things) {
                            All.innerHTML = data.things;
                            menuFunction()
                            key();
                         }
                    }
            });
	}

}

var SignInbutton = document.getElementById('signInId');
EventUtil.addHandler(SignInbutton,"click",SignInClick);

var CreatButton = document.getElementById("CreatAccount");
EventUtil.addHandler(CreatButton,"click",CreatClick);

var RegisterButton = document.getElementById("RegisterId");
EventUtil.addHandler(RegisterButton,"click",RegisterClick);

