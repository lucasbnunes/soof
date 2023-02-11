import { MantineTheme, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Poppins, sans-serif' },
  globalStyles: (theme: MantineTheme) => ({
    body: {
      ...theme.fn.fontStyles(),
      background: theme.colors.dark[9],
      color: theme.colorScheme === 'dark' ? theme.colors.blue[0] : theme.black,
    },
  }),
};
