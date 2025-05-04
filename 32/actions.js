pubcoder.projectID = pubcoder.projectID || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.id = pubcoder.project.id || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.title = pubcoder.project.title || "The Harvest Fable";
pubcoder.page.id = pubcoder.page.id || 697;
pubcoder.page.title = pubcoder.page.title || "32";
pubcoder.page.number = pubcoder.page.number || 32;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj708_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj708_onTap_activeActionGroupIndex = -1;
var obj708_onTap_runningActionsCount = 0;
var obj708_onTap_loopCount = 0;
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
	
initAnimation_708();
function initAnimation_708()
{
    var targetObjectId = 708;
    var widthSCAnimationObject = 1369;
    var heightSCAnimationObject = 1024;
    var framesPerSecond = 1;
    var howManyLoops = 4;
    var backToFirstFrame = false;
    var isAnimationInfinite = false;
    window.audio_animation_obj708 = $("#")[0];
    window.hasAudioTrack_obj708 = false
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj708_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
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
		
obj708_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj708_onTap_activeActionGroupIndex = -1;
		$("#obj708").trigger("obj708_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 708) {
				console.warn("de-queueing event obj708." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj708").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj708_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj708 
playAnimation_712();
function playAnimation_712() {
	var targetObjectId = "#obj708";
	var targetObject = $(targetObjectId)[0];
	window.obj708_onTap_runningActionsCount = obj708_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj708_onTap_runningActionsCount = window.obj708_onTap_runningActionsCount - 1;
if (window.obj708_onTap_runningActionsCount < 0) {
	window.obj708_onTap_runningActionsCount = 0;
} else if (window.obj708_onTap_runningActionsCount == 0) {
	obj708_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj708 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj708;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj708;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);
	if (!isAnimationInfinite) {
		$("#obj708").one("obj708_animation_ended",function(event) {
		    window.obj708_onTap_runningActionsCount = window.obj708_onTap_runningActionsCount - 1;
if (window.obj708_onTap_runningActionsCount < 0) {
	window.obj708_onTap_runningActionsCount = 0;
} else if (window.obj708_onTap_runningActionsCount == 0) {
	obj708_onTap_actionGroup1();
}
		});
	}
 }



















};
obj708_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj708_onTap_activeActionGroupIndex = -1;
		$("#obj708").trigger("obj708_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 708) {
				console.warn("de-queueing event obj708." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj708").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj708_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj708: Event Touch Down
 *
 */
$("#obj708").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj708_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj708_onTap is still running");
	return;
}
var obj708_onTap_runningActionsCount = 0;
var obj708_onTap_loopCount = 0;
obj708_onTap_actionGroup0();
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
	
$("#obj702").trigger('SCEventShow');
$("#obj708").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});