// console.log('Hello world from uz')


//function - oznacava da je ovo funkcija
//saberi - naziv f-je i smislja ga programer
//  male zagrade predtavljaju parametre funkcije, f-ja moze da nema parametre a moze da ima jedan ili vise
// {} - predstavlja telo funkcije
function saberi() {
    // console.log("Called saberi");
    let x = 5;
    let y = 11;

    //Uvecavam x za jedan
    // x = x + 1; //x = 6
    // x += 1; // x = x + 1

    x++; // x = x + 1

    y--;

    let z = x + y;
    console.log(z)
}


function helloFromJS() {
    alert('Hello!');
    // confirm('Hello!');
}

function sakrij() {
    // let el = document.getElementById('tekst');
    // el.style.display = "none";

    document.getElementById("tekst").style.display = "none";
}

function prikazi() {
    document.getElementById("tekst").style.display = "block";
}


