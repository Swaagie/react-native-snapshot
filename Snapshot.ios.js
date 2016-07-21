const React = require('react-native');
const {
  NativeModules
} = React;

const NativeViewSnapshotter = NativeModules.ViewSnapshotter;

const Snapshot = {
  get: NativeViewSnapshotter.saveSnapshotToPath
};

module.exports = Snapshot;
