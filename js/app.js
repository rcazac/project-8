//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }
let mainSlider = new Swiper('.main-slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	

	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	effect: 'flip',
      grabCursor: true,
	// Arrows
	/*
		
	effect: 'fade',*/
	/*autoplay: {
		delay: 8000,
		disableOnInteraction: false,
	},*/
	
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

});
let projectSlider = new Swiper('.project__slider', {
	
	//effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	
	observer: true,
	observeParents: true,
	slidesPerView: 1.2,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	lazy: true,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,

	// Dotts
	
	// Arrows
	
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	},
	
	navigation: {
        nextEl: '.project__right',
        prevEl: '.project__left',
      },
	// And if we need scrollbar
	pagination: {
        el: '.swiper__pagination',
        type: 'progressbar',
      },

});
let blockSliders = new Swiper('.block-sliders__blocks ', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	//autoHeight: true,
	speed: 900,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	
	// Arrows
	
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	},
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	
});
let galleryThumbs = new Swiper('.gallery-thumbs', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	slidesPerView: 3,
	spaceBetween: 20,
	speed: 800,
	on: {
		lazyImageReady: function () {
			ibg();
		},
	},
	pagination: {
        el: '.reviews__pagination',
        dynamicBullets: true,
      },
	  navigation: {
        nextEl: '.swiper-button-nexts',
        prevEl: '.swiper-button-prevs',
      },
	  freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

	  breakpoints: {
		375: {
			spaceBetween: 70,

		},
		500: {
			spaceBetween: 40,

		},
		
	},
	
});
let galleryTop = new Swiper('.gallery-top', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	
	// Arrows
	
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	},
	pagination: {
        el: '.reviews__pagination',
        dynamicBullets: true,
      },
	  navigation: {
        nextEl: '.swiper-button-nexts',
        prevEl: '.swiper-button-prevs',
      },
	  thumbs: {
        swiper: galleryThumbs
      },
	
});
let sliderDetailsSlids = new Swiper('.slider-details__slids', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	
	// Arrows
	
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	},
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

});
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".header__nav");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".header__nav");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
// LettersAnimation
// let title = document.querySelectorAll('._letter-animation');
// if (title) {
// 	for (let index = 0; index < title.length; index++) {
// 		let el = title[index];
// 		let txt = el.innerHTML;
// 		let txt_words = txt.replace('  ', ' ').split(' ');
// 		let new_title = '';
// 		for (let index = 0; index < txt_words.length; index++) {
// 			let txt_word = txt_words[index];
// 			let len = txt_word.length;
// 			new_title = new_title + '<p>';
// 			for (let index = 0; index < len; index++) {
// 				let it = txt_word.substr(index, 1);
// 				if (it == ' ') {
// 					it = '&nbsp;';
// 				}
// 				new_title = new_title + '<span>' + it + '</span>';
// 			}
// 			el.innerHTML = new_title;
// 			new_title = new_title + '&nbsp;</p>';
// 		}
// 	}
// }
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spollersGo) {
				spollersGo = false;
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				_slideToggle(spoller.nextElementSibling);

				setTimeout(function () {
					spollersGo = true;
				}, 500);
			}
		});
	}
}
//=================


//=================

// //DigiFormat
// function digi(str) {
// 	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
// 	return r;
// }
//=================

//=================
//Popups

//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================

//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();


let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
	let src_value = currentScroll = pageYOffset;
	let header = document.querySelector('header.header');
	if (header !== null) {
		if (src_value > 10) {
			header.classList.add('_scroll');
		} else {
			header.classList.remove('_scroll');
		}
	}
	if (scr_blocks.length > 0) {
		for (let index = 0; index < scr_blocks.length; index++) {
			let block = scr_blocks[index];
			let block_offset = offset(block).top;
			let block_height = block.offsetHeight;

			/*
			if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
				let scrProcent = (src_value - block_offset) / block_height * 100;
				scrParallax(block, scrProcent, block_height);
			}
			*/

			if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				block.classList.add('_scr-sector_active');
			} else {
				if (block.classList.contains('_scr-sector_active')) {
					block.classList.remove('_scr-sector_active');
				}
			}
			if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				if (!block.classList.contains('_scr-sector_current')) {
					block.classList.add('_scr-sector_current');
				}
			} else {
				if (block.classList.contains('_scr-sector_current')) {
					block.classList.remove('_scr-sector_current');
				}
			}
		}
	}
	if (scr_items.length > 0) {
		for (let index = 0; index < scr_items.length; index++) {
			let scr_item = scr_items[index];
			let scr_item_offset = offset(scr_item).top;
			let scr_item_height = scr_item.offsetHeight;


			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
			if (window.innerHeight > scr_item_height) {
				scr_item_point = window.innerHeight - scr_item_height / 3;
			}

			if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
				scr_item.classList.add('_active');
				scroll_load_item(scr_item);
			} else {
				scr_item.classList.remove('_active');
			}
			if (((src_value > scr_item_offset - window.innerHeight))) {
				if (scr_item.querySelectorAll('._lazy').length > 0) {
					scroll_lazy(scr_item);
				}
			}
		}
	}
	if (scr_fix_block.length > 0) {
		fix_block(scr_fix_block, src_value);
	}
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	if (custom_scroll_line) {
		let window_height = window.innerHeight;
		let content_height = document.querySelector('.wrapper').offsetHeight;
		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
		custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
	}
	if (src_value > scrollDirection) {
		// downscroll code
	} else {
		// upscroll code
	}
	scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
	//document.addEventListener("DOMContentLoaded", scroll_scroll);
	scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
	let lazy_src = scr_item.querySelectorAll('*[data-src]');
	if (lazy_src.length > 0) {
		for (let index = 0; index < lazy_src.length; index++) {
			const el = lazy_src[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('src', el.getAttribute('data-src'));
				el.classList.add('_loaded');
			}
		}
	}
	let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
	if (lazy_srcset.length > 0) {
		for (let index = 0; index < lazy_srcset.length; index++) {
			const el = lazy_srcset[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('srcset', el.getAttribute('data-srcset'));
				el.classList.add('_loaded');
			}
		}
	}
}
function scroll_load_item(scr_item) {
	if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
		let map_item = document.getElementById('map');
		if (map_item) {
			scr_item.classList.add('_loaded-map');
			map();
		}
	}
}
function scrParallax(block, scrProcent, blockHeight) {
	let prlxItems = block.querySelectorAll('._prlx-item');
	if (prlxItems.length > 0) {
		for (let index = 0; index < prlxItems.length; index++) {
			const prlxItem = prlxItems[index];
			let prlxItemAttr = (prlxItem.dataset.prlx) ? prlxItem.dataset.prlx : 3;
			const prlxItemValue = -1 * (blockHeight / 100 * scrProcent / prlxItemAttr);
			prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
		}
	}
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
	disableScroll();
	window.addEventListener('wheel', full_scroll);

	let swiperScrolls = document.querySelectorAll('._swiper_scroll');

	if (swiperScrolls.length > 0) {
		for (let index = 0; index < swiperScrolls.length; index++) {
			const swiperScroll = swiperScrolls[index];
			swiperScroll.addEventListener("mouseenter", function (e) {
				window.removeEventListener('wheel', full_scroll);
			});
			swiperScroll.addEventListener("mouseleave", function (e) {
				window.addEventListener('wheel', full_scroll);
			});
		}
	}
}
function getPrevBlockPos(current_block_prev) {
	let viewport_height = window.innerHeight;
	let current_block_prev_height = current_block_prev.offsetHeight;
	let block_pos = offset(current_block_prev).top;

	if (current_block_prev_height >= viewport_height) {
		block_pos = block_pos + (current_block_prev_height - viewport_height);
	}
	return block_pos;
}
function full_scroll(e) {
	let viewport_height = window.innerHeight;
	if (viewport_height >= scr_min_height) {
		if (scrolling_full) {
			let current_block = document.querySelector('._scr-sector._scr-sector_current');
			let current_block_pos = offset(current_block).top;
			let current_block_height = current_block.offsetHeight;
			let current_block_next = current_block.nextElementSibling;
			let current_block_prev = current_block.previousElementSibling;
			if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_prev) {
						full_scroll_to_sector(getPrevBlockPos(current_block_prev));
					}
				} else {
					enableScroll();
					if (currentScroll <= current_block_pos) {
						if (current_block_prev) {
							full_scroll_to_sector(getPrevBlockPos(current_block_prev));
						}
					}
				}
			} else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						full_scroll_to_sector(block_pos);
					}
				} else {
					enableScroll();
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						if (currentScroll >= block_pos - viewport_height) {
							full_scroll_to_sector(block_pos);
						}
					}
				}
			}
		} else {
			disableScroll();
		}
	} else {
		enableScroll();
	}
}
function full_scroll_to_sector(pos) {
	disableScroll();
	scrolling_full = false;
	_goto(pos, 800);

	let scr_pause = 500;
	if (navigator.appVersion.indexOf("Mac") != -1) {
		scr_pause = 1000;
	};
	setTimeout(function () {
		scrolling_full = true;
	}, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#', '');
		if (block_name != '' && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener('click', function (e) {
			if (document.querySelector('.menu__body._active')) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		})
	}

	window.addEventListener('scroll', function (el) {
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if (old_current_link) {
			for (let index = 0; index < old_current_link.length; index++) {
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for (let index = 0; index < blocks.length; index++) {
			let block = blocks[index];
			let block_item = document.querySelector('.' + block);
			if (block_item) {
				let block_offset = offset(block_item).top;
				let block_height = block_item.offsetHeight;
				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
					for (let index = 0; index < current_links.length; index++) {
						let current_link = current_links[index];
						current_link.classList.add('_active');
					}
				}
			}
		}
	})
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed, offset = 0) {
	let header = '';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	/*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
	let window_width = parseInt(window.innerWidth);
	let window_height = parseInt(window.innerHeight);
	let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
	for (let index = 0; index < scr_fix_block.length; index++) {
		const block = scr_fix_block[index];
		let block_width = block.getAttribute('data-width');
		const item = block.querySelector('._side-block');
		if (!block_width) { block_width = 0; }
		if (window_width > block_width) {
			if (item.offsetHeight < window_height - (header_height + 30)) {
				if (scr_value > offset(block).top - (header_height + 15)) {
					item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
				} else {
					gotoRelative(item);
				}
				if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
					block.style.cssText = "position:relative;";
					item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
				}
			} else {
				gotoRelative(item);
			}
		}
	}
	function gotoRelative(item) {
		item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
	}
}

if (!isMobile.any()) {
	//custom_scroll();
	/*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
	scr_body.style.overflow = 'hidden';
	let window_height = window.innerHeight;
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
	let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
	if (custom_scroll_content_height > window_height) {
		if (!custom_scroll_line) {
			let custom_scroll = document.createElement('div');
			custom_scroll_line = document.createElement('div');
			custom_scroll.setAttribute('class', '_custom-scroll');
			custom_scroll_line.setAttribute('class', '_custom-scroll__line');
			custom_scroll.appendChild(custom_scroll_line);
			scr_body.appendChild(custom_scroll);
		}
		custom_scroll_line.style.height = custom_cursor_height + 'px';
	}
}

let new_pos = pageYOffset;
function scroll_animate(event) {
	let window_height = window.innerHeight;
	let content_height = document.querySelector('.wrapper').offsetHeight;
	let start_position = pageYOffset;
	let pos_add = 100;

	if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
		new_pos = new_pos - pos_add;
	} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
		new_pos = new_pos + pos_add;
	}
	if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
	if (new_pos < 0) new_pos = 0;

	if (scrolling) {
		scrolling = true;
		_goto(new_pos, 1000);

		let scr_pause = 100;
		if (navigator.appVersion.indexOf("Mac") != -1) {
			scr_pause = scr_pause * 2;
		};
		setTimeout(function () {
			scrolling = true;
			_goto(new_pos, 1000);
		}, scr_pause);
	}
	//If native scroll
	//disableScroll();
}

//lazy load
"use strict"

const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
const windowHeight = document.documentElement.clientHeight;
let lazyImagesPositions = [];
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	});
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
	if (document.querySelectorAll('img[data-src],source[data-srcset]').length > 0) {
		lazyScrollCheck();
	}
	
}


function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
	);
  
	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.src) {
      
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			
      const imgImg = document.querySelectorAll('.img-img');
        imgImg.forEach(function(element){
          if(element.classList.contains("_active")){
            lazyImages[imgIndex].removeAttribute('data-src');
          }
        });
        lazyImages[imgIndex].removeAttribute('data-src');
		} else if (lazyImages[imgIndex].dataset.srcset) {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			
      const imgImg = document.querySelectorAll('.img-img');
      imgImg.forEach(function(element){
        if(element.classList.contains("_active")){
          lazyImages[imgIndex].removeAttribute('data-src');
        }
      });
      lazyImages[imgIndex].removeAttribute('data-srcset');
        
		}
		delete lazyImagesPositions[imgIndex];
	}
}




//open-mobil-dropdown
let menuArrows = document.querySelectorAll('.header__arrow');
if (menuArrows.length > 0) {
  for (let index = 0; index < menuArrows.length; index++) {
    const menuArrow = menuArrows[index];
    menuArrow.addEventListener("click", function (e) {
      menuArrow.parentElement.classList.toggle('active');
    });
  }
}
//end-mobile-drop

//reclame
let filters = document.querySelectorAll('div[data-filter]');

for (let filter of filters) {
  filter.addEventListener('click', function(e) {
    this.classList.toggle('active');
    let catId = filter.getAttribute('data-filter');
    let workCat = document.querySelectorAll('.reclame__img-01');

    workCat.forEach(function(c) {

      if (catId === 'all') {
        c.classList.remove('hide');
      } else {
        if (c.getAttribute('data-cat') !== catId) {
          c.classList.add('hide');
        } else {
          c.classList.remove('hide');
        }
      }

    })

  }); /* end listener*/
}

//filter

var $grid = $('.filters-work__row').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  isFitWidth: true
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

//end-filter
//star efects

//animation


// if(document.querySelector('.crm__title_typed')){
//   var typed = new Typed('.crm__title_typed', {
//     strings: ["Добро пожаловать"],
//     typeSpeed: 90,
//     //backSpeed: 90,
//     //loop: true,
//   });
// }

//end-develop-shop typed
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close, .work__close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup, .work'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});
// 


//gsap
let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
if(document.querySelector(".slide-one__earth")){
  gsap.to(".slide-one__earth", {repeat:-1,duration: 60, rotation: 360, ease: 'none'});
 
    if(document.querySelector(".slide-one__earth")){
      gsap.to(".slide-one__earth", {repeat:-1,duration: 60, rotation: 360, ease: 'none'});
      tl1.from('.slide-one__earth', {opacity: 0, y:1000, duration: 3.5})
        .from('.slide-one__link', {opacity: 0, duration: 2.0})
    };
  
};
if(document.querySelector(".slide-four__gear")){
gsap.to(".slide-four__gear", {repeat:-1,duration: 1, rotation: -360, ease: 'none'});
 
};

if(document.querySelector(".slide-two__title")){
gsap.to(".slide-two__title", {repeat:0, duration: 2,scale: 2}); 
 
};





//start particles
if (document.getElementById('particles-slide-one')){
  particlesJS("particles-slide-one", {
    particles: {
    number: { value: 15, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
    },
    interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
    },
    retina_detect: true
  });
};
if (document.getElementById('particles-contact')){
particlesJS("particles-contact", {
  particles: {
  number: { value: 47, density: { enable: true, value_area: 800 } },
  color: { value: "#fff" },
  shape: {
    type: "circle",
    stroke: { width: 0, color: "#000000" },
    polygon: { nb_sides: 5 },
    image: { src: "img/github.svg", width: 100, height: 100 }
  },
  opacity: {
    value: 0.5,
    random: true,
    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
  },
  size: {
    value: 3,
    random: true,
    anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
  },
  line_linked: {
    enable: false,
    distance: 500,
    color: "#ffffff",
    opacity: 0.4,
    width: 2
  },
  move: {
    enable: true,
    speed: 6,
    direction: "bottom",
    random: false,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: { enable: false, rotateX: 600, rotateY: 1200 }
  }
  },
  interactivity: {
  detect_on: "canvas",
  events: {
    onhover: { enable: true, mode: "bubble" },
    onclick: { enable: true, mode: "repulse" },
    resize: true
  },
  modes: {
    grab: { distance: 400, line_linked: { opacity: 0.5 } },
    bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
    repulse: { distance: 200, duration: 0.4 },
    push: { particles_nb: 4 },
    remove: { particles_nb: 2 }
  }
  },
  retina_detect: true
});
};
if(document.getElementById('particles-tesla')){
particlesJS("particles-tesla", {
  particles: {
  number: { value: 15, density: { enable: true, value_area: 800 } },
  color: { value: "#de0a93" },
  shape: {
    type: "edge",
    stroke: { width: 0, color: "#000000" },
    polygon: { nb_sides: 5 },
    
  },
  opacity: {
    value: 1,
    random: false,
    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
  },
  size: {
    value: 11.8,
    random: true,
    anim: { enable: false, speed: 0, size_min: 0, sync: false }
  },
  line_linked: {
    enable: false,
    distance: 31.565905665290902,
    color: "#ffffff",
    opacity: 0.4,
    width: 1
  },
  move: {
    enable: true,
    speed: 5,
    direction: "right",
    random: false,
    straight: true,
    out_mode: "out",
    bounce: false,
    attract: { enable: false, rotateX: 0, rotateY: 1200 }
  }
  },
  interactivity: {
  detect_on: "canvas",
  events: {
    onhover: { enable: true, mode: "repulse" },
    onclick: { enable: true, mode: "repulse" },
    resize: true
  },
  modes: {
    grab: { distance: 200, line_linked: { opacity: 1 } },
    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
    repulse: { distance: 200, duration: 0.4 },
    push: { particles_nb: 4 },
    remove: { particles_nb: 2 }
  }
  },
  retina_detect: true
});
};
if(document.getElementById('particles-tesla-1')){
particlesJS("particles-tesla-1", {
  particles: {
    number: { value: 14, density: { enable: true, value_area: 800 } },
    color: { value: "#16d5ff" },
    shape: {
      type: "edge",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 16.03412060865523,
      random: true,
      anim: {
        enable: false,
        speed: 14.617389821424212,
        size_min: 15.429467033725558,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 1,
      width: 20.52750653390415
    },
    move: {
      enable: true,
      speed: 14,
      direction: "right",
      random: false,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 1443.0708547789707, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 194.89853095232286, line_linked: { opacity: 1 } },
      bubble: {
        distance: 400,
        size: 48.72463273808071,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: { distance: 259.8647079364305, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
};

if(document.getElementById('particles-start')){
particlesJS("particles-start", {
  particles: {
  number: { value: 50, density: { enable: true, value_area: 800 } },
  color: { value: "#2919a2" },
  shape: {
    type: "circle",
    stroke: { width: 0, color: "#000000" },
    polygon: { nb_sides: 5 },
    image: { src: "img/github.svg", width: 100, height: 100 }
  },
  opacity: {
    value: 0.5,
    random: false,
    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
  },
  size: {
    value: 3,
    random: true,
    anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
  },
  line_linked: {
    enable: true,
    distance: 150,
    color: "#ffffff",
    opacity: 0.4,
    width: 1
  },
  move: {
    enable: true,
    speed: 6,
    direction: "none",
    random: false,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: { enable: false, rotateX: 600, rotateY: 1200 }
  }
  },
  interactivity: {
  detect_on: "canvas",
  events: {
    onhover: { enable: true, mode: "grab" },
    onclick: { enable: true, mode: "push" },
    resize: true
  },
  modes: {
    grab: { distance: 400, line_linked: { opacity: 1 } },
    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
    repulse: { distance: 200, duration: 0.4 },
    push: { particles_nb: 4 },
    remove: { particles_nb: 2 }
  }
  },
  retina_detect: true
});
};

if(document.getElementById('particles-triangle')){
particlesJS("particles-triangle", {
  particles: {
    number: { value: 24, density: { enable: true, value_area: 800 } },
    color: { value: "#fe5b34" },
    shape: {
      type: "triangle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 4.872463273808071,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 6,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "remove" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

};
if(document.getElementById('crm__elements')){
  particlesJS("crm__elements", {
    particles: {
      number: { value: 19, density: { enable: true, value_area: 800 } },
      color: { value: "#fe5b34" },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000" },
        polygon: { nb_sides: 6 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.6814501258678471,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 68.14501258678472,
        random: false,
        anim: { enable: true, speed: 10, size_min: 40, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 721.5354273894853,
          rotateY: 1122.388442605866
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: false, mode: "bubble" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  
};
if(document.getElementById('crm__a')){
  particlesJS("crm__a", {
    particles: {
      number: { value: 19, density: { enable: true, value_area: 800 } },
      color: { value: "#fe5b34" },
      shape: {
        type: "image",
        stroke: { width: 0, color: "#000" },
        polygon: { nb_sides: 6 },
        image: { src: "../img/a.png", width: 100, height: 100 }
      },
      opacity: {
        value: 0.6814501258678471,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 68.14501258678472,
        random: false,
        anim: { enable: true, speed: 10, size_min: 40, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 721.5354273894853,
          rotateY: 1122.388442605866
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: false, mode: "bubble" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  
};

///start scroll to
$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  let elementID = $(this).data('scroll');
  let elementOffset = $(elementID).offset().top;
  console.log(elementOffset);

  $("html, body").animate({
    scrollTop: elementOffset - 65
  }, 1000);
});







//chact-orange

document.addEventListener("DOMContentLoaded", function() {
  (function(a,m,o,c,r,m){a[m]={id:"49951",hash:"b9a8661403493ffeea3fce30fa1721c45806272f1398c2e8dae7be8ca49e59be",locale:"{{ Config::get('app.locale') }}",inline:false,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.ru/js/button.js?1621609263';d.head&&d.head.appendChild(s)}(window,0,'amoSocialButton',0,0,'amo_social_button'));


  /////reclame
if(document.getElementById("can")){
  (function(w) {

    var canvas, ctx;
    
    /* 
    This is an associative array to hold the status of the mouse cursor
    Whenever the mouse is moved or pressed, there are event handlers that
    update the values in this array.
    */
    var mouse = {
        x: 0,
        y: 0,
        px: 0,
        py: 0,
        down: false
    };
  
    /*
    These are the variable definitions for the values that will be used 
    throughout the rest of the script.
    */
    var canvas_width = window.innerWidth; //Needs to be a multiple of the resolution value below.
    var canvas_height = 400; //This too.
  
    var resolution = 10; //Width and height of each cell in the grid.
    
    var pen_size = 40; //Radius around the mouse cursor coordinates to reach when stirring
  
    var num_cols = canvas_width / resolution; //This value is the number of columns in the grid.
    var num_rows = canvas_height / resolution; //This is number of rows.
    var speck_count = 10000; //This determines how many particles will be made.
    
    var vec_cells = []; //The array that will contain the grid cells
    var particles = []; //The array that will contain the particles
  
  
    /*
    This is the main function. It is triggered to start the process of constructing the
    the grid and creating the particles, attaching event handlers, and starting the
    animation loop.
    */
    function init() {
        
        //These lines get the canvas DOM element and canvas context, respectively.
        canvas = document.getElementById("can");
        ctx = canvas.getContext("2d");
  
        //These two set the width and height of the canvas to the defined values.
        canvas.width = canvas_width;
        canvas.height = canvas_height;
  
        /*
        This loop begins at zero and counts up to the defined number of particles,
        less one, because array elements are numbered beginning at zero.
        */
        for (i = 0; i < speck_count; i++) {
            /*
            This calls the function particle() with random X and Y values. It then
            takes the returned object and pushes it into the particles array at the
            end.
            */
            particles.push(new particle(Math.random() * canvas_width, Math.random() * canvas_height));
        }
  
        //This loops through the count of columns.
        for (col = 0; col < num_cols; col++) { 
            
            //This defines the array element as another array.
            vec_cells[col] = [];
  
            //This loops through the count of rows.
            for (row = 0; row < num_rows; row++) { 
                
                /*
                This line calls the cell() function, which creates an individual grid cell
                and returns it as an object. The X and Y values are multiplied by the
                resolution so that when the loops are referring to "column 2, row 2", the
                width and height of "column 1, row 1" are counted in so that the top-left
                corner of the new grid cell is at the bottom right of the other cell.
                */
                var cell_data = new cell(col * resolution, row * resolution, resolution)
  
                //This pushes the cell object into the grid array.
                vec_cells[col][row] = cell_data;
  
                /*
                These two lines set the object's column and row values so the object knows
                where in the grid it is positioned.                
                */
                vec_cells[col][row].col = col;
                vec_cells[col][row].row = row;
  
            }
        }
        
  
        /*
        These loops move through the rows and columns of the grid array again and set variables 
        in each cell object that will hold the directional references to neighboring cells. 
        For example, let's say the loop is currently on this cell:
  
        OOOOO
        OOOXO
        OOOOO
        
        These variables will hold the references to neighboring cells so you only need to
        use "up" to refer to the cell above the one you're currently on.
        */
        for (col = 0; col < num_cols; col++) { 
            
            for (row = 0; row < num_rows; row++) { 
  
                /*
                This variable holds the reference to the current cell in the grid. When you
                refer to an element in an array, it doesn't copy that value into the new
                variable; the variable stores a "link" or reference to that spot in the array.
                If the value in the array is changed, the value of this variable would change
                also, and vice-versa.
                */
                var cell_data = vec_cells[col][row];
  
                /*
                Each of these lines has a ternary expression. A ternary expression is similar 
                to an if/then clause and is represented as an expression (e.g. row - 1 >= 0) 
                which is evaluated to either true or false. If it's true, the first value after
                the question mark is used, and if it's false, the second value is used instead.
  
                If you're on the first row and you move to the row above, this wraps the row 
                around to the last row. This is done so that momentum that is pushed to the edge 
                of the canvas is "wrapped" to the opposite side.
                */
                var row_up = (row - 1 >= 0) ? row - 1 : num_rows - 1;
                var col_left = (col - 1 >= 0) ? col - 1 : num_cols - 1;
                var col_right = (col + 1 < num_cols) ? col + 1 : 0;
  
                //Get the reference to the cell on the row above.
                var up = vec_cells[col][row_up];
                var left = vec_cells[col_left][row];
                var up_left = vec_cells[col_left][row_up];
                var up_right = vec_cells[col_right][row_up];
                
                /*
                Set the current cell's "up", "left", "up_left" and "up_right" attributes to the 
                respective neighboring cells.
                */
                cell_data.up = up;
                cell_data.left = left;
                cell_data.up_left = up_left;
                cell_data.up_right = up_right;
  
                /*
                Set the neighboring cell's opposite attributes to point to the current cell.
                */
                up.down = vec_cells[col][row];
                left.right = vec_cells[col][row];
                up_left.down_right = vec_cells[col][row];
                up_right.down_left = vec_cells[col][row];
  
            }
        }
  
      
        /*
        These lines create triggers that fire when certain events happen. For
        instance, when you move your mouse, the mouse_move_handler() function 
        will run and will be passed the event object reference into it's "e" 
        variable. Something to note, the mousemove event doesn't necessarily 
        fire for *every* mouse coordinate position; the mouse movement is 
        sampled at a certain rate, meaning that it's checked periodically, and 
        if the mouse has moved, the event is fired and the current coordinates 
        are sent. That's why you'll see large jumps from one pair of coordinates
        to the next if you move your mouse very fast across the screen. That's
        also how I measure the mouse's velocity.
        */
        w.addEventListener("mousedown", mouse_down_handler);
        w.addEventListener("touchstart", mouse_down_handler);
  
        w.addEventListener("mouseup", mouse_up_handler);
        w.addEventListener("touchend", touch_end_handler);
  
        canvas.addEventListener("mousemove", mouse_move_handler);
        canvas.addEventListener("touchmove", touch_move_handler);
  
        //When the page is finished loading, run the draw() function.
        w.onload = draw;
  
    }
  
  
    /*
    This function updates the position of the particles according to the velocity
    of the cells underneath, and also draws them to the canvas.
    */
    function update_particle() {
  
        //Loops through all of the particles in the array
        for (i = 0; i < particles.length; i++) {
  
            //Sets this variable to the current particle so we can refer to the particle easier.
            var p = particles[i];
  
            //If the particle's X and Y coordinates are within the bounds of the canvas...
            if (p.x >= 0 && p.x < canvas_width && p.y >= 0 && p.y < canvas_height) {
  
                /*
                These lines divide the X and Y values by the size of each cell. This number is
                then parsed to a whole number to determine which grid cell the particle is above.
                */
                var col = parseInt(p.x / resolution);
                var row = parseInt(p.y / resolution);
  
                //Same as above, store reference to cell
                var cell_data = vec_cells[col][row];
                
                /*
                These values are percentages. They represent the percentage of the distance across
                the cell (for each axis) that the particle is positioned. To give an example, if 
                the particle is directly in the center of the cell, these values would both be "0.5"
  
                The modulus operator (%) is used to get the remainder from dividing the particle's 
                coordinates by the resolution value. This number can only be smaller than the 
                resolution, so we divide it by the resolution to get the percentage.
                */
                var ax = (p.x % resolution) / resolution;
                var ay = (p.y % resolution) / resolution;
                
                /*
                These lines subtract the decimal from 1 to reverse it (e.g. 100% - 75% = 25%), multiply 
                that value by the cell's velocity, and then by 0.05 to greatly reduce the overall change in velocity 
                per frame (this slows down the movement). Then they add that value to the particle's velocity
                in each axis. This is done so that the change in velocity is incrementally made as the
                particle reaches the end of it's path across the cell.
                */
                p.xv += (1 - ax) * cell_data.xv * 0.05;
                p.yv += (1 - ay) * cell_data.yv * 0.05;
                
                /*
                These next four lines are are pretty much the same, except the neighboring cell's 
                velocities are being used to affect the particle's movement. If you were to comment
                them out, the particles would begin grouping at the boundary between cells because
                the neighboring cells wouldn't be able to pull the particle into their boundaries.
                */
                p.xv += ax * cell_data.right.xv * 0.05;
                p.yv += ax * cell_data.right.yv * 0.05;
                
                p.xv += ay * cell_data.down.xv * 0.05;
                p.yv += ay * cell_data.down.yv * 0.05;
                
                //This adds the calculated velocity to the position coordinates of the particle.
                p.x += p.xv;
                p.y += p.yv;
                
                //For each axis, this gets the distance between the old position of the particle and it's new position.
                var dx = p.px - p.x;
                var dy = p.py - p.y;
  
                //Using the Pythagorean theorum (A^2 + B^2 = C^2), this determines the distance the particle travelled.
                var dist = Math.sqrt(dx * dx + dy * dy);
                
                //This line generates a random value between 0 and 0.5
                var limit = Math.random() * 0.5;
                
                //If the distance the particle has travelled this frame is greater than the random value...
                if (dist > limit) {
                    ctx.lineWidth = 1;
                    ctx.beginPath(); //Begin a new path on the canvas
                    ctx.moveTo(p.x, p.y); //Move the drawing cursor to the starting point
                    ctx.lineTo(p.px, p.py); //Describe a line from the particle's old coordinates to the new ones
                    ctx.stroke(); //Draw the path to the canvas
                }else{
                    //If the particle hasn't moved further than the random limit...
  
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
  
                    /*
                    Describe a line from the particle's current coordinates to those same coordinates 
                    plus the random value. This is what creates the shimmering effect while the particles
                    aren't moving.
                    */
                    ctx.lineTo(p.x + limit, p.y + limit);
  
                    ctx.stroke();
                }
                
                //This updates the previous X and Y coordinates of the particle to the new ones for the next loop.
                p.px = p.x;
                p.py = p.y;
            }
            else {
                //If the particle's X and Y coordinates are outside the bounds of the canvas...
  
                //Place the particle at a random location on the canvas
                p.x = p.px = Math.random() * canvas_width;
                p.y = p.py = Math.random() * canvas_height;
  
                //Set the particles velocity to zero.
                p.xv = 0;
                p.yv = 0;
            }
            
            //These lines divide the particle's velocity in half everytime it loops, slowing them over time.
            p.xv *= 0.5;
            p.yv *= 0.5;
        }
    }
  
  
    /*
    This is the main animation loop. It is run once from the init() function when the page is fully loaded and 
    uses RequestAnimationFrame to run itself again and again.
    */
    function draw() {
        /*
        This calculates the velocity of the mouse by getting the distance between the last coordinates and 
        the new ones. The coordinates will be further apart depending on how fast the mouse is moving.
        */
        var mouse_xv = mouse.x - mouse.px;
        var mouse_yv = mouse.y - mouse.py;
        
        //Loops through all of the columns
        for (i = 0; i < vec_cells.length; i++) {
            var cell_datas = vec_cells[i];
  
            //Loops through all of the rows
            for (j = 0; j < cell_datas.length; j++) {
                
                //References the current cell
                var cell_data = cell_datas[j];
                
                //If the mouse button is down, updates the cell velocity using the mouse velocity
                if (mouse.down) {
                    change_cell_velocity(cell_data, mouse_xv, mouse_yv, pen_size);
                }
  
                //This updates the pressure values for the cell.
                update_pressure(cell_data);
            }
        }
        
        /*
        This line clears the canvas. It needs to be cleared every time a new frame is drawn
        so the particles move. Otherwise, the particles would just look like long curvy lines.
        */
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        //This sets the color to draw with.
        //ctx.strokeStyle = "#00FFFF";
        ctx.strokeStyle = "#FFC200";
  
        //This calls the function to update the particle positions.
        update_particle();
  
        /*
        This calls the function to update the cell velocity for every cell by looping through
        all of the rows and columns.
        */
        for (i = 0; i < vec_cells.length; i++) {
            var cell_datas = vec_cells[i];
  
            for (j = 0; j < cell_datas.length; j++) {
                var cell_data = cell_datas[j];
  
                update_velocity(cell_data);
  
            }
        }
        
        //This replaces the previous mouse coordinates values with the current ones for the next frame.
        mouse.px = mouse.x;
        mouse.py = mouse.y;
  
        //This requests the next animation frame which runs the draw() function again.
        requestAnimationFrame(draw);
  
    }
  
  
    /*
    This function changes the cell velocity of an individual cell by first determining whether the cell is 
    close enough to the mouse cursor to be affected, and then if it is, by calculating the effect that mouse velocity
    has on the cell's velocity.
    */
    function change_cell_velocity(cell_data, mvelX, mvelY, pen_size) {
        //This gets the distance between the cell and the mouse cursor.
        var dx = cell_data.x - mouse.x;
        var dy = cell_data.y - mouse.y;
        var dist = Math.sqrt(dy * dy + dx * dx);
        
        //If the distance is less than the radius...
        if (dist < pen_size) {
  
            //If the distance is very small, set it to the pen_size.
            if (dist < 4) {
                dist = pen_size;
            }
            
            //Calculate the magnitude of the mouse's effect (closer is stronger)
            var power = pen_size / dist;
  
            /*
            Apply the velocity to the cell by multiplying the power by the mouse velocity and adding it to the cell velocity
            */
            cell_data.xv += mvelX * power;
            cell_data.yv += mvelY * power;
        }
    }
    
  
    /*
    This function updates the pressure value for an individual cell using the 
    pressures of neighboring cells.
    */
    function update_pressure(cell_data) {
  
        //This calculates the collective pressure on the X axis by summing the surrounding velocities
        var pressure_x = (
            cell_data.up_left.xv * 0.5 //Divided in half because it's diagonal
            + cell_data.left.xv
            + cell_data.down_left.xv * 0.5 //Same
            - cell_data.up_right.xv * 0.5 //Same
            - cell_data.right.xv
            - cell_data.down_right.xv * 0.5 //Same
        );
        
        //This does the same for the Y axis.
        var pressure_y = (
            cell_data.up_left.yv * 0.5
            + cell_data.up.yv
            + cell_data.up_right.yv * 0.5
            - cell_data.down_left.yv * 0.5
            - cell_data.down.yv
            - cell_data.down_right.yv * 0.5
        );
        
        //This sets the cell pressure to one-fourth the sum of both axis pressure.
        cell_data.pressure = (pressure_x + pressure_y) * 0.25;
    }
    
  
    /*
    This function updates the velocity value for an individual cell using the 
    velocities of neighboring cells.
    */
    function update_velocity(cell_data) {
  
        /*
        This adds one-fourth of the collective pressure from surrounding cells to the 
        cell's X axis velocity.
        */
        cell_data.xv += (
            cell_data.up_left.pressure * 0.5
            + cell_data.left.pressure
            + cell_data.down_left.pressure * 0.5
            - cell_data.up_right.pressure * 0.5
            - cell_data.right.pressure
            - cell_data.down_right.pressure * 0.5
        ) * 0.25;
        
        //This does the same for the Y axis.
        cell_data.yv += (
            cell_data.up_left.pressure * 0.5
            + cell_data.up.pressure
            + cell_data.up_right.pressure * 0.5
            - cell_data.down_left.pressure * 0.5
            - cell_data.down.pressure
            - cell_data.down_right.pressure * 0.5
        ) * 0.25;
        
        /*
        This slowly decreases the cell's velocity over time so that the fluid stops
        if it's left alone.
        */
        cell_data.xv *= 0.99;
        cell_data.yv *= 0.99;
    }
  
  
    //This function is used to create a cell object.
    function cell(x, y, res) {
  
        //This stores the position to place the cell on the canvas
        this.x = x;
        this.y = y;
        
        //This is the width and height of the cell
        this.r = res;
  
        //These are the attributes that will hold the row and column values
        this.col = 0;
        this.row = 0;
        
        //This stores the cell's velocity
        this.xv = 0;
        this.yv = 0;
  
        //This is the pressure attribute
        this.pressure = 0;
  
    }
  
  
    //This function is used to create a particle object.
    function particle(x, y) {
        this.x = this.px = x;
        this.y = this.py = y;
        this.xv = this.yv = 0;
    }
  
  
    /*
    This function is called whenever the mouse button is pressed. The event object is passed to 
    this function when it's called.
    */
    function mouse_down_handler(e) {
        e.preventDefault(); //Prevents the default action from happening (e.g. navigation)
        mouse.down = true; //Sets the mouse object's "down" value to true
    }
  
  
    //This function is called whenever the mouse button is released.    
    function mouse_up_handler() {
        mouse.down = false; 
    }
    
  
    //This function is called whenever a touch point is removed from the screen.
    function touch_end_handler(e) {
        if (!e.touches) mouse.down = false; //If there are no more touches on the screen, sets "down" to false.
    }
  
  
    /*
    This function is called whenever the mouse coordinates have changed. The coordinates are checked by the 
    browser at intervals.
    */
    function mouse_move_handler(e) {
        //Saves the previous coordinates
        mouse.px = mouse.x;
        mouse.py = mouse.y;
  
        //Sets the new coordinates
        mouse.x = e.offsetX || e.layerX;
        mouse.y = e.offsetY || e.layerY;
    }
  
  
    /*
    This function is called whenever one of the coordinates have changed. The coordinates are checked by the 
    browser at intervals.
    */
    function touch_move_handler(e) {        
        mouse.px = mouse.x;
        mouse.py = mouse.y;
  
        //This line gets the coordinates for where the canvas is positioned on the screen.
        var rect = canvas.getBoundingClientRect();
  
        /*
        And this sets the mouse coordinates to where the first touch is. Since we're using pageX
        and pageY, we need to subtract the top and left offset of the canvas so the values are correct.
        */
        mouse.x = e.touches[0].pageX - rect.left;
        mouse.y = e.touches[0].pageY - rect.top;
    }
  
  
    /*
    And this line attaches an object called "Fluid" to the global scope. "window" was passed into
    the self-invoking function as "w", so setting "w.Fluid" adds it to "window".
    */
    w.Fluid = {
        initialize: init
    }
  
  }(window)); //Passes "window" into the self-invoking function.
  
  
  /*
  Request animation frame polyfill. This enables you to use "requestAnimationFrame" 
  regardless of the browser the script is running in.
  */
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  
  
  //And this line calls the init() function defined above to start the script.
  Fluid.initialize();
}
//end reclame
});



