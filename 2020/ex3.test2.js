fs = require('fs');

var input = [];

function calcItem(agent, count, level, agentChild) {
    if (level === 11) {
        return count;
    }
    if (!agent) return count;
    count[level + 1] += agent.length;
    agent; //?
    agentChild; //?
   count = agent.reduce((tempCount, child) => {
       child; //?

       return calcItem(agentChild[child], tempCount, level + 1, agentChild);
    }, count);

    return count; //?
}


function ContestResponse(){
    //implement your code here using input array
    const agentChild = input.slice(1).map((line) => line.split(' ')).reduce((results, agent) => {
       let parentAgent = agent[1];
        let childAgent = agent[0];
        if (!results[parentAgent]) {
            results[parentAgent] = [];
        }
        results[parentAgent].push(childAgent);
        return results;
    }, {}); //?

    const count = [];

    const dolan = agentChild[0];



const countTab = [1,0,0,0,0,0,0,0,0,0]
    const levels = calcItem(dolan, countTab, 0, agentChild); //?
    const display = levels.join(' ');
    console.log(display);
    return display;
}

var path = '\\ex3\\';


function getInput(number) {
    return fs.readFileSync(`${path}input${number}.txt`, 'utf8').split('\n');
}
function getResult(number) {
    return fs.readFileSync(`${path}output${number}.txt`, 'utf8');
}


for (i = 0; i<= 5; i++) {
    test ('Input ' + i, () => {
        input = i;
        expect(input % 2).toBe(0);
    });
}

test ('Input 1 ', () => {
    input = 1;
    expect(input % 2).toBe(0);
});

/*
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
/!*test ('Input 6', () => {
    input = getInput(6);
    expect(ContestResponse()).toBe(getResult(6));
});*!/

test('exemple', () => {
    input = [
        '5',
        '1 4',
        '3 1',
        '4 0',
        '2 4'
    ]

    expect(ContestResponse()).toEqual('1 1 2 1 0 0 0 0 0 0');

});

test('input1', () => {
    input = [
        '9',
        '8 5',
        '4 3',
        '7 4',
        '2 0',
        '5 2',
        '3 0',
        '1 2',
        '6 0',
    ]

    expect(ContestResponse()).toEqual('1 3 3 2 0 0 0 0 0 0');

});

test('input2', () => {
    input = [
        '10',
        '2 1',
        '8 7',
        '9 4',
        '3 2',
        '5 0',
        '1 5',
        '7 3',
        '4 8',
        '6 9',
    ]

    expect(ContestResponse()).toEqual('1 1 1 1 1 1 1 1 1 1');

});*/

