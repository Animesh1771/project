const image=document.getElementById("tr");
const dname=document.getElementById("pr");
const reci=document.getElementById("rr");
const g=document.getElementById("e")
g.addEventListener("click",()=>{
    console.log(image.value)
    addrec();
})

function addrec(){
    const obj={
        id:Date.now(),
        image:image.value,
        title:dname.value,
        about:reci.value,
    };
    fetch("http://localhost:8090/data",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(obj),
    })
    window.location.href = "4.html";
}