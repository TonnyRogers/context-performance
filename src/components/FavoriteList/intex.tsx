import { Box, Container, Flex,Text, UnorderedList, ListItem, Button } from "@chakra-ui/react";
import { useFavorites } from "../../hooks/useFavorites";
// import { useMovies } from "../../hooks/useMovies";

export function FavoriteList() {
    const { favorites, onRemoveFavorite } = useFavorites();

    //old
    // const { favorites, onRemoveFavorite } = useMovies();

    return (
        <Container bg='yellow.100' p={4} marginTop={10} borderRadius={16}>
        <Flex flexDirection='column' m={4}>
          <Box>
            <Text fontWeight='bold' fontSize='4xl'>Favorites 🌟</Text>
          </Box>
          <Box>
              <UnorderedList>
                {favorites?.length && favorites.map((item, index) => (
                <ListItem key={item.id}>
                  {item.name}({item.age})
                  <Button colorScheme='red' size='xs' marginLeft={2} onClick={() => onRemoveFavorite(index)}>X</Button>
                </ListItem>
                ))}
              </UnorderedList>
                {!favorites?.length && (<Text>Have some favorite movie?</Text>)}
          </Box>
        </Flex>
      </Container>
    );
}