let USERSCORE = parseInt(localStorage.getItem('USERSCORE')) || 0 ;
let PCSCORE = parseInt(localStorage.getItem('PCSCORE')) || 0 ;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".user_score h2").innerText = USERSCORE;
    document.querySelector(".com_score h2").innerText = PCSCORE;
});

const Userpicked = (option) =>{
    
    let options = document.querySelector('.options');
    options.style.display = "none";
    let scorearea = document.querySelector('.score-area');
    scorearea.style.display = "flex";

    if(option == 'scissors'){
        document.getElementById("UserPick").src = "images/images/scissor.png";
        var color = document.getElementById("choice1");
        color.style.border = "12px solid rgb(191, 63, 255)"
    }
    else if(option == 'rock'){
        document.getElementById("UserPick").src = "images/rock.png";
        var color = document.getElementById("choice1");
        color.style.border = "12px solid rgb(0, 136, 255)"
    }
    else if(option == 'paper'){
        document.getElementById("UserPick").src = "images/images/paper.png";
        var color = document.getElementById("choice1");
        color.style.border = "12px solid rgb(255, 164, 36)"
    }
    
    let pcpick = Pcpicked();

    ref(option, pcpick);
}

const Pcpicked = () =>{
    let op = ['rock','paper','scissors'];
    let pcpick = op[Math.floor(Math.random()*op.length)];
    
    if(pcpick == 'scissors'){
        document.getElementById("OptnPick").src = "images/images/scissor.png";
        var color = document.getElementById("choice2");
        color.style.border = "12px solid rgb(191, 63, 255)"
    }
    else if(pcpick == 'rock'){
        document.getElementById("OptnPick").src = "images/rock.png";
        var color = document.getElementById("choice2");
        color.style.border = "12px solid rgb(0, 136, 255)"
    }
    else if(pcpick == 'paper'){
        document.getElementById("OptnPick").src = "images/images/paper.png";
        var color = document.getElementById("choice2");
        color.style.border = "12px solid rgb(255, 164, 36)"
    }
    
    return pcpick;
}

const ref = (useropt, pcoption) =>{
    if(useropt == "paper" && pcoption == "scissors"){
        outCome("YOU LOST");
        setScore(USERSCORE,PCSCORE + 1);
        var color2 = document.getElementById("choice1");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        var color = document.getElementById("choice2");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
    }
    if(useropt == "paper" && pcoption == "rock"){
        outCome("YOU WIN");
        setScore(USERSCORE + 1,PCSCORE);
        var color = document.getElementById("choice1");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
        var color2 = document.getElementById("choice2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        showNextRoundButton();
    }
    if(useropt == "paper" && pcoption == "paper"){
        outCome("TIE UP");
        var color = document.getElementById("choice1");
        color.style.boxShadow = "1px 1px 50px 1px black";
        var color2 = document.getElementById("choice2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
    }
    if(useropt == "rock" && pcoption == "scissors"){
        outCome("YOU WIN");
        setScore(USERSCORE + 1,PCSCORE);
        var color = document.getElementById("choice1");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
        var color2 = document.getElementById("choice2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        showNextRoundButton();
    }
    if(useropt == "rock" && pcoption == "paper"){
        outCome("YOU LOST");
        setScore(USERSCORE, PCSCORE + 1);
        var color2 = document.getElementById("choice1");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        var color = document.getElementById("choice2");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
    }
    if(useropt == "rock" && pcoption == "rock"){
        outCome("TIE UP");
        var color = document.getElementById("choice1");
        color.style.boxShadow = "1px 1px 50px 1px black";
        var color2 = document.getElementById("choice2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
    }
    if(useropt == "scissors" && pcoption == "paper"){
        outCome("YOU WIN");
        setScore(USERSCORE + 1, PCSCORE);
        var color = document.getElementById("choice1");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"
        var color2 = document.getElementById("choice2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        showNextRoundButton();
    }
    if(useropt == "scissors" && pcoption == "rock"){
        outCome("YOU LOST");
        setScore(USERSCORE,PCSCORE + 1);
        var color2 = document.getElementById("choice1");
        color2.style.boxShadow = "1px 1px 50px 1px black";
        var color = document.getElementById("choice2");
        color.style.boxShadow = "0 0 0 12px rgb(0, 135, 29),0 0 0 22px rgba(0, 147, 32, 0.605),0 0 0 30px rgba(0, 147, 32, 0.285)"   
    }
    if(useropt == "scissors" && pcoption == "scissors"){
        outCome("TIE UP");
        var color = document.getElementById("choice1");
        color.style.boxShadow = "1px 1px 50px 1px black";
        var color2 = document.getElementById("choice2");
        color2.style.boxShadow = "1px 1px 50px 1px black";
    }
}
const outCome = (result) =>{
    document.querySelector(".outcome h1").innerText = result;
}
const restart = () =>{
    let options = document.querySelector('.options');
    options.style.display = "flex";
    let scorearea = document.querySelector('.score-area');
    scorearea.style.display = "none";
    var color = document.getElementById("choice1");
    color.style.boxShadow = "none";
    var color2 = document.getElementById("choice2");
    color2.style.boxShadow = "none";

    const nextClickBtn = document.getElementById('nextClickBtn');
    nextClickBtn.style.display = 'none';
}
const setScore = (uscore, pscore) =>{
    USERSCORE = uscore;
    PCSCORE = pscore;
    document.querySelector(".user_score h2").innerText = uscore;
    document.querySelector(".com_score h2").innerText = pscore;

    localStorage.setItem('USERSCORE', uscore);
    localStorage.setItem('PCSCORE', pscore);
}
const showNextRoundButton = () => {
    const nextClickBtn = document.getElementById('nextClickBtn');
    nextClickBtn.style.display = 'block';
}
const toWinnerPage = () => {
    window.location.href = "hurray.html";
}
function togglePage(){
    document.getElementById("disp").classList.toggle("active");
}


