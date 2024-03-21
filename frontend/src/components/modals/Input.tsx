import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import appTheme from '../../constants/themes';
import {useAppSelector} from '../../Hooks/redux.hooks';

const {COLORS, SIZES, FONTS} = appTheme;
type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (text: string) => void;
  keyboardType: KeyboardType;
};

type Error = {
  field: string;
  message: string;
};

export type KeyboardType =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad';

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  keyboardType,
}) => {
  const [inputFocused, setInputFocused] = React.useState<boolean>(false);

  const errors = useAppSelector(state => state.book.error);

  console.log('errors ---------------------');
  console.log(errors);

  let error: {field: string; message: string} | undefined;

  if (Array.isArray(errors)) {
    error = errors.find(err => err.field === name);
  } else {
    error = undefined;
  }

  return (
    <>
      <Text style={[styles.label, {color: error ? 'red' : COLORS.gray1}]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: inputFocused || error ? 'red' : `${COLORS.primary}40`,
          },
        ]}
        placeholder="Type something"
        value={value}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        onChangeText={text => onChange(text)}
        keyboardType={keyboardType}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    ...FONTS.body4,
    marginBottom: SIZES.base,
    marginLeft: SIZES.base,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.base,
    width: '100%',
  },
});

export default Input;
