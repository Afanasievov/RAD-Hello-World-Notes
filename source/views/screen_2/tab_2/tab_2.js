RAD.view("view.screen_2_tab_2", RAD.Blanks.ScrollableView.extend({
    url: 'source/views/screen_2/tab_2/tab_2.html',
    model: RAD.model('list'),
    events: {
        'submit': 'addToList',
        'click .popup-show': 'showPopup',
        //'change .notes' : 'updateNotes',
        'click .remove-icon': 'removeFromList'
    },

    addToList: function(e) {
        "use strict";
        var field = this.el.querySelector('.task-name'),
            taskName = field.value;

        e.preventDefault();

        if (taskName) {
            this.model.unshift({content: taskName, done: false});
            field.value = '';
        }
        console.log(this.model);
    },
    //onInitialize: function () {
    //    "use strict";
    //    this.model = RAD.model('list');
    //},
    //onReceiveMsg: function (channel, data) {
    //"use strict";
    ////this.$el.find('.msg').html(data);
    //},
    showPopup: function (e) {
        "use strict";

        var self = this,
            options = document.forms['popup-options'],
            //gravity = options.querySelector('[name=gravity]:checked').value,
            //outsideToClose = options.querySelector('[name=autoclose]').checked,
            targetID = e.currentTarget.getAttribute('data-target'),
            target = targetID ? this.el.querySelector('#'+targetID) : e.currentTarget,
            msg;

        //msg = document.getElementById("content").value;

        this.publish('navigation.popup.show', {
            content: "view.popup",
            target: target,
            width: 240,
            height: 120,
            gravity: 'bottom',
            outsideClose: false,
            extras: {
                //msg: msg,
                parent: self.viewID
            }
        });
    }
}));