import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert, Image} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Pressable} from 'react-native';
import {appTheme} from '../../constants';
import RNFS from 'react-native-fs';

const {COLORS, SIZES, FONTS} = appTheme;

const FileInput: React.FC<{onChange: (text: string) => void}> = ({
  onChange,
}) => {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);

  useEffect(() => {
    if (base64Image) {
      onChange(base64Image);
    }
  }, [base64Image]);

  const selectImage = async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.images,
      });

      if (response.uri) {
        convertToBase64(response.uri);
        setSelectedFileName(response.name);
      }
    } catch (err) {
      console.warn(err);
      Alert.alert('Error', 'Failed to select image.');
    }
  };

  const convertToBase64 = async (uri: string) => {
    try {
      const base64 = await RNFS.readFile(uri, 'base64');
      setBase64Image(`data:image/jpeg;base64,${base64}`);
    } catch (error) {
      console.error('Error converting image to base64:', error);
      Alert.alert('Error', 'Failed to convert image to base64.');
    }
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.fileInput,
        {
          opacity: pressed ? 0.7 : 1,
          backgroundColor: selectedFileName
            ? `${COLORS.primary}99`
            : `${COLORS.primary}30`,
        },
      ]}
      onPress={selectImage}>
      {selectedFileName ? (
        <>
          <Text style={styles.fileName}>{selectedFileName}</Text>
        </>
      ) : (
        <Text style={styles.placeholderText}>Select File</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fileInput: {
    borderWidth: 1,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    position: 'relative',
  },
  fileName: {
    color: COLORS.gray1,
    ...FONTS.body3,
  },
  placeholderText: {
    color: COLORS.gray1,
    ...FONTS.body3,
  },
});

export default FileInput;
