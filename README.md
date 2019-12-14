# Sass Mixin Components

This repository demonstrates how you can use a base Sass file that defines the
high level parts of a component to drive the styles of component implementations
that could be written differently like a React component or a web component.

## Get started

```
npm install
npm run dev
```

## How it works

`card-element-base.scss` in the `/src` directory is the base definition of a
card component and its parts.

`Card.scss` in the `/src` directory, which drives the styles for React version
of the card, imports `card-element-base.scss` and includes the mixins from the
base card definition.

```
@import "./card-element-base";

.Card {
  @include cardElement;

  .header {
    @include cardElementHeader;

    @for $i from 1 through 6 {
      h#{7 - $i}) {
        @include cardElementHeaderText;
      }
    }
  }

  .body {
    @include cardElementBody;
  }

  .footer {
    @include cardElementFooter;
  }
}
```

`wc-card.scss` in the `/public/wc` directory, drives the styles for the web
component version of the card, also imports `card-element-base.scss` and
includes the mixins from the base card definition.

```
@import "../../src/card-element-base";

:host {
  @include cardElement;
}

.header {
  @include cardElementHeader;
}

@for $i from 1 through 6 {
  ::slotted(h#{7 - $i}) {
    @include cardElementHeaderText;
  }
}

.body {
  @include cardElementBody;
}

.footer {
  @include cardElementFooter;
}
```

The end result is two different implementations of card, one a React component
and one a web component, with two different sets of markup that end up looking
the exact same.
