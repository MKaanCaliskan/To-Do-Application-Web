var taskInput=document.getElementById("txttodo");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("incomplete-tasks")
const emUserElement = document.getElementById("em-user");


var createNewTaskElement=function(taskString){


	var listItem=document.createElement("li");
	var checkBox=document.createElement("input");
	var label=document.createElement("label");
    label.innerText=taskString;
	checkBox.type="checkbox";
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
  return listItem;

}

var addTask=function(){


	
	console.log("Add Task...");
	var listItem=createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem);
	taskInput.value="";

}

addButton.onclick=addTask;

