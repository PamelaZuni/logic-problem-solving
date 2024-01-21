## Writing the Classes of a Game

**What should be used**

* Variables
* Operators
* Loopings
* Decision structures
* Functions
* Classes and Objects

## Goal:

Create a generic class that represents a hero of an adventure and that has the following properties:

* name
* age
* type (e.g. warrior, wizard, monk, ninja)

Additionally, it must have a method called attack that must meet the following requirements:

* display a message: "about attack {type} using {attack}"
* where the {type} must be concatenated to the type that is in the class property
* and {attack} must follow a different description depending on the type, following the table below:

if wizard -> attack display (used magic)
if warrior -> attack display (used sword)
if monk -> attack display (used martial arts)
if ninja -> attack display (used shuriken)

## Exit

And the end should be displayed in the following message:

* "about attacking {type} using {attack}"
 ex: mago attack using magic
  warrior warrior using sword