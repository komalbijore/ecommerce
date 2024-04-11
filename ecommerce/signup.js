
let firstName=document.querySelectorAll("input")[0];
let lastName=document.querySelectorAll("input")[1];
let email=document.querySelectorAll("input")[2];
let mobile=document.querySelectorAll("input")[3];
let password=document.querySelectorAll("input")[4];
let confirmPassword=document.querySelectorAll("input")[5];
let efirst=document.querySelectorAll("span")[0];
let elast=document.querySelectorAll("span")[1];
let eemail=document.querySelectorAll("span")[2];
let emobile=document.querySelectorAll("span")[3];
let epass=document.querySelectorAll("span")[4];
let ecpass=document.querySelectorAll("span")[5];

let form=document.querySelector("form");
let storage=[]; 
console.log(storage);

let localData=JSON.parse(localStorage.getItem("data"));
if(localData){ 
    storage=localData; 
    console.log(storage);
}
form.addEventListener("submit",(e)=>{
 
    let regx=/^[a-zA-Z]{2,15}$/;  
    let regx1=/^[6-9][0-9]{9}$/;
    let regx2=/^[a-zA-Z0-9@!]{8,15}$/ ; 
    let flag=true;

    if(firstName.value==""){
        efirst.innerHTML="first name is required <br>";
        e.preventDefault();
        flag=false;
    }
    else if(regx.test(firstName.value)) {
          efirst.innerHTML="";
    }
     else{
        efirst.innerHTML="invalid first name <br>"
        e.preventDefault();
        flag=false;
    }

    if(lastName.value==""){
        elast.innerHTML="last name is required <br>";  
        e.preventDefault();
           flag=false;
    }else if(regx.test(lastName.value)){
        elast.innerHTML="";  
    }else{
        elast.innerHTML="invalid last name <br>";
        e.preventDefault();
        flag=false;
    }

    if(email.value==""){
        eemail.innerHTML="email is required <br>"; 
        e.preventDefault();
        flag=false;
    }else{
        eemail.innerHTML="";
    }

    if(mobile.value==""){ 
        emobile.innerHTML="mobile number required <br>";
        e.preventDefault();
        flag=false;
    }else if(regx1.test(mobile.value)){ 
        emobile.innerHTML="";
    }else{
         emobile.innerHTML="invalid mobile number <br>";
        e.preventDefault();
        flag=false;
    }

     if(password.value==""){
        epass.innerHTML="password is required <br>";
        e.preventDefault();
        flag=false;
     }
     else if(regx2.test(password.value)){
        epass.innerHTML="";
     }
     else{
        epass.innerHTML="invalid password <br>";
        e.preventDefault();
        flag=false;
     }

     if(confirmPassword.value==password.value){
        ecpass.innerHTML=""
     }else{
        ecpass.innerHTML="password is not matching";
        e.preventDefault();
        flag=false;
     }

     if(flag)
     {
        let obj={
            first:firstName.value,
            last : lastName.value,
            emil: email.value,
            phone:mobile.value,
            pass:password.value,

        };

        storage.push(obj);
        console.log(storage);
        localStorage.setItem("data",JSON.stringify(storage));
    }

});

