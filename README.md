## Website Performance Optimization portfolio project


### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html
The following was altered to optimize score for index.html:
* Eliminating render-blockig css by:
  - Making the `style.css` internal in `index.html`.
  - Adding `@media="print"` to the external `print.css` file.
* Reducing images by using Grunt tool and grunt-contrib-imagemin plugin.
* minifying `index.html` using [willpeavy](https://www.willpeavy.com/minifier/).



#### Part 2: Optimize Frames per Second in pizza.html





### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
