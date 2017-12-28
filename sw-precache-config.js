module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.json',
        'dist/favicon.ico',
        'dist/assets/icons/**.png',
        'dist/assets/audio/**.mp3'


    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
  };