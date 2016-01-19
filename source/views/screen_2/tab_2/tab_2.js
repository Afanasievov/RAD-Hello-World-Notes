RAD.view("view.screen_2_tab_2", RAD.Blanks.ScrollableView.extend({
    url: 'source/views/screen_2/tab_2/tab_2.html',
    model: RAD.model('list'),
    events: {
        'click .popup-show-add': 'showAddPopup',
        'longtap .topcoat-list__item .label' : 'showEditPopup',
        'click .remove-icon': 'removeFromList'
    },


    showAddPopup: function (e) {
        "use strict";

        var self = this,
            options = document.forms['popup-options'],
            targetID = e.currentTarget.getAttribute('data-target'),
            target = targetID ? this.el.querySelector('#'+targetID) : e.currentTarget;

        this.publish('navigation.popup.show', {
            content: "view.addPopup",
            target: target,
            width: 250,
            height: 275,
            gravity: 'bottom',
            outsideClose: false,
            extras: {
                parent: self.viewID
            }
        });

    },

    showEditPopup: function (e) {
        "use strict";

        var self = this,
            options = document.forms['popup-options'],
            targetID = e.currentTarget.getAttribute('data-target'),
            target = targetID ? this.el.querySelector('#'+targetID) : e.currentTarget,
            content = e.currentTarget.innerHTML,
            index = e.currentTarget.getAttribute('data-index');

        this.publish('navigation.popup.show', {
            content: "view.editPopup",
            target: target,
            width: 400,
            height: 120,
            gravity: 'center',
            outsideClose: true,
            extras: {
                content: content,
                index: index,
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