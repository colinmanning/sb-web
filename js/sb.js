var IS_ARCHIVE = 1;

(function (jQuery) {
    function initFlyouts() {
        initPublishedFlyoutMenus(
            [{
                "id": "441533440625105657",
                "title": "Home",
                "url": "index.html",
                "target": "",
                "nav_menu": false
            }, {
                "id": "587784099708366013",
                "title": "Gallery",
                "url": "gallery.html",
                "target": "",
                "nav_menu": false
            }, {
                "id": "537698818911676902",
                "title": "Gaelic Sport",
                "url": "gaelic-sport.html",
                "target": "",
                "nav_menu": false
            }, {
                "id": "833737426186876654",
                "title": "Contact Us",
                "url": "contact-us.html",
                "target": "",
                "nav_menu": false
            }],
            "441533440625105657",
            '',
            'active',
            false,
            {
                "navigation\/item": "<li {{#id}}id=\"{{id}}\"{{\/id}} class=\"wsite-menu-item-wrap\">\n\t<a\n\t\t{{^nav_menu}}\n\t\t\thref=\"{{url}}\"\n\t\t{{\/nav_menu}}\n\t\t{{#target}}\n\t\t\ttarget=\"{{target}}\"\n\t\t{{\/target}}\n\t\t{{#membership_required}}\n\t\t\tdata-membership-required=\"{{.}}\"\n\t\t{{\/membership_required}}\n\t\tclass=\"wsite-menu-item\"\n\t\t>\n\t\t{{{title_html}}}\n\t<\/a>\n\t{{#has_children}}{{> navigation\/flyout\/list}}{{\/has_children}}\n<\/li>\n",
                "navigation\/flyout\/list": "<div class=\"wsite-menu-wrap\" style=\"display:none\">\n\t<ul class=\"wsite-menu\">\n\t\t{{#children}}{{> navigation\/flyout\/item}}{{\/children}}\n\t<\/ul>\n<\/div>\n",
                "navigation\/flyout\/item": "<li {{#id}}id=\"{{id}}\"{{\/id}}\n\tclass=\"wsite-menu-subitem-wrap {{#is_current}}wsite-nav-current{{\/is_current}}\"\n\t>\n\t<a\n\t\t{{^nav_menu}}\n\t\t\thref=\"{{url}}\"\n\t\t{{\/nav_menu}}\n\t\t{{#target}}\n\t\t\ttarget=\"{{target}}\"\n\t\t{{\/target}}\n\t\tclass=\"wsite-menu-subitem\"\n\t\t>\n\t\t<span class=\"wsite-menu-title\">\n\t\t\t{{{title_html}}}\n\t\t<\/span>{{#has_children}}<span class=\"wsite-menu-arrow\">&gt;<\/span>{{\/has_children}}\n\t<\/a>\n\t{{#has_children}}{{> navigation\/flyout\/list}}{{\/has_children}}\n<\/li>\n"
            },
            {}
        )
    }

    if (jQuery) {
        jQuery(document).ready(function () {
            jQuery(initFlyouts);
        });
    } else {
        if (Prototype.Browser.IE) window.onload = initFlyouts;
        else document.observe('dom:loaded', initFlyouts);
    }
})(window._W && _W.jQuery)
//-->
