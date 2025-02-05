export const PACKAGES_DATA = [
  {
    package: '@nex-ui/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@nex-ui/hooks'],
  },
  {
    package: '@nex-ui/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@nex-ui/hooks', '@nex-ui/core'],
  },
  {
    package: '@nex-ui/form',
    description: 'Form management library',
    dependencies: ['@nex-ui/form'],
  },
  {
    package: '@nex-ui/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@nex-ui/hooks', '@nex-ui/core', '@nex-ui/dates', 'dayjs'],
  },
  {
    package: '@nex-ui/charts',
    description: 'Recharts based charts library',
    dependencies: ['@nex-ui/hooks', '@nex-ui/core', '@nex-ui/charts', 'recharts@2'],
  },
  {
    package: '@nex-ui/notifications',
    description: 'Notifications system',
    dependencies: ['@nex-ui/hooks', '@nex-ui/core', '@nex-ui/notifications'],
  },
  {
    package: '@nex-ui/code-highlight',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@nex-ui/hooks', '@nex-ui/core', '@nex-ui/code-highlight'],
  },
  {
    package: '@nex-ui/tiptap',
    description: 'Rich text editor based on Tiptap',
    dependencies: [
      '@nex-ui/hooks',
      '@nex-ui/core',
      '@nex-ui/tiptap',
      '@tiptap/pm',
      '@tiptap/react',
      '@tiptap/extension-link',
      '@tiptap/starter-kit',
    ],
  },
  {
    package: '@nex-ui/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@nex-ui/hooks', '@nex-ui/core', '@nex-ui/dropzone'],
  },
  {
    package: '@nex-ui/carousel',
    description: 'Embla based carousel component',
    dependencies: [
      '@nex-ui/hooks',
      '@nex-ui/core',
      '@nex-ui/carousel',
      'embla-carousel-react@^7.1.0',
    ],
  },
  {
    package: '@nex-ui/spotlight',
    description: 'Overlay command center',
    dependencies: ['@nex-ui/hooks', '@nex-ui/core', '@nex-ui/spotlight'],
  },
  {
    package: '@nex-ui/modals',
    description: 'Centralized modals manager',
    dependencies: ['@nex-ui/hooks', '@nex-ui/core', '@nex-ui/modals'],
  },
  {
    package: '@nex-ui/nprogress',
    description: 'Navigation progress',
    dependencies: ['@nex-ui/hooks', '@nex-ui/core', '@nex-ui/nprogress'],
  },
];
