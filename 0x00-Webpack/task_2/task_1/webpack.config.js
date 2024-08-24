module.exports = {
  mode: 'production',
  entry:  './js/dashboard_main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
};
