$(document).ready(function(){
  $(".up").click(function(){
    $("nav > a").css("display", "none")
    $(".up").addClass("hidden-elem")
    $(".down").removeClass("hidden-elem")
    $("main").css("margin-top", "61px")
  })

  $(".down").click(function(){
    $("nav > a").css("display", "block")
    $(".up").removeClass("hidden-elem")
    $(".down").addClass("hidden-elem")
    $("main").css("margin-top", "305px")
  })
})
