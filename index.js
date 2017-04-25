var express = require('express')
var app = express()
var phantomJsCloud = require("phantomjscloud");
var browser = new phantomJsCloud.BrowserApi({
  apiKey: 'ak-z4j5n-1f2vp-0yrzv-cgqqv-33516'
});

app.set('port', (process.env.PORT || 5009))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

console.log(browser)

browser.requestSingle({ url: "http://www.google.com", renderType: "plainText" }).then(function(response){
    console.log(JSON.stringify(response.content));
}).catch(function(er){
    console.log(er);
});
