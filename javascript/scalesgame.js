// 7 buttons in the middle with nothing inside
// 12 buttons to press
const gameDisplay = document.getElementById("input_display_container");
const gameInput = document.getElementById("input_button_container");
const gameResult = document.getElementById("result_container");
var gameOver = false;
var selectedButton;
var randomizedScale;
const numOfDisplay = 7;

function initialize() {
  console.log("Initialization Process Has Been Called");
  createDisplayButtons();
  createResultContent();
  createInputButtons();

  randomizeScale();
  document
    .getElementById("finished_button")
    .addEventListener("click", finished);
  document.getElementById("restart_button").addEventListener("click", restart);
}

function createInputButtons() {
  for (var i = 0; i < 12; i++) {
    let newInputButton = document.createElement("button");
    newInputButton.className = "input_button";
    newInputButton.id = "input_button-" + i;
    newInputButton.innerHTML = noteList[i];
    newInputButton.addEventListener("click", onNoteInput);
    gameInput.appendChild(newInputButton);
  }
}

function createResultContent() {
  for (var i = 0; i < numOfDisplay; i++) {
    let displayContainer = document.createElement("div");
    displayContainer.className = "result_item_container";
    displayContainer.id = "result_item_container-" + i;
    let resultPassAttribute = document.createAttribute("pass");
    resultPassAttribute.value = "true";
    displayContainer.setAttributeNode(resultPassAttribute);

    let newResultDisplay = document.createElement("p");
    newResultDisplay.className = "result_item";
    newResultDisplay.id = "result_item-" + i;

    newResultDisplay.innerHTML = "hi" + i;
    displayContainer.appendChild(newResultDisplay);
    gameResult.appendChild(displayContainer);
  }
}

function createDisplayButtons() {
  for (var i = 0; i < numOfDisplay; i++) {
    let newDisplayButton = document.createElement("button");

    let indexAttribute = document.createAttribute("index");
    indexAttribute.value = i;

    let selectedAttribute = document.createAttribute("selected");
    selectedAttribute.value = "false";
    if (i == 0) {
      selectedAttribute.value = "true";
      selectedButton = newDisplayButton;
    }

    newDisplayButton.innerHTML = "";
    newDisplayButton.className = "display_button";

    newDisplayButton.setAttributeNode(indexAttribute);
    newDisplayButton.setAttributeNode(selectedAttribute);

    newDisplayButton.id = "display_button-" + i;
    newDisplayButton.addEventListener("click", selectDisplayInput);
    gameDisplay.appendChild(newDisplayButton);
  }
}

function randomizeScale() {
  var randomNote = Math.floor(Math.random() * 12); // returns 0 - 11
  var randomPattern = Math.floor(Math.random() * 2);
  randomizedScale = createNoteSet(
    randomNote,
    scalePatternRandomize[0][randomPattern]
  );
  document.getElementById("scale_text_content").innerHTML =
    scalePatternRandomize[1][randomPattern] +
    " " +
    randomizedScale[0] +
    " Scale";
}

function selectDisplayInput() {
  selectedButton.setAttribute("selected", "false");
  selectedButton = this;
  selectedButton.setAttribute("selected", "true");
}

function selectDisplayInputID(newSelecterButton) {
  selectedButton.setAttribute("selected", "false");
  selectedButton = selectedButton = document.getElementById(newSelecterButton);
  selectedButton.setAttribute("selected", "true");
}

// when an input is clicked, it will put the appropriate value and then select the
// next element to be the selected one
function onNoteInput() {
  if (gameOver) return;
  playNote(this.innerHTML);
  var index = selectedButton.getAttribute("index");

  selectedButton.innerHTML = this.innerHTML;

  if (parseInt(index) + 1 < numOfDisplay) {
    selectedButton.setAttribute("selected", "false");
    selectedButton = document.getElementById(
      "display_button-" + (parseInt(index) + 1)
    );
    selectedButton.setAttribute("selected", "true");
  }
}

function finished() {
  gameOver = true;
  var win = true;
  var score = numOfDisplay;

  for (var i = 0; i < numOfDisplay; i++) {
    if (
      document
        .getElementById("display_button-" + i)
        .innerHTML.localeCompare(randomizedScale[i]) == 0
    ) {
      document.getElementById("result_item-" + i).innerHTML =
        randomizedScale[i];
      document
        .getElementById("result_item_container-" + i)
        .setAttribute("pass", "true");
    } else {
      document.getElementById("result_item-" + i).innerHTML =
        randomizedScale[i];
      document
        .getElementById("result_item_container-" + i)
        .setAttribute("pass", "false");
      win = false;
      score -= 1;
    }
  }
  document.getElementById("result_container").setAttribute("hidden", "false");
  document.getElementById("scale_text_content").setAttribute("hidden", "true");
  document
    .getElementById("input_button_container")
    .setAttribute("hidden", "true");
}

function restart() {
  for (var i = 0; i < numOfDisplay; i++) {
    document.getElementById("display_button-" + i).innerHTML = "";
  }
  randomizeScale();
  selectDisplayInputID("display_button-0");
  document.getElementById("result_container").setAttribute("hidden", "true");
  document.getElementById("scale_text_content").setAttribute("hidden", "false");
  document
    .getElementById("input_button_container")
    .setAttribute("hidden", "false");
  gameOver = false;
}
