import { Frontmatter } from '@/types';

export const MDX_OTHERS_DATA: Record<string, Frontmatter> = {
  Notifications: {
    title: 'Notifications system',
    package: '@nex-ui/notifications',
    slug: '/x/notifications',
    props: ['Notifications'],
    styles: ['Notifications'],
    description: 'Mantine notifications system',
    source: '@nex-ui/notifications/src',
    license: 'MIT',
    docs: 'x/notifications.mdx',
  },

  Spotlight: {
    title: 'Spotlight',
    package: '@nex-ui/spotlight',
    slug: '/x/spotlight',
    props: [
      'Spotlight',
      'SpotlightRoot',
      'SpotlightAction',
      'SpotlightActionsGroup',
      'SpotlightSearch',
    ],
    styles: ['Spotlight'],
    description: 'Command center for your application',
    source: '@nex-ui/spotlight/src',
    license: 'MIT',
    docs: 'x/spotlight.mdx',
  },

  Carousel: {
    title: 'Carousel',
    package: '@nex-ui/carousel',
    slug: '/x/carousel',
    props: ['Carousel'],
    styles: ['Carousel'],
    description: 'Embla based carousel component',
    source: '@nex-ui/carousel/src',
    license: 'MIT',
    docs: 'x/carousel.mdx',
  },

  Dropzone: {
    title: 'Dropzone',
    package: '@nex-ui/dropzone',
    slug: '/x/dropzone',
    props: ['Dropzone'],
    styles: ['Dropzone'],
    description: 'Capture files from user with drag and drop',
    source: '@nex-ui/dropzone/src',
    license: 'MIT',
    docs: 'x/dropzone.mdx',
  },

  Nprogress: {
    title: 'NavigationProgress',
    package: '@nex-ui/nprogress',
    slug: '/x/nprogress',
    props: ['NavigationProgress'],
    description: 'Navigation progress bar',
    source: '@nex-ui/nprogress/src',
    license: 'MIT',
    docs: 'x/nprogress.mdx',
  },

  CodeHighlight: {
    title: 'CodeHighlight',
    package: '@nex-ui/code-highlight',
    slug: '/x/code-highlight',
    props: ['CodeHighlight', 'CodeHighlightTabs', 'InlineCodeHighlight'],
    styles: ['CodeHighlight', 'CodeHighlightTabs', 'InlineCodeHighlight'],
    description: 'Highlight code with highlight.js',
    source: '@nex-ui/code-highlight/src',
    license: 'MIT',
    docs: 'x/code-highlight.mdx',
  },

  Modals: {
    title: 'Modals manager',
    package: '@nex-ui/modals',
    slug: '/x/modals',
    props: ['ModalsProvider'],
    description: 'Centralized modals manager with option to handle state of multi-step modals',
    source: '@nex-ui/modals/src',
    license: 'MIT',
    docs: 'x/modals.mdx',
  },

  TipTap: {
    title: 'Rich text editor',
    package: '@nex-ui/tiptap',
    slug: '/x/tiptap',
    props: ['RichTextEditor'],
    styles: ['RichTextEditor'],
    description: 'Tiptap based rich text editor',
    source: '@nex-ui/tiptap/src',
    license: 'MIT',
    docs: 'x/tiptap.mdx',
  },
};
