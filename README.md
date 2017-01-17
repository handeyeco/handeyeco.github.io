# Matthew Bryan Curtis - _Resume_
It's my resume. Built with:

* Bootstrap
* Canvas
* Dash of ES6
* Sass
* Node/NPM
* jQuery

Also using these very beautiful fonts:

* Quicksand
* Stalemate

## Todo

* Setup autoprefixer
* Lazy load images

## Notes

### July 26, 2016 12:49AM

Safari on iOS had a little problem using `100%` inside of `100vh` resulting in a faux margin.

Updated to:

```css
.splashBackground {
  ...
  height: 100vh;
  width: 100vw;
  ...
}
```

Seems to be working on all of my Apple crap. Who could say what's happening in Windows?

### July 26, 2016 11:25AM

Updated site to fade in splash/header image when loaded. Note the JS doesn't actually do anything with the image it's downloading.

```javascript
//Create an image and download splash
var splashImage = new Image();
splashImage.src = "http://matthewbryancurtis.com/images/header-wood-min.jpg";

//When splash image loaded, fade in background div
$(splashImage).load(function() {
  $('.splashBackground').fadeIn('fast');
});
```

Instead of assigning the header a background, I create a new div layered underneath the title. The div is faded in when the image loads.

```html
<header>
  <div class="splashBackground">
  </div>

  <h1>Matthew Curtis</h1>
  <p class="sub-title hide-mobile">Developer</p>
</header>
```

That div is originally hidden. Thinking about removing the background here and assigning it in JS, but on the fence about it.

```css
.splashBackground {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -9999;
  background-image: url("http://matthewbryancurtis.com/images/header-wood-min.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
```

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
