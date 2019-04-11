


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
        $("#gifdisplay").prepend(response.data.map(displayGifs));

    });

} //end of function for ajax call

function displayGifs(gif,i) {
return `<div><p>Rating: ${gif.rating}</p><img src="${gif.images.fixed_height.url}"/></div>`;

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



//javascipt to run the page




