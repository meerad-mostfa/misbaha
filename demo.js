let buton1=document.querySelectorAll(".box button");
let result =document.querySelectorAll(".box span");
let conter=[0,0,0,0];

for(let i=0;i<buton1.length;i++){
    buton1[i].onclick=()=>{
       conter[i]++;
      result[i].textContent=conter[i];
    }
}