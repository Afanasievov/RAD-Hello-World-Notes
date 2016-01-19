RAD.view("view.addPopup", RAD.Blanks.View.extend({

    url: 'source/views/addPopup/addPopup.html',
    events: {
        'click .close-dialog': 'closeDialog'
    },
    className: 'popup-view',
    attributes: {
        'data-role': 'popup-view'
    },
    onInitialize: function () {
        'use strict';
        this.model = RAD.model('list');
    },
    onNewExtras: function (extras) {
        'use strict';
        this.caller = extras.parent;
    },
    onEndDetach: function () {
        "use strict";
        var tag = this.$('#text').get(0),
            resultString = tag ? tag.value : '';
        //transfer data to parent
        this.publish(this.caller, {result: resultString });
    },
    closeDialog: function (e) {
        "use strict";

        var field = this.el.querySelector('#content'),
            noteText = field.value,
            createDate = new Date().toLocaleString();

        e.preventDefault();

        if (noteText) {
            this.model.unshift({content: noteText, createDate: createDate});
            field.value = '';
        }

        this.publish('navigation.popup.close', {content: this.viewID });
    }

}));