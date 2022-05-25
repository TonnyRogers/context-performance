import React, { useState } from "react"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Button,
  Input,
  Flex,
  ListItem,
  UnorderedList,
  Container,
} from "@chakra-ui/react"
import { useMovies } from "./hooks/useMovies"

export const App = () => {
  const { movies, onAddMovie, onRemoveMovie } = useMovies();
  const [movieName, setMovieName ] = useState('');

  function handleAddMovie() {
    if(movieName === '') {
      return false;
    }

    onAddMovie({
      name: movieName,
      age: 2022,
      rate: 5,
    });

    setMovieName('');
  }

  return (
    <ChakraProvider theme={theme}>
        <Container bg='whitesmoke' p={4} marginTop={10} borderRadius={16}>
          <Flex flexDirection='column' m={4}>
            <Box>
              <Text fontWeight='bold' fontSize='4xl'>My movie list</Text>
            </Box>
            <Box>
                <UnorderedList>
                  {movies?.length && movies.map((item, index) => (
                  <ListItem key={item.id}>
                    {item.name}({item.age})
                    <Button colorScheme='red' size='xs' onClick={() => onRemoveMovie(index)}>x</Button>
                  </ListItem>
                  ))}
                </UnorderedList>
                  {!movies?.length && (<Text>You list is empty 😅</Text>)}
            </Box>
            <Box display='flex' marginTop={4}>
                  <Input 
                    placeholder='Insert a movie' 
                    w={80} 
                    bg='white' 
                    value={movieName} 
                    onChange={(event) => 
                    setMovieName(event.target.value)} 
                  />
                  <Button 
                    colorScheme='blue' 
                    marginLeft={4} 
                    onClick={handleAddMovie}
                  >Add</Button>
            </Box>
          </Flex>
        </Container>
      </ChakraProvider>
  );
}
