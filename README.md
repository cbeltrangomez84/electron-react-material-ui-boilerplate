## Minimal Electron, React, TypeScript and Webpack boilerplate

Minimal Electron, React, Material-UI and Webpack boilerplate to help you get started with building your next app.

This repo is based on https://github.com/Y0nnyy/electron-react-boilerplate.git

### Table of contents

* [Install](#install)
* [Usage](#usage)
* [Code of Conduct](#code-of-conduct)
* [License](#license)

### Install

#### Clone this repo

```
git clone --depth=1 https://github.com/cbeltrangomez84/electron-react-material-ui-boilerplate.git
```

#### Install dependencies

```
npm install
```
or
```
yarn install
```

### Usage

#### Run the app with hot reload

```
npm run start
```
or
```
yarn start
```

#### Run the app without hot reload

```
npm run startNoHot
```
or
```
yarn startNoHot
```

#### Build the app Electron (automatic)

Add the icons at /src/res/favicon/myApp.ico

```
npm run package
```
or
```
yarn package
```

#### Build the app for web

Check the icon paths at src/index.html

```
npm run buildweb
```
or
```
yarn buildweb
```


#### Build the app (manual)

```
npm run build
```
or
```
yarn build
```

After that 

```
npm run postpackage
```
or
```
yarn postpackage
```

#### Test the app (after `npm run build` || `yarn run build`)
```
npm run prod
```
```
yarn prod
```

### Code of Conduct

[Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

