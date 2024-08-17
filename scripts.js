function addtodo(){
var input=document.getElementById('inputbox');
var text=input.value.trim();
if(text!=="")
    var li=document.createElement("li");
li.textContent=text;
   
var deletebtn=document.createElement('button');
deletebtn.textContent='delete';
deletebtn.classList.add('del');
deletebtn.onclick=function(){
    li.remove();
};
li.appendChild(deletebtn);
let ins=document.getElementById('lists').appendChild(li);
ins.classList.add('ins');
input.value='';
}
