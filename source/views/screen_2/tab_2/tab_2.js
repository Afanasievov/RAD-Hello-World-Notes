RAD.view("view.screen_2_tab_2", RAD.Blanks.ScrollableView.extend({
    url: 'source/views/screen_2/tab_2/tab_2.html',
    events: {
        'sumbit'            : 'addToList',
        'change .note-list' : 'updateList',
        'click .remove-icon': 'removeFromList'
    },
    onInitialize: function () {
        "use strict";
        this.model = RAD.model('list');
    }
}));