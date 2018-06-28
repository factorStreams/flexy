# Flexy
A slim lightweight Flexbox utility layout library (Or a cool acronym FULL, totally intentional).

## Notes:
- This is not meant to be like a Bootstrap/Foundation grid system
- This is meant as a development tool, meaning it will be minified by whatever bundle option you have decided to use (You can just use the build if you only wish to use the classes, but the full power is gained from utilizing everything).
- This offers quick and easy SCSS classes and mixins to create features and layout quickly and easily (The styling is up to you).
- Requires a decent understanding of CSS Flexbox
    - Some helpful learning paths:
        - https://codeburst.io/a-simple-cheatsheet-for-flexbox-f5d3e1658447?imm_mid=0f59e2&cmp=em-web-na-na-newsltr_20170823
        - https://codepen.io/enxaneta/full/adLPwv
- All classes have a matching/relevant mixin that is usable within your SCSS files.

## Getting Started:

### Installation
`npm install flexy-ui`
`yarn add flexy-ui`

### How to Use:
#### If using webpack:
    - @import ~flexy/src/styles
#### If relative path:
    - @import ./<path>/flexy/src/styles
*Note: You can also edit you build alias resolution to do a straight @import 'flexy-ui'*

Once you have imported the library at your required level it becomes as easy as using normal classes on your HTML,
or using `@include` to use a mixin.

# Contribution Guide:
Found [here](https://github.com/factordog/flexy/blob/master/.github/contribution.md)