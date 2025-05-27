import {StyleSheet} from 'react-native';
import {ThemeType} from '../../theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    wrapper: {
      gap: 4,
    },
    label: {
      color: theme.colors.text,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.text,
      borderRadius: theme.radius.sm,
      paddingVertical: 10,
      paddingHorizontal: theme.padding.sm,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
    },
    errorText: {
      color: theme.colors.danger,
      fontSize: theme.fontSizes.sm,
    },
  });

export default styles;
