// 为链接添加事件处理函数
function prepareGallery(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for (var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showpic(this)?false:true;
		}
	}
}

// 更换图片及描述
function showpic(whichpic){
	if (!document.getElementById("placeholder")) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
		var description=document.getElementById("description");
		if (description.firstChild.nodeType==3){
			description.firstChild.nodeValue=text;
		}
	}
	return true;
}

//辅助函数，用于为页面添加初始化函数
function addLoadEvent(func) { 
  var oldonload = window.onload; 
  if (typeof window.onload != 'function') { 
    window.onload = func; 
  } else { 
    window.onload = function() { 
      oldonload(); 
      func(); 
    } 
  } 
} 

// 执行此添加
addLoadEvent(prepareGallery);

