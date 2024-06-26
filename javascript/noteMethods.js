//to find scale based on the scale pattern
//ex majorScale >> W W H W W W where each W = 2 and H = 1
//moving on it would be easier to have a method that loops any amount of time, the starting note, and the scale pattern
//const obj = {"A":0,"A#":1,"B":2,"C":3,"C#":4,"D":5,"D#":6,"E":7,"F":8,"F#":9,"G":10,"G#":11};
//would be good to move to json file but for now have it as a constant here
//abcdefghijklmnopasdfjashdf
const minor = [2, 1, 2, 2, 1, 2, 2];
const major = [2, 2, 1, 2, 2, 2, 1];
const noteFrequency = [
  55.00,
  58.27,
  61.74,
  65.41,
  69.30,
  73.42,
  77.78,
  82.31,
  87.31,
  92.50,
  98.00,
  103.83
];

const noteListWithAlternates = [
  ["A"],
  ["A#","B♭"],
  ["B","C♭"],
  ["C","B#"],
  ["C#","D♭"],
  ["D"],
  ["D#","F♭"],
  ["E","F♭"],
  ["F","E#"],
  ["F#","G♭"],
  ["G"]
  ["G#","A♭"]
];
const noteList = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];

const scalePatternRandomize = [
  [minor, major],
  ["Minor", "Major"],
];


const audioContext = new AudioContext();
const gainNode = audioContext.createGain();
let octave = 2;
let lastPlayed = 5;
gainNode.gain.value = 0.1; // setting it to 10%
gainNode.connect(audioContext.destination);

//import "../noteSets.json";  

function createNoteSet(scalenote, pattern) {
  //int and int array
  var newNoteSet = [];
  var iterator = scalenote;

  for (let i = 0; i < pattern.length; i++) {
    if (iterator > 11) iterator -= 12;
    newNoteSet.push(noteList[iterator]);
    iterator += pattern[i];
  }
  return newNoteSet;
}

//assume there are two octives of notes
/*
first make note of which note was played last, if it was the last three notes 
and the next note being played is the first three notes, then play an octive higher,
else switch back down
if it is already an octive higher then reset back to the first octive 
 */
//D# is the nicest sounding note

function playNote(note) {
  playFrequency(note);
}

function playFrequency(note){
  let index = 0;
  for(let i = 0; i < 12; i++){
    if(note == noteList[i]){
      index = i;
      break;
    }
  }

  console.log("last played " + lastPlayed + " " + "  current note " + index);
  if(lastPlayed >= 9 && index < 4){
    console.log(note + "increase Octave");
    octave += 1;
    console.log(octave + " is octave");
  } else if (lastPlayed < 4 && index >= 9){ 
    octave -= 1;
  }

  let ocs = audioContext.createOscillator();
  ocs.frequency.value = noteFrequency[index] * Math.pow(2,octave);
  console.log(noteFrequency[index] + " * " + octave);
  console.log(ocs.frequency);
  ocs.connect(gainNode);
  ocs.start();
  ocs.stop(audioContext.currentTime + .5);
  lastPlayed = index;
}


  //track.connect(audioContext.destination);
  //audioElement.play();
  //let audio = new Audio("./audiofiles/D-.mp3").play();