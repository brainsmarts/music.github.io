//to find scale based on the scale pattern 
//ex majorScale >> W W H W W W where each W = 2 and H = 1
//moving on it would be easier to have a method that loops any amount of time, the starting note, and the scale pattern
//const obj = {"A":0,"A#":1,"B":2,"C":3,"C#":4,"D":5,"D#":6,"E":7,"F":8,"F#":9,"G":10,"G#":11};
//would be good to move to json file but for now have it as a constant here
//abcdefghijklmnopasdfjashdf
const noteList = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

const obj2 = {0:"A",1:"A#",2:"B",3:"C",4:"C#",5:"D",6:"D#",7:"E",8:"F",9:"F#",10:"G",11:"G#"};
const noteListPositionFinder = {"A":0,"A#":1,"B":2,"C":3,"C#":4,"D":5,"D#":6,"E":7,"F":8,"F#":9,"G":10,"G#":11};//this is stupid
const minor = [2,1,2,2,1,2,2];
const major = [2,2,1,2,2,2,1];

//import "../noteSets.json";

function createNoteSet(scalenote, pattern){ //int and int array
    var newNoteSet = [];    
    var iterator = scalenote;

    for(let i = 0; i < pattern.length; i++){
        if(iterator > 11)
            iterator -= 12;
        newNoteSet.push(noteList[iterator]);
        iterator += pattern[i];
 
    }
    return newNoteSet;
}


//export {notelist,createNoteSet};

/*

function test(){
    var button = this;
    button.textContent = "it worked :3";
    var id = button.getAttribute("id");
   
    button.id = "ehe:3";
    console.log(id);

    console.log("has been accessed");
}*/

