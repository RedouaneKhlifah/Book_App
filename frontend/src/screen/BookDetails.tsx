import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootScreenRoutesT} from '../types';
import {appTheme} from '../constants';
import {BookDescription, BookInfoSection} from '../components/bookDetlais';
import BookModal from '../components/modals/BookModal';
import {useAppDispatch, useAppSelector} from '../Hooks/redux.hooks';
import {clearBook, getOneBook} from '../redux/reducers/book.reducer';

const {COLORS, SIZES, FONTS} = appTheme;

type BookDetailsProp = RouteProp<RootScreenRoutesT, 'BookDetails'>;

type Props = {
  route: BookDetailsProp;
};
const BookDetails: React.FC<Props> = ({route}) => {
  const dispatch = useAppDispatch();
  useEffect(
    () => () => {
      dispatch(clearBook());
    },
    [],
  );
  const singleBook = useAppSelector(state => state.book.singleBook);
  if (!singleBook) {
    return (
      <View style={{flex: 1}}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.black}}>
        <View
          style={{
            flex: 4,
          }}>
          <BookInfoSection book={singleBook} />
        </View>
        {/* description */}
        <View
          style={{
            flex: 2,
          }}>
          <BookDescription book={singleBook} />
        </View>
        {/* action buttons */}
        <BookModal book={singleBook} />
      </View>
    );
  }
};

export default BookDetails;
