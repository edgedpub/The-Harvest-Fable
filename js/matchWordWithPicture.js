function SCMatchWordWithPicture(objectId, config) {
	var self = this;

	self.objectId = objectId;
	self.element = document.querySelector("#" + objectId);
	self.config = config;
	self.data = null;
	self.inited = false;
	self.boardElement = self.element.querySelector(".board");
	self.currentDraggingElement = null;
	
	var _localStorageKey = "";
	
	const words = self.element.getElementsByClassName("word-slot");
	const totCorrectAnswers = self.element.getElementsByClassName("totCorrectAnswers");
	const totWrongAnswers = self.element.getElementsByClassName("totWrongAnswers");
	const htmlRect = $('html')[0].getBoundingClientRect();
	var imagePairsIndexes;
	var wordPairsIndexes;
	var wordsContainerBoxElement;
	var resultGameBoxElement;
	var currentDraggingElementShiftX = 0;
	var currentDraggingElementShiftY = 0;
	var previousSlot = null;


	// init MatchWordWithPicture
	self.init = function () {
		console.warn("initing match-word-with-picture", self.element);

		_localStorageKey = pubcoder.project.id + "-" + self.config.appdata.assessmentID;
		var theData;

		// load data

		if (!self.config.options.autosave || !localStorage || !localStorage.getItem(_localStorageKey) || self.config.appdata.checksum !== JSON.parse(localStorage.getItem(_localStorageKey)).checksum) {
			// initialize data
			var pairs = self.config.appdata.pairs;

			theData = {
				checksum: self.config.appdata.checksum,
				imagePairsIndexes: [],
				wordPairsIndexes: [],
				userChoices: [],
				correct: 0,
				score: 0,
				checked: false,
				timestamp: (new Date()).getTime()
			};


			_(pairs).each(function (el, i) {
				theData.imagePairsIndexes.push(i);
				theData.wordPairsIndexes.push(i);
			});
			if (self.config.options.randomPairsToDisplay > 0) {
				theData.imagePairsIndexes = _(theData.imagePairsIndexes).shuffle();
				theData.imagePairsIndexes = _(theData.imagePairsIndexes).first(self.config.options.randomPairsToDisplay);
				theData.wordPairsIndexes = _(theData.imagePairsIndexes).shuffle();
				// theData.wordPairsIndexes = _(theData.wordPairsIndexes).first(self.config.options.randomPairsToDisplay);
			} else {
				theData.wordPairsIndexes = _(theData.wordPairsIndexes).shuffle();
			}

			self.data = theData;
			saveData();

		} else {
			// restore data
			self.data = JSON.parse(localStorage.getItem(_localStorageKey));
			// console.warn("restore data", self.data);
		}

		// setup dom
		setupDOM();
		self.inited = true;
	};


	// reset data in local storage
	self.reset = function () {
		if (localStorage) localStorage.removeItem(_localStorageKey);
		self.init();

		$(self).trigger('SCMatchWordWithPictureReset');
		$(self.element).trigger('SCMatchWordWithPictureReset');
	}

	
	// save data in local storage
	const saveData = function () {
		if (localStorage) localStorage.setItem(_localStorageKey, JSON.stringify(self.data));
	};


	//setup DOM
	const setupDOM = function () {

		if (self.config.options.revealCorrectMatches === true) {
			$(self.element).addClass("revealsCorrectMatches");
		}

		const board = self.boardElement;
		imagePairsIndexes = self.data.imagePairsIndexes;
		wordPairsIndexes = self.data.wordPairsIndexes;
		var userChoices = self.data.userChoices;
		board.innerHTML = "";
		const title = document.createElement('div');
		title.classList.add("title");
		title.innerHTML = self.config.options.title;
		const father = board;

		const imagesContainer = document.createElement('div');
		imagesContainer.classList.add('images-container');
		const resultGame = document.createElement('div');
		resultGame.classList.add('result');
		const resultCorrectImg = document.createElement('img');
		resultCorrectImg.setAttribute("src", "../../images/scquiz-radio-right.png");
		resultCorrectImg.classList.add('resultCorrectImg');
		const resultCorrectSpan = document.createElement('span');
		resultCorrectSpan.classList.add("totCorrectAnswers");
		const resultWrongImg = document.createElement('img');
		resultWrongImg.setAttribute("src", "../../images/scquiz-radio-wrong.png");
		resultWrongImg.classList.add('resultWrongImg');
		const resultWrongSpan = document.createElement('span');
		resultWrongSpan.classList.add("totWrongAnswers");
		const wordsContainer = document.createElement('div');
		wordsContainer.classList.add('words-container');
		const gameContainer = document.createElement('div');
		gameContainer.classList.add('gameContainer');

		_(imagePairsIndexes).each(function (pairI, index) {
			var pairImage = _(self.config.appdata.pairs).find(function (p) {
				return p.index == pairI;
			});

			if (pairImage) {
				const imagesSlot = document.createElement('div');
				imagesSlot.classList.add('image-slot');
				imagesSlot.setAttribute("index-value", pairImage.index);
				const containerSingleImg = document.createElement('div');
				containerSingleImg.classList.add('mwwp-image-container');
				containerSingleImg.setAttribute("id", "containerTarget");
				const overlayDiv = document.createElement('div');
				overlayDiv.classList.add('overlay-layer');
				// overlayDiv.setAttribute('background-image', pairImage.picture);
				overlayDiv.classList.add('droppableObjectMWWP');
				overlayDiv.setAttribute('index-value', pairImage.index);
				const img = document.createElement('div');
				img.classList.add('image-layer');
				img.setAttribute('style', "background-image: url(" + pairImage.picture + ");");
				img.setAttribute('index-value', pairImage.index);

				// create div with chosen position
				if (self.config.options.wordsPosition != null) {

					switch (self.config.options.wordsPosition) {
						case "top":
							father.appendChild(gameContainer);
							gameContainer.appendChild(imagesContainer);
							imagesContainer.appendChild(imagesSlot);
							imagesSlot.appendChild(containerSingleImg);
							containerSingleImg.appendChild(overlayDiv)
							containerSingleImg.appendChild(img);
							$(self.element).addClass("topConfiguration");
							break;
						case "bottom":
							father.appendChild(title);
							father.appendChild(gameContainer);
							gameContainer.appendChild(imagesContainer);
							imagesContainer.appendChild(imagesSlot);
							imagesSlot.appendChild(containerSingleImg);
							containerSingleImg.appendChild(overlayDiv)
							containerSingleImg.appendChild(img);
							$(self.element).addClass("bottomConfiguration");
							break;
						case "left":
							father.appendChild(title);
							father.appendChild(gameContainer);
							gameContainer.appendChild(imagesContainer);
							imagesContainer.appendChild(imagesSlot);
							imagesSlot.appendChild(containerSingleImg);
							containerSingleImg.appendChild(overlayDiv)
							containerSingleImg.appendChild(img);
							var titleCs = window.getComputedStyle(title);
							gameContainer.style.height = "calc(100% - " + titleCs.height + ")";
							$(self.element).addClass("leftConfiguration");
							break;
						case "right":
							father.appendChild(title);
							father.appendChild(gameContainer);
							gameContainer.appendChild(imagesContainer);
							imagesContainer.appendChild(imagesSlot);
							imagesSlot.appendChild(containerSingleImg);
							containerSingleImg.appendChild(overlayDiv)
							containerSingleImg.appendChild(img);
							var titleCs = window.getComputedStyle(title);
							gameContainer.style.height = "calc(100% - " + titleCs.height + ")";
							$(self.element).addClass("rightConfiguration");
							break;
					}
				}
			}
		});

		_(wordPairsIndexes).each(function (pairI, index) {
			var pairWord = _(self.config.appdata.pairs).find(function (p) {
				// console.warn(p.index == pairI);
				return p.index == pairI;
			});

			if (pairWord) {
				const containerSingleWord = document.createElement('div');
				containerSingleWord.classList.add('word-slot');
				containerSingleWord.setAttribute("index-value", pairWord.index);
				const w = document.createElement('div');
				w.classList.add('mwwp-word-container');
				w.classList.add('movableObjectMWWP');
				w.setAttribute('index-value', pairWord.index);
				const p = document.createElement('span');
				p.classList.add("span");
				p.setAttribute('index-value', pairWord.index);
				p.innerHTML = pairWord.word;


				// create div with chosen position
				if (self.config.options.wordsPosition != null) {
					switch (self.config.options.wordsPosition) {
						case "top":
							father.appendChild(title);
							father.appendChild(gameContainer);
							gameContainer.appendChild(wordsContainer);
							wordsContainer.parentNode.insertBefore(wordsContainer, imagesContainer);
							wordsContainer.appendChild(containerSingleWord);
							containerSingleWord.appendChild(w);
							w.appendChild(p);
							wordsContainer.insertAdjacentElement("afterbegin",resultGame )
							resultGame.appendChild(resultCorrectImg);
							resultGame.appendChild(resultCorrectSpan);
							resultGame.appendChild(resultWrongImg);
							resultGame.appendChild(resultWrongSpan)
							break;
						case "bottom":
							gameContainer.classList.add("gameContainerBottomConfiguration");
							father.appendChild(gameContainer);
							gameContainer.appendChild(wordsContainer);
							wordsContainer.appendChild(containerSingleWord);
							containerSingleWord.appendChild(w);
							w.appendChild(p);
							wordsContainer.insertAdjacentElement("afterbegin",resultGame )
							resultGame.appendChild(resultCorrectImg);
							resultGame.appendChild(resultCorrectSpan);
							resultGame.appendChild(resultWrongImg);
							resultGame.appendChild(resultWrongSpan)
							break;
						case "left":
							father.appendChild(gameContainer);
							gameContainer.classList.add("column30-70");
							gameContainer.appendChild(wordsContainer);
							wordsContainer.parentNode.insertBefore(wordsContainer, imagesContainer);
							wordsContainer.appendChild(containerSingleWord);
							containerSingleWord.appendChild(w);
							w.appendChild(p);
							wordsContainer.insertAdjacentElement("afterbegin",resultGame )
							resultGame.appendChild(resultCorrectImg);
							resultGame.appendChild(resultCorrectSpan);
							resultGame.appendChild(resultWrongImg);
							resultGame.appendChild(resultWrongSpan);
							break;
						case "right":
							father.appendChild(gameContainer);
							gameContainer.classList.add("column70-30");
							gameContainer.appendChild(wordsContainer);
							wordsContainer.appendChild(containerSingleWord);
							containerSingleWord.appendChild(w);
							w.appendChild(p);
							wordsContainer.insertAdjacentElement("afterbegin",resultGame )
							resultGame.appendChild(resultCorrectImg);
							resultGame.appendChild(resultCorrectSpan);
							resultGame.appendChild(resultWrongImg);
							resultGame.appendChild(resultWrongSpan);
							break;
					}
				}
			}
		});

		if (board != father) board.appendChild(father);

		wordsContainerBoxElement = self.element.getElementsByClassName("words-container")[0];
		resultGameBoxElement = self.element.getElementsByClassName("result")[0];

		// update DOM wuth current game data

		const allWords = self.element.getElementsByClassName('movableObjectMWWP');
		const allImage = self.element.getElementsByClassName('overlay-layer droppableObjectMWWP');

		for (var j = 0; j < wordPairsIndexes.length; j++) {
			if (userChoices[j] != null) {
				var indxUserWordChoices = userChoices[j];
				var indxStartWord = wordPairsIndexes[j];

				for (var z = 0; z < allImage.length; z++) {
					var indexImage = allImage[z].getAttribute("index-value");
					if (indexImage == indxUserWordChoices) {
						// console.warn(allImage[z]);
						for (var p = 0; p < allWords.length; p++) {
							var indexWord = allWords[p].getAttribute("index-value");
							if (indexWord == indxStartWord) {
								// allWords[p].style = "left: 50px; top: 50px;";
								allWords[p].classList.add('position');
								allWords[p].classList.add('isInsideImage');
								// console.warn(allWords[p]);
								allImage[z].appendChild(allWords[p]);
								allImage[z].classList.add("haveWordInside");
							}
						}
					}
				}
			}
		}

		updateGameFromDOM(false);

		// bind touchdown to words
		$(".mwwp-word-container.movableObjectMWWP", self.element).on(window.touchDownEvent, onTouchDown);
	};


	// mousedown o touchdown event
	const onTouchDown = function (event) {
		// console.warn(event.type, event);

		event.preventDefault();
		event.stopPropagation();

		// prevent dragging with left mouse
		if (event.type == "mousedown") {
			var leftMouseButtonDown = event.buttons === undefined ? event.which === 1 : event.buttons === 1;
			if (!leftMouseButtonDown) {
				return;
			}
		}

		var element = event.currentTarget;
		self.currentDraggingElement = element;

		// if (resultGameBoxElement.style.display == "block" && wordsContainerBoxElement.style.display == "none") {
		// 	resultGameBoxElement.style.display = "none";
		// 	wordsContainerBoxElement.style.display = "block";
		// 	return;
		// }

		// calculate cursor position inside the word to maintain it later during the drag
		var initPosClient;
		if (event.type == "touchstart") {
			initPosClient = {
				x: (event.changedTouches[0].clientX - htmlRect.left) / (htmlRect.right - htmlRect.left) * (htmlRect.width),
				y: (event.changedTouches[0].clientY - htmlRect.top) / (htmlRect.bottom - htmlRect.top) * (htmlRect.height)
			};
		} else {
			initPosClient = {
				x: (event.clientX - htmlRect.left) / (htmlRect.right - htmlRect.left) * (htmlRect.width),
				y: (event.clientY - htmlRect.top) / (htmlRect.bottom - htmlRect.top) * (htmlRect.height)
			};
		}
		var shiftX = initPosClient.x - element.getBoundingClientRect().left;
		currentDraggingElementShiftX = shiftX;
		var shiftY = initPosClient.y - element.getBoundingClientRect().top;
		currentDraggingElementShiftY = shiftY;

		// remove word from current slot and save what it was
		var parent = element;
		while (true) {
			parent = parent.parentNode;
			if (parent.classList.contains("image-slot") || parent.classList.contains("word-slot")) {
				if (parent.classList.contains("word-slot")) {
					var cs = window.getComputedStyle(parent);
					parent.style.height = cs.height;
				}
				setElementStylesFromComputed(element, true);
				removeWordFromSlot(element, parent);
				break;
			}
		}
		previousSlot = parent;

		// start drag
		$(document.body).append(element);
		element.style.left = event.pageX - shiftX + 'px';
		element.style.top = event.pageY - shiftY + 'px';

		// bind dragging / end drag events
		$(document).on(window.touchMoveEvent, onTouchMove);
		$(document).on(window.touchUpEvent, onTouchUp);
	};


	// mousemove or touchmove event
	const onTouchMove = function (event) {
		// console.warn(event.type + " " + event.pageX + ", " + event.pageY);

		event.preventDefault();
		event.stopPropagation();

		self.draggingAction = true;

		var element = self.currentDraggingElement;
		if (element) {
			element.style.left = event.pageX - currentDraggingElementShiftX + 'px';
			element.style.top = event.pageY - currentDraggingElementShiftY + 'px';
		}
	};


	// mouseup ot touchup event
	const onTouchUp = function (event) {
		// console.warn(event.type, event);
		
		event.preventDefault();
		event.stopPropagation();

		endDrag();

		var element = self.currentDraggingElement;
		var elementsBelow;
		element.hidden = true;
		if (event.type == "touchend") {
			finalPosClient = {
				x: (event.changedTouches[0].clientX - htmlRect.left) / (htmlRect.right - htmlRect.left) * (htmlRect.width),
				y: (event.changedTouches[0].clientY - htmlRect.top) / (htmlRect.bottom - htmlRect.top) * (htmlRect.height)
			}
			elementsBelow = elementsFromPoint(finalPosClient.x, finalPosClient.y);
		} else {
			finalPosClient = {
				x: (event.clientX - htmlRect.left) / (htmlRect.right - htmlRect.left) * (htmlRect.width),
				y: (event.clientY - htmlRect.top) / (htmlRect.bottom - htmlRect.top) * (htmlRect.height)
			}
			elementsBelow = elementsFromPoint(event.clientX, event.clientY);
		}
		element.hidden = false;

		setElementStylesFromComputed(element, false);

		if (elementsBelow) {

			var destination = null;
			for (var j = 0; j < elementsBelow.length; j++) {
				var elem = elementsBelow[j];
				if (elem.classList.contains("image-slot") || elem.classList.contains("words-container")) {
					destination = elem;
					break;
				}
			}
			if (!self.element.contains(destination)) {
				destination = null;
			}
			
			if (destination != null && destination.classList.contains("image-slot")) {
				// dropped on another image slot
				var wordContainer = destination.querySelector(".mwwp-word-container");
				if (wordContainer) {
					// destination slot is already occupied: put the occupying word in the slot previously occupied by the word being dragged
					putWordInSlot(wordContainer, previousSlot);
				}
				// put the word in the destintation slot
				putWordInSlot(element, destination);

			} else if (destination != null && destination.classList.contains("words-container")) {
				// dropped on words container
				// find the original word slot for the word
				var destSlot = _(destination.childNodes).find(function (el) { return (el.getAttribute("index-value") == element.getAttribute("index-value")); });
				putWordInSlot(element, destSlot);

			} else {
				// dropped everywhere else
				putWordInSlot(element, previousSlot);
			}

			updateGameFromDOM();
		}
	};


	// this stop mousemove and mouseup
	const endDrag = function () {
		$(document).off(window.touchMoveEvent, onTouchMove);
		$(document).off(window.touchUpEvent, onTouchUp);
	};


	// checks the state of objects and does things like add classes if necessary, build arrays of userchoiches
	const updateGameFromDOM = function (changed) {
		if (typeof(changed) === "undefined") changed = true;

		var userChoices = [];

		const allWordInsideImage = self.element.querySelectorAll('.isInsideImage');
		const divImage = self.element.querySelectorAll('.overlay-layer.droppableObjectMWWP');

		for (var c = 0; c < divImage.length; c++) {
			if (divImage[c].children.length > 0) {
				divImage[c].classList.add("haveWordInside");
				var f = divImage[c].children[0];
				f.classList.add("position");
				f.classList.add("isInsideImage");
			} else {
				divImage[c].classList.remove("haveWordInside");
				divImage[c].classList.remove("correct");
				divImage[c].classList.remove("wrong");
			}
		}

		for (var u = 0; u < wordPairsIndexes.length; u++) {
			userChoices.push(null);
		}

		for (var j = 0; j < allWordInsideImage.length; j++) {
			const obj = allWordInsideImage[j];
			const index = obj.parentNode;
			const objIndex = obj.getAttribute("index-value");
			const newPosIndex = index.getAttribute("index-value");

			for (var r = 0; r < wordPairsIndexes.length; r++) {
				if (wordPairsIndexes[r] == objIndex) {
					// userChoices.splice(r, 1, parseInt(newPosIndex));
					userChoices[r] = parseInt(newPosIndex);
				}
			}
		}

		var gameCompleted = (self.element.getElementsByClassName("haveWordInside").length == wordPairsIndexes.length);
		
		const div = self.element.getElementsByClassName('haveWordInside');
		const objm = self.element.getElementsByClassName('isInsideImage');

		for (var i = 0; i < div.length; i++) {
			var divI = div[i].getAttribute("index-value");
			var objmI = objm[i].getAttribute("index-value");
			if (divI === objmI) {
				div[i].classList.remove('correct');
				div[i].classList.remove('wrong');

				div[i].classList.add('correct');
			} else {
				div[i].classList.remove('correct');
				div[i].classList.remove('wrong');

				div[i].classList.add('wrong');
			}
		}

		const correctAnswers = self.element.getElementsByClassName('correct');
		const selfDataWordPairsIndexes = self.element.getElementsByClassName('word-slot');

		// update saved gamed data
		self.data.userChoices = userChoices;
		self.data.correct = correctAnswers.length;
		var selfDataCorrect = self.data.correct;
		self.data.checked = gameCompleted;
		self.data.score = selfDataCorrect / selfDataWordPairsIndexes.length;
		self.data.timestamp = (new Date()).getTime();
		if (self.config.options.autosave) {
			saveData();
		}
		if (changed) $(self.element).trigger("SCMatchWordWithPictureChanged");

		// if all words matched show results
		if (gameCompleted) {
			if (changed) $(self.element).trigger("SCMatchWordWithPictureCompleted");
			self.element.classList.add("completed");
			resultGameBoxElement.style.display = "block";
			totCorrectAnswers[0].innerText = selfDataCorrect;
			totWrongAnswers[0].innerText = selfDataWordPairsIndexes.length - selfDataCorrect;
		} else {
			resultGameBoxElement.style.display = "none";
			self.element.classList.remove("completed");
		}
	}


	const setElementStylesFromComputed = function(element, value) {
		var cs = window.getComputedStyle(element);
		element.style.width = value ? cs.width : "";
		element.style.height = value ? cs.height : "";
		element.style.position = value ? 'absolute' : "";
		element.style.zIndex = value ? 1000 : "";
		element.style.fontFamily = value ? cs.fontFamily : "";
		element.style.fontSize = value ? cs.fontSize : "";
		element.style.color = value ? cs.color : "";
		element.style.padding = value ? cs.padding : "";
		element.style.textAlign = value ? cs.textAlign : "";
	}


	const putWordInSlot = function (wordContainer, slot) {
		if (slot.classList.contains("image-slot")) {
			slot.querySelector(".overlay-layer").appendChild(wordContainer);
			slot.querySelector(".overlay-layer").classList.add("haveWordInside");
			wordContainer.classList.add('position');
			wordContainer.classList.add('isInsideImage');
		} else if (slot.classList.contains("word-slot")) {
			slot.appendChild(wordContainer);
			wordContainer.classList.remove('position');
			wordContainer.classList.remove('isInsideImage');
		}
	}


	const removeWordFromSlot = function (wordContainer, slot) {
		if (slot.classList.contains("image-slot")) {
			slot.querySelector(".overlay-layer").removeChild(wordContainer);
			slot.querySelector(".overlay-layer").classList.remove("haveWordInside");
			slot.querySelector(".overlay-layer").classList.remove("correct");
			slot.querySelector(".overlay-layer").classList.remove("wrong");
			wordContainer.classList.remove('position');
			wordContainer.classList.remove('isInsideImage');
		} else if (slot.classList.contains("word-slot")) {
			slot.removeChild(wordContainer);
		}
	}

	const elementsFromPoint = function(x, y) {
		if (typeof document.elementsFromPoint !== "undefined") {
			return document.elementsFromPoint(x, y);
		} else if (typeof document.msElementsFromPoint !== "undefined") {
			return document.msElementsFromPoint(x, y);
		} else {
			console.error("document.elementsFromPoint is not supported!");
			return [];
		}
	}


	if ($(self.element).attr("data-autoinit") !== "false") {
		self.init();
	} else {
		console.log("match-word-with-picture autoinit:", false);
	}
};