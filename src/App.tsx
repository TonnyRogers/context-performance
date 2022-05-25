import {
  ChakraProvider,
  Flex,
  theme,
} from "@chakra-ui/react"
import { MovieList } from "./components/MovieList";
import { FavoriteList } from "./components/FavoriteList/intex";

export const App = () => {


  return (
    <ChakraProvider theme={theme}>
        <MovieList />
        <FavoriteList />
    </ChakraProvider>
  );
}
