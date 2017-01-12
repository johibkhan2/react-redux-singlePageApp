# React-Redux App



a Single Page Application which resembles this functionality:



## Installing and Running

To start, make sure you're in the `guide-3-redux` folder in command-line.

```sh
# Install Node Modules
npm install

# Start the Server
gulp

# If you want to edit the react code, this rebuilds
gulp watch
```

> The server will be available at localhost:3000

If you want to edit the React code, you'll have to re-build the `public/js/bundle.js` file with Webpack. You'll probably want to open a new terminal tab so you can keep your server running. To rebuild with Webpack, type:

```sh
gulp watch
```

# Implementation Details

If you're coming to this guide for the first time and haven't looked at Guide 1 or 2, be sure to look at their README files for implementation details that led to guide 3.

Here are some details for this guide that weren't covered in the tutorial:

## Organization

The `/app` folder now has a folder for `/actions` and `reducers`.

### Action Creators and Action Type Constants

The `/actions` folder now contains action creators and action type constants as per some of the strategies discussed in [this guide]

### Reducers and Immutable State

Immutable state was discussed in the article. To accomplish this, you'll notice the `Object.assign()` usage to create object copies and also the use of [lodash](https://lodash.com/) as a utility to filter through arrays of objects (sometimes called collections).


``

"# react-redux-singlePageApp" 
