function printTenFib() {
    let fibArr = [];
    for(let i = 0; i < 10 ; i++) {
        if(fibArr.length == 0) {
            fibArr.push(0);
        }
        else if(fibArr.length == 1) {
            fibArr.push(1);
        }
        else{
            var next = fibArr[(i-1)] + fibArr[(i-2)];
            fibArr.push(next);
        }
        console.log(fibArr[i]);
    }
}