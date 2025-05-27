import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  ViewStyle,
  StyleProp,
} from 'react-native';
import styles from './styles';
import {useTheme} from '../../hooks/useTheme';

type Variant = 'primary' | 'outline';

interface AppButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}) => {
  const {currentTheme} = useTheme();
  const themedStyles = styles(currentTheme);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[
        themedStyles.buttonBase,
        themedStyles[variant],
        disabled && themedStyles.disabled,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' ? currentTheme.colors.primary : '#fff'}
        />
      ) : (
        <Text
          style={[
            themedStyles.textBase,
            variant === 'outline'
              ? themedStyles.textPrimary
              : themedStyles.textLight,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
