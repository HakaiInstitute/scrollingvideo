# Scrolling Video 

## DEMO
https://hakaiinstitute.github.io/scrollingvideo/dist/

## Installation

To view it, run the index in the dist folder.

Ensure you have a recent version of [node & npm](https://nodejs.org/en/download/) or [yarn](https://yarnpkg.com/en/docs/install) installed.

All of the following steps run on the command line within this directory. You can substitute `npm` for `yarn` depending on your preferences.

Install all the necessary packages:

```
npm install
```

## Build

To build for distribution:

```
npm run build
```

All of the final output will be dropped into the [/dist/](./dist) folder.

## Server

Run a local server that will automatically compile your code & refresh when you save a change!

```
npm run serve
```

---

## Folder Structure

```
/exported-item/
|-- /build/ - Build scripts
|  |-- gulpfile.js - The tasks for the main build process
|  |-- util.js - Utilities used by the tasks
|
|-- /src/ - Your code
|  |-- index.template.html - The wrapper around your compiled HTML that includes any external stylesheets and scripts
|  |-- index.partial.(html|pug|haml|...) - The raw HTML input or preprocessor equivalent
|  |-- /assets/ - Where JS lives
|  |  |-- script.js
|
|-- /video/ - Sliced frames of video
|  |-- frame-001.jpg  to frame-300.jpg
|
|-- /dist/ - The compiled output after running `npm run build`
|  |-- index.html
|  |-- style.css
|  |-- /assets/ - Where JS lives
|  |  |-- script.js
```
