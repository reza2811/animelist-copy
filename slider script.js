var slider=document.getElementById('slider');

var isdown=false;
var start;
var scrollLeft;

slider.addEventListener('mousedown',function(e){
    isdown=true;
    start=e.pageX - slider.offsetLeft;
    scrollLeft=slider.scrollLeft;
})

slider.addEventListener('mouseup',function(){
    isdown=false;
})

slider.addEventListener('mousemove',function(e){
    if(!isdown){return}
    var x=e.pageX - slider.offsetLeft;
    var scrollmove=x - start;
    slider.scrollLeft=scrollLeft - scrollmove;
})