/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/



fs = require('fs');

var path = '\\ex1\\';

function getInput(number) {
    return fs.readFileSync(`${path}input${number}.txt`, 'utf8').split('\n');
}
function getResult(number) {
    return fs.readFileSync(`${path}output${number}.txt`, 'utf8');
}

/*readline_object.on("line", (value) => { //Read input values
    input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse);*/

var input = [];

function ContestResponse(){
    //implement your code here using input array

    const result = input.slice(1).filter((line) => {
        let slice = line.slice(-5); //?
        let number = slice.match(/\d{5}/); //?
        return number;
    })


    console.log(result.length);

    return result.length.toString();
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

test('adds 1 + 2 to equal 3', () => {
    input = ['5',
        'Fxs1rDSWZ8g',
        'RN52GJ88488',
        'ParlY5NZmw',
        'FzYKqdLF40p',
        'TnqfLG29966']

    expect(ContestResponse()).toBe('2');

   input = [
        '10',
        'YhwfyXqQ',
        'Cwb0RW76FW7fcL',
        'SAGX4au48225',
        'ItgBrXQTs61387',
        'DWEboq44CG65736',
        'XZzU9u',
        'XXLGnB13478',
        'SZSjkc',
        'LMU8vnh78006',
        'I9ezHwtBBg96390',
    ]

    expect(ContestResponse()).toBe('6');

    input = [
        '6',
        'h25io',
        'gn0mi12345',
        'realDon4321',
        'yaNNd3v',
        'cup0ft3444455',
        'bienvenueCorbier',
        'BClukschoco',
    ]

    expect(ContestResponse()).toBe('2');

    input = [
        '100',
        'QUmAnC1ZUQUe',
        'SdCtTnc95',
        'EUEpQF',
        'E0Il5DYNtzEjm1D',
        'MMcg0ZUy7aM',
        'Q0NQnaT6McKea',
        'LqcZWKK',
        'Ny2qPuRKATf6D',
        'ZLBAYCN',
        'Q3mUwkLRiAl',
        'OCCWg5rpNfJiqU',
        'I8shqWtHMXg',
        'IlVO5Mr1y',
        'OlBSSKo5EX',
        'N8PBz5X',
        'ZwauY2',
        'CptC5Obg68mCJ6X',
        'Sui6aUiQ',
        'OJG1HRVPYoit',
        'HIKhkKEFKUG4',
        'Y7EYWnHb',
        'SvZwPWJV',
        'SozgwIKh',
        'O4Gt23pAeD',
        'Pgqo1h',
        'IgXxr6Da',
        'GxHv9TyEFKpQrTS',
        'Va1RgRz7U1yRf',
        'Mv7LalL0',
        'CbZYWRxNRpVVSf',
        'JD82igc3v9TJcyu',
        'HbAd0WYsunG',
        'A8mijpXA',
        'W2hXRFaP4',
        'G5hI0WfFtUfS1',
        'FJc3cL',
        'W6P8yK',
        'EGpxj22Xgz5s6',
        'Y3PRmEyUIxS',
        'JUQh2CYgznJ7',
        'Kd615FFKSueG',
        'Gi0EBZ',
        'Acoevgf',
        'AIUeYjC8X1G6',
        'P9ElrPZMvt0',
        'Y2M0A56GJSoaJhO',
        'FyWdBVnvf',
        'CkKDa7Y',
        'JykdeGSSgxiQ',
        'GxIZ48t',
        'RmWRd05quL',
        'AUL50KRSy',
        'AlqJBYdAE',
        'MvjIdJ',
        'RI42a7Mw74Hk8vZ',
        'UjsLJK',
        'Rdnlq8A',
        'SZCI1P2',
        'CJj0PHcrL',
        'ZSDLyB78DN18c',
        'VYqHB1sKtWvmyC',
        'Dd2EYVK4aR1U',
        'WTlaRJLg8C',
        'J93Slr1',
        'GnWyz6B4TxwFAe',
        'JvSXmRR6c2Ytrz',
        'LL5mE5j5fxQK2h',
        'QLBDJeaSNHVMCb',
        'Cfuv7nR7Fs3LkWe',
        'QGlqoFyoeavSxb',
        'GbvMyEL',
        'CM7c0K',
        'NQnlrauSh',
        'JxkwRxKEdpy',
        'F4ziRwH04zjiS',
        'MqyuC7hupQxB9wh',
        'VWT02pPhp',
        'C7XbSgxGc',
        'Lfb8iYD',
        'ZOPvKqYcBvpOPd',
        'ABuoAHwOsULzAl',
        'LPPA3qpnGx',
        'Q5WEKG7cZ3X7q',
        'WI4o0vT',
        'VuGBpp4ljkG',
        'Ryv1eiXTX',
        'KFQF9PH',
        'KbIntDFcB9CF',
        'ZPqtiU5cQZXeSF',
        'NFHwXSjSloB',
        'TaQnqOG8myt',
        'DwsjiCJx',
        'C9J0jB0EInq',
        'U4eit32K5',
        'GiAfgEpn',
        'IkxjgcLZG',
        'JzCIJyHjLPav5zh',
        'RcRcuj28aF1vH',
        'JmESDnLckAh',
        'PzhJNSFoxLHs',
    ]

    expect(ContestResponse()).toBe('0');

    input = [
        '100',
        'EX52jh3Ie90370',
        'S4J7zxPT56559',
        'AwFyre157150',
        'JYQTUWPm91951',
        'Y621d5l26590',
        'SQA1eiL15377',
        'X7GJsTRWn32985',
        'SjXNLphb44354',
        'XHSaQlAP72754',
        'TJRBs7F2f04899',
        'AcyEVi92431',
        'XsBDs0BW45722',
        'FWIx7I62522',
        'QVuINU67779',
        'KGWpoDHp60043',
        'NSS1gS64763',
        'TAOApQpz65913',
        'O8kvOm79247',
        'Yw8GmUN2B98783',
        'PmFcJELX45020',
        'AnlASLVz35875',
        'FV1IVVYOw79780',
        'AWH8tJZa93387',
        'XWonMYrG22525',
        'QF813kKN76337',
        'GyhNmd59770',
        'Rfmzpxb73951',
        'Upx1fZCZ40201',
        'XAvixH33063',
        'SzTvBUUB37590',
        'PzbpPd26538',
        'T0V0ro47917',
        'Cvb6rErUo57073',
        'ZfRSb2q1147165',
        'ClpctrdeO56176',
        'ZmuW69H16746',
        'HJwECb50873',
        'TMBMncR38414',
        'JbOPyt26517',
        'DC4AX7s4Sn06415',
        'FQtypwfN13020',
        'I7rLepp0Q536557',
        'YbQ2imFR55611',
        'Qx4Pfjh34101',
        'JdBXOIXg07043',
        'Iuc77qOU34668',
        'R5cySxJM76391',
        'IIWpNLAw50548',
        'SEJONRHjV79453',
        'GeVALpf23799',
        'H8jdRSTL9Z28421',
        'GEtGMSz47747',
        'VLDs7zYU389041',
        'MyUpFnP79586',
        'Rvqgz0lsrZ33138',
        'KUjKwSnwI00340',
        'I0jSWMz5hV71942',
        'BuB7dNlz16340',
        'IByebxRX23795',
        'F7MnBpxK11632',
        'Ed9NbR318525',
        'VeBUyFSBr59251',
        'V5InAJv62954',
        'LFwzRgJ713770',
        'NZiDalDzc98720',
        'RUhyY8I57296',
        'RLBgZxzxvc29797',
        'HC10LvxK59415',
        'HBVGGHU55853',
        'LsDHJ46eh024035',
        'JHU1gLL88097',
        'ZOwOjXewk06964',
        'EGamaVP45435',
        'I99YSHo26805',
        'DumvMLhY52897',
        'EXzWeG52977',
        'FlmctJEBq83638',
        'VY2WMCFH84667',
        'JySkYtBabw74308',
        'CI0uWm18880',
        'X2Sn6lbX6N24565',
        'ZZAgzEK55485',
        'XmOwnhd75279',
        'PTUgD0kk637385',
        'U10taiBa8K75898',
        'VxlRCu81765',
        'Q7RicK5776493',
        'Gt1Ao63UK91011',
        'EHsVE1QCj66816',
        'EY1Thtt08246',
        'T0Pb7bE163759',
        'NpHFJETxg24662',
        'CNk5RIgYlP16113',
        'EIgySj4708739',
        'NLwCoyY02947',
        'WA3vGc9UT28814',
        'A2YfCY19i00901',
        'EqnrNScXDd67308',
        'SFvROUN16270',
        'W0sBTNY24673',
    ]

    expect(ContestResponse()).toBe('100');

    input = [
        '100',
        'EX52jh3Ie90370',
        'S4J7zxPT56559',
        'AwFyre157150',
        'JYQTUWPm91951',
        'Y621d5l26590',
        'SQA1eiL15377',
        'X7GJsTRWn32985',
        'SjXNLphb44354',
        'XHSaQlAP72754',
        'TJRBs7F2f04899',
        'AcyEVi92431',
        'XsBDs0BW45722',
        'FWIx7I62522',
        'QVuINU67779',
        'KGWpoDHp60043',
        'NSS1gS64763',
        'TAOApQpz65913',
        'O8kvOm79247',
        'Yw8GmUN2B98783',
        'PmFcJELX45020',
        'AnlASLVz35875',
        'FV1IVVYOw79780',
        'AWH8tJZa93387',
        'XWonMYrG22525',
        'QF813kKN76337',
        'GyhNmd59770',
        'Rfmzpxb73951',
        'Upx1fZCZ40201',
        'XAvixH33063',
        'SzTvBUUB37590',
        'PzbpPd26538',
        'T0V0ro47917',
        'Cvb6rErUo57073',
        'ZfRSb2q1147165',
        'ClpctrdeO56176',
        'ZmuW69H16746',
        'HJwECb50873',
        'TMBMncR38414',
        'JbOPyt26517',
        'DC4AX7s4Sn06415',
        'FQtypwfN13020',
        'I7rLepp0Q536557',
        'YbQ2imFR55611',
        'Qx4Pfjh34101',
        'JdBXOIXg07043',
        'Iuc77qOU34668',
        'R5cySxJM76391',
        'IIWpNLAw50548',
        'SEJONRHjV79453',
        'GeVALpf23799',
        'H8jdRSTL9Z28421',
        'GEtGMSz47747',
        'VLDs7zYU389041',
        'MyUpFnP79586',
        'Rvqgz0lsrZ33138',
        'KUjKwSnwI00340',
        'I0jSWMz5hV71942',
        'BuB7dNlz16340',
        'IByebxRX23795',
        'F7MnBpxK11632',
        'Ed9NbR318525',
        'VeBUyFSBr59251',
        'V5InAJv62954',
        'LFwzRgJ713770',
        'NZiDalDzc98720',
        'RUhyY8I57296',
        'RLBgZxzxvc29797',
        'HC10LvxK59415',
        'HBVGGHU55853',
        'LsDHJ46eh024035',
        'JHU1gLL88097',
        'ZOwOjXewk06964',
        'EGamaVP45435',
        'I99YSHo26805',
        'DumvMLhY52897',
        'EXzWeG52977',
        'FlmctJEBq83638',
        'VY2WMCFH84667',
        'JySkYtBabw74308',
        'CI0uWm18880',
        'X2Sn6lbX6N24565',
        'ZZAgzEK55485',
        'XmOwnhd75279',
        'PTUgD0kk637385',
        'U10taiBa8K75898',
        'VxlRCu81765',
        'Q7RicK5776493',
        'Gt1Ao63UK91011',
        'EHsVE1QCj66816',
        'EY1Thtt08246',
        'T0Pb7bE163759',
        'NpHFJETxg24662',
        'CNk5RIgYlP16113',
        'EIgySj4708739',
        'NLwCoyY02947',
        'WA3vGc9UT28814',
        'A2YfCY19i00901',
        'EqnrNScXDd67308',
        'SFvROUN16270',
        'W0sBTNY24673',
    ]

    expect(ContestResponse()).toBe('100');




});

