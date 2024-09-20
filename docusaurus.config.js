module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },
  title: 'Chaos Mesh',
  tagline: 'A Powerful Chaos Engineering Platform for Kubernetes',
  url: 'https://chaos-mesh.org',
  baseUrl: '/',
  favicon: '/img/favicon.ico',
  trailingSlash: true,
  themeConfig: {
    image: '/img/chaos-mesh-social-preview.png',
    navbar: {
      hideOnScroll: true,
      title: 'Chaos Mesh',
      logo: {
        alt: 'Chaos Mesh',
        src: 'img/logos/logo-mini.svg',
        srcDark: 'img/logos/logo-mini-white.svg',
      },
      items: [
        { to: 'docs', label: 'Documentation' },
        {
          href: 'https://community.cncf.io/chaos-mesh-community/',
          label: 'Community Group',
        },

        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/chaos-mesh/chaos-mesh',
          className: 'header-github-link',
          'aria-label': 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/quick-start',
            },
            {
              label: 'Run a Chaos Experiment',
              to: 'docs/run-a-chaos-experiment',
            },
            {
              label: 'Developer Guide Overview',
              to: 'docs/developer-guide-overview',
            },
            {
              label: 'FAQs',
              to: 'docs/faqs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'CNCF Community Group',
              href: 'https://community.cncf.io/chaos-mesh-community/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/chaos-mesh/chaos-mesh',
            },
            {
              label: 'Slack (#project-chaos-mesh)',
              href: 'https://slack.cncf.io/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/chaos_mesh',
            },
          ],
        },
        {
          title: 'Acknowledgements',
          items: [
            {
              html: `
              <ul>
                <li>
                  <p style="font-size: 0.875rem;">Thanks to netlify's Open Source Plan.</p>
                  <a href="https://www.netlify.com" target="_blank"><img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /></a>
                </li>
              </ul>`,
            },
          ],
        },
      ],
      copyright: `
        <p style="font-weight: 500;">Copyright © Chaos Mesh Authors ${new Date().getFullYear()} | Documentation Distributed under CC-BY-4.0</p>
        © ${new Date().getFullYear()} The Linux Foundation. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage/"> Trademark Usage</a> page.
      `,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  onBrokenLinks: 'warn',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          includeCurrentVersion: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/chaos-mesh/website-archived/edit/master/',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.css'),
        },
      },
    ],
  ],
}
