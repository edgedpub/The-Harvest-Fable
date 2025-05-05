function SCTrueFalse(objectId, config) {
  var self = this;
  
  self.objectId = objectId;
  self.element = document.querySelector("#" + objectId);
  self.config = config;
  self.data = null;
  self.inited = false;
  self.boardElement = self.element.querySelector(".board");
  self.wrapperElement = self.element.querySelector(".wrapper");
  
  let _localStorageKey = "";
  
  self.init = function () {
    console.warn("initing true-false", self.element);

    _localStorageKey = pubcoder.project.id + "-" + self.config.appdata.assessmentID;
    let theData;
  
    // load data

    if (!localStorage || !localStorage.getItem(_localStorageKey) || self.config.appdata.checksum !== JSON.parse(localStorage.getItem(_localStorageKey)).checksum ) {
      // initialize data
      var statements = self.config.appdata.statements;
      theData = {
        checksum: self.config.appdata.checksum,
        statementsIndexes: [],
        userChoices: [],
        correct: 0,
        score: 0,
        checked: false,
        timestamp: (new Date()).getTime()
      };
      _(statements).each(function(el, i) {
        theData.statementsIndexes.push(i);
        theData.userChoices.push(null);
      });
      if (self.config.options.randomStatementsToDisplay > 0) {
        theData.statementsIndexes = _(theData.statementsIndexes).shuffle();
        theData.statementsIndexes = _(theData.statementsIndexes).first(self.config.options.randomStatementsToDisplay);
      }
      self.data = theData;
      saveData();
    
    } else {
      // restore data
      self.data = JSON.parse(localStorage.getItem(_localStorageKey));
    }
  
    // bind button events

    if (!self.inited) {
      self.element.querySelector('.next').addEventListener('click', function(e) {
        e.preventDefault();
        $(self.wrapperElement).scrollTo({ left: "0px", top: "+=" + self.wrapperElement.clientHeight + "px"}, 250);
      });
      self.element.querySelector('.prev').addEventListener('click', function(e) {
        e.preventDefault();
        $(self.wrapperElement).scrollTo({ left: "0px", top: "-=" + self.wrapperElement.clientHeight + "px"}, 250);
      });
  
      self.element.querySelector('.check-btn').addEventListener('click', function() { checkGameStatus(true) });
      self.element.querySelector('.reset-btn').addEventListener('click', function() { self.reset() });
    }

    // setup dom

    setupDOM();

    self.inited = true;
  };


  self.reset = function() {
    // console.warn("resetting");
    if (localStorage) localStorage.removeItem(_localStorageKey);
    self.init();
    $(self.wrapperElement).scrollTo({ left: "0px", top: "0px"}, 250);

    $(self).trigger('SCTrueFalseReset'); 
    $(self.element).trigger('SCTrueFalseReset');
  }



  // save data in local storage

  const saveData = function() {
    if (localStorage) localStorage.setItem(_localStorageKey, JSON.stringify(self.data));
  };


  const setupDOM = function() {
    const board = self.boardElement;
    const statementsIndexes = self.data.statementsIndexes;
    
    board.innerHTML = "";

    _(statementsIndexes).each(function(statementI, index) {
      var statement = _(self.config.appdata.statements).find(function (s) { return s.index == statementI; });
      if (statement) {
        const row = document.createElement('div');
        row.classList.add('statement');
        row.setAttribute("data-index", index);
        // row.id = `row--${i}`
        const q = document.createElement('div')
        q.classList.add('statement-text')
        q.innerHTML = statement.text
        const a = document.createElement('div')
        a.classList.add('statement-answer')
        row.appendChild(q)
        row.appendChild(a)

        var radioClickFn = function (e) {
          // if (self.data.checked) {
          //   e.preventDefault();
          //   return false;
          // }
          onUserChoiceChanged(e.target);
        };

        const labelTrue = document.createElement('div');
        labelTrue.classList.add('label');
        labelTrue.innerHTML = '<label><span>' + self.config.options.labelTrue + '</span></label>';
        var trueRadio = document.createElement('input');
        trueRadio.type = 'radio';
        trueRadio.setAttribute("data-index", index);
        trueRadio.name = self.objectId + "_" + index;
        trueRadio.value = "true";
        trueRadio.checked = (self.data.userChoices[index] === true);
        trueRadio.addEventListener('click', radioClickFn);
      
        const labelFalse = document.createElement('div');
        labelFalse.classList.add('label');
        labelFalse.innerHTML = '<label><span>' + self.config.options.labelFalse + '</span></label>';
        var falseRadio = document.createElement('input');
        falseRadio.type = 'radio';
        falseRadio.setAttribute("data-index", index);
        falseRadio.name = self.objectId + "_" + index;
        falseRadio.value = "false";
        falseRadio.checked = (self.data.userChoices[index] === false);
        // falseRadio.name = `question-${idx}`
        falseRadio.addEventListener('click', radioClickFn);

        labelTrue.insertBefore(trueRadio, labelTrue.firstChild);
        labelFalse.insertBefore(falseRadio, labelFalse.firstChild);
        a.appendChild(labelTrue);
        a.appendChild(labelFalse);

        board.appendChild(row);
      }
    });

    if (!self.inited && self.element.querySelector(".board-container").clientHeight < self.wrapperElement.clientHeight) {
      $(".toolbox", self.element).remove();
      $(self.wrapperElement).css("height", "100%");
    }

    if (self.data.checked) {
      checkGameStatus();
    } else {
      self.element.querySelector(".results").style.visibility = "hidden";
    }
  }




const onUserChoiceChanged = function (radio) {
  var index = parseInt(radio.getAttribute("data-index"));
  self.data.timestamp = (new Date()).getTime();
  self.data.userChoices[index] = (radio.value === "true");

  if (self.data.checked) {
    self.data.correct = 0;
    self.data.score = 0;
    self.data.checked = false;
    $(".right", self.element).removeClass("right");
    $(".wrong", self.element).removeClass("wrong");
    $(".missed", self.element).removeClass("missed");
    self.element.querySelector(".results").style.visibility = "hidden";
  }

  saveData();

  $(self).trigger('SCTrueFalseChanged'); 
  $(self.element).trigger('SCTrueFalseChanged');
}


  const checkGameStatus = function(changed) {
    const statements = self.config.appdata.statements;
    const statementsIndexes = self.data.statementsIndexes;
    var correctAnswers = 0;
    var missedAnswers = 0;

    _(statementsIndexes).each(function(statementI, index) {
      var statement = _(statements).find(function (s) { return s.index == statementI; });
      if (statement) {
        if (self.data.userChoices[index] === null) {
          missedAnswers++;
        } else if (statement.isTrue === self.data.userChoices[index]) {
          correctAnswers++;
        }

        if (self.config.options.revealCorrectAnswers && statement.isTrue !== null) {
            var selectedRadio = self.element.querySelector("input[data-index='" + index + "']:checked");
            if (selectedRadio) {
              var value = selectedRadio.value === "true" ? true : false;
              selectedRadio.classList = (statement.isTrue === value) ? "right" : "wrong";
            } else {
              var missedRadio = self.element.querySelector("input[data-index='" + index + "'][value='" + statement.isTrue + "']");
              missedRadio.classList = "missed";
            }
        }
      }
    });

    self.element.querySelector(".finale-true-false-right > span").innerHTML = correctAnswers;
    self.element.querySelector(".finale-true-false-wrong > span").innerHTML = statements.length - correctAnswers - missedAnswers;
    self.element.querySelector(".finale-true-false-missed > span").innerHTML = missedAnswers;
    self.element.querySelector(".results").style.visibility = "visible";

    if (changed === true) {
      self.data.correct = correctAnswers;
      self.data.score = correctAnswers / self.config.appdata.statements.length;
      self.data.checked = true,
      self.data.timestamp = (new Date()).getTime();
      saveData();

      $(self).trigger('SCTrueFalseCompleted'); 
      $(self.element).trigger('SCTrueFalseCompleted');
    }
  }



  if ($(self.element).attr("data-autoinit") !== "false") {
    self.init();
  } else {
    console.log("true-false autoinit:", false);
  }


}