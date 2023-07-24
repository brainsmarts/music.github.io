
//7 buttons in the middle with nothing inside
//12 buttons to press
const gameDisplay = document.getElementById("GameInputDisplayButtons");
const gameInput = document.getElementById("GameInputButtons");

function initialize(){
    console.log("Initialization Process Has Been Called");
    for(var i = 0; i < 7; i++){
        var indexAttribute = document.createAttribute("index");
        var selectedAttribute = document.createAttribute("selected");
        var newButton = document.createElement("button");
        gameDisplay.appendChild(newButton);
        newButton.createAttribute
        indexAttribute.value = i;
        newButton.setAttributeNode(indexAttribute);
        newButton.innerHTML = "";
        newButton.className = "display";
        selectedAttribute.value = "false";
        newButton.setAttributeNode(selectedAttribute);
        
    }

    for(var i = 0; i < 12; i++){
        var newButton = document.createElement("button");
        newButton.className = "input";
        newButton.innerHTML = noteList[i];
        newButton.addEventListener("click",onNoteInput);
        gameInput.appendChild(newButton);
    }
}

function randomizeScale(){
    var random = Math.floor(Math.random()*12); //returns 0 - 11
    var text = document.getElementById("testingText");
    text.innerHTML = createNoteSet(random,major);
    
}

function onNoteInput(){
    //console.log(this.innerHTML);
}
