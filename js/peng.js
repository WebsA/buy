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

//购物车
$(document).ready(function () {
    /*var num = $('.five').length;
    for(var h = 0; h < num; h++){*/
        //添加
        var add = $('img:nth-child(3)',$('.five').eq(0)).get(0);
        var inputs = $('input',$('.five').eq(0)).get(0);
        var i = 1;
        var adds = new Hammer(add);
        adds.on('tap', function () {
            i++;
            inputs.value = i;
        });
//    减少
        var small = $('img:nth-child(1)',$('.five').eq(0)).get(0);
        var smalls = new Hammer(small);
        smalls.on('tap', function () {
            if(i > 1){
                i--;
                inputs.value = i;
            }
        });
   /* }*/
    //添加
    var addt = $('img:nth-child(3)',$('.five').eq(1)).get(0);
    var inputst = $('input',$('.five').eq(1)).get(0);
    var it = 1;
    var addst = new Hammer(addt);
    addst.on('tap', function () {
        it++;
        inputst.value = it;
    });
//    减少
    var smallt = $('img:nth-child(1)',$('.five').eq(1)).get(0);
    var smallst = new Hammer(smallt);
    smallst.on('tap', function () {
        if(it > 1){
            it--;
            inputst.value = it;
        }
    });


//    滑动
    var thing = new Hammer($('.thing').get(0));
    var thWidth = $('.q-caozuo').width();
    var thingbox = $('.thingBox').eq(0);
    var caozuo = $('.q-caozuo').eq(0);
    thing.on('panleft', function () {
        thingbox.animate({
            left: - thWidth,
        },400,'linear');
        caozuo.animate({
            left:'74%',
        },400,'linear');
    });
    thing.on('panright', function () {
        thingbox.animate({
            left: 0,
        },400,'linear');
        caozuo.animate({
            left:'100%',
        },400,'linear');
    });

    var things = new Hammer($('.thing').get(1));
    var thingboxs = $('.thingBox').eq(1);
    var caozuos = $('.q-caozuo').eq(1);
    things.on('panleft', function () {
        thingboxs.animate({
            left: - thWidth,
        },400,'linear');
        caozuos.animate({
            left:'74%',
        },400,'linear');
    });
    things.on('panright', function () {
        thingboxs.animate({
            left: 0,
        },400,'linear');
        caozuos.animate({
            left:'100%',
        },400,'linear');
    });

//    单击全选
    var quanxuan = new Hammer($('.bottom .left').get(0));
    var xuanzhong = $('.bottom .circle');
    var flag = true;
    quanxuan.on('tap', function () {
        if(flag){
            xuanzhong.addClass('q-xuanzhong');
            flag = false;
            $('.zan').addClass('q-xuanzhong');
        }else{
            xuanzhong.removeClass('q-xuanzhong');
            flag = true;
            $('.zan').removeClass('q-xuanzhong');
        }
    });
//    选中
    var dan = new Hammer($('.zan').get(0));
    dan.on('tap', function () {
        if(flag){
            $('.zan').eq(0).addClass('q-xuanzhong');
            flag = false;
        }else{
            $('.zan').eq(0).removeClass('q-xuanzhong');
            xuanzhong.removeClass('q-xuanzhong');
            flag = true;
        }
    });
    var dans = new Hammer($('.zan').get(1));
    dans.on('tap', function () {
        if(flag){
            $('.zan').eq(1).addClass('q-xuanzhong');
            flag = false;
        }else{
            $('.zan').eq(1).removeClass('q-xuanzhong');
            xuanzhong.removeClass('q-xuanzhong');
            flag = true;
        }
    });
});