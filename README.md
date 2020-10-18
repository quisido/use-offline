# useOffline [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Listen%20to%20network%20connectivity%20events%20with%20a%20React%20hook.&url=https://github.com/CharlesStover/use-offline&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment) [![version](https://img.shields.io/npm/v/use-offline.svg)](https://www.npmjs.com/package/use-offline) [![minzipped size](https://img.shields.io/bundlephobia/minzip/use-offline.svg)](https://www.npmjs.com/package/use-offline) [![downloads](https://img.shields.io/npm/dt/use-offline.svg)](https://www.npmjs.com/package/use-offline) [![build](https://api.travis-ci.com/CharlesStover/use-offline.svg)](https://travis-ci.com/CharlesStover/use-offline/)

Listen to network connectivity events with a React hook.

- [Install](#install)
- [Use](#use)
- [Sponsor](#sponsor)

## Install

- `npm install use-offline` or
- `yarn add use-offline`

## Use

```javascript
function App() {
  const isOffline = useOffline();
  return <p>You are {isOffline ? 'offline' : 'online'}.</p>;
}
```

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover)
via GitHub's Sponsors Program.
