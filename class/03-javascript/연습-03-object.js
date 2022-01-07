let friend = {
    name : "철수",
    age : 13,
    camp : "코드캠프"
}
// undefined
friend
// {name: '철수', age: 13, camp: '코드캠프'}
friend.age
// 13

const classmates = [
    { name: "철수", age: 13, school: "다람쥐초등학교" },
    { name: "영희", age: 8, school: "공룡초등학교" },
    { name: "훈이", age: 11, school: "거북이초등학교" }
]
// undefined
classmates.length
// 3
classmates[2].age
// 11

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
// undefined
fruits[0].number + " " + fruits[0].title
// '1 레드향'
fruits[1].number + " " + fruits[1].title
// '2 샤인머스켓'

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM2497:2 1 레드향
// VM2497:2 2 샤인머스켓
// VM2497:2 3 산청딸기
// VM2497:2 4 한라봉
// VM2497:2 5 사과
// VM2497:2 6 애플망고
// VM2497:2 7 딸기
// VM2497:2 8 천혜향
// VM2497:2 9 과일선물세트
// VM2497:2 10 귤

for (let i=0; i<fruits.length; i++){
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}
// VM2497:2 1 레드향
// VM2497:2 2 샤인머스켓
// VM2497:2 3 산청딸기
// VM2497:2 4 한라봉
// VM2497:2 5 사과
// VM2497:2 6 애플망고
// VM2497:2 7 딸기
// VM2497:2 8 천혜향
// VM2497:2 9 과일선물세트
// VM2497:2 10 귤