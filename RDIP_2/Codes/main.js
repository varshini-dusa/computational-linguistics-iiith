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

var selectedLanguage;
var selectedCorpus;
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

function corpSelect() {
  var k = document.getElementById("corp").value;
  var esel =
    "<select><option selected>Noun</option><option>Pronoun</option><option>Conjunction</option><option>Interjection</option><option>Verb</option><option>Determiner</option><option>Adjective</option><option>Adverb</option><option>Preposition</option></select>";
  var hsel =
    "<select><option selected>Noun</option><option>Pronoun</option><option>Conjunction</option><option>Interjection</option><option>Verb</option><option>Determiner</option><option>Adjective</option><option>Adverb</option><option>Postposition</option></select>";
  var sel;
  if (selectedLanguage == "English") {
    selectedCorpus = engCorpus[k];
    sel = esel;
  } else {
    selectedCorpus = hindiCorpus[k];
    sel = hsel;
  }
  var arr = selectedCorpus.split(" ");
  var opt = "<table><tr><td>LEXICON</td><td>POS</td><td></td><td></td>";
  for (var i = 0; i < arr.length; i++) {
    opt +=
      "<tr><td>" + arr[i] + "</td><td>" + sel + "</td><td></td><td></td></tr>";
  }
  document.getElementById("postable").innerHTML = opt + "</table>";
  document.getElementById("tablediv").style.display = "block";
}
