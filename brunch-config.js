// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    entryPoints: 
      {'src/js/app.js':'js/app.js'},
  },
  stylesheets: {
    joinTo: 'css/app.css'
  } 
};
exports.paths = {
  public: './resources',
  watched: ['src']
}
exports.plugins = {
  sass: {
    mode:'native'
  },
  imagemin: {
    plugins: {
      'imagemin-gifsicle': true,
      'imagemin-jpegtran': true,
      'imagemin-optipng': true,
      'imagemin-svgo': true
    },
    pattern: /\.(gif|jpg|jpeg|jpe|jif|jfif|jfi|png|svg|svgz)$/
  },
  babel: {
  }
}