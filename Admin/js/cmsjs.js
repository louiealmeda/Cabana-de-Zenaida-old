var editPanelVisible = true;

$(function() {
//    $( "#sortable" ).sortable({
//      revert: true
//    });
    $(document).tooltip();
    $( ".component" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
//      revert: "invalid"
    });
    
    
//    $( "ul, li" ).disableSelection();
});


$(document).ready(function(){
    $("#editPanel #header #tabs li").click(function(){
        
        if(!editPanelVisible)
            ShowEditPanel();
        
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
            editPanelVisible = false;
        }
        else
        {
            ShowEditPanel();
        }
    });
});


function ShowEditPanel(){
    $("#editPanel #content").css({"height":"245px"});//css({"bottom":"0px"});
    $("#editPanel").css({"bottom":"0px"});
    $("#editPanel #header>#toggle").html(4);
    editPanelVisible = true;
}