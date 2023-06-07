// task-1
var buyChoco = function(prices, money) {
    const sortedArr=prices.sort((a,b)=>a-b)
    if(money-(sortedArr[0]+sortedArr[1])>=0){
        return money-(soretArr[0]+soretArr[1])
    }else{
        return money
    }

};

// task-2
var romanToInt = function(s) {
    const romanToDecimalMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let decimal = 0;
    for (let i = 0; i < s.length; i++) {
        const current=romanToDecimalMap[s.charAt(i)]
        const next=romanToDecimalMap[s.charAt(i+1)]
        if(next>current){
            decimal+= next-current
            i++
        }else {
            decimal+= current
        }
    }

    return decimal;
};