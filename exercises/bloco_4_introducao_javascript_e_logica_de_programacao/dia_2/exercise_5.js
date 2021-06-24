let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i += 1){
    for(let o = 0; o < numbers.length; o += 1){
        let x = 0;
        if(numbers[i] > numbers[o]){
            x = x + 1;
            console.log(x);
            if(x == 9){
                console.log(numbers[i]);
            }
        }
    }
}
