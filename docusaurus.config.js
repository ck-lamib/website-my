// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// GIT_USER=Bimal-kshetri yarn deploy
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bimal khatri',
  tagline: 'Software Developer',
  url: 'https://bimalkhatri.com.np',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Bimal-kshetri', // Usually your GitHub org/user name.
  projectName: 'website-my', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    USE_SSH: true
  },
  plugins: [
    // technical blog folder starts here
    [
      '@docusaurus/plugin-content-blog',
      
      {
        id: 'technicalBlog_demo',
        routeBasePath: 'technicalBlogDemo',
        path: './blog/technicalBlog/demo1',
        blogTitle: 'Demo',
        blogSidebarTitle: 'Demo',
        showReadingTime: true,
        postsPerPage: 5,
        blogSidebarCount: 'ALL',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'technicalBlog_algorithms',
        routeBasePath: 'algorithms',
        path: './blog/technicalBlog/algorithms',
        blogTitle: 'Algorithms',
        blogSidebarTitle: 'Algorithms',
        showReadingTime: true,
        postsPerPage: 5,
        blogSidebarCount: 'ALL',
      },
    ],
    // technical blog folder ends here

    // extra blog folder starts here
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'extraBlog_demo',
          routeBasePath: 'demo1',
          path: './blog/extraBlog/demo1',
          blogTitle: 'Demo',
          blogSidebarTitle: 'Demo',
          showReadingTime: true,
          postsPerPage: 5,
          blogSidebarCount: 'ALL',
      },
    ],
    // extra blog folder starts here

  ],




  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // docs: {
        //   sidebarPath: false,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          // // blogSidebarCount:0,
          id: 'extraBlog_constillitions',
          routeBasePath: 'constillitions',
          path: './blog/extraBlog/constillations',
          blogTitle: 'Constillitions',
          blogSidebarTitle: 'Constillitions',
          showReadingTime: true,
          postsPerPage: 5,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      navbar: {
        title: 'Bimal khatri',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/projects', label: 'Projects', position: 'left' },
          { to: '/contact', label: 'Contact', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Check me at',
            items: [
              {
                label: 'Youtube',
                to: 'https://www.youtube.com/channel/UC1sIbY9m3sxOg8f6K_YIM0Q',
              },
              {
                label: 'Github',
                to: 'https://github.com/ck-lamib',
              },
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/in/bimal-kc-993707216',
              },
            ],
          },
          {
            title: 'Get in touch',
            items: [
              {
                label: 'Instagram',
                to: 'https://www.instagram.com/ck.lamib',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/bimalkh80249679',
              },
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/ck.lamib',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Projects',
                to: 'projects',
              },
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'Contact',
                to: 'contact',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <span style=" color: var(--ifm-color-primary);"> | BimirCodes | </span> All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }, 
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
