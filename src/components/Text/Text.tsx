import React from 'react';
import {Text, TextProps, StyleProp, TextStyle} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import styles from './styles';

type Weight = 'regular' | 'bold' | 'light';

interface AppTextProps extends TextProps {
  weight?: Weight;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const AppText: React.FC<AppTextProps> = ({
  children,
  style,
  weight = 'regular',
  ...rest
}) => {
  const {currentTheme} = useTheme();
  const themedStyles = styles(currentTheme);

  return (
    <Text
      style={[themedStyles[weight] || themedStyles.regular, style]}
      {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
