/*global App, Backbone*/

App.Routers = App.Routers || {};

(function () {
    'use strict';

    App.Routers.ApplicationRouter = Backbone.Router.extend({

        init: function() {
            this.routesHit = 0;
            //keep count of number of routes handled by your application
            Backbone.history.on('route', function() { this.routesHit++; }, this);
        },

        back: function() {
            if(this.routesHit > 1) {
              //more than one route hit -> user did not land to current page directly
              window.history.back();
            } else {
              //otherwise go to the home page. Use replaceState if available so
              //the navigation doesn't create an extra history entry
              this.navigate('app/', {trigger:true, replace:true});
            }
        },

        routes: {
            '': 'home',
            '!/case-projet/:projet(/)': 'projetService',
            '!/case-projet/:projet/Galerie(/)': 'galerieService',
            '!/case-projet(/)': 'homeEvents',
        },
        projetService: function (e) {
            this.loadView(e), App.activeProjectView.enterFromRouter();
        },
        galerieService: function (e) {
            this.loadView(e), App.activeProjectView.enterGalleryFromRouter();
        },
        homeEvents: function (e) {
            this.loadView(e),
            $('html,body').animate({scrollTop: $('.line[data-id="events"]').offset().top}, 2000, 'easeInOutQuint');
        },
        home: function (e) {
            new App.Views.Homeview()
        },
        loadView: function (e) {
            switch (e) {
            case 'Homeview':
                App.loadView(new App.Views.Homeview());
                break;
            case 'Incentive':
                App.loadView(new App.Views.Incentive());
                break;
            case 'Corporate':
                App.loadView(new App.Views.Corporate());
                break;
            case 'Convention':
                App.loadView(new App.Views.Convention());
                break;
            case 'Seminaire':
                App.loadView(new App.Views.Seminaire());
                break;
            default:
                App.loadView(null);
            }
        }

    });

})();