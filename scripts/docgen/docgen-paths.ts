import { getPath, getPaths } from '../utils/get-path';
import { getDeclarationsPaths } from './get-declarations-paths';

const FILES_PATHS = getPaths([
  // Input
  'packages/@nex-ui/core/src/components/Input/InputLabel/InputLabel.tsx',
  'packages/@nex-ui/core/src/components/Input/InputWrapper/InputWrapper.tsx',
  'packages/@nex-ui/core/src/components/Input/InputDescription/InputDescription.tsx',
  'packages/@nex-ui/core/src/components/Input/InputError/InputError.tsx',

  // Button
  'packages/@nex-ui/core/src/components/Button/ButtonGroup/ButtonGroup.tsx',

  // ActionIcon
  'packages/@nex-ui/core/src/components/ActionIcon/ActionIconGroup/ActionIconGroup.tsx',

  // Popover
  'packages/@nex-ui/core/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  'packages/@nex-ui/core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // Slider
  'packages/@nex-ui/core/src/components/Slider/Slider/Slider.tsx',
  'packages/@nex-ui/core/src/components/Slider/RangeSlider/RangeSlider.tsx',

  // Switch
  'packages/@nex-ui/core/src/components/Switch/SwitchGroup/SwitchGroup.tsx',

  // Checkbox
  'packages/@nex-ui/core/src/components/Checkbox/CheckboxGroup/CheckboxGroup.tsx',
  'packages/@nex-ui/core/src/components/Checkbox/CheckboxIndicator/CheckboxIndicator.tsx',
  'packages/@nex-ui/core/src/components/Checkbox/CheckboxCard/CheckboxCard.tsx',

  // Radio
  'packages/@nex-ui/core/src/components/Radio/RadioGroup/RadioGroup.tsx',
  'packages/@nex-ui/core/src/components/Radio/RadioIndicator/RadioIndicator.tsx',
  'packages/@nex-ui/core/src/components/Radio/RadioCard/RadioCard.tsx',

  // Tabs
  'packages/@nex-ui/core/src/components/Tabs/TabsTab/TabsTab.tsx',
  'packages/@nex-ui/core/src/components/Tabs/TabsList/TabsList.tsx',
  'packages/@nex-ui/core/src/components/Tabs/TabsPanel/TabsPanel.tsx',

  // Accordion
  'packages/@nex-ui/core/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  'packages/@nex-ui/core/src/components/Accordion/AccordionControl/AccordionControl.tsx',

  // Pill
  'packages/@nex-ui/core/src/components/Pill/PillGroup/PillGroup.tsx',

  // PillsInput
  'packages/@nex-ui/core/src/components/PillsInput/PillsInputField/PillsInputField.tsx',

  // Pagination
  'packages/@nex-ui/core/src/components/Pagination/PaginationRoot/PaginationRoot.tsx',
  'packages/@nex-ui/core/src/components/Pagination/PaginationItems/PaginationItems.tsx',
  'packages/@nex-ui/core/src/components/Pagination/PaginationDots/PaginationDots.tsx',
  'packages/@nex-ui/core/src/components/Pagination/PaginationEdges/PaginationEdges.tsx',
  'packages/@nex-ui/core/src/components/Pagination/PaginationControl/PaginationControl.tsx',

  // Combobox
  'packages/@nex-ui/core/src/components/Combobox/ComboboxOption/ComboboxOption.tsx',
  'packages/@nex-ui/core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'packages/@nex-ui/core/src/components/Combobox/ComboboxTarget/ComboboxTarget.tsx',
  'packages/@nex-ui/core/src/components/Combobox/ComboboxDropdownTarget/ComboboxDropdownTarget.tsx',
  'packages/@nex-ui/core/src/components/Combobox/ComboboxEventsTarget/ComboboxEventsTarget.tsx',
  'packages/@nex-ui/core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  'packages/@nex-ui/core/src/components/Combobox/ComboboxGroup/ComboboxGroup.tsx',

  // AppShell
  'packages/@nex-ui/core/src/components/AppShell/AppShellAside/AppShellAside.tsx',
  'packages/@nex-ui/core/src/components/AppShell/AppShellNavbar/AppShellNavbar.tsx',
  'packages/@nex-ui/core/src/components/AppShell/AppShellHeader/AppShellHeader.tsx',
  'packages/@nex-ui/core/src/components/AppShell/AppShellFooter/AppShellFooter.tsx',
  'packages/@nex-ui/core/src/components/AppShell/AppShellSection/AppShellSection.tsx',

  // Grid
  'packages/@nex-ui/core/src/components/Grid/GridCol/GridCol.tsx',

  // HoverCard
  'packages/@nex-ui/core/src/components/HoverCard/HoverCardTarget/HoverCardTarget.tsx',

  // Menu
  'packages/@nex-ui/core/src/components/Menu/MenuItem/MenuItem.tsx',
  'packages/@nex-ui/core/src/components/Menu/MenuTarget/MenuTarget.tsx',

  // Progress
  'packages/@nex-ui/core/src/components/Progress/ProgressSection/ProgressSection.tsx',
  'packages/@nex-ui/core/src/components/Progress/ProgressRoot/ProgressRoot.tsx',

  // Chip
  'packages/@nex-ui/core/src/components/Chip/ChipGroup/ChipGroup.tsx',

  // Card
  'packages/@nex-ui/core/src/components/Card/CardSection/CardSection.tsx',

  // Stepper
  'packages/@nex-ui/core/src/components/Stepper/StepperStep/StepperStep.tsx',

  // Timeline
  'packages/@nex-ui/core/src/components/Timeline/TimelineItem/TimelineItem.tsx',

  // List
  'packages/@nex-ui/core/src/components/List/ListItem/ListItem.tsx',

  // Spotlight
  'packages/@nex-ui/spotlight/src/Spotlight.tsx',
  'packages/@nex-ui/spotlight/src/SpotlightAction.tsx',
  'packages/@nex-ui/spotlight/src/SpotlightActionsGroup.tsx',
  'packages/@nex-ui/spotlight/src/SpotlightRoot.tsx',
  'packages/@nex-ui/spotlight/src/SpotlightSearch.tsx',

  // Carousel
  'packages/@nex-ui/carousel/src/Carousel.tsx',

  // Dropzone
  'packages/@nex-ui/dropzone/src/Dropzone.tsx',
  'packages/@nex-ui/dropzone/src/DropzoneFullScreen.tsx',

  // CodeHighlight
  'packages/@nex-ui/code-highlight/src/CodeHighlight.tsx',
  'packages/@nex-ui/code-highlight/src/CodeHighlightTabs.tsx',
  'packages/@nex-ui/code-highlight/src/InlineCodeHighlight.tsx',

  // Nprogress
  'packages/@nex-ui/nprogress/src/NavigationProgress.tsx',

  // Modals
  'packages/@nex-ui/modals/src/ModalsProvider.tsx',

  // Tiptap
  'packages/@nex-ui/tiptap/src/RichTextEditor.tsx',

  // Notifications
  'packages/@nex-ui/notifications/src/Notifications.tsx',
]);

export const DOCGEN_PATHS = getDeclarationsPaths([
  { type: 'package', path: getPath('packages/@nex-ui/core/src/components') },
  { type: 'package', path: getPath('packages/@nex-ui/dates/src/components') },
  { type: 'package', path: getPath('packages/@nex-ui/charts/src') },
  ...FILES_PATHS.map((filePath) => ({ type: 'file' as const, path: filePath })),
]);
