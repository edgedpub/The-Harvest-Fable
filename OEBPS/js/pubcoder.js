var pubcoder = {
	project: {
		id : "",
		title : "",
        assessments : {"count":0,"items":[],"pagesCount":49,"questions":0,"signature":"0QJZ3WHN401CR9de6x6E8prSnjBCrOiRsKqN8N9fuzs=","version":1},
        pixelsDensity: 2
	},
	page: {
		id : "",
		title : "",
		alias : ""
	},
	objects: {},
	controllers: {
		get: function(ref) {
			if (ref instanceof Node) {
				return pubcoder.controllers.all[$(ref).attr("id")];
			} else {
				return pubcoder.controllers.all[ref];
			}
		},
		getAll: function() {
			return _(pubcoder.controllers.all).values();
		},
		all: {}
	},
	
	pages: {
		
"page2": "../1/page.xhtml", 
"page328": "../2/page.xhtml", 
"page36": "../3/page.xhtml", 
"page103": "../4/page.xhtml", 
"page3": "../5/page.xhtml", 
"page9": "../6/page.xhtml", 
"page10": "../7/page.xhtml", 
"page11": "../8/page.xhtml", 
"page12": "../9/page.xhtml", 
"page13": "../10/page.xhtml", 
"page24": "../11/page.xhtml", 
"page25": "../12/page.xhtml", 
"page35": "../13/page.xhtml", 
"page88": "../14/page.xhtml", 
"page223": "../15/page.xhtml", 
"page859": "../16/page.xhtml", 
"page89": "../17/page.xhtml", 
"page870": "../18/page.xhtml", 
"page107": "../19/page.xhtml", 
"page881": "../20/page.xhtml", 
"page91": "../21/page.xhtml", 
"page238": "../22/page.xhtml", 
"page92": "../23/page.xhtml", 
"page104": "../24/page.xhtml", 
"page347": "../25/page.xhtml", 
"page349": "../26/page.xhtml", 
"page352": "../27/page.xhtml", 
"page351": "../28/page.xhtml", 
"page528": "../29/page.xhtml", 
"page375": "../30/page.xhtml", 
"page582": "../31/page.xhtml", 
"page697": "../32/page.xhtml", 
"page373": "../33/page.xhtml", 
"page377": "../34/page.xhtml", 
"page376": "../35/page.xhtml", 
"page585": "../36/page.xhtml", 
"page400": "../37/page.xhtml", 
"page402": "../38/page.xhtml", 
"page518": "../39/page.xhtml", 
"page404": "../40/page.xhtml", 
"page415": "../41/page.xhtml", 
"page416": "../42/page.xhtml", 
"page417": "../43/page.xhtml", 
"page418": "../44/page.xhtml", 
"page430": "../45/page.xhtml", 
"page429": "../46/page.xhtml", 
"page431": "../47/page.xhtml", 
"page594": "../48/page.xhtml", 
"page452": "../49/page.xhtml", 
	},
	getPageCount: function() {
		return Object.keys(pubcoder.pages).length;
	},
	
	events: {
		Run: 'SCEventRun', run: 'SCEventRun',
		Shake: 'SCEventShake', shake: 'SCEventShake',
		Show: 'SCEventShow', show: 'SCEventShow',
		Appear: 'SCEventAppear', appear: 'SCEventAppear',
		Disappear: 'SCEventDisappear', disappear: 'SCEventDisappear',
		SwipeDown: 'SCswipedown', swipeDown: 'SCswipedown',
		SwipeLeft: 'SCswipeleft', swipeLeft: 'SCswipeleft',
		SwipeRight: 'SCswiperight', swipeRight: 'SCswiperight',
		SwipeUp: 'SCswipeup', swipeUp: 'SCswipeup',
		PinchClose: "pinchin", pinchClose: "pinchin",
		PinchOpen: "pinchout", pinchOpen: "pinchout",
		Tap: 'click', tap: 'click',
		DoubleTap: "doubletap", doubleTap: "doubletap",
		Press: "press", press: "press",
		TouchDown: "mousedown", touchDown: "mousedown",
		TouchUp: "mouseup", touchUp: "mouseup",
		PageLoad: 'SCEventPageLoad', pageLoad: 'SCEventPageLoad',
		PagePlay: 'SCEventPagePlay', pagePlay: 'SCEventPagePlay',
		PageReady: 'SCEventPageReady', pageReady: 'SCEventPageReady'
	},
	queuedEvents: [],
	isActionListRunning: function(targetObjectId, actionListHandler) {
		var activeActionGroupIndexVarName = "obj" + targetObjectId + "_" + actionListHandler + "_activeActionGroupIndex";
		// console.warn(activeActionGroupIndexVarName, window[activeActionGroupIndexVarName]);
		return (window[activeActionGroupIndexVarName] != undefined && window[activeActionGroupIndexVarName] != -1);
	},
	isAndroidReader: false, // legacy reader, was: (typeof(Android) !== "undefined" || navigator.userAgent.indexOf("pubcoderReaderAndroidUA") > -1),
	isAndroid: (navigator.userAgent.toLowerCase().indexOf("android") > -1),
	isQuickPreview: false,
	isInteractionObserverSupported: ('IntersectionObserver' in window),
	
	Accelerometer: {
		Enabled: true,
		X: 0,
		Y: 0
	},
	call: function (methodName, methodParameters) {
		pubcoder.callID++;
		document.title = JSON.stringify ({"method" : methodName, "params" : methodParameters, "id" : pubcoder.callID} );
		setTimeout(function() { document.title = ' '; }, 1);
	},
	callID: 0,
	alert: function (alertTitle, alertText) {
		if (typeof(alertText) == "undefined") {
			$("#SCDefaultAlertTitle").hide();
			alertText = alertTitle;
			alertTitle = "";
		} else {
			$("#SCDefaultAlertTitle").show();
		}
		$("#SCDefaultAlertTitle").html(alertTitle);
		$("#SCDefaultAlertMsg").html(alertText);
		try {
			$('[data-remodal-id=SCDefaultAlert]').remodal().open();
		} catch (e) {
			// for modals opened too early, wait and retry
			setTimeout(function() { pubcoder.alert(alertTitle, alertText) }, 1000);
		}
	},
	confirm: function (title, text, confirmLabel, cancelLabel, callback) {
		if (typeof(text) == null) {
			$("#SCDefaultConfirmDialogTitle").hide();
			text = title;
			title = "";
		} else {
			$("#SCDefaultConfirmDialogTitle").show();
		}
		$("#SCDefaultConfirmDialogTitle").html(title);
		$("#SCDefaultConfirmDialogMsg").html(text);
		$("#SCDefaultConfirmDialogTitleConfirmBtn").html(confirmLabel);
		$("#SCDefaultConfirmDialogTitleCancelBtn").html(cancelLabel);
		try {
			$(document).on('confirmation', '.remodal', function () {
				$(document).off('confirmation', '.remodal');
				$(document).off('cancellation', '.remodal');
				callback(true);
			});
			$(document).on('cancellation', '.remodal', function () {
				$(document).off('confirmation', '.remodal');
				$(document).off('cancellation', '.remodal');
				callback(false);
			});
			$('[data-remodal-id=SCDefaultConfirmDialog]').remodal().open();
		} catch (e) {
			// for modals opened too early, wait and retry
			setTimeout(function() { PubCoder.confirm(title, text, confirmLabel, cancelLabel, callback) }, 1000);
		}
	},
	getCurrentPageNumber: function () {
		var locPieces = window.location.href.split("/");
		return (locPieces[locPieces.length-2]);
	},
	getObjectWithId: function (objID) {
		// this returns the JQuery object, regardless of the objID parameter being "obj4" or "#obj4" or $("#obj4")
		if (typeof objID == "string" && objID.indexOf("#") != 0) objID = "#" + objID;
		return $("#" + $(objID).attr("id"));
	},
	getObjectsWithClass: function (className) {
		return $("." + className);
	},
	getPageObjectsWithClass: function (className) {
		return $(".SCContent ." + className);
	},
	getOverlayObjectsWithClass: function (className) {
		return $(".SCOverlay ." + className);
	},
	getLayers: function(containerName) {
		var layers = $("." + containerName + ">.SCPageObject");
		layers.sort(function(a, b) {
		    a = parseInt($(a).css("z-index"));
		    b = parseInt($(b).css("z-index"));
		    if (a == b) { return 0; }
		    if (a > b) {
		        return 1;
		    } else {
		        return -1;
		    }
		});
		return layers;
	},
	moveLayer: function(containerName, sourceIndex, destIndex) {
		var layers = this.getLayers(containerName);
		var layersNew = layers.slice(0);
		var objToMove = layersNew[sourceIndex];
		layersNew.splice(sourceIndex, 1);
		layersNew.splice(destIndex, 0, objToMove);
		for (var i = layers.length - 1; i >= 0; i--) {
			var attr = $(layers[i]).attr("data-SCPageObject-InitialLayer")
			if (typeof attr == typeof undefined) $(layers[i]).attr("data-SCPageObject-InitialLayer", i.toString())
			layers[i] = $(layers[i]).css("z-index");
		};
		for (var i = layers.length - 1; i >= 0; i--) {
			$(layersNew[i]).css("z-index", layers[i]);
		};
	},
	getPageObjectContainerName: function(obj) {
		var objParent = obj.parent();
		var knownContainers = ["SCContent", "SCOverlay", "SCContentOverlay", "SCContentUnderlay"];
		for (var i = knownContainers.length - 1; i >= 0; i--) {
			if (objParent.hasClass(knownContainers[i])) return knownContainers[i];
		};
		return null;
	},
	bringPageObjectToFront: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i < 0) return;
		if (i >= layers.length-1) return;
		this.moveLayer(containerName, i, layers.length-1);
	},
	bringPageObjectForward: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i < 0) return;
		if (i >= layers.length-1) return;
		this.moveLayer(containerName, i, i+1);
	},
	sendPageObjectBackward: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i <= 0) return;
		this.moveLayer(containerName, i, i-1);
	},
	sendPageObjectToBack: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i <= 0) return;
		this.moveLayer(containerName, i, 0);
	},
	bringPageObjectToInitialLayer: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		var attr = $(layers[i]).attr("data-SCPageObject-InitialLayer");
		if (typeof attr == typeof undefined) return
		this.moveLayer(containerName, i, parseInt(attr));
	},
	getCounterValue: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		return eval("window." + $(obj).attr("id") + "_counterValue");
	},
	switchText: function(obj, newText) {
		obj = pubcoder.getObjectWithId(obj);
		if (newText.indexOf("<") < 0) newText = "<p>" + newText + "</p>";
		var objContent = $("#" + obj.attr("id") + "_content");
		$(objContent).html(newText);
	},
	goToPage: function(pageNumber) {
		pubcoder.openUrl("../" + pageNumber + "/page.xhtml", false);
	},
	openUrl: function (url, openInBrowser) {
		if (window.XPUB != undefined) {
			window.XPUB.openUrl(url, openInBrowser);
		} else if (openInBrowser) {
			window.open(url);
		} else {
			window.location = url;
		}
	},
	setObjectOpacityWhileScrolling: function (obj, initialOpacityValue, finalOpacityValue, startY, endY, container) {
		targetObject = pubcoder.getObjectWithId(obj);
		if (typeof(container) === "undefined" || container == "") {
			container = $(".SCContent")[0];
		} else {
			container = pubcoder.getObjectWithId(container)[0];
		}
		var opacity = initialOpacityValue;
		var y = container.scrollTop;
		if (y <= startY) {
			opacity = initialOpacityValue;
		} else if (endY > 0 && y >= endY) {
			opacity = finalOpacityValue;
		} else {
			if (endY <= 0) {
				endY = container.scrollHeight - parseInt(window.getComputedStyle(container).height);
			}
			var delta = finalOpacityValue - initialOpacityValue;
			opacity = initialOpacityValue + delta * (y-startY)/(endY-startY);
		}
		targetObject.css("opacity", opacity);
	},
	moveObjectWhileScrolling: function (obj, initialPosition, finalPosition, startY, endY, container) {
		targetObject = pubcoder.getObjectWithId(obj);
		if (typeof(container) === "undefined" || container == "") {
			container = $(".SCContent")[0];
		} else {
			container = pubcoder.getObjectWithId(container)[0];
		}
		// console.warn(container);
		var position = initialPosition;
		var y = container.scrollTop;
		if (y <= startY) {
			position = initialPosition;
		} else if (endY > 0 && y >= endY) {
			position = finalPosition;
		} else {
			if (endY <= 0) {
				endY = container.scrollHeight - parseInt(window.getComputedStyle(container).height);
			}
			var delta = {
				left: finalPosition.left - initialPosition.left,
				top: finalPosition.top - initialPosition.top,
			}
			position = {
				left: initialPosition.left + delta.left * (y-startY)/(endY-startY),
				top: initialPosition.top + delta.top * (y-startY)/(endY-startY)
			}
		}
		targetObject.css("left", position.left + "px");
		targetObject.css("top", position.top + "px");
	},
	scaleObjectWhileScrolling: function (obj, initialScale, finalScale, startY, endY, container) {
		targetObject = pubcoder.getObjectWithId(obj);
		if (typeof(container) === "undefined" || container == "") {
			container = $(".SCContent")[0];
		} else {
			container = pubcoder.getObjectWithId(container)[0];
		}
		const t = pubcoder.getObjectTransform(targetObject[0]);
		var scale = initialScale;
		var y = container.scrollTop;
		if (y <= startY) {
			scale = initialScale;
		} else if (endY > 0 && y >= endY) {
			scale = finalScale;
		} else {
			if (endY <= 0) {
				endY = container.scrollHeight - parseInt(window.getComputedStyle(container).height);
			}
			var delta = {
				x: finalScale.x - initialScale.x,
				y: finalScale.y - initialScale.y
			}
			scale = {
				x: initialScale.x + delta.x * (y-startY)/(endY-startY),
				y: initialScale.y + delta.y * (y-startY)/(endY-startY)
			}
		}
		pubcoder.setObjectTransform(targetObject[0], t.rotation, scale.x, scale.y);
	},
	rotateObjectWhileScrolling: function (obj, initialRotation, finalRotation, startY, endY, container) {
		targetObject = pubcoder.getObjectWithId(obj);
		if (typeof(container) === "undefined" || container == "") {
			container = $(".SCContent")[0];
		} else {
			container = pubcoder.getObjectWithId(container)[0];
		}
		const t = pubcoder.getObjectTransform(targetObject[0]);
		var rotation = initialRotation;
		var y = container.scrollTop;
		if (y <= startY) {
			rotation = initialRotation;
		} else if (endY > 0 && y >= endY) {
			rotation = finalScale;
		} else {
			if (endY <= 0) {
				endY = container.scrollHeight - parseInt(window.getComputedStyle(container).height);
			}
			var delta = finalRotation - initialRotation;
			rotation = initialRotation + delta * (y-startY)/(endY-startY);
		}
		pubcoder.setObjectTransform(targetObject[0], rotation, t.scaleX, t.scaleY);
	},
	getObjectTransform: function (element) {
		function extractRotation(matrix) {
			// Extract the rotation value from the matrix
			const radianToDegree = 180 / Math.PI;
			const rotationRad = Math.atan2(matrix.b, matrix.a);
			const rotationDeg = rotationRad * radianToDegree;
			return rotationDeg;
		}
		
		function extractScaleX(matrix) {
			// Extract the horizontal scaling value from the matrix
			const scaleX = Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
			return scaleX;
		}
		function extractScaleY(matrix) {
			// Extract the vertical scaling value from the matrix
			const scaleY = Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d);
			return scaleY;
		}
		// Retrieve the current transform matrix
		const transformMatrix = getComputedStyle(element).transform;
		// Create a DOMMatrix object from the transform matrix
		const matrix = new DOMMatrix(transformMatrix);
	  
		// Extract rotation, scaleX, and scaleY from the matrix
		const rotationDeg = extractRotation(matrix);
		const scaleX = extractScaleX(matrix);
		const scaleY = extractScaleY(matrix);
	  
		// Return an object with the transform values
		return {
		  "rotation": rotationDeg,
		  "scaleX": scaleX,
		  "scaleY": scaleY,
		};
	},
	setObjectTransform: function (element, rotation, scaleX, scaleY) {
		element.style.transform = "rotate(" + rotation +"deg) scale(" + scaleX + ", " + scaleY +")";
	},
	startAnnotationMode: function () {
		if (window.XPUB != undefined) {
			window.XPUB.startAnnotationMode();
		} else {
			$(".SCAnnotationControl").css("display", "block");
			$(".SCAnnotationControl").trigger("SCEventShow");
		}
	},
	stopAnnotationMode: function () {
		if (window.XPUB != undefined) {
			window.XPUB.stopAnnotationMode();
		} else {
			$(".SCAnnotationControl").css("display", "none");
		}
	}
};
pubcoder.Events = pubcoder.events;
var PubCoder = pubcoder;