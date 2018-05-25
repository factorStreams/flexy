# Flexy (2.0.0)
A slim lightweight Flexbox utility layout library.

## Notes:
- This is not meant to be like a Bootstrap/Foundation grid system
- This is meant as a dependency, not a minified bundle (You can if you only wish to use the classes, but the full power is gained from utilizing everything). Either download the source code and reference the core styles manifest or install via a package manager and use webpack to import the manifest as a dependency.
- This offers quick and easy SCSS classes and mixins to create features and layout quickly and easily (The styling is up to you).
- Requires a decent understanding of CSS Flexbox
- Some helpful learning paths:
    - https://codeburst.io/a-simple-cheatsheet-for-flexbox-f5d3e1658447?imm_mid=0f59e2&cmp=em-web-na-na-newsltr_20170823
    - https://codepen.io/enxaneta/full/adLPwv
- All classes have a matching/relevant mixin that is usable within your SCSS files.

## Getting Started:

# As a dependency:
- Clone Down repo (git clone https://github.com/factordog/flexy.git)
- If using webpack:
    - @import ~flexy/styles
- If relative path:
    - @import ./<path>/flexy/styles

# To Edit:
- Clone Down repo (git clone https://github.com/factordog/flexy.git)
- npm run/yarn dev