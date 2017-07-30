# mqcss

[![npm](https://img.shields.io/npm/dm/mqcss.svg)](https://www.npmjs.com/package/mqcss)
[![npm](https://img.shields.io/npm/v/mqcss.svg)](https://www.npmjs.com/package/mqcss)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Introduction
`mqcss` is a media query helper.

# Installation

```
npm install mqcss --save
```
```
yarn add mqcss
```

# Usage

Play with it [here](https://www.webpackbin.com/bins/-KocYWcF9u3vyfYcKUcr)

# Example

```javascript
import React from 'react'
import styled from 'styled-components'
import jss from 'jss'
import { onMobile, onTablet } from 'mqcss'

// styled-components
// Different border on mobile & table
const Wrapper = styled.div`
  border: 1px solid black;
  padding: ${p => toPx(p.padding) || '10px'};
  > * { margin: 0 5px; }

  ${onMobile} {
    border: 1px solid red;
  }

  ${onTablet} {
    border: 1px solid blue;
  }
`
// jss
// smaller font size on mobile
const styles = {
  button: {
    fontSize: 12,
    [onMobile]: {
      fontSize: 8
    }
  }
}

const {classes} = jss.createStyleSheet(styles).attach()

```