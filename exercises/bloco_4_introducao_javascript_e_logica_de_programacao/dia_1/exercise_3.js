let x = 1981;
let y = 2981;
let o = 5981;

if (x > y && x > o){
    console.log(x);
} else if(y > x && y > o){
    console.log(y);
} else if(o > x && o > y){
    console.log(o);
} else {
    console.log("Tem número maior aí não campeão");
}
