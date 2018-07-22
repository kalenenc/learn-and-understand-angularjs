var express = require('express');
var app = express();

// That tells express/node that the learn-and-understand-angularjs directory should act as your web root
app.use(express.static(__dirname ));


app.listen(3000, () => {
  console.log('Server started!');
});
