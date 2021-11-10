$(document).ready(function(){
	$('st-actionContainer').launchBtn( { openDuration: 500, closeDuration: 300 } );
});

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
/*
 * Copyright 2016
 * Released under the MIT license
 * https://github.com/snowytech/st-action-panel-git
 *
 * @author: Drew D. Lenhart
 * @version: 0.0.1
 */
 (function($) {
  'use strict';

  $.fn.launchBtn = function(options) {
    var mainBtn, panel, clicks, settings, launchPanelAnim, closePanelAnim, openPanel, boxClick;

    mainBtn = $(".st-button-main");
    panel = $(".st-panel");
    clicks = 0;

    //default settings
    settings = $.extend({
      openDuration: 600,
      closeDuration: 200,
      rotate: true
    }, options);

    //Open panel animation
    launchPanelAnim = function() {
      panel.animate({
        opacity: "toggle",
        height: "toggle"
      }, settings.openDuration);
    };

    //Close panel animation
    closePanelAnim = function() {
      panel.animate({
        opacity: "hide",
        height: "hide"
      }, settings.closeDuration);
    };

    //Open panel and rotate icon
    openPanel = function(e) {
      if (clicks === 0) {
        if (settings.rotate) {
          $(this).removeClass('rotateBackward').toggleClass('rotateForward');
        }

        launchPanelAnim();
        clicks++;
      } else {
        if (settings.rotate) {
          $(this).removeClass('rotateForward').toggleClass('rotateBackward');
        }

        closePanelAnim();
        clicks--;
      }
      e.preventDefault();
      return false;
    };

    //Allow clicking in panel
    boxClick = function(e) {
      e.stopPropagation();
    };

    //Main button click
    mainBtn.on('click', openPanel);

    //Prevent closing panel when clicking inside
    panel.click(boxClick);

    //Click away closes panel when clicked in document
    $(document).click(function() {
      closePanelAnim();
      if (clicks === 1) {
        mainBtn.removeClass('rotateForward').toggleClass('rotateBackward');
      }
      clicks = 0;
    });
  };
}(jQuery));