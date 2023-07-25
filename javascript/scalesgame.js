
//7 buttons in the middle with nothing inside
//12 buttons to press
const gameDisplay = document.getElementById("GameInputDisplayButtons");
const gameInput = document.getElementById("GameInputButtons");
var selectedButton;

function initialize(){
    console.log("Initialization Process Has Been Called");
    for(var i = 0; i < 7; i++){
        //var indexAttribute = document.createAttribute("index");
        var selectedAttribute = document.createAttribute("selected");
        var newButton = document.createElement("button");
        gameDisplay.appendChild(newButton);
        //newButton.createAttribute
        //indexAttribute.value = i;
        newButton.id = "display"+i;
        //newButton.setAttributeNode(indexAttribute);
        newButton.innerHTML = "";
        newButton.className = "display";
        selectedAttribute.value = "false";
        newButton.setAttributeNode(selectedAttribute);   
    }

    document.getElementById("display0").setAttribute("selected","true"); 

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


//when an input is clicked, it will put the appropriate value and then select the 
//next element to be the selected one
function onNoteInput(){
    //console.log(this.innerHTML);
}
