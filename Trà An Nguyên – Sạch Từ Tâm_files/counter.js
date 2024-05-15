var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 **	Plugin for counter shortcode
 */
(function($) {"use strict"; $.fn.countTo = function(options) {options = $.extend({}, $.fn.countTo.defaults, options || {}); var loops = Math.ceil(options.speed / options.refreshInterval), increment = (options.to - options.from) / loops; return $(this).each(function() {var _this = this, loopCount = 0, value = options.from, interval = setInterval(updateTimer, options.refreshInterval); function updateTimer() {value += increment; loopCount++; $(_this).html(value.toFixed(options.decimals)); if (typeof(options.onUpdate) === 'function') {options.onUpdate.call(_this, value); } if (loopCount >= loops) {clearInterval(interval); value = options.to; if (typeof(options.onComplete) === 'function') {options.onComplete.call(_this, value); } } } }); }; $.fn.countTo.defaults = {from: 0, to: 100, speed: 1000, refreshInterval: 100, decimals: 0, onUpdate: null, onComplete: null }; })(jQuery);

}
/*
     FILE ARCHIVED ON 05:12:13 Feb 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:58:39 May 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.548
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.056
  esindex: 0.01
  cdx.remote: 7.241
  LoadShardBlock: 82.914 (3)
  PetaboxLoader3.datanode: 65.91 (4)
  PetaboxLoader3.resolve: 82.395 (2)
  load_resource: 81.443
*/