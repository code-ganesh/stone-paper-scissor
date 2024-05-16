let choices=document.querySelectorAll(".choice");
let userdisplay=document.querySelector("#user-choice");
let compdisplay=document.querySelector("#comp-choice");
let display=document.querySelector("#out");
let userscore=0;
let compscore=0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playnow(userchoice);
    })
})

const gencomp=()=>{
    let arr=["stone","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return arr[idx];
}

const drawgame=()=>{
    display.innerText="Its a Draw";
    display.style.backgroundColor="black";
}

const displaywinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userdisplay.innerText=userscore;
        display.innerText="You Win!"+` your ${userchoice} defeated ${compchoice}`;
    display.style.backgroundColor="green";
    }
    else{
        compscore++;
        compdisplay.innerText=compscore;
        display.innerText="You Lose!"+` ${compchoice} defeated your ${userchoice}`;
    display.style.backgroundColor="red";
    }

}
const playnow=(userchoice)=>{
    let compchoice=gencomp();
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=="stone"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        displaywinner(userwin,userchoice,compchoice)
    }



}

