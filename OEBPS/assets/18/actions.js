pubcoder.projectID = pubcoder.projectID || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.id = pubcoder.project.id || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.title = pubcoder.project.title || "The Harvest Fable";
pubcoder.page.id = pubcoder.page.id || 870;
pubcoder.page.title = pubcoder.page.title || "18";
pubcoder.page.number = pubcoder.page.number || 18;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj873_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj873_onTap_activeActionGroupIndex = -1;
var obj873_onTap_runningActionsCount = 0;
var obj873_onTap_loopCount = 0;
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
	
initAnimation_873();
function initAnimation_873()
{
    var targetObjectId = 873;
    var widthSCAnimationObject = 1366;
    var heightSCAnimationObject = 1024;
    var framesPerSecond = 1;
    var howManyLoops = 1;
    var backToFirstFrame = false;
    var isAnimationInfinite = false;
    window.audio_animation_obj873 = $("#")[0];
    window.hasAudioTrack_obj873 = false
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj873_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
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
		
obj873_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj873_onTap_activeActionGroupIndex = -1;
		$("#obj873").trigger("obj873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 873) {
				console.warn("de-queueing event obj873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj873_onTap_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj873 
playAnimation_880();
function playAnimation_880() {
	var targetObjectId = "#obj873";
	var targetObject = $(targetObjectId)[0];
	window.obj873_onTap_runningActionsCount = obj873_onTap_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj873_onTap_runningActionsCount = window.obj873_onTap_runningActionsCount - 1;
if (window.obj873_onTap_runningActionsCount < 0) {
	window.obj873_onTap_runningActionsCount = 0;
} else if (window.obj873_onTap_runningActionsCount == 0) {
	obj873_onTap_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj873 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj873;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj873;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);
	if (!isAnimationInfinite) {
		$("#obj873").one("obj873_animation_ended",function(event) {
		    window.obj873_onTap_runningActionsCount = window.obj873_onTap_runningActionsCount - 1;
if (window.obj873_onTap_runningActionsCount < 0) {
	window.obj873_onTap_runningActionsCount = 0;
} else if (window.obj873_onTap_runningActionsCount == 0) {
	obj873_onTap_actionGroup1();
}
		});
	}
 }



















};
obj873_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj873_onTap_activeActionGroupIndex = -1;
		$("#obj873").trigger("obj873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 873) {
				console.warn("de-queueing event obj873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj873_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj873: Event Touch Down
 *
 */
$("#obj873").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj873_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj873_onTap is still running");
	return;
}
var obj873_onTap_runningActionsCount = 0;
var obj873_onTap_loopCount = 0;
obj873_onTap_actionGroup0();
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
	
$("#obj871").trigger('SCEventShow');
$("#obj873").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});