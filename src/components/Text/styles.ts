import {StyleSheet} from 'react-native';
import {ThemeType} from '../../theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    regular: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
    },
    bold: {
      fontSize: theme.fontSizes.md,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    light: {
      fontSize: theme.fontSizes.md,
      fontWeight: '300',
      color: theme.colors.text,
    },
  });

export default styles;
