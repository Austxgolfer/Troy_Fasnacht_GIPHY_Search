


var queryLink = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yOiNxhYpalJVeUjnKkpTZXWAzhDmUg2N&limit=5"

var topics = ["golf","cats","dogs","cars","planes","winner","loser"];
var buttonCount = 0;


function makeButton(arr) {
    $("#btnrow1").html(arr.map(buttonHtml));
    

}; //end of make button function

function apiCall(param) {
    var queryLink = "http://api.giphy.com/v1/gifs/search?q=" + param + "&api_key=yOiNxhYpalJVeUjnKkpTZXWAzhDmUg2N&limit=10"
    $.ajax ({
        url: queryLink,
        method: "GET",
    }).then (function(response){
        console.log(response);
        $("#gifdisplay").prepend(response.data.map(displayGifs));
        
    });

} //end of function for ajax call

function displayGifs(gif,i) {
 var gifid = "gif" + i
 console.log(gifid);
return `<div id="${gifid}"><p>Rating: ${gif.rating}</p><img src="${gif.images.downsized_still.url}" data-still="${gif.images.downsized_still.url}" data-animate="${gif.images.fixed_height.url}" data-state="still" class="gif"></div>`;

}; //end of function to put gifs on page

function userInput() {

}//end of functiton to return user input and turning it into a button

function buttonHtml(topicData) {
    buttonCount = buttonCount + 1;
    var buttonNum = "button" + buttonCount;
    return `<div><button id="${buttonNum}" class="btn btn-outline-danger" type="button" data-name="${topicData}">${topicData}</button></div>`

};//end of function to format HTML for buttons

makeButton(topics);

$(document.body).on("click","[id^=button]",function() {
    var topicData = $(this).attr("data-name");
    apiCall(topicData);

});
$("#submit").on("click",function(event) {
    event.preventDefault();
    var input = $("#srchparam").val().trim();
    console.log(input);
    $("#btnrow1").append(buttonHtml(input));
    $("#srchparam").val(" ");
});   

$(document.body).on("click",".gif",function(event){
    console.log("buttonclisk");
    var datastate = $(this).attr(`data-state`)
    console.log(datastate);
    if ($(this).attr(`data-state`) === "still") {
        $(this).attr(`data-state`,"animate"); //changes state to animated
        $(this).attr(`src`,$(this).attr(`data-animate`));//changes src to animated link
      }
      else {$(this).attr(`data-state`,"still"); // changes state to still
        $(this).attr(`src`,$(this).attr(`data-still`)); // changes src to still image link

      };
}); //animate button click


//javascipt to run the page




