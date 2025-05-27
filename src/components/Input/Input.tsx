import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import styles from './styles';
import Text from '../Text';

import {useTheme} from '../../hooks/useTheme';

interface AppTextInputProps extends TextInputProps {
  label?: string;
  errorText?: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  style,
  errorText,
  ...props
}) => {
  const {currentTheme} = useTheme();
  const themedStyles = styles(currentTheme);

  return (
    <View style={themedStyles.wrapper}>
      {label && <Text style={themedStyles.label}>{label}</Text>}
      <TextInput
        placeholderTextColor={currentTheme.colors.gray}
        style={[themedStyles.input, style]}
        cursorColor={currentTheme.colors.text}
        {...props}
      />
      {errorText ? (
        <Text style={themedStyles.errorText} weight="light">
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

export default AppTextInput;
