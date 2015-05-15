// window.addEventListener("load", function (){


// on page load
$(function(){
  // get and render the food
  //console.log("starting shit");
  Catchphrase.all();
  View.init();

});
  var $newCatchphrase = $("#newCatchphrase");
  var $CatchphraseCon = $("#CatchphraseCon");
// // // // // // //


// VIEW OBJECT
function View() {}
View.render = function(items, parentId, templateId) {
  // render a template
  var template = _.template($("#" + templateId).html());
  // input data into template and append to parent
  console.log(items, parentId, templateId);
  $("#" + parentId).html(template({
	collection: items
  }));
  };


  View.init = function(){
	$newCatchphrase.on("submit", function (e) {
    // prevent the page from reloading
	console.log("submit event tiggered");
	e.preventDefault();
    // turn form data into a string we can use
    var CatchphraseData = $(this).serialize();

    // POST form data
    $.post("/Catchphrase", CatchphraseData).
      done(function (data) {
        console.log(data);
        // reset the form
        //$newCatchphrase[0].reset();
        Catchphrase.all();
        var $catchPhrase = $(CatchphraseTemp(data));

        // add id to $todo
        $catchPhrase.data("index", data.index);
        $CatchphraseCon.append($catchPhrase);
        catchphrases.push(data);
      });

  });

  };

// FOOD OBJECT
function Catchphrase() {}

Catchphrase.all = function() {
	//console.log("get");
  $.get("/Catchphrase", function(res){
    // parse the response
    //console.log(res);
    var catchphrases = JSON.parse(res);
   // console.log(catchphrases);
    // render the results
    View.render(catchphrases, "catchphrase-ul", "catchphrase-template");
  });
};
