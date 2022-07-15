**[⬅ Back to root](/../../#readme) / [Code standards and style](standards.md)**

# Javascript

Our Javascript development style:
[StandardJS](https://standardjs.com/index.html)

## Namespacing precompiled code

Precompiled code should be scoped within a `uq` namespace.
For example if I have a class called `header`, I would use it in a statement
with `uq.header`.

> RULE OF THUMB: the user of a UQDS package may also use other frameworks and
> libraries.
