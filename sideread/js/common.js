//手机端和电脑端通用的

function simjs(){
	this.dom = false;
	return this;
}

simjs.prototype = {

	"id":function(i){
		this.dom = document.getElementById(i) || false;
		return this;
	},

	//设置css样式
	css:function(cssString){
		
		if(!this.dom) return false;

		if( this.dom.style.cssText !== false){

			var cssRule = '';
			for (i in cssString){
				cssRule += i + ':' + cssString[i] + ';'
			}
			this.dom.style.cssText += cssRule;

		}else{

			for (i in cssString){
				this.dom.style[i] = cssString[i];
			}

		}

	}

}

$ = new simjs();


//显示最新文章
function showNewPosts(){

	$.id("hot7-posts").css({"display":"none"});
	$.id("new-posts").css({"display":"block"});
	$.id("sidebar").css({"display":"none"});

}

//显示七日热门
function showHotPosts(){

	$.id("hot7-posts").css({"display":"block"});
	$.id("new-posts").css({"display":"none"});
	$.id("sidebar").css({"display":"none"});


}

//显示侧边栏
function showSidebar(){
	$.id("single").css({"display":"none"});	
	$.id("sidebar").css({"display":"block"});
	$.id("hot7-posts").css({"display":"none"});
	$.id("new-posts").css({"display":"none"});
}

//显示侧边栏
function showSingle(){
	$.id("single").css({"display":"block"});	
	$.id("sidebar").css({"display":"none"});
	$.id("hot7-posts").css({"display":"none"});
	$.id("new-posts").css({"display":"none"});
}



$.id("show-new-posts").dom.onclick = showNewPosts;
$.id("show-hot7-posts").dom.onclick = showHotPosts;
$.id("show-sidebar").dom.onclick = showSidebar;
$.id("show-currentpost").dom.onclick = showSingle;