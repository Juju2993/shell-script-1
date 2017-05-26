// printing values for post and pre increment

let a = 5;
let b = ++a;
let c = a++;

function PrintValues() {
    console.log('>>>> ' + a);
    console.log('>>>> ' + b);
    console.log('>>>> ' + c);
}

PrintValues();