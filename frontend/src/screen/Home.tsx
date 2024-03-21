import {View, SafeAreaView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {COLORS, SIZES} from '../constants';
import {HBooks} from '../components/horizontalBook';
import BookModal from '../components/modals/BookModal';
import Header from '../components/Header';
import MyBooksConaiter from '../components/MyBooksConaiter';
import {useAppDispatch, useAppSelector} from '../Hooks/redux.hooks';
import {fetchALLBooks} from '../redux/reducers/book.reducer';

const Home = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(state => state.book.books);
  useEffect(() => {
    dispatch(fetchALLBooks());
  }, []);
  useEffect(() => {}, [books]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* header */}
      <View style={{height: 200}}>
        <Header />
      </View>
      {/* my books section */}
      <View style={{flex: 1, backgroundColor: COLORS.black}}>
        <MyBooksConaiter />
        <View style={{paddingVertical: SIZES.body2}}>
          {/* books */}
          <HBooks books={books} />
        </View>
        {/* modal */}
        <BookModal />
      </View>
    </SafeAreaView>
  );
};

export default Home;
