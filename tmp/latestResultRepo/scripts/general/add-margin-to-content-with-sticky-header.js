'use strict';(function(){$(document).ready(function(){var $sequenceNav=$('.sequence_nav');var $stickyPageHeader=$('.sticky-page-header');var $content=$('#content > .container-fluid');var $header=void 0;var savedHeight=void 0;var currentHeight=void 0;var $sidebar=$('.sidebar-offcanvas');var sidebarTransitionDuration=parseFloat($sidebar.css('transition-duration'))*1000;var $collapseExpand=$('.collapse-left-nav, .expand-left-nav');var timer=0;var changeMarginInterval=void 0;if($sequenceNav.length){$header=$sequenceNav;}else if($stickyPageHeader.length){$header=$stickyPageHeader;}function changeContentMargin(){savedHeight=$header.outerHeight();$content.css('margin-top',savedHeight+'px');}if($sequenceNav.length||$stickyPageHeader.length){changeContentMargin();$(window).resize(function(){currentHeight=$header.outerHeight();if(savedHeight!==currentHeight)changeContentMargin();});$collapseExpand.on('click',function(){changeMarginInterval=setInterval(function(){currentHeight=$header.outerHeight();if(savedHeight!==currentHeight)changeContentMargin();timer+=10;if(timer>=sidebarTransitionDuration){clearInterval(changeMarginInterval);timer=0;}},10);});}});})();