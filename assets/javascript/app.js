


var queryLink = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yOiNxhYpalJVeUjnKkpTZXWAzhDmUg2N&limit=5"

var topics = ["golf","cats","dogs","cars","planes","winner","loser"];
var buttonCount = 0;


function makeButton(arr) {
    console.log(arr);
    $("#btnrow1").html(arr.map(buttonHtml));
    console.log(arr.map(buttonHtml));

}; //end of make button function

function apiCall(param) {
    var queryLink = "http://api.giphy.com/v1/gifs/search?q=" + param + "&api_key=yOiNxhYpalJVeUjnKkpTZXWAzhDmUg2N&limit=5"
    $.ajax ({
        url: queryLink,
        method: "GET",
    }).then (function(response){
        console.log(response);
    });

} //end of function for ajax call

function diplayGifs() {

}; //end of function to put gifs on page

function userInput() {

}//end of functiton to return user input and turning it into a button
//function gifHtml() {
    //`<div>
      // <img src="${}`

   // $("container").append()
//}
function buttonHtml(topicData) {
    console.log("button" + topicData);
    buttonCount = buttonCount + 1;
    var buttonNum = "button" + buttonCount;
    return `<div><button id="${buttonNum}" class="btn btn-outline-danger" type="button" data-name="${topicData}">${topicData}</button></div>`

};//end of function to format HTML for buttons



makeButton(topics);
var term = "dog";
apiCall(term);

//javascipt to run the page




