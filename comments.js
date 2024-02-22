// Create web server

var http = require('http');
var url = require('url');
var comments = [];

var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true);
  var pathname = urlObj.pathname;
  if (pathname === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<form method="POST" action="/save"><input type="text" name="comment"><input type="submit" value="submit"></form>' + comments.map(function(comment) {
      return '<p>' + comment + '</p>';
    }).join(''));
  } else if (pathname === '/save') {
    var comment = urlObj.query.comment;
    comments.push(comment);
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, function() {
  console.log('Server is running...');
});
```
- `var urlObj = url.parse(req.url, true);` is a method to parse the URL. The second argument `true` is to parse the query string into an object.
- `var pathname = urlObj.pathname;` is to get the pathname from the parsed URL.
- `res.setHeader('Content-Type', 'text/html; charset=utf-8');` is to set the header of the response. The header is set to `text/html` and the character set is `utf-8`.
- `res.statusCode = 302;` is to set the status code of the response to `302`.
- `res.setHeader('Location', '/');` is to set the `Location` header of the response to `/`. This is to redirect the client to the root path.
- `res.end();` is to end the response.

###


