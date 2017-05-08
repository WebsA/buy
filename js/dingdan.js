/**
 * Created by qiangxl on 2017/5/8.
 */
//    订单选项卡
$(document).ready(function () {
    $('.list span:nth-child(1)').click(function () {
        $('.list span:nth-child(2)').removeClass('first');
        $(this).next().addClass('first');
        $('.ddbox').removeClass('first');
        $('.ddbox').eq($(this).parent().index()).addClass('first');
    });
});
