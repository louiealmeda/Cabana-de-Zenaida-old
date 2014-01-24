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