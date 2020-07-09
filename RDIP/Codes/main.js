var correctAnsEng = [
  [
    "John ate an apple before afternoon",
    "before afternoon John ate an apple",
    "John before afternoon ate an apple",
  ],
  [
    "some students like to study in the night",
    "at night some students like to study",
  ],
  ["at night some students like to study", "Mary and John went to church"],
  [
    "John went to church after eating",
    "after eating John went to church",
    "John after eating went to church",
  ],
  ["did he go to market", "he did go to market"],
  [
    "the woman who called my sister sells cosmetics",
    "the woman who sells cosmetics called my sister",
    "my sister who sells cosmetics called the woman",
    "my sister who called the woman sells cosmetics",
  ],
  [
    "John goes to the library and studies",
    "John studies and goes to the library",
  ],
  ["John ate an apple so did she", "she ate an apple so did John"],
  [
    "the teacher returned the book after she noticed the error",
    "the teacher noticed the error after she returned the book",
    "after the teacher returned the book she noticed the error",
    "after the teacher noticed the error she returned the book",
    "she returned the book after the teacher noticed the error",
    "she noticed the error after the teacher returned the book",
    "after she returned the book the teacher noticed the error",
    "after she noticed the error the teacher returned the book",
  ],
  [
    "I told her that I bought a book yesterday",
    "I told her yesterday that I bought a book",
    "yesterday I told her that I bought a book",
    "I bought a book that I told her yesterday",
    "I bought a book yesterday that I told her",
    "yesterday I bought a book that I told her",
  ],
];
var correctAnsHin = [
  [
    "राम और श्याम बाजार गयें",
    "राम और श्याम गयें बाजार",
    "बाजार गयें राम और श्याम",
    "गयें बाजार राम और श्याम",
  ],
  [
    "राम सोया और श्याम भी",
    "श्याम सोया और राम भी",
    "सोया श्याम और राम भी",
    "सोया राम और श्याम भी",
  ],
  [
    "मैंने उसे बताया कि राम सो रहा है",
    "मैंने उसे बताया कि सो रहा है राम",
    "उसे मैंने बताया कि राम सो रहा है",
    "उसे मैंने बताया कि सो रहा है राम",
    "मैंने बताया उसे कि राम सो रहा है",
    "मैंने बताया उसे कि सो रहा है राम",
    "उसे बताया मैंने कि राम सो रहा है",
    "उसे बताया मैंने कि सो रहा है राम",
    "बताया मैंने उसे कि राम सो रहा है",
    "बताया मैंने उसे कि सो रहा है राम",
    "बताया उसे मैंने कि राम सो रहा है",
    "बताया उसे मैंने कि सो रहा है राम",
  ],
  [
    "राम खाकर सोया",
    "खाकर राम सोया",
    "राम सोया खाकर",
    "खाकर सोया राम",
    "सोया राम खाकर",
    "सोया खाकर राम",
  ],
  [
    "बिल्लियों को मारकर कुत्ता सो गया",
    "मारकर बिल्लियों को कुत्ता सो गया",
    "बिल्लियों को मारकर सो गया कुत्ता",
    "मारकर बिल्लियों को सो गया कुत्ता",
    "कुत्ता सो गया बिल्लियों को मारकर",
    "कुत्ता सो गया मारकर बिल्लियों को",
    "सो गया कुत्ता बिल्लियों को मारकर",
    "सो गया कुत्ता मारकर बिल्लियों को",
  ],
  [
    "एक लाल किताब वहाँ है",
    "एक लाल किताब है वहाँ",
    "वहाँ है एक लाल किताब",
    "है वहाँ एक लाल किताब",
  ],
  [
    "एक बड़ी सी किताब वहाँ है",
    "एक बड़ी सी किताब है वहाँ",
    "बड़ी सी एक किताब वहाँ है",
    "बड़ी सी एक किताब है वहाँ",
    "वहाँ है एक बड़ी सी किताब",
    "वहाँ है बड़ी सी एक किताब",
    "है वहाँ एक बड़ी सी किताब",
    "है वहाँ बड़ी सी एक किताब",
  ],
];

var sentence = "";
var arrayWords;

function getrandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomizeArray(arr) {
  var ctr = arr.length,
    temp,
    index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

function getButtonValues(arr) {
  var a = getrandomNumber(0, arr.length);
  a = randomizeArray(arr[a][0].split(" "));
  var b = document.getElementById("words").innerHTML;
  document.getElementById("words").innerHTML = "";
  arrayWords = a;
  displayButtons(a);
}

function displayButtons(a) {
  a.forEach((element) => {
    document.getElementById("words").innerHTML +=
      "<button onclick='formSentence(this)' class='wordBtn' value='" +
      element +
      "'>" +
      element +
      "</button>";
  });
}

function selectLan() {
  var language = document.getElementById("language").value;
  if (language == "english") {
    document.getElementById("intro").style.display = "block";
    getButtonValues(correctAnsEng);
  } else if (language == "hindi") {
    document.getElementById("intro").style.display = "block";
    getButtonValues(correctAnsHin);
  } else {
    alert("incorrect input");
  }
}

function formSentence(ele) {
  document.getElementById("sentence").style.display = "block";
  document.getElementById("p2").innerHTML += "&nbsp;" + ele.value;
  sentence.concat(String(ele.value) + " ");
  ele.style.display = "none";
}

function resetSentence() {
  document.getElementById("p2").innerHTML = "";
  sentence = "";
  document.getElementById("sentence").style.display = "none";
  document.getElementById("sentence").style.display = "none";
  var a = document.getElementsByClassName("wordBtn");
  for (var i = 0; i < a.length; i++) {
    a[i].style.display = "inline";
  }
}
