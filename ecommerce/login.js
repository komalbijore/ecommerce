let form=document.querySelector("form");
let userName=document.querySelectorAll("input")[0];
let password=document.querySelectorAll("input")[1];
let euser=document.querySelectorAll("span")[0]; 
let epass=document.querySelectorAll("span")[1];
let esub=document.querySelectorAll("span")[2]; 

let localData=JSON.parse(localStorage.getItem("data"));  

form.addEventListener("submit",(e)=>{
    euser.innerHTML="";
    epass.innerHTML="";
    esub.innerHTML="";

let matching =localData.find((e)=>{
    if(userName.value==e.emil && password.value==e.pass){
    return e; 
    }
});

    if(userName.value=="" && password.value==""){
        euser.innerHTML="*username is mandatory";
        epass.innerHTML="*password is mandatory";
        e.preventDefault();  
     }
    else if(userName.value==""){
        euser.innerHTML="*username is mandatory";
        e.preventDefault();

    }
    else if(password.value==""){
        epass.innerHTML="*password is mandatory";
        e.preventDefault();

    }
    else if(matching){ 
       alert("login successful, welcome to the main page");

       localStorage.setItem("particularUser",JSON.stringify(matching));
    }else{
        esub.innerHTML="password is not matching";
        e.preventDefault();
    }
});