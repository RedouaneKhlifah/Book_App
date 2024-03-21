import { IBook } from "./api.Types";

export type RootScreenRoutesT = {
  Home: undefined;
  BookDetails: { book: IBook };
};
