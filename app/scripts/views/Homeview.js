/*global App, Backbone*/

App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.Homeview = Backbone.View.extend({

	    el: $('#homepage'),
	    caseStudyContainer: $('#homepage'),
	    initialize: function () {
	    	var e = this;
            $('#homepage').css('display', 'block'),
            $('section[data-projet-page]').css('display', 'none'),
	        this.goToByScroll(),
	        this.Skrollr(),
	        $("#Incentive a.OpenProject").on("click", function (t) {
                e.enterProjectEvent('Incentive')
            }),
            $("#Corporate a.OpenProject").on("click", function (t) {
                e.enterProjectEvent('Corporate')
            }),
            $("#Convention a.OpenProject").on("click", function (t) {
                e.enterProjectEvent('Convention')
            }),
            $("#Seminaire a.OpenProject").on("click", function (t) {
                e.enterProjectEvent('Seminaire')
            });
	    },
	    goToByScroll: function(){
	        'use strict';
	        $('.button-link').click(function (e) {
	            var dataslide = $(this).attr('data-id');
	            $('html,body').animate({
	                scrollTop: $('.line[data-id="' + dataslide + '"]').offset().top
	            }, 2000, 'easeInOutQuint');
	        });
	    },
	    Skrollr: function (e) {
	        'use strict';
	        skrollr.init({
	      		// render: function(data) {
			    //     console.log(data.curTop);
			    // },
	            forceHeight: false
	        });
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
            case 'Seminaire':
                App.loadView(new App.Views.Seminaire().enterProjectClick());
                break;
            default:
                App.loadView(null);
            }
        }

    });

})();