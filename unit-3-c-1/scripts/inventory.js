function add(){
    let prodarr = JSON.parse(localStorage.getItem("database")) || [];
    let allproducts = document.getElementById("all_products");

    prodarr.forEach(function(ele){

    let div = document.createElement("div")
    
    let type = document.createElement("p")
    type.innerText=ele.type;

    let desc = document.createElement("p")
    desc.innerText=ele.desc;

    let price = document.createElement("p")
    price.innerText=ele.price;

    let image = document.createElement("img")
    image.src=ele.image;

    let remove = document.createElement("button")
    remove.innerText="remove"
    remove.addEventListener("click",removefunction)

    div.append(image,type,desc,price,remove)
    allproducts.append(div);

    })
   
}
 add();


 function removefunction(){
     event.target.parentNode.innerHTML="";
 }