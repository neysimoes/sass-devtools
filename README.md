Sass Devtools v1.0
===================
Sass Devtools is an Open Source tool with features that will help your productivity with the SASS.

### What is the difference of Sass Devtools?
- Great Code
- Great Syntax
- Easy to understand

# How to Install?
Well first you have to download the file .scss. You can download it by clicking <a href="https://jaoz.github.io/sass-devtools">here</a>.

Then you import the .scss file that you downloaded, in your style.scss.
``` css
@import "sass-devtools.scss";
```

#Features
- Mixins
- Variables
- Function
- Flat Colors

#Mixins
Sass Devtools, has mixins that will help your productivity. As an example mixins of effects Transition, Border-Radius, Box-Shadow, Box-Sizing.

###Mixin of Transition
The mixin transition is very useful for you to apply effects and rapid transition without typing a lot. 

``` css
@include transition(all, 300ms, ease);
body {
  @include transition(all, 300ms, ease);
}

/* Result */
body {
  -webkit-transition: all 300ms ease;
     -moz-transition: all 300ms ease;
          transition: all 300ms ease;
}
```

###Mixin of Border Radius
The mixin Border Radius is very useful for you to apply border without typing a lot. 

``` css
@include border-radius(30px);
body {
  @include border-radius(30px);
}

/* Result */
body {
  -webkit-border-radius: 30px;
     -moz-border-radius: 30px;
          border-radius: 30px;
}
```

###Mixin of Box Shadow
The mixin Box Shadow is very useful for you to apply box-shadow without typing a lot. 

``` css
@include box-shadow(2px, 10px, 30px, 40px, #000000);
body {
  @include box-shadow(2px, 10px, 30px, 40px, #000000);
}

/* Result */
body {
  -webkit-box-shadow: 2px 10px 30px 40px #000000;
     -moz-box-shadow: 2px 10px 30px 40px #000000;
          box-shadow: 2px 10px 30px 40px #000000;
}
```

###Mixin of Box Shadow with RGBA
The mixin Box Shadow is very useful for you to apply box-shadow without typing a lot.

``` css
@include box-shadowRGBA(2px, 10px, 30px, 40px, 0,0,0,0);
body {
  @include box-shadowRGBA(2px, 10px, 30px, 40px, 0,0,0,0);
}

/* Result */
body {
  -webkit-box-shadow: 2px 10px 30px 40px rgba(0,0,0,0);
     -moz-box-shadow: 2px 10px 30px 40px rgba(0,0,0,0);
          box-shadow: 2px 10px 30px 40px rgba(0,0,0,0);
}
```

###Mixin of Inner Box Shadow
The mixin Inner Box Shadow is very useful for you to apply box-shadow inner without typing a lot. 

``` css
@include box-shadowinner(2px, 10px, 30px, 40px, #000000);
body {
  @include box-shadowinner(2px, 10px, 30px, 40px, #000000);
}

/* Result */
body {
  -webkit-box-shadow: inset 2px 10px 30px 40px #000000;
     -moz-box-shadow: inset 2px 10px 30px 40px #000000;
          box-shadow: inset 2px 10px 30px 40px #000000;
}
```

###Mixin of Inner Box Shadow with RGBA
The mixin Inner Box Shadow with RGBA is very useful for you to apply box-shadow inner without typing a lot. 

``` css
@include box-shadowinnerRGBA(2px, 10px, 30px, 40px, 0,0,0,0);
body {
  @include box-shadowinnerRGBA(2px, 10px, 30px, 40px, 0,0,0,0);
}

/* Result */
body {
  -webkit-box-shadow: inset 2px 10px 30px 40px rgba(0,0,0,0);
     -moz-box-shadow: inset 2px 10px 30px 40px rgba(0,0,0,0);
          box-shadow: inset 2px 10px 30px 40px rgba(0,0,0,0);
}
```

###Mixin of Box Sizing
The mixin Border Sizing is very useful for you to apply Box Sizing without typing a lot. 

``` css
@include box-sizing(box-content);
body {
  @include box-sizing(box-content);  
}

/* Result */
body {
  -webkit-box-sizing: box-content;
     -moz-box-sizing: box-content;
          box-sizing: box-content;
}
```

#Functions

###Function converting PX to EM
``` css
body {
  width: convertoEM(10);
}

/* Result */
body {
  width: 0.625em;
}
```

###Function converting PX to %
``` css
body {
  width: convertoPER(200);
}

/* Result */
body {
  width: 2%;
}
```

###Function converting PX to REM
``` css
body {
  width: convertoREM(10);
}

/* Result */
body {
  width: 0.625rem;
}
```

#Flar Colors
Sass Devtools also has a library of flat colors for you to use and abuse.

``` css
$grey;
$blue;
$yellow;
$green;
$red;
$midnight;
$dark-grey;
$dark-blue;
$dark-yellow;
$dark-green;
$dark-red;
$dark-midnight;
```
### About the Author
Hey, my name is João Paulo, I'm 15 years old, I'm from Brazil and I'm a Front-End Developer.
If you wanna see more projects access my github account. Clicking <a href="https://github.com/jaoz">here</a>.
