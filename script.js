//Defining contants and variables.
let randomNumber;
let ans;
let ansNum;
let praise;
let praisePick;
let count=0;
const praiseArray=['Well Done', 'Great Work', 'Amazing', 'Brilliant'];
const tryAgainArray=['Try Again', 'Have Another Go'];
const timeOut=1000;

//Event listener so users can press the Enter key to submit an answer.
document.querySelector("#ans").addEventListener("keydown", function (e) {
    if (e.key === 'Enter')  {
        ansSubmit();
    }
});

//A function to generate the number being multiplied and the question.
const generateQuestion = () => {
    randomNumber = Math.floor(Math.random()*12)+1
    document.querySelector("#question").innerHTML='2 × ' + randomNumber + ' =  ';
    return randomNumber;
};

/*A function to run when the answer is submitted. It checks the answer is correct, gives appropriate
and either clears the answer field if the answer was correct or asks the same question again if 
incorrect.*/
const ansSubmit = () => {
    ans=document.querySelector("#ans").value;
    ansNum = Number(ans);
    if (ansNum===2*randomNumber) {
        count++;
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

//Function to clear feedback.
const clearFeedback = () => {
    document.querySelector("#feedback").style.color="rgb(68, 184, 68)";
    document.querySelector("#feedback").innerHTML="feedback";
};

//Function to clear the answer field.
const clearAns = () => {
    document.querySelector("#ans").value="";
    document.querySelector("#ans").focus();
}; 

//Function to disable the answer field when feedback is being displayed.
const enableInput = () => {
    document.querySelector("#ans").disabled = false;
}

//Calling the generate question function.
generateQuestion();


