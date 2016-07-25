Take snapshots of React Native views (and their children) and convert it to a base64 encoded string.

## Installation

```
% npm i --save react-native-snapshot
```

## Usage

This library exposes a single method, *get*. Example usage:

```
const Snapshot = require('react-native-snapshot');
const ref = React.findNodeHandle(this.refs.someView);

Snapshot.get(ref, (error, content) => {
  if (error) {
    return
  }

  console.log(error)
});
```

## Example



## Use cases

* convert snapshot to base64 encoded string to enable exposing it to a 3rd party service.

## TODO

* Android support https://github.com/facebook/react-native/pull/6431#issuecomment-204418900
