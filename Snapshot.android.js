const Snapshot = {
  get: function get(ref, done) {
    done(null, new Error('Android not available yet'));
  }
};

module.exports = Snapshot;
