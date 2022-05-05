fs = require('fs');



var input = [];

var path = '\\ex2\\';

function getInput(number) {
    return fs.readFileSync(`${path}input${number}.txt`, 'utf8').split('\n');
}
function getResult(number) {
    return fs.readFileSync(`${path}output${number}.txt`, 'utf8');
}
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


function ContestResponse(){
    //implement your code here using input array

    let entries = input.slice(1);
    const total = entries.length; //?
    const length = entries.filter((line) => {
        let slice = parseInt(line.slice(0,2)); //?
        let number = slice >=20 || slice <= 7; //?
        return number;
    }).length; //?

    let count = Math.floor(total / 2); //?
    let valid = length < count ? 'OK' : 'SUSPICIOUS';
    console.log(valid);
    return valid;
}
test('OK', () => {
    input = [
    '5',
    '18:41',
    '13:09',
    '09:36',
    '12:05',
    '11:59',
    ]

    expect(ContestResponse()).toEqual('OK');

});

test('SUSPICIOUS', () => {
    input = [
    '5',
    '00:50',
    '21:57',
    '19:21',
    '05:20',
    '18:48',
    ]

    expect(ContestResponse()).toEqual('SUSPICIOUS');

});
