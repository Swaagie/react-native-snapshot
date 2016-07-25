const React = require('react-native');
const {
  NativeModules
} = React;

const NativeViewSnapshotter = NativeModules.Snapshot;

const Snapshot = {
  get: NativeViewSnapshotter.get
};

module.exports = Snapshot;
