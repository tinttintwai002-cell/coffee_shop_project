# CGMGL Coding rules
---
## Image related conventions
- separate folder for separate pages
```
- img
    - common
    - top
    - about
    - service
```
- if an image is used in many places, put it in common.
- prefix (img-) for normal usuages (blog-cards, main visual images, etc etc)
- prefix (bg-) for background images.
- prefix (ico-) for icons.
    - add modifiers if necessary. (if an icon is the same style but different color, `ico-arw-blue`, `ico-arw-white` etc)

- prefix (logo-) for logos.
- use section name for the full name of images. Not the content of the images.
- Always kebab-case
- Always 2-digit numbering: 01, 02, 03
- Never include descriptive words beyond section name

Example:
About section have a photo of people working in the company. image name should be `img-about` instead of `img-people-working`. Same rule follows for bg and icos.

- if images are used inside a section of a card, name should be section-name + 01, 02 etc

Example:

- if service section have cards and each card have their own images, the names should be `img-service-01`, `img-service-02` etc.
- lazy load non-critical images

- if phone number, use <a> tag and tel: . if email, use mailto:.

## HTML Rules
- Indentation = 2 spaces ( not tabs )
- Semantic HTML only.
- section tags are mainly used to separate major content block.

#### sample flow

OK
```
<section class="sec-about">
    <div class="sec-wrap">
        <article class="about-article">
        </article>
    </div>
</section>
```

NG
```
<div class="sec-about">
    <div class="sec-wrap">
        <section class="about-article">
        </section>
    </div>
</div>
```
- `main` = only once per page
- `sections` = major page block
- `div` = layout only, no meaning
- `article` = reusable independent component

## CSS
- Indentation = 2 space tabs.
- No inline CSS.
- color codes should be small letters.
- No utility frameworks except some projects under specific instructions.
- No !important unless strictly required.
- max-nesting depth is 3 levels
OK -> `.sec-dev .dev-list .dev-card`
NG -> `.sec-dev .sec-wrap .dev-list-wrap .dev-list .dev-card`
- use classes from util.css and common.css when necessary but not use them in redundant places like list items or cards inside a grid layout.
- separate CSS file for separate pages.
- if an element is used in more than one section in a page, write a common reusuable style for that element in the respective css file of that page.
- No BEM __ or --
- use flat classes
- color and font variables are named like the sample below.
```
:root {
  --clr-neutral-100: #fff;
  --clr-neutral-200: #efefef;
  --clr-neutral-300: #eaeaea;
  --clr-neutral-400: #ededff;
  --clr-neutral-500: #edf5fc;
  --clr-neutral-600: #ddefff;
  --clr-neutral-700: #d0f0ee;
  --clr-neutral-800: #999;
  --clr-neutral-900: #333;

  --clr-primary: #B7D100;
  --clr-primary-500: #98C900;
  --clr-secondary: #3BB5F2;
  --clr-secondary-500: #0098E2;

  --clr-background: #f2f2f2;

  --clr-border-400: #aaa;
  --clr-border-500: #ccc;
  --clr-border-600: #666;

  --clr-link: #2680EA;
  --clr-faq-answer: #d20015;

  --font-primary: "Noto Sans JP", "Helvetica", Arial, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "メイリオ", "ＭＳ Ｐゴシック", "Osaka‐等幅", sans-serif;
  --font-secondary: "Quicksand", -apple-system, system-ui, sans-serif;
  --font-tertiary: "Rubik", -apple-system, system-ui, sans-serif;
}
```
- white and black related colors are named with neutral and important colors are named with priority order.

## Class Naming Conventions
- prefix (sec-) for sections.
- in every section, use sec-wrap right below the parent section unless specific design requirements or supervisor request.
- sec-wrap should always be responsive.
```
.sec-wrap {
  --max-width: 1080px;
  --padding: 80px;

  width: min(var(--max-width), 100% - var(--padding));
  margin-inline: auto;
}
```
- main title class = `sec-ttl`
- when writing for child elements under a section, add **section class** in front of the child element class.
```
.sec-sample {
    padding: 40px;
}

.sec-sample .sample-card {
    width: 200px;
}
```
- Do NOT prefix child classes

**NG**
```
<section class="sec-blog">
    <ul class="sec-blog-list">
        <li class="sec-blog-card">
            <a class="sec-blog-card-link">Some content</a>
        </li>
    </ul>
</section>
```
**OK**
```
<section class="sec-blog">
    <ul class="blog-list">
        <li class="blog-card">
            <a class="blog-card-link">Some content</a>
        </li>
    </ul>
</section>
```

## Button Naming
- use `btn-primary` for the most common button style.
- create `secondary`, `tertiary` as needed.

## JS
- Indentation = 4 space tabs.
- use `DOMContentLoaded`.
- no unnecessary data- attributes for animations. use simple query selector with classes and ids unless necessary.
- Vanilla JS is preferred over Jquery.
- Performance should always be considered when writing anything JS ( animations, events etc ).
    - avoid querySelector inside loops
    - debounce scroll/resize events
- separate JS file for separate pages with a few exceptions being JS for hamburger menu, common animations like fade up, fade in etc.
- for common animations like fade-up, fade in and more, data- attributes can be used to avoild class bloating.

### Lib files to use.
- GSAP for animations
    - `ScrollTrigger` for scroll based animations.
- Swiper.js for sliders.
- Lenis for smooth scrolling.

## Accessibility
- All images must have alt and width, height properties.
    - decorative images -> `alt=""`
    - meaningful images → descriptive alt
- If you don't have access to width, height properties of an image, you can leave blank properties but img tag must have these three.
- Buttons must be keyboard accessible
- Use aria-label when needed.
- No skipping heading levels
- Use `<button>` for actions,`<a>` for navigation.
- Inputs must have <label>
- :focus must be visible

## WordPress Rules
- Use WordPress coding standards in wp projects ( tabs, function naming etc.)
- theme file name is usually cgmgl-wp.
- pages are written in template folder under cgmgl-wp.
- Helper functions are inside inc folder including class-cgmgl-theme.php.
- escape output (`esc_html`, etc.)
- sanitize inputs.
- use nonce for forms.

### Important notes for wordpress
- Only modify/cgmgl-wp folder under theme under wp-content
- Do not touch plugins unless I request.

## Basic HTML project rules
### folder structure
```
[page_name].html
/assets
    /css
        /lib
        /needed_css_files
    /img
    /js
        /lib
        /common.js
        /needed_JS_files
    /fonts ( if required, normally use google fonts )
```
