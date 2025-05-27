import {StyleSheet} from 'react-native';
import {ThemeType} from '../../theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    buttonBase: {
      paddingVertical: theme.padding.md,
      paddingHorizontal: theme.padding.lg,
      borderRadius: theme.radius.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    outline: {
      borderWidth: 1.5,
      borderColor: theme.colors.primary,
      backgroundColor: 'transparent',
    },
    disabled: {
      opacity: 0.5,
    },
    textBase: {
      fontSize: theme.fontSizes.md,
    },
    textLight: {
      color: '#fff',
    },
    textPrimary: {
      color: theme.colors.primary,
    },
  });

export default styles;
