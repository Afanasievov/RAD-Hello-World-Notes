RAD.application(function (core) {
    var app = this;

    app.start = function () {

        var options = {
            container_id: '#screen',
            content     : "view.screen_1",
            animation   : 'none'
        };
       core.publish('navigation.show', options);

    };

    app.login = function (userData) {
        var options = {
            container_id: '#screen',
            content     : "view.screen_2",
            animation: 'slide-in'
        };
        options.extras = userData;
        core.publish('navigation.show', options);

    };

    app.logout = function () {
        core.publish('navigation.show', {
            container_id: '#screen',
            content     : 'view.screen_1',
            animation: 'slide-out'
        })
    };

    return app;
}, true);
