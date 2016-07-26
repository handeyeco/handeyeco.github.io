# Matthew Bryan Curtis - _Resume_
It's my resume. Built with:

* Bootstrap
* jQuery
* Sass
* Node/NPM

Also using these very beautiful fonts:

* Quicksand
* Stalemate

## Commits

### July 26, 2016 9:28AM

Changing

```javascript
$('.nav a').on('click', function(){
  $(".navbar-toggle").trigger( "click" );
});
```

to

```javascript
$('.nav a').on('click', function(){
    if($('.navbar-toggle').css('display') != 'none') {
        $(".navbar-toggle").trigger( "click" );
    }
});
```

fixed `nav` glitch by adding a conditional that checks if `navbar` is operating in a collapsed state.

[Thanks StackOverflow](http://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click)

### July 26, 2016 9:17AM

Reorganize "Skills" now that I'm basically the master of React.

A bug was pointed out to me recently. On nav click, links disappear and then reappear. Figured it was a Bootstrap bug until digging into my JS and noticed a `//Hide nav on click` feature for mobile. Next commit: fix bug.
