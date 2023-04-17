

function uvecajZaJedan() {
    let currCounter = document.getElementById("counter");
    console.log(currCounter);
    currCounter = currCounter.innerHTML;
    // console.log(typeof(currCounter));
    currCounter = Number(currCounter);
    // console.log(typeof(currCounter));
    currCounter++;

    //ako je currCounter 10 ne uvecavaj vise
    if (currCounter > 10) { //telo if petlje
        alert('Limit Reached');
        return; //napusti funkciju
    }

    document.getElementById("counter").innerHTML = currCounter;
}

function umanjiZaJedan() {
    const el = document.getElementById("counter"); //<div id="counter">1</div>

    let numCounter = el.innerHTML; //1 sada je string
    numCounter = Number(numCounter) //sad je broj

    numCounter--;

    if (numCounter <= 0) {
        alert('Min value is 1');
        return;
    } 

    el.innerHTML = numCounter;
}
//                       operation = 'oduzimanje'
function counterFunction(operation) {
    const el = document.getElementById("counter"); //<div id="counter">1</div>
    let numCounter = Number(el.innerHTML);

    if (operation == 'oduzimanje') { //oduzimanje == oduzimanje
        numCounter--;

        if (numCounter <= 0) {
            alert('Min value is 1');
            return; //napusta funkcije, i nista se vise ne izvrsava od koda
        }

    } else if (operation == 'sabiranje') {
        numCounter++;
        if (numCounter > 10) {
            alert('Limit Reached');
            return; //napusti funkciju
        }
    } else {
        alert('Invalid operation');
    }

    el.innerHTML = numCounter;

}

//prvo prveri prvi uslov ako je uslov tacan 
//izvrsava se se telo if pelje
//i ne proverava ostale uslove

//ako prvi uslov nije tacan
//proverava sledeci uslov
//ako je uslov tacan radi else if deo 
//ako nije tacan propada dalje


//ako ni jedan od uslova nije tacan
// a imamo else deo, upasce u else