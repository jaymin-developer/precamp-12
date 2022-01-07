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
                time = time - 1

            } else {
                document.getElementById("finish").disabled = true;
                document.getElementById("finish").innerText = ("인증만료");
                isStarted = false;
                clearInterval(timer)
            }
        }, 1000)
    } else {
        alert("타이머가 이미 동작중입니다.")
    }

}