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
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {$.fn.appear = function(fn, options) {var settings = $.extend({data: undefined, one: true, accX: 0, accY: 0 }, options); return this.each(function() {var t = $(this); t.appeared = false; if (!fn) {t.trigger('appear', settings.data); return; } var w = $(window); var check = function() {if (!t.is(':visible')) {t.appeared = false; return; } var a = w.scrollLeft(); var b = w.scrollTop(); var o = t.offset(); var x = o.left; var y = o.top; var ax = settings.accX; var ay = settings.accY; var th = t.height(); var wh = w.height(); var tw = t.width(); var ww = w.width(); if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {if (!t.appeared) t.trigger('appear', settings.data); } else {t.appeared = false; } }; var modifiedFn = function() {t.appeared = true; if (settings.one) {w.unbind('scroll', check); var i = $.inArray(check, $.fn.appear.checks); if (i >= 0) $.fn.appear.checks.splice(i, 1); } fn.apply(this, arguments); }; if (settings.one) t.one('appear', settings.data, modifiedFn); else t.bind('appear', settings.data, modifiedFn); w.scroll(check); $.fn.appear.checks.push(check); (check)(); }); }; $.extend($.fn.appear, {checks: [], timeout: null, checkAll: function() {var length = $.fn.appear.checks.length; if (length > 0) while (length--) ($.fn.appear.checks[length])(); }, run: function() {if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout); $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20); } }); $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {var old = $.fn[n]; if (old) {$.fn[n] = function() {var r = old.apply(this, arguments); $.fn.appear.run(); return r; } } }); })(jQuery);

}
/*
     FILE ARCHIVED ON 11:02:49 Mar 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:58:37 May 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.622
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.059
  esindex: 0.009
  cdx.remote: 29.235
  LoadShardBlock: 60.834 (3)
  PetaboxLoader3.datanode: 54.893 (4)
  PetaboxLoader3.resolve: 198.95 (2)
  load_resource: 211.631
*/