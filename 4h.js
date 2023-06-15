show();
function show(){
    fetch("http://localhost:8090/data",{
        method:"GET",
    })
    .then((r)=>r.json())
    .then((data)=>{
        const food=document.getElementById("show");
        data.forEach((el)=>{
        const div=document.createElement("div");
        div.id="temp";
        const image=document.createElement("img");
        image.src=el.image;
        const title=document.createElement("h3");
        title.innerText=el.title;
        const rating=document.createElement("p");
        rating.innerText=el.about;
        const button=document.createElement("button");
        button.innerText="show recipe";
        const button2=document.createElement("button");
        button2.innerText="Hide";
        button2.id="butt";
        button.id="butt";
        const show=document.createElement("p");
        show.id="ani";
        button.addEventListener("click" ,()=>{
            show.innerHTML=el.about; 
        });
        button2.addEventListener("click" ,()=>{
            show.innerHTML=""; 
        });
        div.append(image,title,button,button2,show);
        food.append(div);
    });
    })
}



