RAD.view("view.screen_1", RAD.Blanks.View.extend({

    url: 'source/views/screen_1/screen_1.html',

    events: {
        'tap #enter': 'enter'
    },

    enter: function () {
        "use strict";

        var data = {
            'userName'  : this.$el.find('#userName').val(),
            'gender'    : this.$el.find('input[name=gender]:checked').val(),
            'agree'     : this.$el.find('#agree').prop('checked')
        };

        this.application.login(data);
    },

    onEndDetach: function () {
        "use strict";
        this.finish();
    }

}));