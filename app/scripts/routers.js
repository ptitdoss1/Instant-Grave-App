/*global App, Backbone*/

App.Routers = App.Routers || {};

(function () {
    'use strict';

    App.Routers.ApplicationRouter = Backbone.Router.extend({

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
        home: function () {
            new App.Views.Homeview();
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
            case 'Studio':
                App.loadView(new App.Views.Studio());
                break;
            default:
                App.loadView(null);
            }
        }

    });

})();