const NUMERO_EXO = 3;

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

/*test ('Input 6', () => {
    input = getInput(6);
    expect(ContestResponse()).toBe(getResult(6));
});

test ('Input 7', () => {
    input = getInput(7);
    expect(ContestResponse()).toBe(getResult(7));
});

test ('Input 8', () => {
    input = getInput(8);
    expect(ContestResponse()).toBe(getResult(8));
});*/


test ('transformline 6', () => {

    var transposedLines = getEmpltyTransofrmedLine();

    transformline('#.........', transposedLines);
    expect(transposedLines[0]).toStrictEqual([true]);
    expect(transposedLines[1]).toStrictEqual([false]);
});

test ('transformline \'..........\'', () => {

    var transposedLines = getEmpltyTransofrmedLine();

    transformline('..........', transposedLines);
    transposedLines; //?
    expect(transposedLines).toStrictEqual([[false], [false], [false], [false], [false], [false], [false], [false], [false], [false]]);

});

test ('transformline \'###.######\'', () => {

    var transposedLines = getEmpltyTransofrmedLine();

    transformline('###.######', transposedLines);
    transposedLines; //?
    expect(transposedLines).toStrictEqual([[true], [true], [true], [false], [true], [true], [true], [true], [true], [true]]);

});

test ('countLine ', () => {
    const number = countLine([true, false]);
    number; //?
    expect(countLine([true, false])).toEqual(null);
    expect(countLine([false, false])).toEqual(2);
    expect(countLine([false, false, false, false])).toEqual(4);
    expect(countLine([false, true])).toBe(null);

});

var input = [];

/*****************************************************  CODE HERE *******************************************/

/** copy this ***/

var stdout = '';

function log(data) {
    stdout += data;
}

function err(data) {
    console.error(data);
}

function display() {
    const display_return = stdout;
    console.log(display_return);
    stdout = '';
    return display_return;
}

const transformline = (line, arrayTransposed) => {

    if (!line && line.length !== 10) return;
    for (let i = 0; i < 10; i++) {
        arrayTransposed[i].push((line && line[i] && line[i] === '#' )? true : false);
    }
};


function getEmpltyTransofrmedLine() {
    var transposedLines = [];
    for (let i = 0; i < 10; i++) {
        transposedLines.push([]);
    }
    return transposedLines;
}

function countLine(colonne) {
    const number = colonne.reduce((number, line) => {
        const newVar = number != null && line === false  ? number + 1 : null;
        return newVar;
    }, 0);
    return number;
}

function ContestResponse(){

    var transposedLines = getEmpltyTransofrmedLine();


    //implement your code here using input array
    var nombre = parseInt(input[0]);//?
    var array = input.splice(1);//?

    // remove first empty line
    const plainLines = array.filter(line => line !== '..........');//?

    plainLines; //?
    //err(plainLines);//?
    plainLines.forEach(line => {
        if (!line) return;
        line; //?
        transformline(line);

    }); //?


    const colonnesCount = transposedLines.map((colonne) => {
        // err(colonne);
        const number = countLine(colonne);
        number; //?
        return number;
    });

    colonnesCount; //?

    var result = ""; //?


    log(result);
    return display();
}




