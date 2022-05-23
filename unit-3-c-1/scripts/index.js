//store the products array in localstorage as "products"

document.querySelector("#products").addEventListener("submit",myfunction)||[]

function myfunction(elem){
    
    event.preventDefault()

    let form = document.getElementById("products");
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let prod= new product(type,desc,price,image)

    let prodarr = JSON.parse(localStorage.getItem("database")) || [];
    
    prodarr.push(prod)

    localStorage.setItem("database",JSON.stringify(prodarr))
    console.log(prodarr)
}

function product(t,d,p,i,){
this.type = t;
this.desc  =d;
this.price =p;
this.image = i;
}
