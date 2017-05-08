/**
 * Created by Administrator on 2017/5/4.
 */
/*侧滑动效*/
$(function(){
    //slide是侧滑内容
    //content是body内容
    var body = $('body').get(0);
    var content = $('.m-content');
    var cehua = $('.slideslip');
    var cehuas = new Hammer(body);
    var width= Math.abs(parseInt(cehua.css('left')));
    cehuas.on('panright',function (e) {
        if(e.deltaX > 150 && e.deltaY < 50){
            if(!$(e.target).parents().eq(0).hasClass('swiper-slide')){
                cehua.animate({
                    left:0,
                },400,'cubic-bezier(.17,.67,.83,.67)');
                content.animate({
                    left:width,
                },400,'cubic-bezier(.17,.67,.83,.67)');
            }
        }
    });
    cehuas.on('panleft',function (e) {
        if(parseInt(cehua.css('left')) == 0){
            cehua.animate({
                left:-width,
            },400,'cubic-bezier(.17,.67,.83,.67)');
            content.animate({
                left:0,
            },400,'cubic-bezier(.17,.67,.83,.67)');
        }
    });
//    搜索
    var ss = new Hammer($('.ss').get(0));
    ss.on('tap', function () {
        location.href = 'X-search1.html';
    });
//    好友添加
    var friend = new Hammer($('.m-header b').get(0));
    friend.on('tap', function () {
        location.href = 'https://htmlpreview.github.io/?https://github.com/WebsA/buy/blob/master/X-message.html';
    });
});
