pubcoder.projectID = pubcoder.projectID || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.id = pubcoder.project.id || "2F3D23559A574BC6B006B65195797F50";
pubcoder.project.title = pubcoder.project.title || "The Harvest Fable";
pubcoder.page.id = pubcoder.page.id || 2;
pubcoder.page.title = pubcoder.page.title || "1";
pubcoder.page.number = pubcoder.page.number || 1;
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
var obj339_onTap_activeActionGroupIndex = -1;
var obj339_onTap_runningActionsCount = 0;
var obj339_onTap_loopCount = 0;
var obj343_onTap_activeActionGroupIndex = -1;
var obj343_onTap_runningActionsCount = 0;
var obj343_onTap_loopCount = 0;
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
		
obj339_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj339_onTap_activeActionGroupIndex = -1;
		$("#obj339").trigger("obj339_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 339) {
				console.warn("de-queueing event obj339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj339_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_368();
function goToPage_368() {
	window.obj339_onTap_runningActionsCount = obj339_onTap_runningActionsCount + 1;
	$("#anchor17")[0].click();
	window.obj339_onTap_runningActionsCount = window.obj339_onTap_runningActionsCount - 1;
if (window.obj339_onTap_runningActionsCount < 0) {
	window.obj339_onTap_runningActionsCount = 0;
} else if (window.obj339_onTap_runningActionsCount == 0) {
	obj339_onTap_actionGroup1();
}
}





















};
obj339_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj339_onTap_activeActionGroupIndex = -1;
		$("#obj339").trigger("obj339_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 339) {
				console.warn("de-queueing event obj339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj339_onTap_activeActionGroupIndex = 1;
	





















};
obj343_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj343_onTap_activeActionGroupIndex = -1;
		$("#obj343").trigger("obj343_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 343) {
				console.warn("de-queueing event obj343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj343_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_367();
function goToPage_367() {
	window.obj343_onTap_runningActionsCount = obj343_onTap_runningActionsCount + 1;
	$("#anchor18")[0].click();
	window.obj343_onTap_runningActionsCount = window.obj343_onTap_runningActionsCount - 1;
if (window.obj343_onTap_runningActionsCount < 0) {
	window.obj343_onTap_runningActionsCount = 0;
} else if (window.obj343_onTap_runningActionsCount == 0) {
	obj343_onTap_actionGroup1();
}
}





















};
obj343_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj343_onTap_activeActionGroupIndex = -1;
		$("#obj343").trigger("obj343_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 343) {
				console.warn("de-queueing event obj343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj343_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		























/*
 *
 *   obj339: Event Touch Down
 *
 */
$("#obj339").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj339_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj339_onTap is still running");
	return;
}
var obj339_onTap_runningActionsCount = 0;
var obj339_onTap_loopCount = 0;
obj339_onTap_actionGroup0();
});










/*
 *
 *   obj343: Event Touch Down
 *
 */
$("#obj343").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj343_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj343_onTap is still running");
	return;
}
var obj343_onTap_runningActionsCount = 0;
var obj343_onTap_loopCount = 0;
obj343_onTap_actionGroup0();
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
	
$("#obj333").trigger('SCEventShow');
$("#obj335").trigger('SCEventShow');
$("#obj339").trigger('SCEventShow');
$("#obj343").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});