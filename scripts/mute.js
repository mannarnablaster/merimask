$(document).ready(function(){

    $("video").prop('muted', true);

    $("video").click( function (){
        $(this).prop('muted', !$(this).prop('muted'));
    });

    $(".version2").click( function (){
        $("video").prop('muted', !$("video").prop('muted'));
    });
});