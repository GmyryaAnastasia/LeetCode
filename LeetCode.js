// task-1
var buyChoco = function(prices, money) {
    const sortedArr=prices.sort((a,b)=>a-b)
    if(money-(sortedArr[0]+sortedArr[1])>=0){
        return money-(soretArr[0]+soretArr[1])
    }else{
        return money
    }

};