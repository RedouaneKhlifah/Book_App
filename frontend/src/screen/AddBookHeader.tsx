import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, Icons, SIZES} from '../constants';

const AddBookHeader = () => {
  const navigate = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: SIZES.padding,
        backgroundColor: COLORS.primary,
        marginTop: 50,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigate.goBack();
        }}>
        <Image source={Icons.pages} style={{width: 20, height: 20}} />
      </TouchableOpacity>
      <Text style={{color: 'white'}}>Book Details</Text>
      <TouchableOpacity>
        <Image source={Icons.pages} style={{width: 20, height: 20}} />
      </TouchableOpacity>
    </View>
  );
};

export default AddBookHeader;
