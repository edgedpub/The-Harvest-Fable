function SCFillInTheGaps(objectId, config) {
var self = this;

self.objectId = objectId;
self.element = document.querySelector("#" + objectId);
self.config = config;
self.data = null;
self.wrapperElement = self.element.querySelector(".wrapper");
self.toolbarAreaElement = self.element.querySelector(".toolbar");
self.dragAreaElement = self.element.querySelector(".drag-area");
self.dropAreaElement = self.element.querySelector(".drop-area");
self.resultAreaElement = self.element.querySelector(".result");
self.text = null;

let _localStorageKey = "";
let selectedWordElement;

self.init = function () {
  console.warn("initing fill-in-the-gaps", self.element);
  if (self.text == null) {
    self.text = self.dropAreaElement.innerHTML;
  } else {
    self.dropAreaElement.innerHTML = self.text;
  }
  _localStorageKey = pubcoder.project.id + "-" + self.config.appdata.assessmentID;
  let gameData;

  if (!localStorage || !localStorage.getItem(_localStorageKey) || self.config.appdata.checksum !== JSON.parse(localStorage.getItem(_localStorageKey)).checksum ) {
    // initialize game data
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = JSON.parse(JSON.stringify(self.text));
    const words = tempDiv.querySelectorAll(".SCFillInTheGapsMissing");
    gameData = {
      checksum: self.config.appdata.checksum,
      wordsCount: words.length,
      missingWords: [],
      userWords: [],
      correct: 0,
      score: 0,
      checked: false,
      timestamp: (new Date()).getTime()
    };
    _(words).each(function(el, i) {
      gameData.missingWords.push(el.innerText);
      gameData.userWords.push(null);
    });
    self.data = gameData;
    saveGameData();
  
  } else {
    // restore game data
    self.data = JSON.parse(localStorage.getItem(_localStorageKey));
  }

  setupDOM();
};

self.reset = function() {
  if (localStorage) localStorage.removeItem(_localStorageKey);
  self.init();
  $(self.element).trigger("SCFillInTheGapsReset");
}


const setupDOM = function() {
  $(self.wrapperElement).css("display","block");
  var data = self.data

  // populate dragArea with all words to hard set its height
  const toolbar = $(".toolbar", self.element)[0];
  $(self.dragAreaElement).html("");
  _(data.missingWords).each(function(el, i) {
    const dragAreaWord = generateClickableWord(el,"scfill-" + i);
    self.dragAreaElement.appendChild(dragAreaWord);
  });
  $(self.toolbarAreaElement).css("minHeight", window.getComputedStyle(toolbar).height);
  $(self.dragAreaElement).html("");

  // populate dropArea
  const dropAreaWords = $(".SCFillInTheGapsMissing", self.dropAreaElement).toArray();
  _(dropAreaWords).each(function(el, i) {
    const word = data.userWords[i];
    if (word == null || word.length == 0) {
      // missing answer
      $(el).replaceWith(generateClickableWord(""));
    } else {
      // correct or wrong answer
      $(el).replaceWith(generateClickableWord(word));
    } 
  });

  // populate dragArea with remaining words 
  let draggableItems = _(data.missingWords).map(function(w) {return w;}).sort(function() { return Math.random() - 0.5; });
  _(draggableItems).each(function(word, i) {
    if (data.userWords.indexOf(word) < 0) {
      const dragAreaWord = generateClickableWord(word);
      self.dragAreaElement.appendChild(dragAreaWord);
    }
  });
  
  // removing items
  self.toolbarAreaElement.onclick = function(e) { onRemoveAreaClicked(e); };

  updateGameFromDOM(false);
};


const onWordClicked = function(e) {
  e.preventDefault();
  e.stopPropagation();

  if (selectedWordElement) { // place / replace word on destination
    var selectedWordElementClone = generateClickableWord(selectedWordElement.innerText);
    var clickedWordElementClone = generateClickableWord(e.target.innerText);

    if (e.target.classList.contains("correct")) return;

    // place source on destination
    $(e.target).replaceWith(selectedWordElementClone)

    if (e.target.classList.contains('droppable') && selectedWordElement.parentNode.classList.contains('drag-area')) { 
      // remove source from board
      $(selectedWordElement).remove()
    } else { 
      // replace source with destionation
      $(selectedWordElement).replaceWith(clickedWordElementClone)
    }

    selectedWordElement = null
    updateGameFromDOM();
    
  } else { // select word
    if (e.target.classList.contains('draggable')) {
        selectedWordElement = e.target;
        e.target.classList.add("selected");
    }
  }

  if (selectedWordElement) {
    self.wrapperElement.classList.add("has-selection");
  } else {
    self.wrapperElement.classList.remove("has-selection");
  }
}


const onRemoveAreaClicked = function(e) {
  e.preventDefault();
  e.stopPropagation();
  
  if (selectedWordElement && selectedWordElement.parentNode != self.dragAreaElement) {
    var selectedWordElementClone = generateClickableWord(selectedWordElement.innerText);
    var newBlank = generateClickableWord("");
    self.dragAreaElement.appendChild(selectedWordElementClone)
    $(selectedWordElement).replaceWith(newBlank)
    selectedWordElement = null
    self.wrapperElement.classList.remove("has-selection");
    updateGameFromDOM();

  } else {
    if (selectedWordElement) {
      selectedWordElement.classList.remove("selected");
      selectedWordElement = null
    }
    self.wrapperElement.classList.remove("has-selection");
  }
};


const updateGameFromDOM = function(changed) {
  // console.warn("updateGameFromDOM");
  if (typeof(changed) === "undefined") changed = true;
  const words = self.dropAreaElement.querySelectorAll(".SCFillInTheGapsWord");
  var userWords = _(self.data.userWords).map(function(w) {return w;});
  var correctAnswersCount = 0;

  // update user answers
  _(words).each(function(el, i) {
    userWords[i] = el.innerHTML;
    if (userWords[i] == self.data.missingWords[i]) {
      correctAnswersCount++;
      if (self.config.options.displayCorrectAlongTheWay) { // optionally highlight and "lock" correct answers
        $(el).removeClass("draggable");
        $(el).addClass("correct");
      }
    }
  });

  // update saved game data
  self.data.userWords = userWords;
  self.data.correct = correctAnswersCount;
  self.data.score = correctAnswersCount / self.data.missingWords.length;
  self.data.checked = (correctAnswersCount == self.data.missingWords.length);
  self.data.timestamp = (new Date()).getTime();
  saveGameData();
  if (changed) $(self.element).trigger("SCFillInTheGapsChanged");

  // if all answers are given, show result
  if ( _(userWords).filter(function(word) { return word != null && word.length > 0}).length == self.data.missingWords.length) {
    const totCorrectAnswers = self.element.querySelector(".totCorrectAnswers");
    const totWrongAnswers = self.element.querySelector(".totWrongAnswers");
    totCorrectAnswers.innerText = correctAnswersCount;
    totWrongAnswers.innerText = self.data.missingWords.length - correctAnswersCount;
    $(self.resultAreaElement).css("display", "block");
    $(self.dragAreaElement).css("display", "none");
  } else {
    $(self.dragAreaElement).css("display", "block");
    $(self.resultAreaElement).css("display", "none");
  }

  // if all answers are correct, highlight and "lock" all of them
  if (correctAnswersCount == self.data.missingWords.length) {
    if (changed) $(self.element).trigger("SCFillInTheGapsCompleted");
    _(words).each(function(el, i) {
      $(el).removeClass("draggable");
      $(el).addClass("correct");
    });
  }
};


const generateClickableWord = function(word) {
  if (word == null) word = "";

  const span = document.createElement("span");
  span.innerHTML = word;
  span.classList.add("SCFillInTheGapsWord");
  if (word.length > 0) {
    span.classList.add("draggable");
  } else {
    span.classList.add("droppable");
  }
  span.onclick = function(e) { onWordClicked(e); }
  return span;
};


const saveGameData = function() {
  if (localStorage) localStorage.setItem(_localStorageKey, JSON.stringify(self.data));
};



if ($(self.element).attr("data-autoinit") !== "false") {
  self.init();
} else {
  console.log("fill-in-the-gaps autoinit:", false);
}

}