function changeFocus1 () {

    const phone1 = document.getElementById("phone1").value;
    if (phone1.length === 3){
        document.getElementById("phone2").focus()
    }

}

function changeFocus2 () {

    const phone2 = document.getElementById("phone2").value;
    if (phone2.length === 4){
        document.getElementById("phone3").focus()
    }

}

let isStarted = false;

const pressedBtn = () => {

    if (isStarted === false) {

        isStarted = true;
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("auth").innerText = token;

        let time = 10;
        let timer = null;

        timer = setInterval(function(){
            if (time>=0) {
            
            const min = String(Math.floor(time/60)).padStart(2,"0");
            const sec = String(time%60).padStart(2,"0");

                document.getElementById("timer").innerText = (min + ":" + sec);
                document.getElementById("finish").style = "color : white; background-color : blue"
                time = time - 1

            } else {
                document.getElementById("finish").disabled = true;
                isStarted = false;
                clearInterval(timer)
            }
        }, 1000)
    } else {
        alert("타이머가 이미 동작중입니다.")
    }

}

function msg() {
    if (isStarted === ture) {
        alert("인증이 완료되었습니다.")
        document.getElementById("")
    }
}

function signmsg() {
    if (document.getElementById("email").innerText === "" || 
    document.getElementById("name").innerTex === "" ||
    document.getElementById("pw1").innerText === "" ||
    document.getElementById("pw2").innerText === ""||
    document.getElementById("select").value === "지역을 선택하세요." ||
    document.getElementById("gender").value === ""
    ) {
        alert("제대로 입력했는지 확인해주세요.")
    } else {
        alert("코드캠프 가입을 축하합니다.")
    }
}