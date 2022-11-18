function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t967_createMobileMenu(recid,previewMode){var rec=document.getElementById('rec'+recid);if(!rec)return;var menu=rec.querySelector('.t967');var burger=rec.querySelector('.t967__mobile');if(burger){burger.addEventListener('click',function(){if(burger.classList.contains('t967_opened')){t_onFuncLoad('t_menu__FadeOut',function(){t_menu__FadeOut(menu,300)});burger.classList.remove('t967_opened')}else{t_onFuncLoad('t_menu__fadeIn',function(){t_menu__fadeIn(menu,300,function(){if(menu.style.transform)menu.style.transform='';if(menu.style.opacity)menu.style.opacity=''})});burger.classList.add('t967_opened')}})}
var selectedBlock=document.getElementById('nav269976850');var selectedAppearOffset=selectedBlock?selectedBlock.getAttribute('data-appearoffset'):'';var isSelectedBlockFixed=selectedBlock?selectedBlock.classList.contains('t967__positionfixed'):!1;if(selectedBlock&&selectedAppearOffset&&isSelectedBlockFixed&&previewMode){window.addEventListener('resize',t_throttle(function(){if(window.innerWidth>980){t967_appearMenu(recid);if(menu.style.opacity)menu.style.opacity='';if(menu.style.display==='none')menu.style.display='';if(burger)burger.classList.remove('t967_opened')}else{if(menu.style.transform)menu.style.transform=''}}))}else{window.addEventListener('resize',t_throttle(function(){if(window.innerWidth>980){if(menu.style.opacity)menu.style.opacity='';if(menu.style.display==='none')menu.style.display=''}else{if(menu.style.transform)menu.style.transform=''}}))}}
function t967_setLogoPadding(recid){var rec=document.getElementById('rec'+recid);if(!rec||window.innerWidth<=980)return;var menu=rec.querySelector('.t967');var logo=menu?menu.querySelector('.t967__logowrapper'):null;var leftWrap=menu?menu.querySelector('.t967__leftwrapper'):null;var rightWrap=menu?menu.querySelector('.t967__rightwrapper'):null;var logoWidth=logo?logo.offsetWidth:0;if(leftWrap)leftWrap.style.paddingRight=((logoWidth/2)+50)+'px';if(rightWrap)rightWrap.style.paddingRight=((logoWidth/2)+50)+'px'}
function t905_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t905');if(!container)return;t905_unifyHeights(recId);window.addEventListener('resize',function(){t905_unifyHeights(recId)});window.addEventListener('load',function(){t905_unifyHeights(recId)});if(typeof jQuery!=='undefined'){$(container).on('displayChanged',function(){t905_unifyHeights(recId)})}else{container.addEventListener('displayChanged',function(){t905_unifyHeights(recId)})}}
function t905_unifyHeights(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t905');if(!container)return;var cards=rec.querySelectorAll('.t905__card');for(var i=0;i<cards.length;i++){var card=cards[i];var image=card.querySelector('.t905__image');var imageHeight=image.offsetHeight;var content=card.querySelector('.t905__content');var contentHeight=content.offsetHeight;if(contentHeight>imageHeight){image.style.height=contentHeight+'px';image.style.paddingBottom='initial'}}}