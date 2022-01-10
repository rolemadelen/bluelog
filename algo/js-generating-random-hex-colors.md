---
title: "Generating a random colors in hex"
date: "2020-12-28"
category: 'javascript'
lang: "JavaScript"
---

```javascript
function genColorHex() {
  const COLOR = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  return COLOR;
}

document.getElementById('[ID]').style.backgroundColor = genColorHex();
``` 