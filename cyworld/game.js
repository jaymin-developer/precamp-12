// function pressedBtn () {
//     document.getElementById("change1").innerText = Math.ceil(Math.random() * 45)
//     document.getElementById("change2").innerText = Math.ceil(Math.random() * 45)
//     document.getElementById("change3").innerText = Math.ceil(Math.random() * 45)
//     document.getElementById("change4").innerText = Math.ceil(Math.random() * 45)
//     document.getElementById("change5").innerText = Math.ceil(Math.random() * 45)
//     document.getElementById("change6").innerText = Math.ceil(Math.random() * 45)
// }

// 오름차순으로 정렬기능, 중복숫자 없게 하는 기능 필요

function pressedBtn () {
    let lottoNumber = []
    for (let i=0; i<6; i++){
        lottoNumber.push(Math.ceil(Math.random() * 45))
    } lottoNumber.sort();

    document.getElementById("change1").innerText = lottoNumber[0]
    document.getElementById("change2").innerText = lottoNumber[1]
    document.getElementById("change3").innerText = lottoNumber[2]
    document.getElementById("change4").innerText = lottoNumber[3]
    document.getElementById("change5").innerText = lottoNumber[4]
    document.getElementById("change6").innerText = lottoNumber[5]

}

// 오름차순으로 정렬 가능, but 중복숫자 없게 하는 기능 x, ","가 들어감

// function pressedBtn() {
//     let lottoNumber = []
//     for (let i=0; i<6; i++){
//         lottoNumber.push(Math.ceil(Math.random() * 45))
//     } if (lottoNumber[0] === lottoNumber[i+1] || lottoNumber[1] === lottoNumber[i+2] || lottoNumber[2] === lottoNumber[i+3] || lottonNumber[3] === lottoNumber[i+4] || lottoNumber[4] === lottoNumber[i+4] || lottoNumber[5] === lottoNumber[i+6] ){
//         pressedBtn();
//     } else {
//         document.getElementById("change").innerText = lottoNumber.sort()
//     }
// }