var close=document.getElementById('close');
var open=document.getElementById('open');
var sidebar=document.getElementById('sidebar');

close.addEventListener('click',function(e){
e.preventDefault();
sidebar.style.width='0px';
document.body.style.marginLeft='0px';
document.body.style.backgroundColor='#fff';
})
open.onclick=function(){
    sidebar.style.width='230px';
    document.body.style.marginLeft='230px';
    document.body.style.backgroundColor='rgba(0,0,0,0.2)';
}