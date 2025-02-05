import { IconError404, IconFingerprint, IconPhoto } from '@tabler/icons-react';
import {
  darken,
  defaultVariantColorsResolver,
  Group,
  NexThemeProvider,
  parseThemeColor,
  rem,
  rgba,
  ThemeIcon,
  VariantColorsResolver,
} from '@nex-ui/core';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  ThemeIcon,
  Group,
  NexProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  darken,
} from '@nex-ui/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`\${rem(1)} solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <NexProvider theme={{ variantColorResolver }}>
      <Group>
        <ThemeIcon color="lime.4" variant="filled">
          <IconPhoto size={20} />
        </ThemeIcon>

        <ThemeIcon color="orange" variant="light">
          <IconFingerprint size={20} />
        </ThemeIcon>

        <ThemeIcon variant="danger">
          <IconError404 size={20} />
        </ThemeIcon>
      </Group>
    </NexProvider>
  );
}
`;

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `${rem(1)} solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <NexThemeProvider theme={{ variantColorResolver }}>
      <Group>
        <ThemeIcon color="lime.4" variant="filled" size="lg">
          <IconPhoto size={20} stroke={1.5} />
        </ThemeIcon>

        <ThemeIcon color="orange" variant="light" size="lg">
          <IconFingerprint size={20} stroke={1.5} />
        </ThemeIcon>

        <ThemeIcon variant="danger" size="lg">
          <IconError404 size={20} stroke={1.5} />
        </ThemeIcon>
      </Group>
    </NexThemeProvider>
  );
}

export const variantColorsResolver: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  defaultExpanded: false,
  code,
};
