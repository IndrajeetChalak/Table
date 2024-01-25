const input= document.getElementById("finput");

const button = document.getElementById("btn1");
const table_body= document.getElementById("table_body");
button.addEventListener("click", function print_table(){
    const number= parseInt(input.value);
    for( let i = 1; i<=10; i++)
    {
        let p = document.createElement("p");
        p.innerHTML=`${number} x ${i} = ${number * i}`;
        p.style.border="1px solid black";
        table_body.appendChild(p);
    }
    input.value="";
    input.focus();
})

const button2 = document.getElementById("btn2");
button2.addEventListener("click", function clear(){
    table_body.innerHTML="";
    input.focus();
})