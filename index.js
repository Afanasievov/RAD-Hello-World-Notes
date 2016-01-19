(function (document, window) {
    // don't remove ## marks, CLI uses them for updating this file
    // #script_begin#
    
    var scripts = [
        
        "source/models/list.js",
        
        "source/views/addPopup/addPopup.js",
        
        "source/views/editPopup/editPopup.js",
        
        "source/views/screen_1/screen_1.js",
        
        "source/views/screen_2/screen_2.js",
        
        "source/views/screen_2/tab_1/tab_1.js",
        
        "source/views/screen_2/tab_2/tab_2.js",
        
        "source/application/application.js"
    ];
    // #script_end#
    function onEndLoad() {

        var core = window.RAD.core,
            application = window.RAD.application,
            coreOptions = {
                defaultBackstack: false,
                defaultAnimation: 'none',
                animationTimeout: 3000,
                debug: false,
                templateSettings: {
                evaluate    : /<%([\s\S]+?)%>/g,
                interpolate : /<%=([\s\S]+?)%>/g,
                escape      : /<%-([\s\S]+?)%>/g
                }
            };


        //initialize core by new application object
        core.initialize(application, coreOptions);

        //start
        application.start();
    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));