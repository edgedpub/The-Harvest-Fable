/**!
 * @preserve Drop Shadow animation
 * Copyright 2023 Angelo Scicolone
 * Released under the MIT and GPL licenses.
 * based on http://www.bitstorm.org/jquery/shadow-animation/
 */

jQuery(function($, undefined) {
	/**
	 * Check whether the browser supports RGBA color mode.
	 *
	 * Author Mehdi Kabab <http://pioupioum.fr>
	 * @return {boolean} True if the browser support RGBA. False otherwise.
	 */
	function isRGBACapable() {
		var $script = $('script:first'),
		color = $script.css('color'),
		result = false;
		if (/^rgba/.test(color)) {
			result = true;
		} else {
			try {
				result = (color !== $script.css('color', 'rgba(0, 0, 0, 0.5)').css('color'));
				$script.css('color', color);
			} catch (e) {
			}
		}
		$script.removeAttr('style');

		return result;
	}

	$.extend(true, $, {
		support: {
			'rgba': isRGBACapable()
		}
	});

	/*************************************/

	// First define which property to use
	var styles = $('html').prop('style');
	var dropShadowProperty;
	$.each(['filter','webkitFilter'], function(i, property) {
		var val = styles[property];
		if (typeof val !== 'undefined') {
			dropShadowProperty = property;
			return false;
		}
	});

	// Extend the animate-function
	if (dropShadowProperty) {
		$['Tween']['propHooks']['dropShadow'] = {
			get: function(tween) {
				return $(tween.elem).css(dropShadowProperty);
			},
			set: function(tween) {
				var style = tween.elem.style;
				var p_begin = parseShadows($(tween.elem)[0].style[dropShadowProperty] || $(tween.elem).css(dropShadowProperty));
				var p_end = parseShadows(tween.end);
				var maxShadowCount = Math.max(p_begin.length, p_end.length);
				var i;
				for(i = 0; i < maxShadowCount; i++) {
					p_end[i] = $.extend({}, p_begin[i], p_end[i]);
					if (p_begin[i]) {
						if (!('color' in p_begin[i]) || $.isArray(p_begin[i].color) === false) {
							p_begin[i].color = p_end[i].color || [0, 0, 0, 0];
						}
					} else {
						console.warn("eccolo");
						p_begin[i] = parseShadows('drop-shadow(0 0 0 rgba(0,0,0,0))')[0];
					}
				}
				tween['run'] = function(progress) {
					var rs = calculateShadows(p_begin, p_end, progress);
					// console.warn(rs);
					style[dropShadowProperty] = rs;
				};
			}
		};
	}

	// Calculate an in-between shadow.
	function calculateShadows(beginList, endList, pos) {
		var shadows = [];
		$.each(beginList, function(i) {
			var parts = [], begin = beginList[i], end = endList[i];

			if (typeof end.left !== 'undefined') {
				parts.push(parseFloat(begin.left + pos * (end.left - begin.left)) + 'px '
				+ parseFloat(begin.top + pos * (end.top - begin.top)) + 'px');
			}
			if (typeof end.blur !== 'undefined') {
				parts.push(parseFloat(begin.blur + pos * (end.blur - begin.blur)) + 'px');
			}
			if (typeof end.color !== 'undefined') {
				var color = 'rgb' + ($.support['rgba'] ? 'a' : '') + '('
				+ parseInt((begin.color[0] + pos * (end.color[0] - begin.color[0])), 10) + ','
				+ parseInt((begin.color[1] + pos * (end.color[1] - begin.color[1])), 10) + ','
				+ parseInt((begin.color[2] + pos * (end.color[2] - begin.color[2])), 10);
				if ($.support['rgba']) {
					color += ',' + parseFloat(begin.color[3] + pos * (end.color[3] - begin.color[3]));
				}
				color += ')';
				parts.push(color);
			}
			shadows.push(parts.join(' '));
		});
		var r = "drop-shadow(" + shadows.join(', ') + ")"
		return r;
	}

	// Parse the shadow value and extract the values.
	function parseShadows(shadow) {
		const regex = /drop-shadow\((.*)\)/;
		const match = shadow.match(regex);
		if (match && match[1]) {
			shadow = match[1];
		}

		var parsedShadows = [];
		var parsePosition = 0;
		var parseLength = shadow.length;

		function findOffsets() {
			var m = /^(-?[0-9\.]+)(?:px)?\s+(-?[0-9\.]+)(?:px)?(?:\s+(-?[0-9\.]+)(?:px)?)?(?:\s+(-?[0-9\.]+)(?:px)?)?/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.left = parseInt(m[1], 10);
				parsedShadow.top = parseInt(m[2], 10);
				parsedShadow.blur = (m[3] ? parseInt(m[3], 10) : 0);
				// parsedShadow.spread = (m[4] ? parseInt(m[4], 10) : 0);
				parsePosition += m[0].length;
				return true;
			}
			return false;
		}
		function findColor() {
			var m = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.color = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16), 1];
				parsePosition += m[0].length;
				return true;
			}
			m = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.color = [parseInt(m[1], 16) * 17, parseInt(m[2], 16) * 17, parseInt(m[3], 16) * 17, 1];
				parsePosition += m[0].length;
				return true;
			}
			m = /^rgb\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.color = [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10), 1];
				parsePosition += m[0].length;
				return true;
			}
			m = /^rgba\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.color = [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10), parseFloat(m[4])];
				parsePosition += m[0].length;
				return true;
			}
			return false;
		}
		function findWhiteSpace() {
			var m = /^\s+/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsePosition += m[0].length;
				return true;
			}
			return false;
		}
		function normalizeShadow(shadow) {
			if ($.isPlainObject(shadow)) {
				var i, sColor, cLength = 0, color = [];
				if ($.isArray(shadow.color)) {
					sColor = shadow.color;
					cLength = sColor.length;
				}
				for(i = 0; i < 4; i++) {
					if (i < cLength) {
						color.push(sColor[i]);
					} else if (i === 3) {
						color.push(1);
					} else {
						color.push(0);
					}
				}
			}
			return $.extend({
				'left': 0,
				'top': 0,
				'blur': 0,
			}, shadow);
		}
		var parsedShadow = normalizeShadow();

		while (parsePosition < parseLength) {
			if (findOffsets()) {
				findWhiteSpace();
			} else if (findColor()) {
				findWhiteSpace();
			} else {
				break;
			}
		}
		parsedShadows.push(normalizeShadow(parsedShadow));
		return parsedShadows;
	}
});
