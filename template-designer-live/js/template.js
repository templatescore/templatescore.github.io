"use strict";$(function(){var t=$("#i-template-btn"),a=$(".i-template-btn-icon"),e=$("#i-page"),i=$("#i-template");t.click(function(){i.toggleClass("i-template-active"),a.toggleClass("i-template-btn-rotate"),e.toggleClass("i-page-active")}),$("ul.i-tabs li").click(function(){var t=$(this).attr("data-tab");$("ul.i-tabs li").removeClass("i-current"),$(".i-tab-content").removeClass("i-current"),$(this).addClass("i-current"),$("#"+t).addClass("i-current")})});