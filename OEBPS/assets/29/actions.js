pubcoder.projectID = pubcoder.projectID || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.id = pubcoder.project.id || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.title = pubcoder.project.title || "The Harvest Fable";
pubcoder.page.id = pubcoder.page.id || 528;
pubcoder.page.title = pubcoder.page.title || "29";
pubcoder.page.number = pubcoder.page.number || 29;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj529_onTap_activeActionGroupIndex = -1;
var obj529_onTap_runningActionsCount = 0;
var obj529_onTap_loopCount = 0;
var obj534_onTap_activeActionGroupIndex = -1;
var obj534_onTap_runningActionsCount = 0;
var obj534_onTap_loopCount = 0;
var obj537_onTap_activeActionGroupIndex = -1;
var obj537_onTap_runningActionsCount = 0;
var obj537_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj529_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj529_onTap_activeActionGroupIndex = -1;
		$("#obj529").trigger("obj529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 529) {
				console.warn("de-queueing event obj529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj529_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj534 
move_531();
function move_531() {
	window.obj529_onTap_runningActionsCount = obj529_onTap_runningActionsCount + 1;

	var easing = "linear";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj534");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=400";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj529_onTap_runningActionsCount = window.obj529_onTap_runningActionsCount - 1;
if (window.obj529_onTap_runningActionsCount < 0) {
	window.obj529_onTap_runningActionsCount = 0;
} else if (window.obj529_onTap_runningActionsCount == 0) {
	obj529_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj537 
move_532();
function move_532() {
	window.obj529_onTap_runningActionsCount = obj529_onTap_runningActionsCount + 1;

	var easing = "linear";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj537");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=730";
	var moveY = "+=11";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 4000, easing, function() {
		setTimeout(function() {
			window.obj529_onTap_runningActionsCount = window.obj529_onTap_runningActionsCount - 1;
if (window.obj529_onTap_runningActionsCount < 0) {
	window.obj529_onTap_runningActionsCount = 0;
} else if (window.obj529_onTap_runningActionsCount == 0) {
	obj529_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj540 
move_533();
function move_533() {
	window.obj529_onTap_runningActionsCount = obj529_onTap_runningActionsCount + 1;

	var easing = "linear";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-465";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 4000, easing, function() {
		setTimeout(function() {
			window.obj529_onTap_runningActionsCount = window.obj529_onTap_runningActionsCount - 1;
if (window.obj529_onTap_runningActionsCount < 0) {
	window.obj529_onTap_runningActionsCount = 0;
} else if (window.obj529_onTap_runningActionsCount == 0) {
	obj529_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj529_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj529_onTap_activeActionGroupIndex = -1;
		$("#obj529").trigger("obj529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 529) {
				console.warn("de-queueing event obj529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj529_onTap_activeActionGroupIndex = 1;
	





















};
obj534_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_onTap_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 534) {
				console.warn("de-queueing event obj534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj534_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj534 
move_536();
function move_536() {
	window.obj534_onTap_runningActionsCount = obj534_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj534");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-373";
	var moveY = "+=-1";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj534_onTap_runningActionsCount = window.obj534_onTap_runningActionsCount - 1;
if (window.obj534_onTap_runningActionsCount < 0) {
	window.obj534_onTap_runningActionsCount = 0;
} else if (window.obj534_onTap_runningActionsCount == 0) {
	obj534_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj534_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj534_onTap_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 534) {
				console.warn("de-queueing event obj534." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj534").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj534_onTap_activeActionGroupIndex = 1;
	





















};
obj537_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj537_onTap_activeActionGroupIndex = -1;
		$("#obj537").trigger("obj537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 537) {
				console.warn("de-queueing event obj537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj537_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj537 
move_539();
function move_539() {
	window.obj537_onTap_runningActionsCount = obj537_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj537");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-704";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 4000, easing, function() {
		setTimeout(function() {
			window.obj537_onTap_runningActionsCount = window.obj537_onTap_runningActionsCount - 1;
if (window.obj537_onTap_runningActionsCount < 0) {
	window.obj537_onTap_runningActionsCount = 0;
} else if (window.obj537_onTap_runningActionsCount == 0) {
	obj537_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj537_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj537_onTap_activeActionGroupIndex = -1;
		$("#obj537").trigger("obj537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 537) {
				console.warn("de-queueing event obj537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj537_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj529: Event Touch Down
 *
 */
$("#obj529").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj529_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj529_onTap is still running");
	return;
}
var obj529_onTap_runningActionsCount = 0;
var obj529_onTap_loopCount = 0;
obj529_onTap_actionGroup0();
});










/*
 *
 *   obj534: Event Touch Down
 *
 */
$("#obj534").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj534_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj534_onTap is still running");
	return;
}
var obj534_onTap_runningActionsCount = 0;
var obj534_onTap_loopCount = 0;
obj534_onTap_actionGroup0();
});










/*
 *
 *   obj537: Event Touch Down
 *
 */
$("#obj537").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj537_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj537_onTap is still running");
	return;
}
var obj537_onTap_runningActionsCount = 0;
var obj537_onTap_loopCount = 0;
obj537_onTap_actionGroup0();
});

















		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		if (askAudioPermission) {
	// $("#SCAudioPermissionAllowButton").click(function () {
	// 	$( "audio" ).each(function( index ) {
	// 		this.play();
	// 		this.pause();
	// 	});
	// 	$(window).trigger(PubCoder.Events.PagePlay);
	// });
	// $("#SCAudioPermissionCancelButton").click(function () {
	// 	$(window).trigger(PubCoder.Events.PagePlay);
	// });
	// var remodalInst = $('[data-remodal-id=SCAudioPermissionAlert]').remodal().open();
} else {
	setTimeout(function() {
		$(window).trigger(PubCoder.Events.PagePlay);
	}, 100);
}
	 }
});
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
$(window).on(PubCoder.Events.PagePlay, function() {
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj529").trigger('SCEventShow');
$("#obj534").trigger('SCEventShow');
$("#obj537").trigger('SCEventShow');
$("#obj540").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});