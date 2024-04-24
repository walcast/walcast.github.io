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