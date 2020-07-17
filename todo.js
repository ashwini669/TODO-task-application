/*// Create a "close" button and append it to each list item
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("DELETE");
  span.className = "DELETE";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}*/


var DELETE= document.getElementsByClassName("DELETE");
var i;
for (i = 0; i < DELETE.length; i++) {
  DELETE[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



var EDIT= document.getElementsByClassName("EDIT");
var i;
for (i = 0; i < EDIT.length; i++) {
  EDIT[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ul1").appendChild(li);
  }
  document.getElementById("myInput").value = "";
 
 
   var span = document.createElement("SPAN");
  var txt = document.createTextNode("DELETE");
  span.className = "DELETE";
  span.appendChild(txt);
  li.appendChild(span);

    for (i = 0; i < DELETE.length; i++) {
    DELETE[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
       }
    }
	
	var span = document.createElement("SPAN");
  var txt = document.createTextNode("EDIT");
  span.className = "EDIT";
  span.appendChild(txt);
  li.appendChild(span);

    for (i = 0; i < EDIT.length; i++) {
    EDIT[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
       }
    }
	
	}
	/*var app=new function(){}
	this.div=document.getElementById('DELETE');
	data+='<button onclick="app.Edit('+i+')">Edit</button>;
	this.Edit=function(item){alert(item);*/