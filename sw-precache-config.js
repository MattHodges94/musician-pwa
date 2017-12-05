module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.json',
        'dist/favicon.ico',
        'dist/assets/icons/**.png'


    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
  };