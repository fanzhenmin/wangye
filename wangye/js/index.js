/*
* @Author: FZM
* @Date:   2017-10-01 20:42:02
* @Last Modified by:   FZM
* @Last Modified time: 2017-10-01 20:59:15
*/

$(function(){
    $(document).mousedown(false);
    /////////////banner图
    $('.yuan>.yuan2').click(function(){
        $('.ban>img:last-child').animate({left:0},500);
        $('.ban>img:first-child').animate({left:-1343},500);
        $('.yuan>.yuan2').css({background:'#7C7C7C'});
        $('.yuan>.yuan1').css({background:'#E3E3E3'});
    });
    $('.yuan>.yuan1').click(function(){
        $('.ban>img:last-child').animate({left:1343},500)
        $('.ban>img:first-child').animate({left:0},500)
        $('.yuan>.yuan2').css({background:'#E3E3E3'})
        $('.yuan>.yuan1').css({background:'#7C7C7C'})
    });
    //////////////////////imgs
    let pdd = $('.pdd');
    let pimg = $('.pdd>img');
    pdd.each(function(index){
        $(this).mouseenter(function(){
            pimg.eq(index).stop();
            pimg.eq(index).css('marginLeft',-10)
        })
        $(this).mouseleave(function(){
            pimg.eq(index).stop();
            pimg.eq(index).css('marginLeft',0)
        })
    })
    //////////////img
    $('.timg1').each(function(index){
        $(this).mouseenter(function(){
            $('.timg1>a>img').eq(index).stop();
            $('.timg1>a>img').eq(index).animate({left:-20})
        })
        $(this).mouseleave(function(){
            $('.timg1>a>img').eq(index).stop();
            $('.timg1>a>img').eq(index).animate({left:0})
        })
    })
    /////////////3张图
    let timer = null;
    let num = 0;
    $('.zhezhao>ul>li').each(function(index){
        $(this).click(function(){
            $('.zixun2-2>ul>li>a>img').css({opacity:0})
            $('.zixun2-2>ul>li>a>img').eq(index).animate({opacity:1})
            $('.zhezhao>ul>li').css({background:'#29292A',color:'#fff'});
            $('.zhezhao>ul>li').eq(index).css({background:'#fff',color:'#29292A'})
            num = index;
        })
    })
    timer = setInterval(fn,2500);
    function fn(){
            num++;
            if(num==3){
                num=0
            }
            $('.zixun2-2>ul>li>a>img').css({opacity:0})
            $('.zixun2-2>ul>li>a>img').eq(num).animate({opacity:1})
            $('.zhezhao>ul>li').css({background:'#29292A',color:'#fff'});
            $('.zhezhao>ul>li').eq(num).css({background:'#fff',color:'#29292A'})
    }
    $('.zixun2-2>ul').on({mouseover:function(){
        clearInterval(timer);
    },mouseout:function(){
        timer = setInterval(fn,2500);
    }})

    // ////////////////////自动向上
    function gun(){
        let parent = $('.zixuntxt');
        $('.zixuntxt').find('ul').animate({marginTop:-33},500,function(){
            $(this).css({marginTop:0}).find('li:first').appendTo(this);
        })
    }
    let time = setInterval(gun,1000);
    $('.zixuntx').on({mouseover:function(){
        clearInterval(time);
    }})
    $('.zixuntx').mouseout(function(){
        time = setInterval(gun,1000);
    })
    //////////////////////////
    let uzi = $('.uzi');
    let headr = $('.headr')
    headr.on('mouseenter',function(){
        uzi.stop();
        uzi.slideToggle();
    })
    headr.on('mouseleave',function(){
        uzi.stop();
        uzi.slideToggle();
    })
})


// let zixun = document.querySelector('.zixuntx');
// let zixunt1 = document.querySelector('.zixuntxt');
// let zixunt2 = document.querySelector('.zixuntxt2');
// let zh = zixun.offsetHeight;
// zixunt2.innerHTML = zixunt1.innerHTML;
// console.log(zixunt1.innerHTML)
// zixunt1.style.height = zh+'px';
// zixunt2.style.height = zh+'px';
// let time = setInterval(scro,50);
//     function scro(){
//         if(zixun.scrollTop>=zixun.offsetHeight){
//             zixun.scrollTop = 0
//         }else{
//              zixun.scrollTop++
//         }
//     }
//     zixun.onmouseover = function(){
//         clearInterval(time);
//     }
//     zixun.onmouseout = function(){
//         time = setInterval(scro,50);
//     }




