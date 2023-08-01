
//7 buttons in the middle with nothing inside
//12 buttons to press
const gameDisplay = document.getElementById("GameInputDisplayButtons");
const gameInput = document.getElementById("GameInputButtons");
var gameOver = false;
var selectedButton;
var randomizedScale;
const numOfDisplay = 7;

function initialize(){
    console.log("Initialization Process Has Been Called");
    for(var i = 0; i < numOfDisplay; i++){
        var newButton = document.createElement("button");

        var indexAttribute = document.createAttribute("index");
        indexAttribute.value = i;

        var selectedAttribute = document.createAttribute("selected");
        selectedAttribute.value = "false";
        if (i == 0){
            selectedAttribute.value = "true";
            selectedButton = newButton;
        }

        newButton.innerHTML = "";
        newButton.className = "display";
 
        newButton.setAttributeNode(indexAttribute);
        newButton.setAttributeNode(selectedAttribute);   

        newButton.id = "display-"+i;     
        newButton.addEventListener("click",selectDisplayInput);
        gameDisplay.appendChild(newButton);

     
    }

    //selectedButton = document.ge

    for(var i = 0; i < 12; i++){
        var newButton = document.createElement("button");
        newButton.className = "input";
        newButton.innerHTML = noteList[i];
        newButton.addEventListener("click",onNoteInput);
        gameInput.appendChild(newButton);
    }

    randomizeScale();
    document.getElementById("finish").addEventListener("click", finished);
    document.getElementById("restart").addEventListener("click", restart);
}

function randomizeScale(){
    var randomNote = Math.floor(Math.random()*12); //returns 0 - 11
    var randomPattern = Math.floor(Math.random()*2);
    randomizedScale = createNoteSet(randomNote,scalePatternRandomize[0][randomPattern]);
    document.getElementById("testingText").innerHTML = scalePatternRandomize[1][randomPattern] + " " + randomizedScale[0] + " Scale";
}

function selectDisplayInput(){
    selectedButton.setAttribute("selected","false");
    selectedButton = this;
    selectedButton.setAttribute("selected","true");
}

function selectDisplayInputID(newSelecterButton){
    selectedButton.setAttribute("selected","false");
    selectedButton = selectedButton = document.getElementById(newSelecterButton);
    selectedButton.setAttribute("selected","true");
}

//when an input is clicked, it will put the appropriate value and then select the 
//next element to be the selected one
function onNoteInput(){
    if (gameOver)
        return;

    var index = selectedButton.getAttribute("index");
    for(var i = 0; i < numOfDisplay; i++){
        var string = i+"";
        if (string == index){
            selectedButton.innerHTML = this.innerHTML;
            if (i+1 < numOfDisplay){
            selectedButton.setAttribute("selected","false");
            selectedButton = document.getElementById("display-"+(i+1));
            selectedButton.setAttribute("selected","true");
            }
        }
    }
}

function finished(){
    gameOver = true;
    var win = true;
    var score = numOfDisplay;
    var result = "";
    for (var i = 0; i < numOfDisplay; i++){
        if(document.getElementById("display-"+i).innerHTML.localeCompare(randomizedScale[i]) == 0){
            result += document.getElementById("display-"+i).innerHTML + " " + randomizedScale[i] + " pass\n";
        }else{
            result += document.getElementById("display-"+i).innerHTML + " " + randomizedScale[i] + " fail\n";
            win = false;
            score -= 1;
        }
    }
    result += randomizedScale;
    result += " " + score;
    document.getElementById("Results").innerHTML = result;
}

function restart(){
    for(var i = 0; i < numOfDisplay; i++){
        document.getElementById("display-"+i).innerHTML = "";
    }
    randomizeScale();
    selectDisplayInputID("display-0");
    gameOver = false;
}