let randomNumber;
let ans;
let ansNum;
let praise;
let praisePick;
const praiseArray=['Well Done', 'Great Work', 'Amazing', 'Brilliant'];
const tryAgainArray=['Try Again', 'Have Another Go'];
const timeOut=1000;


document.querySelector("#ans").addEventListener("keydown", function (e) {
    if (e.key === 'Enter')  {
        ansSubmit();
    }
});


const generateQuestion = () => {
    randomNumber = Math.floor(Math.random()*12)+1
    document.querySelector("#question").innerHTML='2 × ' + randomNumber + ' =  ';
    return randomNumber;

};


const ansSubmit = () => {
    ans=document.querySelector("#ans").value;
    ansNum = Number(ans);
    if (ansNum===2*randomNumber) {
        praisePick=Math.floor(Math.random()*praiseArray.length);
        praise=praiseArray[praisePick];
        document.querySelector("#feedback").innerHTML=praise;
        document.querySelector("#feedback").style.color="blue";
        document.querySelector("#ans").disabled= true;
        setTimeout(enableInput, timeOut);
        setTimeout(clearFeedback, timeOut);
        setTimeout(clearAns, timeOut);
        setTimeout(generateQuestion, timeOut);
    } else {
        document.querySelector("#feedback").innerHTML="Have Another Go";
        document.querySelector("#feedback").style.color="blue";
        document.querySelector("#ans").disabled = true;
        setTimeout(enableInput, timeOut);
        setTimeout(clearFeedback, timeOut);
        setTimeout(clearAns, timeOut);
    };
};

const clearFeedback = () => {
    document.querySelector("#feedback").style.color="rgb(68, 184, 68)";
    document.querySelector("#feedback").innerHTML="feedback";
};

const clearAns = () => {
    document.querySelector("#ans").value="";
    document.querySelector("#ans").focus();
}; 

const enableInput = () => {
    document.querySelector("#ans").disabled = false;
}

generateQuestion();

