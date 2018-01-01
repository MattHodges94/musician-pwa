module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.json',
        'dist/*.ico',
        'dist/*.png',
        'dist/*.svg',
        'dist/assets/icons/**.png',
        'dist/assets/icons/**.svg',
        'dist/assets/audio/**.mp3'


    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
  };