let students = ['철수', '영희', '도우너', '말포이', '도비', '그루트']
// undefined

for (let i=0; i<students.length; i++) {
    console.log(students[i] + "님 안녕하세요.")
}
// VM574:2 철수님 안녕하세요.
// VM574:2 영희님 안녕하세요.
// VM574:2 도우너님 안녕하세요.
// VM574:2 말포이님 안녕하세요.
// VM574:2 도비님 안녕하세요.
// VM574:2 그루트님 안녕하세요.
// undefined

let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]
  
  for(let i = 0; i < persons.length; i++) {
    if(persons[i].age >18) {
        console.log(persons[i].name + "님은 성인입니다.")
    } else {
        console.log(`${persons[i].name} 님은 미성년자입니다.`)
    }
}
// VM2053:5 철수 님은 미성년자입니다.
// VM2053:3 영희님은 성인입니다.
// VM2053:5 도우너 님은 미성년자입니다.
// VM2053:5 말포이 님은 미성년자입니다.
// VM2053:5 도비 님은 미성년자입니다.

document.getElementById("code")