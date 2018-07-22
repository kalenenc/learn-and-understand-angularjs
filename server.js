var express = require('express')
var app = express()

// That tells express/node that the learn-and-understand-angularjs directory should act as your web root
app.use(express.static(__dirname ));


app.listen(3000, () => {
  console.log('Server started!');
});

app.route('/').get((req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

// Section 2 
app.route('/section%202/S2.1%20-%20Code-Modules-Apps-Controllers/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 2/S2.1 - Code-Modules-Apps-Controllers' });
	//res.render('app.js', { root: __dirname + '/section 2/S2.1 - Code-Modules-Apps-Controllers' });
});

// Section 3

// S3.0
app.route('/section%203/S3.0%20-%20Code-Dependency%20Injection/Starter/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 3/S3.0 - Code-Dependency Injection/Starter/' });
});

app.route('/section%203/S3.0%20-%20Code-Dependency%20Injection/Finished/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 3/S3.0 - Code-Dependency Injection/Finished/' });
});

// S3.1
app.route('/section%203/S3.1%20-%20Code-The-Scope-Service/Starter/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 3/S3.1 - Code-The-Scope-Service/Starter/' });
});

app.route('/section%203/S3.1%20-%20Code-The-Scope-Service/Finished/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 3/S3.1 - Code-The-Scope-Service/Finished/' });
});

// S3.2
app.route('/section%203/S3.2%20-%20Code-Functions-And-Strings/Starter/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 3/S3.2 - Code-Functions-And-Strings/Starter/' });
});

app.route('/section%203/S3.2%20-%20Code-Functions-And-Strings/Finished/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 3/S3.2 - Code-Functions-And-Strings/Starter/' });
});

// S3.3
app.route('/section%203/S3.3%20-%20Code-Angular%20Dependency%20Injection/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 3/S3.3 - Code-Angular Dependency Injection/' });
});


// S3.4
app.route('/section%203/S3.4%20-%20Code-Getting-Other-Services/Starter/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 3/S3.4 - Code-Getting-Other-Services/Starter/' });
});

app.route('/section%203/S3.4%20-%20Code-Getting-Other-Services/Finished/index.htm').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/section 3/S3.4 - Code-Getting-Other-Services/Finished/' });
});

// S3.5
app.route('/').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/' });
});

app.route('/').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/' });
});

// S3.6
app.route('/').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/' });
});

app.route('/').get((req, res) => {
	res.sendFile('index.htm', { root: __dirname + '/' });
});






// Section 4

// Section 5

// Section 6

// Section 7

// Section 8

// Section 9

// Section 10

// Section 11