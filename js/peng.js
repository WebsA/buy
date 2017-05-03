/**
 * Created by Administrator on 2017/5/3.
 */
//    订单选项卡
$('.list span').click(function () {
    $('.list span:nth-child(2)').removeClass('first');
    $(this).next().addClass('first');
    $('.ddbox').removeClass('first');
    $('.ddbox').eq($(this).parent().index()).addClass('first');
})
