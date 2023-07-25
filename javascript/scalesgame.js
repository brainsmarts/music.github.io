
//7 buttons in the middle with nothing inside
//12 buttons to press
const gameDisplay = document.getElementById("GameInputDisplayButtons");
const gameInput = document.getElementById("GameInputButtons");
var selectedButton;
var scale;

function initialize(){
    console.log("Initialization Process Has Been Called");
    for(var i = 0; i < 7; i++){
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

    scale = randomizeScale();
    document.getElementById("testingText").innerHTML = scale;
}

function randomizeScale(){
    var random = Math.floor(Math.random()*12); //returns 0 - 11
    var text = document.getElementById("testingText");
    return createNoteSet(random,major);
    
}

function selectDisplayInput(){
    selectedButton.setAttribute("selected","false");
    selectedButton = this;
    selectedButton.setAttribute("selected","true");
}

//when an input is clicked, it will put the appropriate value and then select the 
//next element to be the selected one
function onNoteInput(){
    //console.log(this.innerHTML);

    var index = selectedButton.getAttribute("index");
    console.log(this.innerHTML + " " + index);
    for(var i = 0; i < 7; i++){
        var string = i+"";
        if (string == index){
            selectedButton.innerHTML = this.innerHTML;
            if (i+1 < 7){
            selectedButton.setAttribute("selected","false");
            selectedButton = document.getElementById("display-"+(i+1));
            selectedButton.setAttribute("selected","true");
            }
        }
    }
}
