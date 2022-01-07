const startWord = () => {
    const word = document.getElementById("word").innerText;
    const lastword = word[word.length - 1]

    const myword = document.getElementById("myword").value;
    const firstword = myword[0]

    if(firstword === lastword){
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    } else {
        document.getElementById("result").innerText = "틀렸습니다!"
        document.getElementById("myword").value = ""
    }
}