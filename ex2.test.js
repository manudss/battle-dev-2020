const NUMERO_EXO = 2;

/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/



//region Loading
fs = require('fs');

var path = 'ex';


const PREFIXE_FICHIER_INPUT = "input";
const PREFIXE_FICHIER_OUTPUT = "output";


function getInput(number) {
    return fs.readFileSync(`${path}${NUMERO_EXO}/${PREFIXE_FICHIER_INPUT}${number}.txt`, 'utf8').toString().split(/\r?\n/g);
}

function getResult(number) {
    return fs.readFileSync(`${path}${NUMERO_EXO}/${PREFIXE_FICHIER_OUTPUT}${number}.txt`, 'utf8').toString();
}
//endregion


test ('Exemple', () => {
    input = ["6",
        "rocket",
        "boosters",
        "rocket",
        "boosters",
        "fire",
        "rocket"];
    expect(ContestResponse()).toBe("boosters");
});

test ('Input 1', () => {
    input = getInput(1);
    expect(ContestResponse()).toBe(getResult(1));
});

test ('Input 2', () => {
    input = getInput(2);
    expect(ContestResponse()).toBe(getResult(2));
});

test ('Input 3', () => {
    input = getInput(3);
    expect(ContestResponse()).toBe(getResult(3));
});

test ('Input 4', () => {
    input = getInput(4);
    expect(ContestResponse()).toBe(getResult(4));
});

test ('Input 5', () => {
    input = getInput(5);
    expect(ContestResponse()).toBe(getResult(5));
});

test ('Input 6', () => {
    input = getInput(6);
    expect(ContestResponse()).toBe(getResult(6));
});




/*test ('Input 7', () => {
    input = getInput(7);
    expect(ContestResponse()).toBe(getResult(7));
});

test ('Input 8', () => {
    input = getInput(8);
    expect(ContestResponse()).toBe(getResult(8));
});*/

var input = [];

/*****************************************************  CODE HERE *******************************************/

/** copy this ***/

var stdout = '';

function log(data) {
    stdout += data;
}

function display() {
    const display_return = stdout;
    console.log(display_return);
    stdout = '';
    return display_return;
}





function ContestResponse(){


    //implement your code here using input array
    var nombre = parseInt(input[0]);//?
    var array = input.splice(1);//?

    var uniq = array
        .map((name) => {
            return {
                count: 1,
                name: name
            }
        })
        .reduce((a, b) => {
            a[b.name] = (a[b.name] || 0) + b.count
            return a
        }, {});

 //?


    var duplicates = Object.keys(uniq).filter((a) => uniq[a] == 2)
    duplicates; //?

    var result = duplicates[0]; //?


    log(result);
    return display();
}






