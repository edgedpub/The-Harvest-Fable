window.SCQuickPreview = false;
window.SCDisableDeviceMotion = false;
window.tocIsVisible = false;
window.aigX = 0;  
window.aigY = 0;
window.touchDownEvent = "touchstart mousedown"; 
window.touchUpEvent = "touchend mouseup"; 
window.touchMoveEvent = "touchmove mousemove";

window.SCuaosIsWindows;
if ((/windows/i.test(navigator.userAgent.toLowerCase()))) {
	window.SCuaosIsWindows = true;
}

window.PubCoderHtmlLocal;
switch(window.location.protocol) {
   case 'http:':
   case 'https:':
   	window.PubCoderHtmlLocal = false;
     //remote file over http or https
     break;
   case 'file:':
   window.PubCoderHtmlLocal = true;
     //local file
     break;
   default: 
}

$(document).ready(function(){
	$('img').on('dragstart', function(event) { event.preventDefault(); });
});

/*
 *
 *   Utility Functions
 *
 */

function getBrowser() {
	if (PubCoder.isAndroidReader) return "android";
	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
	var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
	var browser = "";
	if (isOpera)
		browser = "opera";
	else if (isFirefox)
		browser = "firefox";
	else if (isSafari)
		browser = "safari";
	else if (isChrome)
		browser = "chrome";
	else if (isIE)
		browser = "explorer";
	
	return browser;
}

function setPrefixCss3() {
	var prefix = "";
	var browser = getBrowser();
	if (browser == "firefox")
		prefix ="-moz-";
	else if (browser == "safari" || browser == "chrome" || browser == "android")
		prefix ="-webkit-";
	else
		prefix ="";
	return prefix;
}


function isLocationInElement (element, x, y)
	{
		var elmOffset = $(element).offset();
		if (x >= elmOffset.left && x <= (elmOffset.left + $(element).width()) && 
			y >= elmOffset.top && y <= (elmOffset.top + $(element).height()))
			return true;
		return false;
	}	

function setNewPos(min, max, deltaMin, deltaMax, initialPos, nodePos, relativePos, actualPos, element, dim)
{
	var newX, elementDim;
	var newPos = initialPos - nodePos - relativePos + actualPos;
	var elmOffset = $(element).offset();
	if (min != null) {
		if (actualPos - deltaMin <= min) {
			newX = min - relativePos;
		} else if (actualPos + deltaMax >= max) {
			if (dim == "x")
				elementDim = $(element).width();
			else
				elementDim = $(element).height();
			newX = max - relativePos - elementDim;
		} else {
			newX = newPos;
		}
	} else
			newX = newPos;
	return newX;
}

function isLocationInElementDragDropOffset(element, x, y)
	{
		var elmOffset = $(element)[0].getBoundingClientRect();
		if (x >= elmOffset.left && x <= (elmOffset.left + elmOffset.width) && 
			y >= elmOffset.top && y <= (elmOffset.top + elmOffset.height))
			return true;
		return false;
	}	

 function setNewPosDragDropOffset(min, max, deltaMin, deltaMax, initialPos, nodePos, relativePos, actualPos, element, dim)
{
	var newX, elementDim;
	var newPos = initialPos - nodePos - relativePos + actualPos;
	var elmOffset = $(element)[0].getBoundingClientRect();
	if (min != null) {
		if (actualPos - deltaMin <= min) {
			newX = min - relativePos;
		} 
		else if (actualPos + deltaMax >= max) {
			if (dim == "x") {
				elementDim = elmOffset.width;
			}
			else {
				elementDim = elmOffset.height;
			}
			newX = max - relativePos - elementDim;
		} 
		else {
			newX = newPos;
		}
	} 
	else newX = newPos;

	return newX;
}	

//functions for gravity acceleration actions
function boundingBoxCheckX(posX, objectX, containerObject, ax, isBouncing){
	var minX = 0, maxX = 0, x = posX;
	var containerNodeOffset = containerObject.offset();
	var generalContainerNodeOffset = $(".SCPage").offset();
		minX = containerNodeOffset.left - generalContainerNodeOffset.left;
		maxX = minX + containerObject.width();
		
	if (x<minX) { 
		x = minX;
	}
	if (x>maxX-objectX) { 
		x = maxX-objectX;

	}
	
	return x;	
}

function isBoundingBoxCheckX(posX, objectX, containerObject){
var minX = 0, maxX = 0, x = posX;
var containerNodeOffset = containerObject.offset();
var generalContainerNodeOffset = $(".SCPage").offset();
	minX = containerNodeOffset.left - generalContainerNodeOffset.left;
	maxX = minX + containerObject.width();
	
if (x<minX)  
	return 1;
 else if (x>maxX-objectX)  
	return 2; 
 else 
	return 0;
}
function boundingBoxCheckY(posY, objectY, containerObject){
var minY = 0, maxY = 0, y = posY;
var containerNodeOffset = containerObject.offset();
var generalContainerNodeOffset = $(".SCPage").offset();
	minY = containerNodeOffset.top - generalContainerNodeOffset.top;
	maxY = minY + containerObject.height();

if (y<minY)  
	y = minY;

if (y>maxY-objectY)  
	y = maxY-objectY; 

return y;	
}

function isBoundingBoxCheckY(posY, objectY, containerObject){
var minY = 0, maxY = 0, y = posY;
var containerNodeOffset = containerObject.offset();
var generalContainerNodeOffset = $(".SCPage").offset();
	minY = containerNodeOffset.top - generalContainerNodeOffset.top;
	maxY = minY + containerObject.height();

if (y<minY)  
	return 1;
else if (y>maxY-objectY)  
	return 2;
else
	return 0
}

//function used by rotate.scx
function rotate(objectId,timesRun,howManyTimes,rotationToDegrees,rotationSpeed,effectEasing,transformOriginX,transformOriginY,functionCompleted) {
	$('#' + objectId).css(setPrefixCss3() + 'transform-origin','' + transformOriginX + ' ' + transformOriginY + '');
		
	var rotationToDegreesString;
	if (rotationToDegrees.indexOf("-") == -1)
		rotationToDegreesString = "+=" + rotationToDegrees;
	else
		rotationToDegreesString = "-=" + rotationToDegrees.substr(1);
	switch(effectEasing) {
	case "ease-in":
		effectEasing = "easieEaseIn";
	  break;
	case "ease-out":
		effectEasing = "easieEaseOut";
	  break;
	case "linear":
		effectEasing = "easieLinear";
	  break;
	case "ease":
		effectEasing = "easieEaseInOut";
	  break;
	case "bounce-in":
		effectEasing = "easeInBounce";
	  break;
	case "bounce-out":
		effectEasing = "easeOutBounce";
	  break;
	case "elastic-in":
		effectEasing = "easeInElastic";
	  break;
	case "elastic-out":
		effectEasing = "easeOutElastic";
	  break;
}
	
	$('#' + objectId).animate({rotate: '' + getScale(objectId) + 'deg'}, {queue: false, duration: 0});
	$('#' + objectId).animate({rotate: '' + rotationToDegreesString + 'deg'}, {queue: false, duration: rotationSpeed, easing: effectEasing, complete: function(){
		  if (timesRun == howManyTimes) {
	  			functionCompleted();
	      	 }
		}});		
}

function getScale(obj) {
	var angle;
	var el = document.getElementById(obj);
	var st = window.getComputedStyle(el, null);
	var tr = st.getPropertyValue("-webkit-transform") ||
	         st.getPropertyValue("-moz-transform") ||
	         st.getPropertyValue("-ms-transform") ||
	         st.getPropertyValue("-o-transform") ||
	         st.getPropertyValue("transform") ||
	         "fail...";

if (st != null && tr != "none") {


	var values = tr.split('(')[1];
	    values = values.split(')')[0];
	    values = values.split(',');
	var a = values[0];
	var b = values[1];
	var c = values[2];
	var d = values[3];

	var scale = Math.sqrt(a*a + b*b);

	var sin = b/scale;
	angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
} else {
	angle = 0;
}
	return angle;
}



//end functions used by rotate.scx
//functions used by scale.scx
function scale(objectId,timesRun,howManyTimes,scaleX,scaleY,effectDurationMS,effectEasing,transformOriginX,transformOriginY,ScaleModeString,functionCompleted) {
	switch(effectEasing) {
	case "ease-in":
		effectEasing = "easieEaseIn";
	  break;
	case "ease-out":
		effectEasing = "easieEaseOut";
	  break;
	case "linear":
		effectEasing = "easieLinear";
	  break;
	case "ease":
		effectEasing = "easieEaseInOut";
	  break;
	case "bounce-in":
		effectEasing = "easeInBounce";
	  break;
	case "bounce-out":
		effectEasing = "easeOutBounce";
	  break;
	case "elastic-in":
		effectEasing = "easeInElastic";
	  break;
	case "elastic-out":
		effectEasing = "easeOutElastic";
	  break;
}
	$('#' + objectId).css(setPrefixCss3() + 'transform-origin','' + transformOriginX + ' ' + transformOriginY + '');
	$('#' + objectId).animate({scalex: '' + ScaleModeString + scaleX  + '', scaley: '' + ScaleModeString + scaleY  + ''}, {queue: false, duration: effectDurationMS, easing: effectEasing, complete: function(){	
	if (timesRun == howManyTimes) {
  			functionCompleted();
      	 }
	}});		

}

//end functions used by scale

function showAssetsParity(option){
    if (option == 'even' || option == 'odd') {
        $('*[data-pubcoder="' + option + '"]').css('display','block');
    } else {
        $('*[data-pubcoder="odd"]').css('display','block');
        $('*[data-pubcoder="even"]').css('display','block');
    }
}

//initAnimations
function initAnimation(targetObjectId,width,height,fps,countVar,isInfinite,howManyLoops,backToFirstFrame) {
	var obj = "#obj" + targetObjectId;
	var frameTime = 1000/fps;
	var nextAnimationAfterLastLoop = howManyLoops + 1
	var lastLoop = howManyLoops;
	var spritespin = $(obj).spritespin({  
		width   : width * pubcoder.project.pixelsDensity,  // width in pixels of the window/frame, eventually adjusted for pixels density
		height  : height * pubcoder.project.pixelsDensity,  // height in pixels of the window/frame, eventually adjusted for pixels density
		animate : false,
		renderer: 'canvas', // previous 'image' rendering flickers on newest version of FireFox and iOS Safari/WKWebView
		loop: true,
		frameTime: frameTime,
		onFrame: function(e,data) {
			var stopAtFrame = data.images.length - 1;
			if (!isInfinite) {
				var api = $(obj).spritespin('api');
				if (data.frame == 0) {
					countVar++;
					if (backToFirstFrame && countVar == nextAnimationAfterLastLoop) {
						stopAnimation(api,obj);
						countVar = 1;
					}
				}
				if (data.frame == stopAtFrame && countVar == lastLoop) {
					if (!backToFirstFrame) {
						stopAnimation(api,obj);
						countVar = 0;
					}
				}
			}
		},
		onLoad: function () {
			// reset width/height of the object which where eventually adjusted for pixels density (content remains adjusted)
			$(obj).css("width", width + "px");
			$(obj).css("height", height + "px");
			// alternative: set canvas width to adjusted for pixels density and uncomment scaling compensation on page style.css
			// $("canvas", obj).css("width", width * pubcoder.project.pixelsDensity + "px");
			// $("canvas", obj).css("height", height * pubcoder.project.pixelsDensity + "px");
			window["api_animate_obj" + targetObjectId] = $(obj).spritespin("api");
		}
	});
	function stopAnimation(apiAnimation,object) {
		apiAnimation.stopAnimation();
		$(object).removeClass("playing");
		var objectStripped = object.substr(1);
		$(object).trigger(objectStripped + "_animation_ended");
	}
}

function preventPropagation(){
	$.each($("body *"), function(i) { 
		var events = $._data( $(this)[0], "events" ); 
		var objectTarget = $(this);
		for (var i in events) {
			if (i != "undefined") { 
						objectTarget.on("mousedown touchstart",function(event){ 
							event.stopPropagation(); 

				}); 
			} 
		}
		});	
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function SCPreventTouch(obj){
	$(obj).css('touch-action','none');
}
