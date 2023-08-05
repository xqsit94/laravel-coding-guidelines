import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Laravel Coding Guidelines",
  description: "Laravel Coding Guidelines",
  base: '/laravel-coding-guidelines/',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Laravel Coding Guidelines',

    logo: '/logo.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guides', link: '/introduction' },
      { text: 'Naming Conventions', link: '/naming-conventions' },
      { text: 'Shorter Syntax', link: '/shorter-readable-syntax#more-examples' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Naming conventions', link: '/naming-conventions' },
          { text: 'Readable and descriptive variable name', link: '/readable-descriptive-variable-names' },
          { text: 'Shorter and readable syntax', link: '/shorter-readable-syntax' },
          { text: 'Avoid fat controllers', link: '/avoid-fat-controllers' },
          { text: 'Business logics in repositories', link: '/business-logics-repositories' },
          { text: 'Single responsibility principle', link: '/single-responsibility-principle' },
          { text: 'Don\'t repeat yourself (DRY)', link: '/dont-repeat-yourself' },
          { text: 'Prefer Eloquent and Laravel Collections', link: '/prefer-eloquent-and-collections' },
          { text: 'Mass assignment', link: '/mass-assignment' },
          { text: 'Avoid queries in Blade template', link: '/avoid-queries-blade-template' },
          { text: 'Don\'t put js and css in Blade', link: '/avoid-js-css-blade-template' },
          { text: 'Use PHP Type declaration', link: '/php-type-declaration' },
          { text: 'Use IoC container for long term projects', link: '/ioc-container' },
          { text: 'Use constants and language helper', link: '/use-constants-language-helper' },
          { text: 'Use config helper', link: '/config-helper' },
          { text: 'Use Request class for validations', link: '/validation' },
          { text: 'Use Accessors and Mutators', link: '/use-accessors-mutators' },
          { text: 'Use standard Laravel tools', link: '/use-standard-laravel-tools' },
          { text: 'Other good practices', link: '/other-good-practices' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xqsit94/laravel-coding-guidelines' }
    ]
  }
})
