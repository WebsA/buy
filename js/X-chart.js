'use strict'

window.onload=function(){

//	聊天
	var plus=document.querySelector('.chat2 .top .right');
	var plushid=document.querySelector('.chat2 .bottom');
	var pluss = new Hammer(plus);
	pluss.on('tap',function () {
	    $(plushid).toggleClass('active');
	    // $(plushid).css('display','block');
        // console.log(plushid);
    });
	// plus.onclick=function(){
	// 	plushid.style.display="block";
	// }
	
//	addEventListener();
}
