// const Snowball = require("snowball/stemmer/lib/Snowball");

var stemmer = new Snowball("English");
// console.log(stemmer);

var corpus = [
  'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.',
  'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.',
  'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its masters knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its masters knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.',
];

var tokenAns = [];
var typesAns = [];
var newTypesAns = [];
var token = [];
var types = [];
var newtypes = [];
var selectedCorp;
var answer1 = [
  "were",
  "had",
  "found",
  "ate",
  "grown",
  "heard",
  "played",
  "are",
  "himself",
  "his",
  "him",
  "me",
  "is",

  "ran",
  "do",
  "would",
];
var answer2 = [
  "was",
  "have",
  "find",
  "eat",
  "grew",
  "hear",
  "play",
  "was",
  "he",
  "he",
  "he",
  "i",
  "was",

  "run",
  "did",
  "was",
];

function removeEmpty(a) {
  return a.filter(function (ele) {
    return (
      ele != "" &&
      ele != "." &&
      ele != '"' &&
      ele != "'" &&
      ele != " " &&
      ele != "," &&
      ele != "?" &&
      ele != "/"
    );
  });
}

function calWords() {
  var j;
  for (j = 0; j < corpus.length; j++) {
    var a = corpus[j].split(" ");
    a = removeEmpty(a);
    var fi = [];
    for (var i = 0; i < a.length; i++) {
      var k = String(a[i]);
      k = k.replace(/\W/g, "");
      fi.push(k.toLowerCase());
    }
    var set = new Set(fi);
    token.push(fi);
    types.push(Array.from(set));
    tokenAns.push(fi.length);
    typesAns.push(set.size);
  }
}
function replaceWord(a) {
  var b = [];
  var g = 0;
  for (var i = 0; i < a.length; i++) {
    g = 0;
    for (var j = 0; j < answer1.length; j++) {
      if (a[i] == answer1[j]) {
        b.push(answer2[j]);
        g = 1;
        break;
      }
    }
    if (g == 0) b.push(a[i]);
  }
  return b;
}
function findRoot(word) {
  stemmer.setCurrent(word);
  stemmer.stem();
  var w = stemmer.getCurrent();
  return w;
}

function newTypes() {
  for (var i = 0; i < 3; i++) {
    var sen = types[i];
    var sentence = [];
    for (var j = 0; j < sen.length; j++) {
      sentence.push(findRoot(sen[j]));
    }
    sentence = replaceWord(sentence);
    var set = new Set(sentence);
    set = Array.from(set);
    newTypesAns.push(set.length);
  }
}

function selectCorp() {
  calWords();
  newTypes();

  // console.log(tokenAns, typesAns, newTypesAns);
  selectedCorp = document.getElementById("corp").value;
  document.getElementById("corpViewer").innerHTML =
    corpus[parseInt(selectedCorp)];
  document.getElementById("inputAns").style.display = "block";
}
function submitValues() {
  var tokens = document.getElementById("tokens").value;
  var types = document.getElementById("types").value;
  var correctToken = false;
  var correctType = false;
  document.getElementById("tokens").style.backgroundColor = "white";
  document.getElementById("types").style.backgroundColor = "white";
  if (parseInt(tokens) == tokenAns[selectedCorp]) {
    correctToken = true;
    document.getElementById("tokens").style.backgroundColor = "green";
  } else {
    document.getElementById("tokens").style.backgroundColor = "red";
  }
  if (parseInt(types) == typesAns[selectedCorp]) {
    correctType = true;
    document.getElementById("types").style.backgroundColor = "green";
  } else {
    document.getElementById("types").style.backgroundColor = "red";
  }
  if (correctType == true && correctToken == true) {
    document.getElementById("outputAns").innerHTML =
      "<p id='right'>Right Answer</p><button onclick='getNewTypes()'>Continue</button>";
  } else {
    document.getElementById("outputAns").innerHTML =
      "<p id='wrong'>Wrong Answer</p>";
  }
}

function getNewTypes() {
  document.getElementById("submitbtn").style.display = "none";
  document.getElementById("outputAns").innerHTML =
    "<p>Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.</p><label>#new types:</label><br/><input type='text' name='newtype' id='newtype' /><br/><button id='finalsb' onclick='checkNewType()'>Submit</button>";
}
function checkNewType() {
  var ans = document.getElementById("newtype").value;
  document.getElementById("newtype").style.backgroundColor = "white";
  if (parseInt(ans) == newTypesAns[selectedCorp]) {
    document.getElementById("newtype").style.backgroundColor = "green";
    document.getElementById("finalOutputAns").innerHTML =
      "<p id='right'>Right Answer</p>";
  } else {
    document.getElementById("newtype").style.backgroundColor = "red";
    document.getElementById("finalOutputAns").innerHTML =
      "<p id='wrong'>Wrong Answer</p>";
  }
}
