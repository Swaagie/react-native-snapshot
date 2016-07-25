const React = require('react-native');
const { NativeModules, findNodeHandle } = React;

const NativeViewSnapshotter = NativeModules.Snapshot;

const Snapshot = {
  get: function get(ref, done) {
    NativeViewSnapshotter.get(findNodeHandle(ref), done);
  }
};

module.exports = Snapshot;
