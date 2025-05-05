pubcoder.projectID = pubcoder.projectID || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.id = pubcoder.project.id || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.title = pubcoder.project.title || "The Harvest Fable";
pubcoder.page.id = pubcoder.page.id || 9;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj484_onTap_activeActionGroupIndex = -1;
var obj484_onTap_runningActionsCount = 0;
var obj484_onTap_loopCount = 0;
var obj489_onTap_activeActionGroupIndex = -1;
var obj489_onTap_runningActionsCount = 0;
var obj489_onTap_loopCount = 0;
var obj492_onTap_activeActionGroupIndex = -1;
var obj492_onTap_runningActionsCount = 0;
var obj492_onTap_loopCount = 0;
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
		
obj484_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj484_onTap_activeActionGroupIndex = -1;
		$("#obj484").trigger("obj484_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 484) {
				console.warn("de-queueing event obj484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj484_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj489 
move_498();
function move_498() {
	window.obj484_onTap_runningActionsCount = obj484_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj489");
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
			window.obj484_onTap_runningActionsCount = window.obj484_onTap_runningActionsCount - 1;
if (window.obj484_onTap_runningActionsCount < 0) {
	window.obj484_onTap_runningActionsCount = 0;
} else if (window.obj484_onTap_runningActionsCount == 0) {
	obj484_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj492 
move_499();
function move_499() {
	window.obj484_onTap_runningActionsCount = obj484_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj492");
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
			window.obj484_onTap_runningActionsCount = window.obj484_onTap_runningActionsCount - 1;
if (window.obj484_onTap_runningActionsCount < 0) {
	window.obj484_onTap_runningActionsCount = 0;
} else if (window.obj484_onTap_runningActionsCount == 0) {
	obj484_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj495 
move_500();
function move_500() {
	window.obj484_onTap_runningActionsCount = obj484_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj495");
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
			window.obj484_onTap_runningActionsCount = window.obj484_onTap_runningActionsCount - 1;
if (window.obj484_onTap_runningActionsCount < 0) {
	window.obj484_onTap_runningActionsCount = 0;
} else if (window.obj484_onTap_runningActionsCount == 0) {
	obj484_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj484_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj484_onTap_activeActionGroupIndex = -1;
		$("#obj484").trigger("obj484_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 484) {
				console.warn("de-queueing event obj484." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj484").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj484_onTap_activeActionGroupIndex = 1;
	





















};
obj489_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj489_onTap_activeActionGroupIndex = -1;
		$("#obj489").trigger("obj489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 489) {
				console.warn("de-queueing event obj489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj489_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj489 
move_491();
function move_491() {
	window.obj489_onTap_runningActionsCount = obj489_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj489");
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
			window.obj489_onTap_runningActionsCount = window.obj489_onTap_runningActionsCount - 1;
if (window.obj489_onTap_runningActionsCount < 0) {
	window.obj489_onTap_runningActionsCount = 0;
} else if (window.obj489_onTap_runningActionsCount == 0) {
	obj489_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj489_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj489_onTap_activeActionGroupIndex = -1;
		$("#obj489").trigger("obj489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 489) {
				console.warn("de-queueing event obj489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj489_onTap_activeActionGroupIndex = 1;
	





















};
obj492_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj492_onTap_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 492) {
				console.warn("de-queueing event obj492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj492_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj492 
move_494();
function move_494() {
	window.obj492_onTap_runningActionsCount = obj492_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj492");
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
			window.obj492_onTap_runningActionsCount = window.obj492_onTap_runningActionsCount - 1;
if (window.obj492_onTap_runningActionsCount < 0) {
	window.obj492_onTap_runningActionsCount = 0;
} else if (window.obj492_onTap_runningActionsCount == 0) {
	obj492_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj492_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj492_onTap_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 492) {
				console.warn("de-queueing event obj492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj492_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj484: Event Touch Down
 *
 */
$("#obj484").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj484_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj484_onTap is still running");
	return;
}
var obj484_onTap_runningActionsCount = 0;
var obj484_onTap_loopCount = 0;
obj484_onTap_actionGroup0();
});










/*
 *
 *   obj489: Event Touch Down
 *
 */
$("#obj489").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj489_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj489_onTap is still running");
	return;
}
var obj489_onTap_runningActionsCount = 0;
var obj489_onTap_loopCount = 0;
obj489_onTap_actionGroup0();
});










/*
 *
 *   obj492: Event Touch Down
 *
 */
$("#obj492").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj492_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj492_onTap is still running");
	return;
}
var obj492_onTap_runningActionsCount = 0;
var obj492_onTap_loopCount = 0;
obj492_onTap_actionGroup0();
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
	
$("#obj484").trigger('SCEventShow');
$("#obj489").trigger('SCEventShow');
$("#obj492").trigger('SCEventShow');
$("#obj495").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});