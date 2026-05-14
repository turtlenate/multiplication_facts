//Defining contants and variables.
let randomNumber;
let ans;
let ansNum;
let praise;
let praisePick;
let tryAgain
let tryAgainPick
let correctCount=0;
let attemptsCount=0;
let multiplier;
let usedMultipliers=[];
const praiseArray=['Well Done', 'Great Work', 'Amazing', 'Brilliant'];
const tryAgainArray=['Try Again', 'Have Another Go'];
const timeOut=1000;

//Event listener so users can press the Enter key to submit an answer.
document.querySelector("#ans").addEventListener("keydown", function (e) {
    if (e.key === 'Enter')  {
        buttonPressed();
    }
});

//A function to generate a unique multiplier.
const getUniqueMultiplier = () => {
    do {
        multiplier=Math.floor(Math.random()*12+1);
    } while (usedMultipliers.includes(multiplier));
        usedMultipliers.push(multiplier);
        return multiplier;
    };


//A function to generate the number being multiplied and the question.
const generateQuestion = () => {
    getUniqueMultiplier();
    document.querySelector("#question").innerHTML='2 × ' + multiplier + ' =  ';
    return randomNumber;
};


const submitAns = () => {
        ans=document.querySelector("#ans").value;
        ansNum = Number(ans);
        if (ansNum===2*multiplier) {
            correctCount++;
            attemptsCount++;
            console.log("Correct " + correctCount);
            if (correctCount>=12) {
                                document.querySelector("#feedback").innerHTML="You have finished. You got " + correctCount + " out of " + attemptsCount + " correct.";
                                document.querySelector("#feedback").style.color="blue";
                                document.querySelector("#ans").value="";
                                document.querySelector("#ans").disabled=true;
                                document.querySelector("#question").innerHTML="Quiz Over!";
                                document.querySelector("#submitButton").innerHTML="Restart";
                                return;
            } else {
            praisePick=Math.floor(Math.random()*praiseArray.length);
            praise=praiseArray[praisePick];
            document.querySelector("#feedback").innerHTML=praise;
            document.querySelector("#feedback").style.color="blue";
            document.querySelector("#ans").disabled= true;
            setTimeout(enableInput, timeOut);
            setTimeout(clearFeedback, timeOut);
            setTimeout(clearAns, timeOut);
            setTimeout(generateQuestion, timeOut);    
                }
        } else {
            attemptsCount++;
            console.log("Attempts " + attemptsCount);
            tryAgainPick=Math.floor(Math.random()*tryAgainArray.length);
            tryAgain=tryAgainArray[tryAgainPick];
            document.querySelector("#feedback").innerHTML=tryAgain;
            document.querySelector("#feedback").style.color="blue";
            document.querySelector("#ans").disabled = true;
            setTimeout(enableInput, timeOut);
            setTimeout(clearFeedback, timeOut);
            setTimeout(clearAns, timeOut);
        };
    
    };


const buttonPressed = () => {
    if (correctCount>=12) {
        location.reload();
    } else {
        submitAns();
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


