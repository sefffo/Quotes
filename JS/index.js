

var arr = [
    `“So many books, so little time.”<br>― Frank Zappa`,
    `“A room without books is like a body without a soul.”<br>― Marcus Tullius Cicero`,
    `“You only live once, but if you do it right, once is enough.”<br>― Mae West`
];

let previousChoice = -1; 

function start() {
    let choice;

    do{
        choice = Math.floor(Math.random() * arr.length);
    } while (choice === previousChoice); 
    // Kol ma hy5osh hna lw l2a zyha hyfdl gwa el loop l7d ma el rkm yt8ir w ast5dmt do while loop 3shan agrb awl mara;


    document.getElementById("Quote").innerHTML = arr[choice];

    
    previousChoice = choice;
}