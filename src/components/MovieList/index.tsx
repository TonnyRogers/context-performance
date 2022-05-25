import { Box, Container, Flex,Text, UnorderedList, ListItem, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";

import { useMovies } from "../../hooks/useMovies";

export function MovieList() {
    const { movies, onAddMovie, onRemoveMovie } = useMovies();
    const { onAddFavorite } = useFavorites();
    const [movieName, setMovieName ] = useState('');

    // old
    // const { movies, onAddMovie, onRemoveMovie, onAddFavorite } = useMovies();

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
                  <Button colorScheme='yellow' size='xs' marginLeft={2} onClick={() => onAddFavorite(index)}>⭐️</Button>
                  <Button colorScheme='red' size='xs' marginLeft={2} onClick={() => onRemoveMovie(index)}>X</Button>
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
    );
}