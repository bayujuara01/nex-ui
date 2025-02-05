import { Frontmatter } from '@/types';

export const MDX_CORE_DATA: Record<string, Frontmatter> = {
  Box: {
    title: 'Box',
    package: '@nex-ui/core',
    slug: '/core/box',
    description: 'Base component for all Mantine components',
    import: "import { Box } from '@nex-ui/core';",
    source: '@nex-ui/core/src/core/Box/Box.tsx',
    docs: 'core/box.mdx',
  },

  Button: {
    title: 'Button',
    package: '@nex-ui/core',
    slug: '/core/button',
    description: 'Button component to render button or link',
    componentPrefix: 'Button',
    props: ['Button', 'ButtonGroup'],
    styles: ['Button', 'ButtonGroup'],
    import: "import { Button } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Button/Button.tsx',
    docs: 'core/button.mdx',
    refactor: true
  },
  Loader: {
    title: 'Loader',
    package: '@nex-ui/core',
    slug: '/core/loader',
    description: 'Indicate loading state',
    props: ['Loader'],
    styles: ['Loader'],
    import: "import { Loader } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Loader/Loader.tsx',
    docs: 'core/loader.mdx',
  },
  Container: {
    title: 'Container',
    package: '@nex-ui/core',
    slug: '/core/container',
    description: 'Center content with padding and max-width',
    props: ['Container'],
    styles: ['Container'],
    import: "import { Container } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Container/Container.tsx',
    docs: 'core/container.mdx',
    refactor: true
  },
  Anchor: {
    title: 'Anchor',
    package: '@nex-ui/core',
    slug: '/core/anchor',
    description: 'Display link with theme styles',
    props: ['Anchor'],
    styles: ['Anchor'],
    import: "import { Anchor } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Anchor/Anchor.tsx',
    docs: 'core/anchor.mdx',
  },
  Input: {
    title: 'Input',
    package: '@nex-ui/core',
    slug: '/core/input',
    description: 'Base component to create custom inputs',
    componentPrefix: 'Input',
    props: ['Input', 'InputWrapper', 'InputLabel', 'InputDescription', 'InputError'],
    styles: ['Input', 'InputWrapper'],
    polymorphic: true,
    import: "import { Input } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Input/Input.tsx',
    docs: 'core/input.mdx',
  },
  ActionIcon: {
    title: 'ActionIcon',
    package: '@nex-ui/core',
    slug: '/core/action-icon',
    description: 'Icon button',
    componentPrefix: 'ActionIcon',
    props: ['ActionIcon', 'ActionIconGroup'],
    styles: ['ActionIcon', 'ActionIconGroup'],
    polymorphic: true,
    import: "import { ActionIcon } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/ActionIcon/ActionIcon.tsx',
    docs: 'core/action-icon.mdx',
    refactor: true
  },
  CloseButton: {
    title: 'CloseButton',
    package: '@nex-ui/core',
    slug: '/core/close-button',
    description: 'Button with close icon',
    props: ['CloseButton'],
    styles: ['CloseButton'],
    polymorphic: true,
    import: "import { CloseButton } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/CloseButton/CloseButton.tsx',
    docs: 'core/close-button.mdx',
    refactor: true
  },
  CopyButton: {
    title: 'CopyButton',
    package: '@nex-ui/core',
    slug: '/core/copy-button',
    description: 'Copies given text to clipboard',
    props: ['CopyButton'],
    import: "import { CopyButton } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/CopyButton/CopyButton.tsx',
    docs: 'core/copy-button.mdx',
    refactor: true
  },
  FileButton: {
    title: 'FileButton',
    package: '@nex-ui/core',
    slug: '/core/file-button',
    description: 'Open file picker with a button click',
    props: ['FileButton'],
    import: "import { FileButton } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/FileButton/FileButton.tsx',
    docs: 'core/file-button.mdx',
    refactor: true
  },
  UnstyledButton: {
    title: 'UnstyledButton',
    package: '@nex-ui/core',
    slug: '/core/unstyled-button',
    description: 'Unstyled polymorphic button',
    polymorphic: true,
    import: "import { UnstyledButton } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/UnstyledButton/UnstyledButton.tsx',
    docs: 'core/unstyled-button.mdx',
    refactor: true
  },
  Tabs: {
    title: 'Tabs',
    package: '@nex-ui/core',
    slug: '/core/tabs',
    props: ['Tabs', 'TabsList', 'TabsTab', 'TabsPanel'],
    styles: ['Tabs'],
    description: 'Switch between different views',
    import: "import { Tabs } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Tabs/Tabs.tsx',
    docs: 'core/tabs.mdx',
  },
  BackgroundImage: {
    title: 'BackgroundImage',
    package: '@nex-ui/core',
    slug: '/core/background-image',
    description: 'Displays image as background',
    polymorphic: true,
    props: ['BackgroundImage'],
    styles: ['BackgroundImage'],
    import: "import { BackgroundImage } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/BackgroundImage/BackgroundImage.tsx',
    docs: 'core/background-image.mdx',
  },
  Blockquote: {
    title: 'Blockquote',
    package: '@nex-ui/core',
    slug: '/core/blockquote',
    props: ['Blockquote'],
    styles: ['Blockquote'],
    description: 'Blockquote with optional cite',
    import: "import { Blockquote } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Blockquote/Blockquote.tsx',
    docs: 'core/blockquote.mdx',
  },
  Breadcrumbs: {
    title: 'Breadcrumbs',
    package: '@nex-ui/core',
    slug: '/core/breadcrumbs',
    props: ['Breadcrumbs'],
    styles: ['Breadcrumbs'],
    description: 'Separates list of react nodes with given separator',
    import: "import { Breadcrumbs } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Breadcrumbs/Breadcrumbs.tsx',
    docs: 'core/breadcrumbs.mdx',
  },
  Burger: {
    title: 'Burger',
    package: '@nex-ui/core',
    slug: '/core/burger',
    props: ['Burger'],
    styles: ['Burger'],
    description: 'Open/close navigation button',
    import: "import { Burger } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Burger/Burger.tsx',
    docs: 'core/burger.mdx',
  },
  Center: {
    title: 'Center',
    package: '@nex-ui/core',
    slug: '/core/center',
    props: ['Center'],
    styles: ['Center'],
    polymorphic: true,
    description: 'Centers content vertically and horizontally',
    import: "import { Center } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Center/Center.tsx',
    docs: 'core/center.mdx',
    refactor: true
  },
  Code: {
    title: 'Code',
    package: '@nex-ui/core',
    slug: '/core/code',
    props: ['Code'],
    styles: ['Code'],
    description: 'Inline and block code',
    import: "import { Code } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Code/Code.tsx',
    docs: 'core/code.mdx',
  },
  Collapse: {
    title: 'Collapse',
    package: '@nex-ui/core',
    slug: '/core/collapse',
    props: ['Collapse'],
    description: 'Animate presence with slide down/up transition',
    import: "import { Collapse } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Collapse/Collapse.tsx',
    docs: 'core/collapse.mdx',
  },
  ColorPicker: {
    title: 'ColorPicker',
    package: '@nex-ui/core',
    slug: '/core/color-picker',
    props: ['ColorPicker'],
    styles: ['ColorPicker'],
    description: 'Pick colors in hex(a), rgb(a), hsl(a) and hsv(a) formats',
    import: "import { ColorPicker } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/ColorPicker/ColorPicker.tsx',
    docs: 'core/color-picker.mdx',
  },
  ColorSwatch: {
    title: 'ColorSwatch',
    package: '@nex-ui/core',
    slug: '/core/color-swatch',
    props: ['ColorSwatch'],
    styles: ['ColorSwatch'],
    polymorphic: true,
    description: 'Displays color',
    import: "import { ColorSwatch } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/ColorSwatch/ColorSwatch.tsx',
    docs: 'core/color-swatch.mdx',
  },
  FocusTrap: {
    title: 'FocusTrap',
    package: '@nex-ui/core',
    slug: '/core/focus-trap',
    props: ['FocusTrap'],
    description: 'Trap focus at child node',
    import: "import { FocusTrap } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/FocusTrap/FocusTrap.tsx',
    docs: 'core/focus-trap.mdx',
  },
  Group: {
    title: 'Group',
    package: '@nex-ui/core',
    slug: '/core/group',
    props: ['Group'],
    styles: ['Group'],
    description: 'Compose elements and components in a horizontal flex container',
    import: "import { Group } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Group/Group.tsx',
    docs: 'core/group.mdx',
    refactor: true
  },
  Highlight: {
    title: 'Highlight',
    package: '@nex-ui/core',
    slug: '/core/highlight',
    props: ['Highlight'],
    styles: ['Highlight'],
    polymorphic: true,
    description: 'Highlight given part of a string with mark',
    import: "import { Highlight } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Highlight/Highlight.tsx',
    docs: 'core/highlight.mdx',
  },
  Kbd: {
    title: 'Kbd',
    package: '@nex-ui/core',
    slug: '/core/kbd',
    props: ['Kbd'],
    styles: ['Kbd'],
    description: 'Display keyboard key',
    import: "import { Kbd } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Kbd/Kbd.tsx',
    docs: 'core/kbd.mdx',
  },
  Mark: {
    title: 'Mark',
    package: '@nex-ui/core',
    slug: '/core/mark',
    props: ['Mark'],
    styles: ['Mark'],
    description: 'Highlight part of the text',
    import: "import { Mark } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Mark/Mark.tsx',
    docs: 'core/mark.mdx',
  },
  NativeSelect: {
    title: 'NativeSelect',
    package: '@nex-ui/core',
    slug: '/core/native-select',
    props: ['NativeSelect'],
    styles: ['NativeSelect'],
    description: 'Native select element based on Input',
    import: "import { NativeSelect } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/NativeSelect/NativeSelect.tsx',
    docs: 'core/native-select.mdx',
  },
  Notification: {
    title: 'Notification',
    package: '@nex-ui/core',
    slug: '/core/notification',
    props: ['Notification'],
    styles: ['Notification'],
    description: 'Show dynamic notifications and alerts to user, part of notifications system',
    import: "import { Notification } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Notification/Notification.tsx',
    docs: 'core/notification.mdx',
  },
  Paper: {
    title: 'Paper',
    package: '@nex-ui/core',
    slug: '/core/paper',
    props: ['Paper'],
    styles: ['Paper'],
    description: 'Renders white or dark background depending on color scheme',
    polymorphic: true,
    import: "import { Paper } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Paper/Paper.tsx',
    docs: 'core/paper.mdx',
  },
  Popover: {
    title: 'Popover',
    package: '@nex-ui/core',
    slug: '/core/popover',
    componentPrefix: 'Popover',
    props: ['Popover', 'PopoverTarget'],
    styles: ['Popover'],
    description: 'Display popover section relative to given target element',
    import: "import { Popover } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Popover/Popover.tsx',
    docs: 'core/popover.mdx',
  },
  Portal: {
    title: 'Portal',
    package: '@nex-ui/core',
    slug: '/core/portal',
    props: ['Portal'],
    description: 'Renders component outside of parent element tree',
    import: "import { Portal } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Portal/Portal.tsx',
    docs: 'core/portal.mdx',
  },
  ScrollArea: {
    title: 'ScrollArea',
    package: '@nex-ui/core',
    slug: '/core/scroll-area',
    props: ['ScrollArea'],
    styles: ['ScrollArea'],
    description: 'Area with custom scrollbars',
    import: "import { ScrollArea } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/ScrollArea/ScrollArea.tsx',
    docs: 'core/scroll-area.mdx',
  },
  SegmentedControl: {
    title: 'SegmentedControl',
    package: '@nex-ui/core',
    slug: '/core/segmented-control',
    props: ['SegmentedControl'],
    styles: ['SegmentedControl'],
    description: 'A linear set of two or more segments',
    import: "import { SegmentedControl } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/SegmentedControl/SegmentedControl.tsx',
    docs: 'core/segmented-control.mdx',
  },
  Slider: {
    title: 'Slider',
    package: '@nex-ui/core',
    slug: '/core/slider',
    props: ['Slider', 'RangeSlider'],
    styles: ['Slider'],
    description: 'Slider and RangeSlider components',
    import: "import { Slider } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Slider/Slider/Slider.tsx',
    docs: 'core/slider.mdx',
  },
  Stack: {
    title: 'Stack',
    package: '@nex-ui/core',
    slug: '/core/stack',
    props: ['Stack'],
    styles: ['Stack'],
    description: 'Compose elements and components in a vertical flex container',
    import: "import { Stack } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Stack/Stack.tsx',
    docs: 'core/stack.mdx',
    refactor: true
  },
  Switch: {
    title: 'Switch',
    package: '@nex-ui/core',
    slug: '/core/switch',
    props: ['Switch', 'SwitchGroup'],
    styles: ['Switch'],
    description: 'Capture boolean input from user',
    import: "import { Switch } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Switch/Switch.tsx',
    docs: 'core/switch.mdx',
  },
  Table: {
    title: 'Table',
    package: '@nex-ui/core',
    slug: '/core/table',
    props: ['Table'],
    styles: ['Table'],
    description: 'Render table with theme styles',
    import: "import { Table } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Table/Table.tsx',
    docs: 'core/table.mdx',
  },
  Text: {
    title: 'Text',
    package: '@nex-ui/core',
    slug: '/core/text',
    props: ['Text'],
    styles: ['Text'],
    description: 'Display text',
    import: "import { Text } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Text/Text.tsx',
    docs: 'core/text.mdx',
  },
  TextInput: {
    title: 'TextInput',
    package: '@nex-ui/core',
    slug: '/core/text-input',
    props: ['TextInput'],
    styles: ['TextInput'],
    description: 'Capture string input from user',
    import: "import { TextInput } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/TextInput/TextInput.tsx',
    docs: 'core/text-input.mdx',
  },
  Title: {
    title: 'Title',
    package: '@nex-ui/core',
    slug: '/core/title',
    props: ['Title'],
    styles: ['Title'],
    description: 'h1-h6 heading',
    import: "import { Title } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Title/Title.tsx',
    docs: 'core/title.mdx',
  },
  Badge: {
    title: 'Badge',
    package: '@nex-ui/core',
    slug: '/core/badge',
    props: ['Badge'],
    styles: ['Badge'],
    polymorphic: true,
    description: 'Display badge, pill or tag',
    import: "import { Badge } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Badge/Badge.tsx',
    docs: 'core/badge.mdx',
  },
  Tooltip: {
    title: 'Tooltip',
    package: '@nex-ui/core',
    slug: '/core/tooltip',
    props: ['Tooltip'],
    styles: ['Tooltip'],
    description: 'Renders tooltip at given element on mouse over or other event',
    import: "import { Tooltip } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Tooltip/Tooltip.tsx',
    docs: 'core/tooltip.mdx',
  },
  Transition: {
    title: 'Transition',
    package: '@nex-ui/core',
    slug: '/core/transition',
    props: ['Transition'],
    description: 'Animate presence of component with pre-made animations',
    import: "import { Transition } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Transition/Transition.tsx',
    docs: 'core/transition.mdx',
  },
  TypographyStylesProvider: {
    title: 'TypographyStylesProvider',
    package: '@nex-ui/core',
    slug: '/core/typography-styles-provider',
    description: 'Styles provider for html content',
    import: "import { TypographyStylesProvider } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/TypographyStylesProvider/TypographyStylesProvider.tsx',
    docs: 'core/typography-styles-provider.mdx',
  },
  VisuallyHidden: {
    title: 'VisuallyHidden',
    package: '@nex-ui/core',
    slug: '/core/visually-hidden',
    description: 'Hide element visually but keep it accessible for screen readers',
    import: "import { VisuallyHidden } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/VisuallyHidden/VisuallyHidden.tsx',
    docs: 'core/visually-hidden.mdx',
  },
  Divider: {
    title: 'Divider',
    package: '@nex-ui/core',
    slug: '/core/divider',
    props: ['Divider'],
    styles: ['Divider'],
    description: 'Horizontal line with optional label or vertical divider',
    import: "import { Divider } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Divider/Divider.tsx',
    docs: 'core/divider.mdx',
  },
  AspectRatio: {
    title: 'AspectRatio',
    package: '@nex-ui/core',
    slug: '/core/aspect-ratio',
    props: ['AspectRatio'],
    styles: ['AspectRatio'],
    description: 'Maintain responsive consistent width/height ratio',
    import: "import { AspectRatio } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/AspectRatio/AspectRatio.tsx',
    docs: 'core/aspect-ratio.mdx',
    refactor: true
  },
  Overlay: {
    title: 'Overlay',
    package: '@nex-ui/core',
    slug: '/core/overlay',
    props: ['Overlay'],
    styles: ['Overlay'],
    polymorphic: true,
    description: 'Overlays parent element with div element with any color and opacity',
    import: "import { Overlay } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Overlay/Overlay.tsx',
    docs: 'core/overlay.mdx',
  },
  Avatar: {
    title: 'Avatar',
    package: '@nex-ui/core',
    slug: '/core/avatar',
    props: ['Avatar'],
    styles: ['Avatar'],
    polymorphic: true,
    description: 'Display user profile image, initials or fallback icon',
    import: "import { Avatar } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Avatar/Avatar.tsx',
    docs: 'core/avatar.mdx',
  },

  Alert: {
    title: 'Alert',
    package: '@nex-ui/core',
    slug: '/core/alert',
    props: ['Alert'],
    styles: ['Alert'],
    description: 'Attract user attention with important static message',
    import: "import { Alert } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Alert/Alert.tsx',
    docs: 'core/alert.mdx',
  },

  Affix: {
    title: 'Affix',
    package: '@nex-ui/core',
    slug: '/core/affix',
    props: ['Affix'],
    styles: ['Affix'],
    description: 'Renders children inside portal at fixed position',
    import: "import { Affix } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Affix/Affix.tsx',
    docs: 'core/affix.mdx',
  },

  Fieldset: {
    title: 'Fieldset',
    package: '@nex-ui/core',
    slug: '/core/fieldset',
    props: ['Fieldset'],
    styles: ['Fieldset'],
    description: 'Group related elements in a form',
    import: "import { Fieldset } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Fieldset/Fieldset.tsx',
    docs: 'core/fieldset.mdx',
  },

  Checkbox: {
    title: 'Checkbox',
    package: '@nex-ui/core',
    slug: '/core/checkbox',
    componentPrefix: 'Checkbox',
    props: ['Checkbox', 'CheckboxGroup', 'CheckboxIndicator', 'CheckboxCard'],
    styles: ['Checkbox', 'CheckboxGroup', 'CheckboxIndicator', 'CheckboxCard'],
    description: 'Capture boolean input from user',
    import: "import { Checkbox } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Checkbox/Checkbox.tsx',
    docs: 'core/checkbox.mdx',
    refactor: true
  },

  Combobox: {
    title: 'Combobox',
    package: '@nex-ui/core',
    slug: '/core/combobox',
    componentPrefix: 'Combobox',
    props: [
      'Combobox',
      'ComboboxOption',
      'ComboboxTarget',
      'ComboboxDropdownTarget',
      'ComboboxEventsTarget',
      'ComboboxDropdown',
      'ComboboxGroup',
    ],
    styles: ['Combobox'],
    description: 'Create custom select, autocomplete or multiselect inputs',
    import: "import { Combobox } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Combobox/Combobox.tsx',
    docs: 'core/combobox.mdx',
  },

  Modal: {
    title: 'Modal',
    package: '@nex-ui/core',
    slug: '/core/modal',
    props: ['Modal'],
    styles: ['Modal'],
    description: 'An accessible overlay dialog',
    import: "import { Modal } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Modal/Modal.tsx',
    docs: 'core/modal.mdx',
  },

  Drawer: {
    title: 'Drawer',
    package: '@nex-ui/core',
    slug: '/core/drawer',
    props: ['Drawer'],
    styles: ['Drawer'],
    description: 'Display overlay area at any side of the screen',
    import: "import { Drawer } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Drawer/Drawer.tsx',
    docs: 'core/drawer.mdx',
  },

  Accordion: {
    title: 'Accordion',
    package: '@nex-ui/core',
    slug: '/core/accordion',
    props: ['Accordion', 'AccordionItem', 'AccordionControl'],
    styles: ['Accordion'],
    componentPrefix: 'Accordion',
    description: 'Divide content into collapsible sections',
    import: "import { Accordion } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Accordion/Accordion.tsx',
    docs: 'core/accordion.mdx',
  },

  Pill: {
    title: 'Pill',
    package: '@nex-ui/core',
    slug: '/core/pill',
    props: ['Pill', 'PillGroup'],
    styles: ['Pill', 'PillGroup'],
    description: 'Removable and non-removable tags',
    import: "import { Pill } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Pill/Pill.tsx',
    docs: 'core/pill.mdx',
  },

  PillsInput: {
    title: 'PillsInput',
    package: '@nex-ui/core',
    slug: '/core/pills-input',
    props: ['PillsInput', 'PillsInputField'],
    styles: ['PillsInput', 'PillsInputField'],
    description: 'Base component for custom tags inputs and multi selects',
    import: "import { PillsInput } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/PillsInput/PillsInput.tsx',
    docs: 'core/pills-input.mdx',
  },

  Autocomplete: {
    title: 'Autocomplete',
    package: '@nex-ui/core',
    slug: '/core/autocomplete',
    props: ['Autocomplete'],
    styles: ['Autocomplete'],
    description: 'Autocomplete user input with any list of options',
    import: "import { Autocomplete } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Autocomplete/Autocomplete.tsx',
    docs: 'core/autocomplete.mdx',
  },

  TagsInput: {
    title: 'TagsInput',
    package: '@nex-ui/core',
    slug: '/core/tags-input',
    props: ['TagsInput'],
    styles: ['TagsInput'],
    description: 'Capture a list of values from user with free input and suggestions',
    import: "import { TagsInput } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/TagsInput/TagsInput.tsx',
    docs: 'core/tags-input.mdx',
  },

  Select: {
    title: 'Select',
    package: '@nex-ui/core',
    slug: '/core/select',
    props: ['Select'],
    styles: ['Select'],
    description: 'Custom searchable select',
    import: "import { Select } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Select/Select.tsx',
    docs: 'core/select.mdx',
  },

  MultiSelect: {
    title: 'MultiSelect',
    package: '@nex-ui/core',
    slug: '/core/multi-select',
    props: ['MultiSelect'],
    styles: ['MultiSelect'],
    description: 'Custom searchable multi select',
    import: "import { MultiSelect } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/MultiSelect/MultiSelect.tsx',
    docs: 'core/multi-select.mdx',
  },

  Pagination: {
    title: 'Pagination',
    package: '@nex-ui/core',
    slug: '/core/pagination',
    componentPrefix: 'Pagination',
    props: [
      'Pagination',
      'PaginationRoot',
      'PaginationFirst',
      'PaginationLast',
      'PaginationNext',
      'PaginationPrevious',
      'PaginationItems',
      'PaginationDots',
      'PaginationControl',
    ],
    styles: ['Pagination'],
    description: 'Display active page and navigate between multiple pages',
    import: "import { Pagination } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Pagination/Pagination.tsx',
    docs: 'core/pagination.mdx',
  },

  AppShell: {
    title: 'AppShell',
    package: '@nex-ui/core',
    slug: '/core/app-shell',
    props: ['AppShell', 'AppShellNavbar', 'AppShellHeader', 'AppShellAside', 'AppShellFooter'],
    styles: ['AppShell'],
    componentPrefix: 'AppShell',
    description: 'Responsive shell for your application with header, navbar, aside and footer',
    import: "import { AppShell } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/AppShell/AppShell.tsx',
    docs: 'core/app-shell.mdx',
    refactor: true
  },

  Skeleton: {
    title: 'Skeleton',
    package: '@nex-ui/core',
    slug: '/core/skeleton',
    props: ['Skeleton'],
    styles: ['Skeleton'],
    description: 'Indicate content loading state',
    import: "import { Skeleton } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Skeleton/Skeleton.tsx',
    docs: 'core/skeleton.mdx',
  },

  SimpleGrid: {
    title: 'SimpleGrid',
    package: '@nex-ui/core',
    slug: '/core/simple-grid',
    props: ['SimpleGrid'],
    styles: ['SimpleGrid'],
    description: 'Responsive grid in which each item takes equal amount of space',
    import: "import { SimpleGrid } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/SimpleGrid/SimpleGrid.tsx',
    docs: 'core/simple-grid.mdx',
    refactor: true
  },

  Grid: {
    title: 'Grid',
    package: '@nex-ui/core',
    slug: '/core/grid',
    props: ['Grid', 'GridCol'],
    styles: ['Grid'],
    componentPrefix: 'Grid',
    description: 'Responsive 12 columns grid system',
    import: "import { Grid } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Grid/Grid.tsx',
    docs: 'core/grid.mdx',
    refactor: true
  },

  HoverCard: {
    title: 'HoverCard',
    package: '@nex-ui/core',
    slug: '/core/hover-card',
    props: ['HoverCard', 'HoverCardTarget'],
    styles: ['HoverCard'],
    componentPrefix: 'HoverCard',
    description: 'Display popover section when target element is hovered',
    import: "import { HoverCard } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/HoverCard/HoverCard.tsx',
    docs: 'core/hover-card.mdx',
  },

  Menu: {
    title: 'Menu',
    package: '@nex-ui/core',
    slug: '/core/menu',
    props: ['Menu', 'MenuTarget', 'MenuItem'],
    styles: ['Menu'],
    componentPrefix: 'Menu',
    description: 'Combine a list of secondary actions into single interactive area',
    import: "import { Menu } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Menu/Menu.tsx',
    docs: 'core/menu.mdx',
  },

  Progress: {
    title: 'Progress',
    package: '@nex-ui/core',
    slug: '/core/progress',
    props: ['Progress', 'ProgressRoot', 'ProgressSection'],
    styles: ['Progress'],
    componentPrefix: 'Progress',
    description: 'Give user feedback for status of the task',
    import: "import { Progress } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Progress/Progress.tsx',
    docs: 'core/progress.mdx',
  },

  RingProgress: {
    title: 'RingProgress',
    package: '@nex-ui/core',
    slug: '/core/ring-progress',
    props: ['RingProgress'],
    styles: ['RingProgress'],
    description: 'Give user feedback for status of the task with circle diagram',
    import: "import { RingProgress } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/RingProgress/RingProgress.tsx',
    docs: 'core/ring-progress.mdx',
  },

  Chip: {
    title: 'Chip',
    package: '@nex-ui/core',
    slug: '/core/chip',
    props: ['Chip', 'ChipGroup'],
    styles: ['Chip'],
    componentPrefix: 'Chip',
    description: 'Pick one or multiple values with inline controls',
    import: "import { Chip } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Chip/Chip.tsx',
    docs: 'core/chip.mdx',
  },

  PinInput: {
    title: 'PinInput',
    package: '@nex-ui/core',
    slug: '/core/pin-input',
    props: ['PinInput'],
    styles: ['PinInput'],
    description: 'Capture pin code or one time password from the user',
    import: "import { PinInput } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/PinInput/PinInput.tsx',
    docs: 'core/pin-input.mdx',
  },

  Rating: {
    title: 'Rating',
    package: '@nex-ui/core',
    slug: '/core/rating',
    props: ['Rating'],
    styles: ['Rating'],
    description: 'Pick and display rating',
    import: "import { Rating } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Rating/Rating.tsx',
    docs: 'core/rating.mdx',
    refactor: true
  },

  Space: {
    title: 'Space',
    package: '@nex-ui/core',
    slug: '/core/space',
    description: 'Add horizontal or vertical spacing from theme',
    import: "import { Space } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Space/Space.tsx',
    docs: 'core/space.mdx',
    refactor: true
  },

  Indicator: {
    title: 'Indicator',
    package: '@nex-ui/core',
    slug: '/core/indicator',
    props: ['Indicator'],
    styles: ['Indicator'],
    description: 'Display element at the corner of another element',
    import: "import { Indicator } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Indicator/Indicator.tsx',
    docs: 'core/indicator.mdx',
  },

  Textarea: {
    title: 'Textarea',
    package: '@nex-ui/core',
    slug: '/core/textarea',
    props: ['Textarea'],
    styles: ['Textarea'],
    description: 'Autosize or regular textarea',
    import: "import { Textarea } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Textarea/Textarea.tsx',
    docs: 'core/textarea.mdx',
  },

  JsonInput: {
    title: 'JsonInput',
    package: '@nex-ui/core',
    slug: '/core/json-input',
    props: ['JsonInput'],
    styles: ['JsonInput'],
    description: 'Capture json data from user',
    import: "import { JsonInput } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/JsonInput/JsonInput.tsx',
    docs: 'core/json-input.mdx',
  },

  Image: {
    title: 'Image',
    package: '@nex-ui/core',
    slug: '/core/image',
    props: ['Image'],
    styles: ['Image'],
    polymorphic: true,
    description: 'Image with optional fallback',
    import: "import { Image } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Image/Image.tsx',
    docs: 'core/image.mdx',
  },

  Card: {
    title: 'Card',
    package: '@nex-ui/core',
    slug: '/core/card',
    props: ['Card', 'CardSection'],
    styles: ['Card'],
    componentPrefix: 'Card',
    description: 'Card with sections',
    import: "import { Card } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Card/Card.tsx',
    docs: 'core/card.mdx',
  },

  PasswordInput: {
    title: 'PasswordInput',
    package: '@nex-ui/core',
    slug: '/core/password-input',
    props: ['PasswordInput'],
    styles: ['PasswordInput'],
    description: 'Capture password data from user',
    import: "import { PasswordInput } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/PasswordInput/PasswordInput.tsx',
    docs: 'core/password-input.mdx',
  },

  FileInput: {
    title: 'FileInput',
    package: '@nex-ui/core',
    slug: '/core/file-input',
    props: ['FileInput'],
    styles: ['FileInput'],
    description: 'Capture files from user',
    import: "import { FileInput } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/FileInput/FileInput.tsx',
    docs: 'core/file-input.mdx',
  },

  Stepper: {
    title: 'Stepper',
    package: '@nex-ui/core',
    slug: '/core/stepper',
    props: ['Stepper', 'StepperStep'],
    styles: ['Stepper'],
    componentPrefix: 'Stepper',
    description: 'Display content divided into a steps sequence',
    import: "import { Stepper } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Stepper/Stepper.tsx',
    docs: 'core/stepper.mdx',
  },

  ColorInput: {
    title: 'ColorInput',
    package: '@nex-ui/core',
    slug: '/core/color-input',
    props: ['ColorInput'],
    styles: ['ColorInput'],
    description: 'Capture color from user',
    import: "import { ColorInput } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/ColorInput/ColorInput.tsx',
    docs: 'core/color-input.mdx',
  },

  ThemeIcon: {
    title: 'ThemeIcon',
    package: '@nex-ui/core',
    slug: '/core/theme-icon',
    props: ['ThemeIcon'],
    styles: ['ThemeIcon'],
    description: 'Render icon inside element with theme colors',
    import: "import { ThemeIcon } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/ThemeIcon/ThemeIcon.tsx',
    docs: 'core/theme-icon.mdx',
  },

  NumberInput: {
    title: 'NumberInput',
    package: '@nex-ui/core',
    slug: '/core/number-input',
    props: ['NumberInput'],
    styles: ['NumberInput'],
    description: 'Capture number from user',
    import: "import { NumberInput } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/NumberInput/NumberInput.tsx',
    docs: 'core/number-input.mdx',
  },
  LoadingOverlay: {
    title: 'LoadingOverlay',
    package: '@nex-ui/core',
    slug: '/core/loading-overlay',
    props: ['LoadingOverlay'],
    styles: ['LoadingOverlay'],
    description: 'An overlay with centered loader',
    import: "import { LoadingOverlay } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/LoadingOverlay/LoadingOverlay.tsx',
    docs: 'core/loading-overlay.mdx',
  },

  Radio: {
    title: 'Radio',
    package: '@nex-ui/core',
    slug: '/core/radio',
    componentPrefix: 'Radio',
    props: ['Radio', 'RadioGroup', 'RadioIndicator', 'RadioCard'],
    styles: ['Radio', 'RadioGroup', 'RadioIndicator', 'RadioCard'],
    description: 'Wrapper for input type radio',
    import: "import { Radio } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Radio/Radio.tsx',
    docs: 'core/radio.mdx',
  },

  Timeline: {
    title: 'Timeline',
    package: '@nex-ui/core',
    slug: '/core/timeline',
    componentPrefix: 'Timeline',
    props: ['Timeline', 'TimelineItem'],
    styles: ['Timeline'],
    description: 'Display list of events in chronological order',
    import: "import { Timeline } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Timeline/Timeline.tsx',
    docs: 'core/timeline.mdx',
  },

  Dialog: {
    title: 'Dialog',
    package: '@nex-ui/core',
    slug: '/core/dialog',
    props: ['Dialog'],
    styles: ['Dialog'],
    description: 'Display a fixed overlay dialog at any side of the screen',
    import: "import { Dialog } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Dialog/Dialog.tsx',
    docs: 'core/dialog.mdx',
  },

  Flex: {
    title: 'Flex',
    package: '@nex-ui/core',
    slug: '/core/flex',
    props: ['Flex'],
    styles: ['Flex'],
    polymorphic: true,
    description: 'Compose elements in a flex container',
    import: "import { Flex } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Flex/Flex.tsx',
    docs: 'core/flex.mdx',
    refactor: true
  },

  List: {
    title: 'List',
    package: '@nex-ui/core',
    slug: '/core/list',
    componentPrefix: 'List',
    props: ['List', 'ListItem'],
    styles: ['List'],
    description: 'Display ordered or unordered list',
    import: "import { List } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/List/List.tsx',
    docs: 'core/list.mdx',
  },

  Spoiler: {
    title: 'Spoiler',
    package: '@nex-ui/core',
    slug: '/core/spoiler',
    props: ['Spoiler'],
    styles: ['Spoiler'],
    description: 'Hide long sections of content under a spoiler',
    import: "import { Spoiler } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Spoiler/Spoiler.tsx',
    docs: 'core/spoiler.mdx',
  },

  NavLink: {
    title: 'NavLink',
    package: '@nex-ui/core',
    slug: '/core/nav-link',
    props: ['NavLink'],
    styles: ['NavLink'],
    description: 'Navigation link',
    polymorphic: true,
    import: "import { NavLink } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/NavLink/NavLink.tsx',
    docs: 'core/nav-link.mdx',
  },

  NumberFormatter: {
    title: 'NumberFormatter',
    package: '@nex-ui/core',
    slug: '/core/number-formatter',
    props: ['NumberFormatter'],
    description: 'Format number with thousands/decimal separators and suffix/prefix',
    import: "import { NumberFormatter } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/NumberFormatter/NumberFormatter.tsx',
    docs: 'core/number-formatter.mdx',
  },

  FloatingIndicator: {
    title: 'FloatingIndicator',
    package: '@nex-ui/core',
    slug: '/core/floating-indicator',
    props: ['FloatingIndicator'],
    styles: ['FloatingIndicator'],
    description: 'Display a floating indicator over a group of elements',
    import: "import { FloatingIndicator } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/FloatingIndicator/FloatingIndicator.tsx',
    docs: 'core/floating-indicator.mdx',
  },

  Tree: {
    title: 'Tree',
    package: '@nex-ui/core',
    slug: '/core/tree',
    props: ['Tree'],
    styles: ['Tree'],
    description: 'Display a Tree structure',
    import: "import { Tree } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/Tree/Tree.tsx',
    docs: 'core/tree.mdx',
  },

  SemiCircleProgress: {
    title: 'SemiCircleProgress',
    package: '@nex-ui/core',
    slug: '/core/semi-circle-progress',
    props: ['SemiCircleProgress'],
    styles: ['SemiCircleProgress'],
    description: 'Represent progress with semi circle diagram',
    import: "import { SemiCircleProgress } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/SemiCircleProgress/SemiCircleProgress.tsx',
    docs: 'core/semi-circle-progress.mdx',
  },

  AngleSlider: {
    title: 'AngleSlider',
    package: '@nex-ui/core',
    slug: '/core/angle-slider',
    props: ['AngleSlider'],
    styles: ['AngleSlider'],
    description: 'Pick angle value between 0 and 360',
    import: "import { AngleSlider } from '@nex-ui/core';",
    source: '@nex-ui/core/src/components/AngleSlider/AngleSlider.tsx',
    docs: 'core/angle-slider.mdx',
  },
};
