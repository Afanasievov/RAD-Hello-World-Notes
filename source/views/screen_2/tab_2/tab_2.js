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

    showPopup: function (e) {
        "use strict";

        var self = this,
            options = document.forms['popup-options'],
            targetID = e.currentTarget.getAttribute('data-target'),
            target = targetID ? this.el.querySelector('#'+targetID) : e.currentTarget;

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

    },

    removeFromList: function(e) {
        "use strict";
        var index = e.currentTarget.getAttribute('data-index');
        this.model.remove(this.model.at(index));
    }
}));