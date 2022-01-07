const classmates = ['철수', '영희', '훈이']
// undefined

classmates[2]
// '훈이'
classmates[3]
// undefined
classmates.includes('훈이')
// true
classmates.includes('맹구')
// false
classmates.push('맹구')
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.includes('맹구')
// true
classmates.pop()
// '맹구'
classmates
// (3) ['철수', '영희', '훈이']
classmates.length
// 3

let developer = ['도전정신', '문제해결능력', '끈기', '검색능력', '개발자의 사고']
// undefined
let dream = ['커리어점프', '성공', '할수있다']
// undefined
developer.concat(dream)
// (8) ['도전정신', '문제해결능력', '끈기', '검색능력', '개발자의 사고', '커리어점프', '성공', '할수있다']

