let login=document.querySelector("#right1")

let particularUser=JSON.parse(localStorage.getItem("particularUser"));

let maleCont=document.querySelector("#maleCont");

let femaleCont=document.querySelector("#femaleCont");

let popup=document.querySelector("#popup");

let x=document.querySelector("#x");
x.addEventListener("click",()=>{
    popup.style.right="-100%";
});

let dynamic=document.querySelector("#dynamic");

let cartStorage=[]; 

if(particularUser){
    login.innerHTML=`<span>${particularUser.first}</span>
    <a href="./ecommerce.html" id="logout"><button>logout</button></a>`;
    let logout=document.querySelector("#logout");
    logout.addEventListener("click",()=>{
        localStorage.removeItem("particularUser");
    });

}

async function fetchData(){
    let dataFromServer=await fetch("https://www.shoppersstack.com/shopping/products/alpha");

    let allData=await dataFromServer.json();
    console.log(dataFromServer); 
    console.log(allData) ; 
     let maleData=allData.data.filter((e)=>{
    if(e.category=="men"){
        return e
    }
    });
    console.log(maleData) 
    maleData.map((e)=>{  
        maleCont.innerHTML+=`<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt=""/>
        <h2>${e.name}</h2>
         <h3>${e.price}</h3>
        <h4>rating: ${e.rating}</h4>
        <button class="btn">Add to Cart</button>
        </div>
        `
    });

    let femaledata=allData.data.filter((e)=>{  
        if(e.category=="women"){
            return e;
        }
    });
    console.log(femaledata)  
    femaledata.map((e)=>{  
            femaleCont.innerHTML+=`<div id="${e.productId}">
            <img src="${e.productImageURLs[0]}" alt=""/>
            <h2>${e.name}</h2>
             <h3>${e.price}</h3>
            <h4>rating: ${e.rating}</h4>
            <button class="btn">Add to Cart</button>
            </div>
            `
    });
    
    let kidsdata=allData.data.filter((e)=>{  
        if(e.category=="kids"){
            return e;
        }
    });
    console.log(kidsdata)  
    kidsdata.map((e)=>{  
            kidsCont.innerHTML+=`<div id="${e.productId}">
            <img src="${e.productImageURLs[0]}" alt=""/>
            <h2>${e.name}</h2>
             <h3>${e.price}</h3>
            <h4>rating: ${e.rating}</h4>
            <button class="btn">Add to Cart</button>
            </div>`;

    });

    let electronicsdata=allData.data.filter((e)=>{  
        if(e.category=="electronics"){
            return e;
        }
    });
    console.log(electronicsdata)  
    electronicsdata.map((e)=>{  
            elsectronicsCont.innerHTML+=`<div id="${e.productId}">
            <img src="${e.productImageURLs[0]}" alt=""/>
            <h2>${e.name}</h2>
             <h3>${e.price}</h3>
            <h4>rating: ${e.rating}</h4>
            <button class="btn">Add to Cart</button>
            </div>`;

    });

     let btn=document.querySelectorAll(".btn");
     console.log(btn);
     btn.forEach((e)=>{
         e.addEventListener("click",()=>{
             popup.style.right="0";
             if(particularUser){
                 let parentElement=e.parentElement.id  
                 console.log(parentElement);
                 let oneProduct=allData.data.find((e)=>{
                     if(e.productId==parentElement){
                         return e;
                     }
                 });
                 console.log(oneProduct);
               
                 cartStorage.push(oneProduct);  
                 console.log(cartStorage);
                 print()
                 SubTotal()
                 del()
                 total()
                
             }else{
                 dynamic.innerHTML=`<a  href="./login.html">login first</a>`;
             }
         })
 });



}
fetchData();

function print(){
    dynamic.innerHTML="";
    cartStorage.map((e)=>{ 
       
        dynamic.innerHTML += `<div class="cart-design" id="${e.productId}">
        <div>
            <img src="${e.productImageURLs[0]}" alt="">
        </div>
        <div>
            <h3>${e.name}</h3>
            <input type="number" value=1>
        </div>
        <div>
        
            <h4>${e.price}</h4> 
        </div>
        <div>
            <h5 class="sub">${e.price} </h5>
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>

        `
        del()
    })

}

function SubTotal(){
  let input=  document.querySelectorAll("input")
  
  input.forEach((e)=>{
   
    e.addEventListener("input",()=>{
        if(e.value<1){
            e.value=1
        }
        let parent=e.parentElement.parentElement
        console.log(parent);
        let price=parent.querySelector("h4")  
        let subtotal=parent.querySelector("h5")

        subtotal.innerHTML=price.innerHTML*e.value ;
            total()

    })
  })
}

function del(){
    let delBtn=document.querySelectorAll(".fa-trash")
    delBtn.forEach((e)=>{
        e.addEventListener("click",()=>{
            let parent=e.parentElement.parentElement
            console.log(parent);
            cartStorage=cartStorage.filter((e)=>{
                if(parent.id !=e.productId){
                    return e
                }
            })
            console.log(cartStorage);
            print()   
            total()

        })
    })

}

function total(){
    let sub=document.querySelectorAll(".sub")
    let disTotal=document.querySelector("#total")
    let sum =0
    sub.forEach((e)=>{
        let intsub=parseInt(e.innerHTML)
        sum=sum+intsub
    })
    disTotal.innerHTML=sum
    disTotal.style.margin="10px";

}