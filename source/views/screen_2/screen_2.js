RAD.view("view.screen_2", RAD.Blanks.View.extend({

    url: 'source/views/screen_2/screen_2.html',
    children: [
        {
            container_id: '#inner',
            content: "view.screen_2_tab_1"
        }
    ],
    events: {
        'tap .logout'       : 'logout',
        'tap .switch-to'    : 'switchTo',
        'tap .go-back'      : 'goBack',
        'tap .go-forward'   : 'goForward'
    },
    tabs: [
        'view.screen_2_tab_1',
        'view.screen_2_tab_2'
    ],
    logout: function () {
        "use strict";
        this.application.logout();
    },
    switchTo: function (e) {
        "use strict";
        var $selectedTab = $(e.currentTarget),
            $allTabs = this.$el.find('.topcoat-tab-bar__button'),
            $activeTab = $allTabs.filter('.active'),
            activeTabIndex = $allTabs.index($activeTab),
            selectedTabIndex = $allTabs.index($selectedTab),
            animation;
        //console.log($selectedTab, $allTabs, $activeTab, activeTabIndex);

        if (activeTabIndex === selectedTabIndex) {
            return;
        }

        animation = activeTabIndex < selectedTabIndex ? 'slide-in' : 'slide-out';

        $activeTab.removeClass('active');
        $selectedTab.addClass('active');

        this.publish('navigation.show', {
            container_id: '#inner',
            content: this.tabs[selectedTabIndex],
            animation: animation,
            backstack: true
        })
    }
}));