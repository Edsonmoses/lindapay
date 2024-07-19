!function($) {
    "use strict";

    var scripts = function() {
        this.$body = $("body");
    };

    scripts.prototype.validate = function($form, $required)
    {   
        $required = 0;

        $.each($form.find("input[type='date'], input[type='email'], input[type='text'], select, textarea"), function(){
               
            if (!($(this).attr("name") === undefined || $(this).attr("name") === null)) {
                if($(this).hasClass("required")){
                    if($(this).is("[multiple]")){
                        if( !$(this).val() || $(this).find('option:selected').length <= 0 ){
                            $(this).closest(".form-group").find(".form__help").text("this field is required.");
                            $required++;
                        }
                    } else if($(this).val()=="" || $(this).val()=="0"){
                        if(!$(this).is("select")) {
                            $(this).closest(".form-group").find(".form__help").text("this field is required.");
                            $required++;
                        } else {
                            $(this).closest(".form-group").find(".form__help").text("this field is required.");
                            $required++;                                          
                        }
                    } 
                }
            }
        });

        return $required;
    },

    scripts.prototype.required_fields = function() {
        
        $.each(this.$body.find(".form-group"), function(){
            if ($(this).hasClass('required')) {       
                var $input = $(this).find("input[type='date'], input[type='email'], input[type='text'], select, textarea");
                if ($input.val() == '') {
                    $(this).find('.form__help').text('this field is required.');       
                }
                $input.addClass('required');
            } else {
                $(this).find("input[type='text'], select, textarea").removeClass('required');
            } 
        });
        
    },

    scripts.prototype.isValidEmailAddress = function ($form) {
        var emailError = 0;
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        $.each($form.find("input[type='email']"), function(){
            var $self = $(this);
            var validEmail = pattern.test($self.val());

            if (!validEmail) {
                emailError++;
                $self.next().text('this is not a valid email');
            }
        });

        return emailError;
    },

    scripts.prototype.remove_modal_required_fields = function () {
        $('.modal').find('.form__help').text('');
    },

    scripts.prototype.init = function()
    {   
        AOS.init({
            once: true
        });

        var typed = new Typed("#typed-text", {
            strings: ['', 'Sell', 'Pay', 'Hire', 'Rent', 'Trade'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            startDelay: 0,
            loop: true,
            onBegin: function(self) { prettyLog('onBegin ' + self) },
            onComplete: function(self) { prettyLog('onCmplete ' + self) },
            preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
            onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
            onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
            onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
            onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
            onReset: function(self) { prettyLog('onReset ' + self) },
            onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
            onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
            onDestroy: function(self) { prettyLog('onDestroy ' + self) }
          });
        
        // setInterval(function(){
        //     var e=$(".flip .animate__animated.animate__flipInY").removeClass("animate__animated animate__flipInY");e.next()&&e.next().length?e.next().addClass("animate__animated animate__flipInY"):e.siblings("span:first").addClass("animate__animated animate__flipInY")}
        // ,5000);

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $('header').addClass('fix animate__slideInDown').next().addClass('fix');
            } else {
                $('header').removeClass('fix animate__slideInDown').next().removeClass('fix');
            }
        });

        this.$body.on('change', 'select, input', function (e) {
            e.preventDefault();
            var self = $(this);
            self.closest(".form-group").find(".form__help").text("");
        });
        this.$body.on('dp.change', '.date-picker, .time-picker', function (e){
            e.preventDefault();
            var self = $(this);
            $(this).closest(".form-group").find(".form__help").text("");
        });
        this.$body.on('keyup', 'input, textarea', function (e) {
            e.preventDefault();
            var self = $(this);
            $(this).closest(".form-group").find(".form__help").text("");
        });
        this.$body.on('blur', 'input, textarea, select', function (e) {
            e.preventDefault();
            var self = $(this);
            self.closest(".form-group").find(".form__help").text("");
        });

        this.$body.on("keypress", ".numeric-double", function (event) {

            var $this = $(this);
            if ((event.which != 46 || $this.val().indexOf('.') != -1) &&
                ((event.which < 48 || event.which > 57) &&
                    (event.which != 0 && event.which != 8))) {
                event.preventDefault();
            }
    
            var text = $(this).val();
            if ((event.which == 46) && (text.indexOf('.') == -1)) {
                setTimeout(function () {
                    if ($this.val().substring($this.val().indexOf('.')).length > 3) {
                        $this.val($this.val().substring(0, $this.val().indexOf('.') + 3));
                    }
                }, 1);
            }
    
            if ((text.indexOf('.') != -1) &&
                (text.substring(text.indexOf('.')).length > 5) &&
                (event.which != 0 && event.which != 8) &&
                ($(this)[0].selectionStart >= text.length - 5)) {
                event.preventDefault();
            }
    
        });

        $('.testimonial .content-slider').lightSlider({
            item: 1,
            slideMargin: 0,
            speed: 500,
        }); 

        if ($(window).width() >= 768) {
            var slider = $('.slider-banner .content-slider').lightSlider({
                item: 1,
                controls: false,
                slideMargin: 0,
                speed: 500,
                auto: true,
                loop: true,
                pause: 5000,
                slideEndAnimation: true,
                onSliderLoad: function (el) {
                    var currentSlide = el.getCurrentSlideCount();
                    $('.slider-banner .content-slider .lslide h1, .slider-banner .content-slider .lslide p, .slider-banner .content-slider .lslide a').addClass('hidden').removeClass('animate__fadeInDown animate__faster block');
                    $('.slider-banner .content-slider .lslide a').addClass('hidden').removeClass('animate__fadeInDown animate__faster inline-block');
                    $('.slider-banner .content-slider .lslide.active h1, .slider-banner .content-slider .lslide.active p').removeClass('hidden').addClass('animate__fadeInDown animate__faster block');
                    $('.slider-banner .content-slider .lslide.active a').removeClass('hidden').addClass('animate__fadeInDown animate__faster inline-block');
                },
                onAfterSlide: function (el) {
                    var currentSlide = el.getCurrentSlideCount();
                    setTimeout(function(){
                        $('.slider-banner .content-slider .lslide h1, .slider-banner .content-slider .lslide p, .slider-banner .content-slider .lslide a').addClass('hidden').removeClass('animate__fadeInDown animate__faster block');
                        $('.slider-banner .content-slider .lslide a').addClass('hidden').removeClass('animate__fadeInDown animate__faster inline-block');
                        $('.slider-banner .content-slider .lslide.active h1, .slider-banner .content-slider .lslide.active p').removeClass('hidden').addClass('animate__fadeInDown animate__faster block');
                        $('.slider-banner .content-slider .lslide.active a').removeClass('hidden').addClass('animate__fadeInDown animate__faster inline-block');
                    }, 100);
                },
            });
        } else {
            var slider = $('.slider-banner .content-slider').lightSlider({
                item: 1,
                controls: false,
                slideMargin: 10,
                speed: 500,
                auto: true,
                loop: true,
                pause: 5000,
                responsive : [
                    {
                        breakpoint: 768,
                        settings: {
                            item:1
                        }
                    }, 
                    {
                        breakpoint: 480,
                        settings: {
                            item:1
                        }
                    }
                ]
            });
        }
        $('.slider-banner .slideControls .slidePrev').click(function() {
            slider.goToPrevSlide();
        });
        $('.slider-banner .slideControls .slideNext').click(function() {
            slider.goToNextSlide();
        });
        
        $('.collapse').on('shown.bs.collapse', function() {
            var self = $(this).prev('h5');
            self.find(".fa-sm").addClass('fa-chevron-up').removeClass('fa-chevron-down');
        });
        $('.collapse').on('hidden.bs.collapse', function() {
            var self = $(this).prev('h5');
            self.find(".fa-sm").addClass('fa-chevron-down').removeClass('fa-chevron-up');
        });

        this.$body.on('click', '.anchor-scroll', function (e){
            e.preventDefault();
            $('.anchor-scroll').removeClass('active');
            $('.col-md-8 h4').removeClass('active');
            var self = $(this);
            self.addClass('active');
            $(self.attr('href')).addClass('active');
            $('html,body').animate({scrollTop: $(self.attr('href')).offset().top - 30},'slow');
        });

        this.$body.on('click', '.steps', function (e){
            e.preventDefault();
            var self = $(this);
            var content = self.closest('.wizard-data');
            var wizData = $('.wizard-data');
            var parents = $(this).parents('.wizard-data');
            var form = $(this).closest('form');
            var formStep = false;
            if (self.hasClass('step-btn-right')) { 
                var $emailError = $.scripts.isValidEmailAddress(parents);
                var $error = $.scripts.validate(parents, 0);
                if (self.hasClass('submit')) {
                    alert('form submitted!');
                } else {
                    var id = content.next().attr('id');
                    if ($error != 0) {
                        swal({
                            title: "Oops...",
                            html: 'Something went wrong! <br/>Please fill in the required fields first.',
                            type: "warning",
                            showCancelButton: false,
                            closeOnConfirm: true,
                            confirmButtonColor: "#7fbe4c",
                            confirmButtonClass: "btn btn-warning btn-focus m-btn m-btn--pill m-btn--air m-btn--custom"
                        });
                        formStep = false;
                        window.onkeydown = null;
                        window.onfocus = null;   
                        $.scripts.required_fields();
                        e.preventDefault();
                    } else if ($emailError > 0) {
                        swal({
                            title: "Oops...",
                            html: 'Something went wrong! <br/>Please use a valid email.',
                            type: "warning",
                            showCancelButton: false,
                            closeOnConfirm: true,
                            confirmButtonColor: "#7fbe4c",
                            confirmButtonClass: "btn btn-warning btn-focus m-btn m-btn--pill m-btn--air m-btn--custom"
                        });
                        formStep = false;
                        window.onkeydown = null;
                        window.onfocus = null;
                    } else {
                        formStep = true;
                        wizData.removeClass('active');
                        content.next().addClass('active animate__fadeIn');
                    }
                }
            } else {
                formStep = true;
                var id = content.prev().attr('id');
                wizData.removeClass('active');
                content.prev().addClass('active animate__fadeIn');
            }
            if ((id.charAt(id.length - 1)) >= 3 ) {
                if (formStep == true) {
                $('.wizard-steps .wizard').removeClass('active');
                $('.wizard-steps .wizard[href="' + id + '"]').addClass('active');
                $('.wizard-steps .wizard[href="#wizard1"]').find('img').attr('src', './img/p1-in.png');
                    if ((id.charAt(id.length - 1) - 1) == 2) {
                        $('.wizard-steps .wizard[href="#wizard3"]').find('img').attr('src', './img/p2-ac.png');
                        $('.wizard-steps .wizard[href="#wizard4"]').find('img').attr('src', './img/p3-in.png');
                    } else {
                        $('.wizard-steps .wizard[href="#wizard3"]').find('img').attr('src', './img/p2-in.png');
                        $('.wizard-steps .wizard[href="#wizard4"]').find('img').attr('src', './img/p3-ac.png');
                    }
                }
            } else {
                if (formStep == true) {
                    $('.wizard-steps .wizard').removeClass('active');
                    $('.wizard-steps .wizard[href="#wizard1"]').addClass('active');
                    $('.wizard-steps .wizard[href="#wizard1"]').find('img').attr('src', './img/p1-ac.png');
                    $('.wizard-steps .wizard[href="#wizard3"]').find('img').attr('src', './img/p2-in.png');
                    $('.wizard-steps .wizard[href="#wizard4"]').find('img').attr('src', './img/p3-in.png');
                }
            }
        });

        this.$body.on('hidden.bs.modal', '#add-item-modal', function (e){
            var self = $(this);
            self.find('input, textarea').val('');
            self.find('.form__help').text('');
        })

        this.$body.on('click', '#add-item-modal .btn-primary', function (e){
            e.preventDefault();
            var $modal = $(this).closest('.modal');
            var $form = $(this).closest('form');
            var $error = $.scripts.validate($form, 0);
            if ($error != 0) {
                swal({
                    title: "Oops...",
                    html: 'Something went wrong! <br/>Please fill in the required fields first.',
                    type: "warning",
                    showCancelButton: false,
                    closeOnConfirm: true,
                    confirmButtonColor: "#7fbe4c",
                    confirmButtonClass: "btn btn-warning btn-focus m-btn m-btn--pill m-btn--air m-btn--custom"
                });
                window.onkeydown = null;
                window.onfocus = null;   
                $.scripts.required_fields();
            } else {
                alert('form submitted!');
                $modal.modal('hide');
            }
        });
    }

    //init scripts
    $.scripts = new scripts, $.scripts.Constructor = scripts

}(window.jQuery),

//initializing scripts
function($) {
    "use strict";
    $.scripts.init();
    $.scripts.required_fields();
    $.scripts.remove_modal_required_fields();
}(window.jQuery);

function prettyLog(str) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
    if (typed.loop) {
      typed.loop = false;
    } else {
      typed.loop = true;
    }
  }

  $(document).ready(function() {
    $('.question').on('click', function() {
        $(this).toggleClass('active');
    });
});


/* Product Listing Section */
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('#').style.color = "#66a039";
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('#').style.color = "#333";
    });
});

/* Policy Scetion */
function showTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

/* Hero Video */
$(document).ready(function() {
    var video = $("#video").get(0);  
    $('#videoModal').on('shown.bs.modal', function (e) {
        video.play();
    })
      
    $('#videoModal').on('hide.bs.modal', function (e) {
        video.pause();
    }) 
});


/* Fee Calculator */
function calculateFee() {
    const transactionAmount = parseFloat(document.getElementById('transactionAmount').value);
    if (!isNaN(transactionAmount)) {
        const fee = (transactionAmount * 0.02) + 100; // 2% + 100 naira
        document.getElementById('feeDisplay').textContent = `Fee: ${fee.toFixed(2)}`;
    } else {
        document.getElementById('feeDisplay').textContent = `Fee: 0.00`;
    }
}

/* Contact Us Script */
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('captcha');
    const ctx = canvas.getContext('2d');
    const captchaText = Math.random().toString(36).substring(2, 7).toUpperCase();
    ctx.font = '30px Arial';
    ctx.fillText(captchaText, 10, 30);

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        const captchaInput = document.getElementById('captchaInput').value;
        if (captchaInput !== captchaText) {
            event.preventDefault();
            alert('Captcha is incorrect. Please try again.');
        }
    });
});


/* Cookie Script */
(() => {
    const getCookie = (name) => {
        const value = " " + document.cookie;
        console.log("value", `==${value}==`);
        const parts = value.split(" " + name + "=");
        return parts.length < 2 ? undefined : parts.pop().split(";").shift();
    };

    const setCookie = function (name, value, expiryDays, domain, path, secure) {
        const exdate = new Date();
        exdate.setHours(
            exdate.getHours() +
            (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
        );
        document.cookie =
            name +
            "=" +
            value +
            ";expires=" +
            exdate.toUTCString() +
            ";path=" +
            (path || "/") +
            (domain ? ";domain=" + domain : "") +
            (secure ? ";secure" : "");
    };

    const $cookiesBanner = document.querySelector(".cookies-eu-banner");
    const $cookiesBannerButton = $cookiesBanner.querySelector("button");
    const cookieName = "cookiesBanner";
    const hasCookie = getCookie(cookieName);

    if (!hasCookie) {
        $cookiesBanner.classList.remove("hidden");
    }

    $cookiesBannerButton.addEventListener("click", () => {
        setCookie(cookieName, "closed");
        $cookiesBanner.remove();
    });
})();



