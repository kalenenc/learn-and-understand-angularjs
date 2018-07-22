window.addEventListener('hashchange', function(){

  if (window.location.hash === '#/bookmark/1') {
    console.log('Page 1 is cool'); // when you click the bookmark link, the hash will change and the event will fire
  }

  if (window.location.hash === '#/bookmark/2') {
    console.log('Let me make an ajax request to get page 2');
  }

  if (window.location.hash === '#/bookmark/3') {
    console.log('Here\'s page 3.');
  }
    // i'm pretty sure it won't work if you're just using a local file path name to edit your code...




})
