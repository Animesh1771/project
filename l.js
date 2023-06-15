//input user data
const name1=document.getElementById("st");
const pass=document.getElementById("sp");
const b=document.getElementById("c")
b.addEventListener("click",()=>{
    console.log(name1.value);
    console.log(pass.value);
    add();
})

function add(){
    const obj={
        name:name1.value,
        pass:pass.value,
        id:Date.now(),
    };
    fetch("http://localhost:8090/ldata",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(obj),
    })
}
//validate
const bu=document.getElementById("d");
const sname=document.getElementById("st");
const spass=document.getElementById("sp");
bu.addEventListener("click",()=>{
    check();
})
let f=1;
function check(){
    fetch("http://localhost:8090/ldata",{
        method:"GET",
    })
    .then((r)=>r.json())
    .then((a)=>{
        a.forEach((el) => {
       if(sname.value==el.name && spass.value==el.pass){
           window.location.href = "form.html";
           f=0;
        };
    })
    if(f===1){
            alert("Please enter email and password");
        }
    })
}
