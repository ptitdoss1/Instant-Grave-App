/*global App, Backbone, skrollr*/

App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.Homeview = Backbone.View.extend({

	    el: $('#homepage'),
	    caseStudyContainer: $('#homepage'),
	    initialize: function () {
            var e = this;
            Backbone.history.navigate('');
            $('#homepage').css('display', 'block');
            $('.animateProjet').css('display', 'none');
            $('section[data-projet-page]').css('display', 'none');
	        this.goToByScroll();
	        this.Skrollr();
	        $('#Incentive a.OpenProject').on('click', function () {
                e.enterProjectEvent('Incentive');
            });
            $('#Corporate a.OpenProject').on('click', function () {
                e.enterProjectEvent('Corporate');
            });
            $('#Convention a.OpenProject').on('click', function () {
                e.enterProjectEvent('Convention');
            });
            $('#Studio a.OpenProject').on('click', function () {
                e.enterProjectEvent('Studio');
            });
	    },
	    goToByScroll: function(){
	        $('.button-link').click(function () {
	            var dataslide = $(this).attr('data-id');
	            $('html,body').animate({
	                scrollTop: $('.line[data-id="' + dataslide + '"]').offset().top
	            }, 1500, 'easeInOutQuint');
                return false;
	        });
	    },
	    Skrollr: function () {
            if ($('html').hasClass('no-touch')) {
                skrollr.init({
                    forceHeight: false
                });
            }
	    },
        enterProjectEvent: function (e) {
            switch (e) {
            case 'Incentive':
                App.loadView(new App.Views.Incentive().enterProjectClick());
                break;
            case 'Corporate':
                App.loadView(new App.Views.Corporate().enterProjectClick());
                break;
            case 'Convention':
                App.loadView(new App.Views.Convention().enterProjectClick());
                break;
            case 'Studio':
                App.loadView(new App.Views.Studio().enterProjectClick());
                break;
            default:
                App.loadView(null);
            }
        }

    });

})();