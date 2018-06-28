# Contribution Guide:
## Logging an Issue
- Reason for opening
- Version Number
- Steps to reproduce
- What is expected
- What is actually happening
- Additional Comments

## Logging a Pull Request
- The master branch is the source of truth. We do not want to merge against this branch.
- When contributing create the relevant branch off of develop.
- Work only in the `src` folder.
- If adding new functionality or editing test this new or existing element to the index.html as a reference as to what it is doing.
- If adding new functionality:
    - Add to the index.html
    - Provide reason for adding
- If fixing/modifiying existing:
    - Open an issue
    - Provde reason for fix
    - Update existing DOM element if required

## Project Structure
All styles are exported to the build folder. You should only edit the index.html when adding or chaning functionality.
- `build`: Contains all compiled SASS
- `gulp`: Contains the task registry and config for gulp commands
- `src`: Contains all development level SASS. This inclues mixins, classes and functions.
    - `styles.scss`: Contains the main import for the mainfiest. This is the main import for flexy that should be used as it will contain everything.
    - `_manifest.scss`: Contains all imports in the required order for Flexy
    - `_flexy.scss`: Contains the base level classes that can be utilized.
    - `_mixins.scss`: Contains all the reflect classes in mixin form. As well as extra mixins that can be passed values.
