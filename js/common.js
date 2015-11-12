window.onload=function(){
    setTimeout(function(){
        document.getElementById('container').className="container";
    },500);
}

//判断手机横竖屏状态： 
function hengshuping(){ 
    if(window.orientation==180||window.orientation==0){ 
        $("#mask").hide();        
    } 
    if(window.orientation==90||window.orientation==-90){ 
        $("#mask").show();         
    }
} 
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);  


//音乐
$('.btn_music a').on('touchend',function(event){
	var classname = $(this).attr('class');
	if ( classname == 'on' ) {
		document.getElementById('audio-music').pause();
		$(this).removeClass('on').addClass('off');
	} else if ( classname == 'off' ){
		document.getElementById('audio-music').play();
		$(this).removeClass('off').addClass('on');
	};
	return false;
});


 


//弹窗方法
var pop = {
	loadpop : function (pgname,cb){
		if($(".popin").length==0){
			$("body").append("<div class='popin'></div>");
		}
		if(typeof pgname == "object"){
			$(".popin").empty().append(pgname);
			if(typeof cb == "function"){
				cb();
			}
		}else{
			$(".popin").load(pgname,cb);
		}
	},
	unloadpop : function(pgname){
		$(".popin").remove();
	}
};


pop.loadpop($(".pop-share").clone(),function(){
	$(".popin").on("click",function(){
		pop.unloadpop();
	})
});








 