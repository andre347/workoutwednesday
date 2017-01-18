// get states
var states = [
'Alabama',
'Arizona',
'Arkansas',
'California',
'Colorado',
'Connecticut',
'Delaware',
'Florida',
'Georgia',
'Idaho',
'Illinois',
'Indiana',
'Iowa',
'Kansas',
'Kentucky',
'Louisiana',
'Maine',
'Maryland',
'Massachusetts',
'Michigan',
'Minnesota',
'Mississippi',
'Missouri',
'Montana',
'Nebraska',
'Nevada',
'New Hampshire',
'New Jersey',
'New Mexico',
'New York',
'North Carolina',
'North Dakota',
'Ohio',
'Oklahoma',
'Oregon',
'Pennsylvania',
'Rhode Island',
'South Carolina',
'South Dakota',
'Tennessee',
'Texas',
'Utah',
'Vermont',
'Virginia',
'Washington',
'West Virginia',
'Wisconsin',
'Wyoming'
];
//sort array
sortedState = states.sort();

function loadImages(list) {
    // loop through the states and create an image for each one
    for (i = 0; i < sortedState.length; i++) {
      //parse the states
      var states = sortedState[i];
      //Tableau Public Viz
      var url = "https://public.tableau.com/views/WorkoutWednesday/Sheet?:showVizHome=no&:embed=y&:toolbar=n&:format=png&State="+states;


      $("#tiles").append("<div class='tile' style='opacity:0;' id='tile-"+i+"'><span class='tile-title'>"+states+"</span><img src='"+url+"'><div class='cover'></div></div>");

    };


  $('#tiles').imagesLoaded()

    .done( function() {

      $(".tile").each(function() {
        $(this).fadeTo("slow",1);
      });
    })
}


loadImages(sortedState);
