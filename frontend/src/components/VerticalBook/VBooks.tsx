import { View, Text, StyleSheet, FlatList, ListRenderItem } from "react-native";
import React, { useState } from "react";
import { IBook } from "../../types";
import { useAppSelector } from "../../Hooks/redux.hooks";
import VBookCard from "./VBookCard";

export const BooksData: IBook[] = [
  {
    id: 1,
    title: "The Adventures of Dummy Book 1",
    image: "book1.jpg",
    pages: 200,
    autor: "John Doe",
    rating: 4.5,
    description: "A thrilling adventure awaits in this dummy book!",
    language: "English",
    category: "Adventure",
  },
  {
    id: 2,
    title: "Mystery of the Dummy Book 2",
    image: "book2.jpg",
    pages: 150,
    autor: "Jane Smith",
    rating: 3.8,
    description: "Unravel the mystery in this captivating dummy book!",
    language: "Spanish",
    category: "Mystery",
  },
  {
    id: 3,
    title: "Mystery of the Dummy Book 2",
    image: "book2.jpg",
    pages: 150,
    autor: "Jane Smith",
    rating: 3.8,
    description: "Unravel the mystery in this captivating dummy book!",
    language: "Spanish",
    category: "Mystery",
  },
];

const VBooks = () => {
  //   const Books = useAppSelector((state) => state.events.leagues);

  const renderItem = ({ item }: { item: IBook }) => <VBookCard book={item} />;
  return (
    <View>
      <FlatList
        data={BooksData}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default VBooks;
