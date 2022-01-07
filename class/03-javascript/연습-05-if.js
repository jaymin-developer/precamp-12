if (1+1 === 2) {
    console.log("정답입니다!")
} else {
    console.log("틀렸습니다")
}
// VM38:2 정답입니다!
// undefined

if (true) {
    console.log("정답입니다!")
} else {
    console.log("틀렸습니다")
}
// VM89:2 정답입니다!
// undefined

let password1 = "123"
// undefined

let password2 = "345"
// undefined

password1 === password2
// false

if (password1 === password2) {
    alert("비밀번호가 확인되었습니다")
} else {
    alert("비밀번호가 틀립니다")
}
// undefined

const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
// undefined

if (profile.age >= 20) {
    console.log("성인입니다")
} else if (profile.age >= 8) {
    console.log("학생입니다")
} else if (profile.age >= 1) {
    console.log("어린이입니다")
} else {
    console.log("유전자입니다")
}
// VM1393:4 학생입니다