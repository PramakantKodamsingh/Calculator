
var inp=document.getElementById("ser");
var btn=document.getElementsByTagName("button");
let string=""
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

