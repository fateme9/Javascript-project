const message=document.querySelector(".message");
const guess=document.querySelector(".hidden");
const button=document.querySelector("button");
const myArray=["hi","ted","today","fateme","always","baby"];
let inplay=false;
let scramble="";
let scrambled="";
let score=0;
button.addEventListener("click",function(){
    console.log("clicked");
    if(!inplay)
    {
        inplay=true;
        button.innerHTML="Guess";
        guess.classList.toggle("hidden");
        guess.value="";
        scramble=createWord();
        scrambled=randomArray(scramble.split("")).join("");
        message.innerHTML=scrambled;
    }else{
        let tempGuess = guess.value;
        score++;
        if(tempGuess === scramble){
            inplay=false;
            message.innerHTML= " correct " + scramble + " it look "+ score + " gusses ";
            button.innerHTML="Start";
            guess.classList.toggle("hidden");
            }
        else{

        }   message.innerHTML=" Wrong " + scrambled;
    }
    
});
function createWord()
{
    let randomIndex=Math.floor(Math.random()*myArray.length);
    let temWord=myArray[randomIndex];

    return temWord;
}
function randomArray(arr)
{
    for (let i=arr.length-1;i>0;i--) {
       let temp=arr[i];
       let j=Math.floor(Math.random()*(i+1));
       arr[i]=arr[j];
       arr[j]=temp;
        
    }
    return arr;
}