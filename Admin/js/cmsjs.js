$(function() {
//    $( "#sortable" ).sortable({
//      revert: true
//    });
    $(document).tooltip();
    $( ".component" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    
    
//    $( "ul, li" ).disableSelection();
});


$(document).ready(function(){
    $("#editPanel #header li").click(function(){
        $("#editPanel #header li").removeClass("selected");
        $(this).addClass("selected");
        
        $("#editPanel #content #overflow").animate({"margin-left": -$(this).index() * 100 + "%"});
    });
    
    
    $("#editPanel #header>#toggle").click(function(){

        
        if($(this).html() == 4)
        {
            $("#editPanel #content").css({"height":"0px"}); //.css({"bottom":"-245px"});
            $("#editPanel").css({"bottom":"-245px"});
            $(this).html('3');
        }
        else
        {
            $("#editPanel #content").css({"height":"245px"});//css({"bottom":"0px"});
            $("#editPanel").css({"bottom":"0px"});
            $(this).html(4);
        }
        
    });
});