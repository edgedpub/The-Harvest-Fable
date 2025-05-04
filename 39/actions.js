pubcoder.projectID = pubcoder.projectID || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.id = pubcoder.project.id || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.title = pubcoder.project.title || "The Harvest Fable";
pubcoder.page.id = pubcoder.page.id || 518;
pubcoder.page.title = pubcoder.page.title || "39";
pubcoder.page.number = pubcoder.page.number || 39;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj654_animation_count = 0;
var obj734_animation_count = 0;
var obj744_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj519_onTap_activeActionGroupIndex = -1;
var obj519_onTap_runningActionsCount = 0;
var obj519_onTap_loopCount = 0;
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
	
initAnimation_654();
function initAnimation_654()
{
    var targetObjectId = 654;
    var widthSCAnimationObject = 1056;
    var heightSCAnimationObject = 795;
    var framesPerSecond = 1;
    var howManyLoops = 10;
    var backToFirstFrame = false;
    var isAnimationInfinite = false;
    window.audio_animation_obj654 = $("#")[0];
    window.hasAudioTrack_obj654 = false
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj654_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
}
initAnimation_734();
function initAnimation_734()
{
    var targetObjectId = 734;
    var widthSCAnimationObject = 1056;
    var heightSCAnimationObject = 795;
    var framesPerSecond = 1;
    var howManyLoops = 10;
    var backToFirstFrame = false;
    var isAnimationInfinite = false;
    window.audio_animation_obj734 = $("#")[0];
    window.hasAudioTrack_obj734 = false
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj734_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
}
initAnimation_744();
function initAnimation_744()
{
    var targetObjectId = 744;
    var widthSCAnimationObject = 1056;
    var heightSCAnimationObject = 795;
    var framesPerSecond = 1;
    var howManyLoops = 10;
    var backToFirstFrame = false;
    var isAnimationInfinite = false;
    window.audio_animation_obj744 = $("#")[0];
    window.hasAudioTrack_obj744 = false
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj744_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
}
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
		
obj519_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj519_onTap_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 519) {
				console.warn("de-queueing event obj519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj519_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj523 
move_525();
function move_525() {
	window.obj519_onTap_runningActionsCount = obj519_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=510";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj521 
move_526();
function move_526() {
	window.obj519_onTap_runningActionsCount = obj519_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj521");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-506";
	var moveY = "+=-1";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj654 
move_659();
function move_659() {
	window.obj519_onTap_runningActionsCount = obj519_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj654");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=2356";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 15000, easing, function() {
		setTimeout(function() {
			window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj734 
move_749();
function move_749() {
	window.obj519_onTap_runningActionsCount = obj519_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj734");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=2516";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 19000, easing, function() {
		setTimeout(function() {
			window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj744 
move_751();
function move_751() {
	window.obj519_onTap_runningActionsCount = obj519_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj744");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=2690";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 19000, easing, function() {
		setTimeout(function() {
			window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: playAnimation 
//	target: obj654 
playAnimation_658();
function playAnimation_658() {
	var targetObjectId = "#obj654";
	var targetObject = $(targetObjectId)[0];
	window.obj519_onTap_runningActionsCount = obj519_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj654 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj654;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj654;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);
	if (!isAnimationInfinite) {
		$("#obj654").one("obj654_animation_ended",function(event) {
		    window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		});
	}
 }
//	action: playAnimation 
//	target: obj734 
playAnimation_748();
function playAnimation_748() {
	var targetObjectId = "#obj734";
	var targetObject = $(targetObjectId)[0];
	window.obj519_onTap_runningActionsCount = obj519_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj734 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj734;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj734;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);
	if (!isAnimationInfinite) {
		$("#obj734").one("obj734_animation_ended",function(event) {
		    window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		});
	}
 }
//	action: playAnimation 
//	target: obj744 
playAnimation_750();
function playAnimation_750() {
	var targetObjectId = "#obj744";
	var targetObject = $(targetObjectId)[0];
	window.obj519_onTap_runningActionsCount = obj519_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj744 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj744;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj744;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);
	if (!isAnimationInfinite) {
		$("#obj744").one("obj744_animation_ended",function(event) {
		    window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;
if (window.obj519_onTap_runningActionsCount < 0) {
	window.obj519_onTap_runningActionsCount = 0;
} else if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
		});
	}
 }



















};
obj519_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj519_onTap_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 519) {
				console.warn("de-queueing event obj519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj519_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj519: Event Touch Down
 *
 */
$("#obj519").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj519_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj519_onTap is still running");
	return;
}
var obj519_onTap_runningActionsCount = 0;
var obj519_onTap_loopCount = 0;
obj519_onTap_actionGroup0();
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
	
$("#obj519").trigger('SCEventShow');
$("#obj521").trigger('SCEventShow');
$("#obj523").trigger('SCEventShow');
$("#obj654").trigger('SCEventShow');
$("#obj734").trigger('SCEventShow');
$("#obj744").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});