RAD.view("view.editPopup", RAD.Blanks.View.extend({

    url: 'source/views/editPopup/editPopup.html',
    events: {
        'click .close-dialog': 'closeDialog'
    },
    className: 'popup-view',
    attributes: {
        'data-role': 'popup-view'
    },

    onNewExtras: function (extras) {
        'use strict';
        this.caller = extras.parent;
        this.model = RAD.model('list').at(extras.index);
        var self = this;
        self.loader.done(function () {
            self.$("#content")
                .html(extras.content)
                .focus();
        });
    },

    closeDialog: function (e) {
        "use strict";

        var field = this.el.querySelector('#content'),
            noteText = field.value;

        e.preventDefault();

        if (noteText) {
            this.model.set({content: noteText});
            field.value = '';
        }

        this.publish('navigation.popup.close', {content: this.viewID });
    }

}));