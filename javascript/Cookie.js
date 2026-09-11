var donuts = 0;
var donutsMultiple = 1;
var workers = 0;
var areWorkersWorking = false;


function makeDonuts() {
    donuts = donuts + 1;
    document.getElementById("no_of_donuts").innerHTML = donuts
}

function workersMakeDonuts() {
    donuts = donuts + (workers * donutsMultiple);
    document.getElementById("no_of_donuts").innerHTML = donuts
}

function hireWorker() {
    workers = workers + 1;
    if (areWorkersWorking == false) {
        areWorkersWorking = true;
        setInterval(function(){
            workersMakeDonuts()
        }, 1000)
        
    }
    document.getElementById("no_of_workers").innerHTML = workers;
}


