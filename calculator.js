
var inp=document.getElementById("ser");
var btn=document.getElementsByTagName("button");

let string=""
// let arr=Array.from(btn);
// arr.forEach(btn=>{
//   btn.addEventListener('click',function(e){
for(let i=0;i<=19;i++){
      btn[i].addEventListener('click',function(e){
        if(e.target.innerHTML == '='){
          string=eval(string)
          inp.value=string
        }
        else if(e.target.innerHTML == 'C'){
          string=""
          inp.value=string
        }
        else if(e.target.innerHTML == 'DEL'){
          string=string.substring(0,string.length-1)
          inp.value=string
        }
        else{
          string+=e.target.innerHTML;
          inp.value=string;
        }
           
    });
}
// btn[0].addEventListener('click',get);
// btn[0].addEventListener('mouseleave',geti)
