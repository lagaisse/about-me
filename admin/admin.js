    jQuery(function($) {
        var panelList = $('#draggablePanelList');

        panelList.sortable({
            // Only make the .panel-heading child elements support dragging.
            // Omit this to make then entire <li>...</li> draggable.
            handle: '.panel-heading', 
            update: function() {
                $('.panel', panelList).each(function(index, elem) {
                     var $listItem = $(elem),
                         newIndex = $listItem.index();

                     // Persist the new indices.
                });
            }
        });

        var panelList1 = $('#draggablePanelList1');

        panelList1.sortable({
            // Only make the .panel-heading child elements support dragging.
            // Omit this to make then entire <li>...</li> draggable.
            handle: '.panel-heading', 
            update: function() {
                $('.panel', panelList).each(function(index, elem) {
                     var $listItem = $(elem),
                         newIndex = $listItem.index();

                     // Persist the new indices.
                });
            }
        });



        var xp_tpl = $('#experience-template').html();
        var mis_tpl = $('#mission-template').html();            
        $(".add-xp").click(function(){
            //alert("The add-xp was clicked.");

            //var html = Mustache.to_html(template, data);
            $('#draggablePanelList1').append(xp_tpl);
            
            //add handler on add-mission class if it does not already exist
            $(".add-mission").click(function(){
                //alert("The add-xp was clicked.");

                //var html = Mustache.to_html(template, data);
                $('#draggablePanelList2').append(mis_tpl);
            });

        });




    });


