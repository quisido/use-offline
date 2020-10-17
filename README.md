# useOnline [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Listen%20to%20online%20connectivity%20events%20with%20a%20React%20hook.&url=https://github.com/CharlesStover/use-online&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment) [![version](https://img.shields.io/npm/v/use-online.svg)](https://www.npmjs.com/package/use-online) [![minzipped size](https://img.shields.io/bundlephobia/minzip/use-online.svg)](https://www.npmjs.com/package/use-online) [![downloads](https://img.shields.io/npm/dt/use-online.svg)](https://www.npmjs.com/package/use-online) [![build](https://api.travis-ci.com/CharlesStover/use-online.svg)](https://travis-ci.com/CharlesStover/use-online/)

Listen to online/offline connectivity events with a React hook.

- [Install](#install)
- [Use](#use)
- [Sponsor](#sponsor)

## Install

- `npm install use-online` or
- `yarn add use-online`

## Use

```javascript
function App() {
  const isOnline = useOnline();
  return <p>You are {isOnline ? 'online' : 'offline'}.</p>;
}
```

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover)
via GitHub's Sponsors Program.
