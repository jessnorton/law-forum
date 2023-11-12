$(document).ready(function () {

    $("#addComment").click(function() {
        var input = $("#textarea").val();
        $(".commentSection").append("<p class='username'>username@gmail.com</p>");
        $(".commentSection").append("<p class='bottom'>11/20/22 10:50pm</p>");
        $(".commentSection").append(input + "<br><br>");
    });

});