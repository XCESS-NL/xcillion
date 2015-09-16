$(document).ready(function () {
    //Menu
    $('.navbar-nav.sm-collapsible .caret').click(function (e) {
        e.preventDefault();
    });

    //Bootstrap tooltip
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    //Search
    $('<span class="search-toggle-icon"></span>').insertAfter('.search a.SearchButton');

    var Search = $('.search');
    var SearchIcon = $('.search-toggle-icon');
    var SearchInput = $('.search .searchInputContainer input');
    var isOpen = false;
    SearchIcon.click(function () {
        if (isOpen == false) {
            Search.addClass('search-open');
            SearchInput.focus();
            isOpen = true;
        } else {
            Search.removeClass('search-open');
            SearchInput.focusout();
            isOpen = false;
        }
    });
    SearchIcon.mouseup(function () {
        return false;
    });
    Search.mouseup(function () {
        return false;
    });
    $(document).mouseup(function () {
        if (isOpen == true) {
            $('.search-toggle-icon').css('display', 'block');
            SearchIcon.click();
        }
    });

    SearchInput.keyup(buttonUp);

    //Search at top of the page, for phones and tablets
    $('a#search-action').click(function () {
        $('#search-top').toggleClass('active');
    });
});

function buttonUp() {
    var SearchInputVal = $('.search .searchInputContainer input').val();
    SearchInputVal = $.trim(SearchInputVal).length;
    if (SearchInputVal !== 0) {
        $('.search-toggle-icon').css('display', 'none');
        $('.search').css('overflow', 'visible');
    } else {
        $('.search .searchInputContainer input').val('');
        $('.search-toggle-icon').css('display', 'block');
        $('.search').css('overflow', 'hidden');
    }
    $('.search .searchInputContainer a.dnnSearchBoxClearText').click(function () {
        if ($('.search .searchInputContainer a.dnnSearchBoxClearText').hasClass('dnnShow')) {
            $(this).css('overflow', 'visible');
        } else {
            $('.search').css('overflow', 'hidden');
        }
    });
}

