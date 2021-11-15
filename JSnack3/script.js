// Stampa le potenze di 2 fino a 1000.


let i = 0;

let potenzaDi2 = 0;

while (potenzaDi2 < 1000){
    potenzaDi2 = Math.pow(2, i);
    if (potenzaDi2 < 1000) {
        console.log(potenzaDi2);
    };
    i++;
};