var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));


var article = {
  'article-one': {  
  title: 'charan article-one',
  heading: 'Article-one',
  date: 'aug 19 2017',
  content: `
            <p>
                This is the article for my first article
            </p>
            <p>
                Am not gud at coding, from here after i ll learn to code
            </p>
            <p>
                I thought nptel cousrses are easy, but it's tougher than what i thought
            </p> `
      
  },
           
  'article-two': {
      title: 'charan article-two',
      heading: 'Article-two',
      date: 'aug 19 2017',
      content: `
            <p>
                Trying to code my self
            </p>
            <p>
                 Excited to code my self
            </p>
            <p>
               Good to code myself 
            </p>`
            },
  'article-three': { 
  title: 'charan article-three',
      heading: 'Article-three',
      date: 'aug 19 2017',
      content: `
            <p>
                    Getting practiced with code
            </p>
            <p>
                    Feeling cool with coding
            </p>
            <p>
                    End of article-three
            </p>`
            }
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content; 
var htmlTemplate= `
    <html>
    <head>
        <title>
            ${title}
        </title>
         <meta name="viewport" content="width=device-width, intial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
var articleName = req.params.articleName;
    res.send(createTemplate(article[articleName]));
   });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});