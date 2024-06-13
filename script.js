//main page counting 
let cislonGL = 0;
function plusGl() {
    cislonGL++
    document.getElementById("cisloGl").innerText = cislonGL;
    document.getElementById("cisloGl").style.color = 'lightgreen' ;
}
function minusGl() {
    cislonGL--
    document.getElementById("cisloGl").innerText = cislonGL;
    document.getElementById("cisloGl").style.color = 'red' ;
}

//vtip1 selected
function vtip1() {
    window.open("/vtip1.html","_self");
}

//vtip2 selected
function vtip2() {
    window.open("/vtip2.html","_self");
}

//vtip3 selected
function vtip3() {
    window.open("/vtip3.html","_self");
}

//start of the game - hide of main page
function hideGl() {
    window.open("/strana1.html","_self");
}


//
//
    //SHOW of some elements
    //const elements = document.querySelectorAll('.classNazev');
    //elements.forEach(element => {
    //    element.classList.remove('hidden');
    //});
//
//
    //HIDE of some elements
    //const elements = document.querySelectorAll('.classNazev');
    //elements.forEach(element => {
    //    element.classList.add('hidden');
    //});
//
//