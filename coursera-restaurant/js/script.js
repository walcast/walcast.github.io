$(function () {
    $(".navbar-toggler").blur(function (event){
        if(window.innerHeight < 768) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});

(function (global) {
    var dc = {};

    var homeHtmlUrl = "snippets/home.html";
    var categoriesHtmlUrl = "snippets/categories.html";
    var categoryHtmlUrl = "snippets/category.html";

    var insertHtml = function (selector, html) {
      $(selector).html(html);
    };

    var showLoading = function (selector) {
        let html = "<div class='d-flex justify-content-center mb-4'>";
        html += "<div class='spinner-border' role='status'></div></div>"
        insertHtml(selector, html);
    };

    var switchMenuToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#navHomeButton").className;
        classes = classes.replace(new RegExp("active", "g"), "");
        document.querySelector("#navHomeButton").className = classes;

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#navMenuButton").className;
        if (classes.indexOf("active") === -1) {
            classes += " active";
            document.querySelector("#navMenuButton").className = classes;
        }
    };

    $(document).ready(function() {
        showLoading('#main-content');
        $ajaxUtils.sendGetRequest(
            homeHtmlUrl,
            function(homeHtml) {
                insertHtml('#main-content', homeHtml);
            },
            false
        );
    });

    dc.loadCategories = function () {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            categoriesHtmlUrl,
            function(categoriesHtml) {
                insertHtml('#main-content', categoriesHtml);
            },
            false
        );
    };

    dc.loadCategory = function () {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            categoryHtmlUrl,
            function(categoryHtml) {
                insertHtml('#main-content', categoryHtml);
            },
            false
        );
    };


    global.$dc = dc;
    
})(window);