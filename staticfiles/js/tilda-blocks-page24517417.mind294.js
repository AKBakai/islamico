function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t967_createMobileMenu(recid,previewMode){var rec=document.getElementById('rec'+recid);if(!rec)return;var menu=rec.querySelector('.t967');var burger=rec.querySelector('.t967__mobile');if(burger){burger.addEventListener('click',function(){if(burger.classList.contains('t967_opened')){t_onFuncLoad('t_menu__FadeOut',function(){t_menu__FadeOut(menu,300)});burger.classList.remove('t967_opened')}else{t_onFuncLoad('t_menu__fadeIn',function(){t_menu__fadeIn(menu,300,function(){if(menu.style.transform)menu.style.transform='';if(menu.style.opacity)menu.style.opacity=''})});burger.classList.add('t967_opened')}})}
var selectedBlock=document.getElementById('nav269976850');var selectedAppearOffset=selectedBlock?selectedBlock.getAttribute('data-appearoffset'):'';var isSelectedBlockFixed=selectedBlock?selectedBlock.classList.contains('t967__positionfixed'):!1;if(selectedBlock&&selectedAppearOffset&&isSelectedBlockFixed&&previewMode){window.addEventListener('resize',t_throttle(function(){if(window.innerWidth>980){t967_appearMenu(recid);if(menu.style.opacity)menu.style.opacity='';if(menu.style.display==='none')menu.style.display='';if(burger)burger.classList.remove('t967_opened')}else{if(menu.style.transform)menu.style.transform=''}}))}else{window.addEventListener('resize',t_throttle(function(){if(window.innerWidth>980){if(menu.style.opacity)menu.style.opacity='';if(menu.style.display==='none')menu.style.display=''}else{if(menu.style.transform)menu.style.transform=''}}))}}
function t967_setLogoPadding(recid){var rec=document.getElementById('rec'+recid);if(!rec||window.innerWidth<=980)return;var menu=rec.querySelector('.t967');var logo=menu?menu.querySelector('.t967__logowrapper'):null;var leftWrap=menu?menu.querySelector('.t967__leftwrapper'):null;var rightWrap=menu?menu.querySelector('.t967__rightwrapper'):null;var logoWidth=logo?logo.offsetWidth:0;if(leftWrap)leftWrap.style.paddingRight=((logoWidth/2)+50)+'px';if(rightWrap)rightWrap.style.paddingRight=((logoWidth/2)+50)+'px'}
function t738_unifyHeights(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t738');if(!container)return;var items=rec.querySelectorAll('.t738__item');var maxHeight=0;for(var i=0;i<items.length;i++){items[i].style.height=''}
for(var i=0;i<items.length;i++){var itemPaddingTop=parseInt(getComputedStyle(items[i]).paddingTop)||0;var itemPaddingBottom=parseInt(getComputedStyle(items[i]).paddingBottom)||0;var imgHeight=items[i].querySelector('img').offsetHeight+itemPaddingTop+itemPaddingBottom;if(imgHeight>maxHeight){maxHeight=imgHeight}}
for(var i=0;i<items.length;i++){var itemPaddingTop=parseInt(getComputedStyle(items[i]).paddingTop)||0;var itemPaddingBottom=parseInt(getComputedStyle(items[i]).paddingBottom)||0;items[i].style.height=maxHeight+itemPaddingTop+itemPaddingBottom+'px'}
t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recId)})}