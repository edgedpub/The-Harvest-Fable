pubcoder.projectID = pubcoder.projectID || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.id = pubcoder.project.id || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.title = pubcoder.project.title || "The Harvest Fable";
pubcoder.page.id = pubcoder.page.id || 88;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
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
var obj502_onTap_activeActionGroupIndex = -1;
var obj502_onTap_runningActionsCount = 0;
var obj502_onTap_loopCount = 0;
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
		
obj502_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj502_onTap_activeActionGroupIndex = -1;
		$("#obj502").trigger("obj502_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 502) {
				console.warn("de-queueing event obj502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj502_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj666 
move_668();
function move_668() {
	window.obj502_onTap_runningActionsCount = obj502_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj666");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1637";
	var moveY = "+=-10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 10000, easing, function() {
		setTimeout(function() {
			window.obj502_onTap_runningActionsCount = window.obj502_onTap_runningActionsCount - 1;
if (window.obj502_onTap_runningActionsCount < 0) {
	window.obj502_onTap_runningActionsCount = 0;
} else if (window.obj502_onTap_runningActionsCount == 0) {
	obj502_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj682 
move_685();
function move_685() {
	window.obj502_onTap_runningActionsCount = obj502_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj682");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=2150";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 16000, easing, function() {
		setTimeout(function() {
			window.obj502_onTap_runningActionsCount = window.obj502_onTap_runningActionsCount - 1;
if (window.obj502_onTap_runningActionsCount < 0) {
	window.obj502_onTap_runningActionsCount = 0;
} else if (window.obj502_onTap_runningActionsCount == 0) {
	obj502_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj680 
move_684();
function move_684() {
	window.obj502_onTap_runningActionsCount = obj502_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj680");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1831";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 13000, easing, function() {
		setTimeout(function() {
			window.obj502_onTap_runningActionsCount = window.obj502_onTap_runningActionsCount - 1;
if (window.obj502_onTap_runningActionsCount < 0) {
	window.obj502_onTap_runningActionsCount = 0;
} else if (window.obj502_onTap_runningActionsCount == 0) {
	obj502_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj510 
move_516();
function move_516() {
	window.obj502_onTap_runningActionsCount = obj502_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj510");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=505";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 5000, easing, function() {
		setTimeout(function() {
			window.obj502_onTap_runningActionsCount = window.obj502_onTap_runningActionsCount - 1;
if (window.obj502_onTap_runningActionsCount < 0) {
	window.obj502_onTap_runningActionsCount = 0;
} else if (window.obj502_onTap_runningActionsCount == 0) {
	obj502_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj508 
move_517();
function move_517() {
	window.obj502_onTap_runningActionsCount = obj502_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj508");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-477";
	var moveY = "+=-1";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 5000, easing, function() {
		setTimeout(function() {
			window.obj502_onTap_runningActionsCount = window.obj502_onTap_runningActionsCount - 1;
if (window.obj502_onTap_runningActionsCount < 0) {
	window.obj502_onTap_runningActionsCount = 0;
} else if (window.obj502_onTap_runningActionsCount == 0) {
	obj502_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj502_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj502_onTap_activeActionGroupIndex = -1;
		$("#obj502").trigger("obj502_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 502) {
				console.warn("de-queueing event obj502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj502_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj502: Event Touch Down
 *
 */
$("#obj502").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj502_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj502_onTap is still running");
	return;
}
var obj502_onTap_runningActionsCount = 0;
var obj502_onTap_loopCount = 0;
obj502_onTap_actionGroup0();
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
	
$("#obj502").trigger('SCEventShow');
$("#obj508").trigger('SCEventShow');
$("#obj510").trigger('SCEventShow');
$("#obj666").trigger('SCEventShow');
$("#obj680").trigger('SCEventShow');
$("#obj682").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});