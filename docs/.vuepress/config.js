module.exports = {
  title: 'routine.run',
  description: 'David Martinho\'s Blog',
  base: '/',
  dest: 'public',
  shouldPrefetch: false,
  themeConfig: {
      search: true,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/posts/' },
        { text: 'About Me', link: '/about-me/' },
      ]
  }
}
