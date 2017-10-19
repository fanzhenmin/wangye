$(function(){
    let uzi = $('.uzi');
    let headr = $('.headr');
    headr.on('mouseenter',function(){
        uzi.stop();
        uzi.show();
    })
    headr.on('mouseleave',function(){
        uzi.stop();
        uzi.hide();
    })
})