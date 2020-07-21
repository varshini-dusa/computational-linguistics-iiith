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

function lanSelect() {
  selectedLanguage = document.getElementById("lan").value;
  var option;
  if (selectedLanguage == "English") {
    for (var i = 0; i < engCorpus.length; i++) {
      option += "<option >" + engCorpus[i] + "</option>";
    }
    document.getElementById("CorpSelector").innerHTML =
      "<select name='corp' id='corp' class='form-control align-self-center mx-auto' onchange='corpSelect()'><option selected>---Select a sentence---</option>" +
      option +
      "</select>";

    document.getElementById("CorpSelector").innerHTML += "</select>";
  } else if (selectedLanguage == "Hindi") {
    for (var i = 0; i < hindiCorpus.length; i++) {
      option += "<option value='" + i + "'>" + hindiCorpus[i] + "</option>";
    }
    document.getElementById("CorpSelector").innerHTML =
      "<select name='corp' id='corp' class='form-control align-self-center mx-auto' onchange='corpSelect()'><option selected>---Select a sentence---</option>" +
      option +
      "</select>";
  } else {
    alert("Choose language");
  }
}

function corpSelect() {}
