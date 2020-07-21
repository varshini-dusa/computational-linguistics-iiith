var engCorpus = [
  "The child liked the chocolate",
  "She was stopped by the bravest knight",
  "Mary baked a cake for his birthday",
  "She decorated the cake carefully",
  "Mary wore a dress with polka dots",
];

var hindiCorpus = [
  "राम ने सीता के लिए फल तोड़ा।",
  "छोटे बच्चे पाठशाला जल्दी आयेंगे।",
  "मेहनत का फल मीठा होता है।",
  "वाह! वह खूबसूरत है।",
  "पेड़ से पत्ते गिर गए।",
];

var partsOfSpeech = [
  "Noun",
  "Pronoun",
  "Conjuction",
  "Interjection",
  "Verb",
  "Determiner",
  "Adjective",
  "Adverb",
  "Preposition",
  "Postposition",
];

var selectedLanguage;
var selectedCorpus;
var selectedCorpusLength;
function lanSelect() {
  selectedLanguage = document.getElementById("lan").value;
  var option;
  if (selectedLanguage == "English") {
    for (var i = 0; i < engCorpus.length; i++) {
      option += "<option value=" + i + ">" + engCorpus[i] + "</option>";
    }
    document.getElementById("CorpSelector").innerHTML =
      "<select name='corp' id='corp' class='form-control align-self-center mx-auto' onchange='corpSelect()'><option selected>---Select a sentence---</option>" +
      option +
      "</select>";

    document.getElementById("CorpSelector").innerHTML += "</select>";
  } else if (selectedLanguage == "Hindi") {
    for (var i = 0; i < hindiCorpus.length; i++) {
      option += "<option value=" + i + ">" + hindiCorpus[i] + "</option>";
    }
    document.getElementById("CorpSelector").innerHTML =
      "<select name='corp' id='corp' class='form-control align-self-center mx-auto' onchange='corpSelect()'><option selected>---Select a sentence---</option>" +
      option +
      "</select>";
  } else {
    alert("Choose language");
  }
}

function fillPosDiv(id1, s) {
  var sel;
  if (s == "English") {
    sel =
      "<select name='pos" +
      id1 +
      "' id='pos" +
      id1 +
      "' class='form-control align-self-center mx-auto'><option value=0 selected>Noun</option><option value=1>Pronoun</option><option value=2>Conjunction</option><option value=3>Interjection</option><option value=4>Verb</option><option value=5>Determiner</option><option value=6>Adjective</option><option value=7>Adverb</option><option value=8>Preposition</option></select>";
  } else {
    sel =
      "<select name='pos" +
      id1 +
      "' id='pos" +
      id1 +
      "' class='form-control align-self-center mx-auto'><option value=0 selected>Noun</option><option value=1>Pronoun</option><option value=2>Conjunction</option><option value=3>Interjection</option><option value=4>Verb</option><option value=5>Determiner</option><option value=6>Adjective</option><option value=7>Adverb</option><option value=8>Postposition</option></select>";
  }
  return sel;
}

function corpSelect() {
  var k = document.getElementById("corp").value;
  if (selectedLanguage == "English") {
    selectedCorpus = engCorpus[k];
  } else {
    selectedCorpus = hindiCorpus[k];
  }
  var arr = selectedCorpus.split(" ");
  var opt = "<table><tr><td>LEXICON</td><td>POS</td><td></td><td></td>";
  selectedCorpusLength = arr.length;
  for (var i = 0; i < arr.length; i++) {
    opt +=
      "<tr id=" +
      i +
      "><td>" +
      arr[i] +
      "</td><td>" +
      fillPosDiv(i, selectedLanguage) +
      "</td><td></td><td></td></tr>";
  }
  document.getElementById("postable").innerHTML = opt + "</table>";
  document.getElementById("tablediv").style.display = "block";
}
function checkPOS() {
  for (var i = 0; i < selectedCorpusLength; i++) {
    var k = "pos" + i;
    k = document.getElementById(k).value;
    if (k == 8 && selectedLanguage == "Hindi") console.log(partsOfSpeech[9]);
    else console.log(partsOfSpeech[k]);
  }
}
