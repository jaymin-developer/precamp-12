setTimeout(function(){
    console.log("3초가 지났습니다.")
},3000)
// VM299:2 3초가 지났습니다.

setTimeout(function(){
    console.log("5초가 지났습니다.")
},5000)
// VM334:2 5초가 지났습니다.

setInterval(function(){
    console.log("1초가 지났습니다.")
},1000)

let time = 10
// undefined
setInterval(function(){
    if(time >= 0){
    console.log(time)
    time = time-1
    }
},1000)
// VM770:3 10
// VM770:3 9
// VM770:3 8
// VM770:3 7
// VM770:3 6
// VM770:3 5
// VM770:3 4
// VM770:3 3
// VM770:3 2
// VM770:3 1
// VM770:3 0

let time = 180
// undefined
setInterval(function(){
    if (time>=0) {
    
    const min = String(Math.floor(time/60)).padStart(2,"0");
    const sec = String(time%60).padStart(2,"0");

        console.log(min + ":" + sec)
        time = time - 1
    }
}, 1000)
// 03:00
// 02:59
// 02:58