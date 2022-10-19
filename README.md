# nuxt-device

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Standard JS][standard-js-src]][standard-js-href]

This module injects flags that indicate a device type into the context and the component instance.

## Setup

Add `nuxt-device` to the dev dependencies using npm to your project.

```bash
npm install nuxt-device
```

Create `plugins/device.js` 

```js
import Vue from 'vue'
import deviceMixins from 'nuxt-device'

Vue.mixin(deviceMixins)
```

Add it to the `plugins` section of your `nuxt.config`:

```js
{
    plugins: [
    { src: '@/plugins/device.js', mode: 'client' },
  ],
}
```

That's it, you can now use it in your [Nuxt](https://nuxtjs.org) app ✨

## Flags

You can use these flags to detect the device type.

```js
isDesktop
isMobile
isTablet
isMobileOrTablet
isDesktopOrTablet
```

## Usage

### Switch a view

```html
<template>
  <section>
    <div v-if="isDesktop">
      Desktop
    </div>
    <div v-else-if="isTablet">
      Tablet
    </div>
    <div v-else>
      Mobile
    </div>
  </section>
</template>
```

Of course, you can use it via `this` in a script.

### Change a layout dynamically

```js
export default {
  layout: (ctx) => ctx.isMobile ? 'mobile' : 'default'
}
```

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/nuxt-device.svg?style=flat-square
[npm-version-href]: https://www.npmjs.com/package/nuxt-device

[npm-downloads-src]: https://img.shields.io/npm/v/nuxt-device/latest.svg?style=flat-square
[npm-downloads-href]: https://www.npmjs.com/package/nuxt-device

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/device-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/device-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/device-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/device-module

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

[license-src]: https://img.shields.io/npm/l/nuxt-device.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-device
