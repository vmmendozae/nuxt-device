# nuxt-device

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Standard JS][standard-js-src]][standard-js-href]

This module injects flags that indicate a device type into the context and the component instance.

See [demo on CodeSandbox](https://codesandbox.io/s/github/nuxt-community/device-module).

## Setup

Add `nuxt-device` to the dev dependencies using npm to your project.

```bash
npm install -D @nuxtjs/device
```

Add it to the `buildModules` section of your `nuxt.config`:

```js
{
  buildModules: [
   '@nuxtjs/device',
  ]
}
```

That's it, you can now use `$device` in your [Nuxt](https://nuxtjs.org) app ✨

## Flags

You can use these flags to detect the device type.

```js
$device.isDesktop
$device.isMobile
$device.isTablet
$device.isMobileOrTablet
$device.isDesktopOrTablet
$device.isIos
$device.isWindows
$device.isMacOS
$device.isAndroid
$device.isFirefox
$device.isEdge
$device.isChrome
$device.isSafari
$device.isSamsung
$device.isCrawler
```

The user agent is also injected an accessible with `$device.userAgent`.

## Usage

### Switch a view

```html
<template>
  <section>
    <div v-if="$device.isDesktop">
      Desktop
    </div>
    <div v-else-if="$device.isTablet">
      Tablet
    </div>
    <div v-else>
      Mobile
    </div>
  </section>
</template>
```

Of course, you can use `$device` via `this` in a script.

### Change a layout dynamically

```js
export default {
  layout: (ctx) => ctx.$device.isMobile ? 'mobile' : 'default'
}
```

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/device.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/device

[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/device/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/device

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/device-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/device-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/device-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/device-module

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

[license-src]: https://img.shields.io/npm/l/@nuxtjs/device.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/device

## Data Source

This module uses [crawler-user-agents](https://github.com/monperrus/crawler-user-agents) to generate the regular expression that detect a crawler.
