/**
 * Created by Administrator on 2017/5/3.
 */
//    订单选项卡
$(document).ready(function () {
    $('.list span').click(function () {
        $('.list span:nth-child(2)').removeClass('first');
        $(this).next().addClass('first');
        $('.ddbox').removeClass('first');
        $('.ddbox').eq($(this).parent().index()).addClass('first');
    });
});

// 确认订单页面确认支付
$(document).ready(function () {
   $('.zfb').click(function () {
       $('.zhezhao').css('display','block');
       $('.fkbox').css('height','8.5rem')
   })
    $('.guanbi').click(function () {
        $('.fkbox').css('height',0);
        $('.zhezhao').css('display','none');
    })

});