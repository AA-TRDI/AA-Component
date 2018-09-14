# AA-UI
This WebComponent is for easy use of Ascii Art.

# Feature
- Web Component
- Font

# One Click Quick-star
[Codepen Link](https://codepen.io/scrpgil/pen/BOVBae)

```
<script src='https://unpkg.com/aa-ui@0.0.1/dist/app.js'></script>
<link rel="stylesheet" href="https://unpkg.com/aa-ui@0.0.1/dist/app.css">
<div style="width:30%">
  <aa-svg aa="　 ∧＿∧\n 　（　´∀｀）\n 　（　　　　）\n 　｜ ｜　|\n 　（_＿）＿）\n"></aa-svg>
</div>
```

# Installation

```
npm install aa-ui
```

# Usage
## Angular

```javascript
// node_modules/@ionic/app-scripts/config/copy.config.js
module.exports = {
　　// ...
　  copyAAUIComponent: {
    src: ['{{ROOT}}/node_modules/aa-ui/dist/aa-ui.css', '{{ROOT}}/node_modules/aa-ui/dist/aa-ui.js', '{{ROOT}}/node_modules/aa-ui/dist/aa-ui**/*'],
    dest: '{{BUILD}}'
  }
} 
```

```typescript
// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

## Nuxt

```javascript
// nuxt.config.js
  head: {
　// ...
     script: [{ src: "https://unpkg.com/aa-ui@0.0.1/dist/app.js" }]
  },

```


# License
AA-UI is MIT licensed.
