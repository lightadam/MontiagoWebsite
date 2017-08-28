$(document).ready(function(){
	var menuClicked = false;
	var secondMenuClicked = false;
	$(document).on("click", ".drowpdownsections", function(){
		var whichMenu = $(this).attr("data-menu");
		if(whichMenu == "video-series" && !menuClicked){
			$("#video-series-arrow").html("<span class=" + "'glyphicon glyphicon-menu-down'" + "></span>");
			menuClicked = true;
			$("#video-series").append("<div class=" + "panel panel-default" + " id=" + "'videopanel'" +"><div class=" + "panel-body" + ">The Casey Show</div></div>");
		}
		else if(whichMenu == "video-series" && menuClicked){
			$("#videopanel").remove();
			$("#video-series-arrow").html("<span class=" + "'glyphicon glyphicon-menu-right'" + "></span>");
			menuClicked = false;
		}
		if(whichMenu == "games" && !secondMenuClicked){
			$("#games-arrow").html("<span class=" + "'glyphicon glyphicon-menu-down'" + "></span>");
			secondMenuClicked = true;
			$("#games").append("<div class=" + "panel panel-default" + " id=" + "'gamepanel'" + "><div class=" + "panel-body" + ">Atuni's Mirror</div></div>");
		}
		else if(whichMenu == "games" && secondMenuClicked){
			$("#gamepanel").remove();
			$("#games-arrow").html("<span class=" + "'glyphicon glyphicon-menu-right'" + "></span>");
			secondMenuClicked = false;
		}
	})
})