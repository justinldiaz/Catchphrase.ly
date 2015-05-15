var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("bower_components"));


var views = path.join(process.cwd(), "public/views");

var catchphrase =[
  {id: 0, Catchphrase: "Callback", Definition: "what functions get when they go on a good date."},
  {id: 1, Catchphrase: "DOM", Definition: "how you change a documents stucture, style, and content"},
  {id: 2, Catchphrase: "This", Definition: "referring to the current object"},
  {id: 3, Catchphrase: "Event Target", Definition: "interface implemented by objects that can receive events."},
  {id: 4, Catchphrase: "recursion", Definition: "when a function calls itself"}
];


// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'));

// body parser config
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function (req, res){
  // render index.html
  //console.log(path.join(views, 'index.html'));
  res.sendFile(path.join(views, "index.html"));
});

// catchphrase index path
app.get("/Catchphrase", function (req, res){
  // render foods index as JSON
 // console.log(catchphrase);
  res.send(JSON.stringify(catchphrase));
});

app.post("/Catchphrase", function (req, res){
  // food#create
  var catchphrases = req.body;
  catchphrase.index = catchphrase[catchphrase.length -1].id+1;
  catchphrase.push(catchphrases);
  res.send(JSON.stringify(catchphrases));
});

app.delete("/Catchphrase/:id", function (req, res){
  // food#delete
});

app.listen(3000, function (req, res) {
    console.log("WORKING!!");
});