"use strict";$(".nav-xs-trigger").on("click",function(){$(".nav-xs-panel").addClass("active"),$(".nav-xs-overlay").addClass("active")}),$(".nav-xs-overlay").on("click",function(){$(".nav-xs-panel").removeClass("active"),$(".nav-xs-overlay").removeClass("active")}),$("#file").change(function(){var a=$(this).val().replace(/.*(\/|\\)/,"");$(".form-control-file-text").html(a)});