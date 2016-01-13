//var gutil = require('gulp-util')
//
//if (gutil.env.prod) {
//  process.env.NODE_ENV = 'production'
//} else if (gutil.env.dev) {
//  process.env.NODE_ENV = 'development'
//}

require('babel-core/register')
require('./gulpfile.babel.js')
