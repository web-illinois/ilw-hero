# Sample README

## Overview

Hero component for the web toolkit. The Hero Image component adds a large picture at the top of the page. It is used to draw attention to the page and can be used to set the tone for the page.

There is one slot, called "background", used for the background item. This is optional, but is most likely an image. 

The default text should include a header (h1, h2, h3) and possibly a button list. The buttons will need to be styled separately. 

Attributes include:
* theme: the theme/background of the content. Options are blue, orange, gray, blue-gradient, orange-gradient
* width: whether or not this is contained in the parent (default) or if it will expand to full width (full). Auto will not work in this case. 
* align: whether or not the text is vertical or horizonally aligned (top-left, left-center, right-bottom, etc.)
* focus: if the image has a focal point if it shrinks or not. Values are top, bottom, left, right. Default is center. 
* shadow: if the text should have a drop shadow on it. 
* collapse: if the image should disappear in mobile view (useful if the image is just a blank pattern or does not give relevant information)

## Contact Team

jonker@illinois.edu

## NPM Install

None yet, still in alpha.

## Files

None yet, still in alpha.

## Code Examples

```
<ilw-hero align="left" focus="bottom" shadow theme="white">
  <img src="https://picsum.photos/1920/1280" alt="" slot="background">
  <h1>Innovating solutions every year</h1>
  <ul class="ilw-buttons">
      <li>
          <a href="#">Link 1</a>
      </li>
      <li>
          <a href="#">Link 2</a>
      </li>
      <li>
          <a href="#">Link 3</a>
      </li>
  </ul>
</ilw-hero>
```

```
<ilw-hero collapse="true">
  <h2>Innovating solutions every year</h2>
  <ul class="ilw-buttons">
      <li>
          <a href="#">Link 1</a>
      </li>
      <li>
          <a href="#">Link 2</a>
      </li>
      <li>
          <a href="#">Link 3</a>
      </li>
  </ul>
</ilw-hero>
```

```
 <ilw-hero>
  <video slot="background" autoplay="" loop="" muted="" poster="https://cdn-e.education.illinois.edu/video/first_image.png"><source src="https://cdn-e.education.illinois.edu/video/homepage8.mp4" type="video/mp4">Your browser does not support the video tag.
  </video>
  <h2>Innovating solutions every year</h2>
  <ul class="ilw-buttons">
    <li>
        <a href="#">Link 1</a>
    </li>
    <li>
        <a href="#">Link 2</a>
    </li>
    <li>
        <a href="#">Link 3</a>
    </li>
  </ul>
</ilw-hero>
```

## Accessibility Notes and Use

The obvious one is color contrast. Make sure you have an image that text can overlay on. Match the theme with the dominant color of the image (so if you have a white image, use the white theme, if you have a dark image, use the blue theme). Make sure you test using multiple screen sizes, as the image will shift based on the size of the screen. If you need assistance, you can use the shadow option to put a shadow in front of the heading text. 

For a graphic, make sure you choose a graphic that would reasonably display on a monitor. Do not choose a portrait image, or it will be cropped oddly. 

You can include buttons using the ilw-buttons class or ilw-button class. 

## External references

https://usability.yale.edu/usability-best-practices/hero-imagescarousels
