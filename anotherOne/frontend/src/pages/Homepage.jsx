import React, { useEffect } from 'react'
import { Container, VStack, Text, SimpleGrid, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/Product';
import ProductCard from '../components/ProductCard';

function Homepage() {

  const {fetchProducts, products} = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);
  

  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text
        fontSize={'xl'}
        fontWeight={'bold'}
        bgGradient={'linear(to-r, cyan.400, blue.500)'}
        textAlign={'center'}>
          Current Product 🚀
        </Text>
        
        <SimpleGrid
        columns={{
          base:1,
          md:2,
          lg:3
        }}
        spacing={10}
        w={'full'}
        gap='30px'
        >

          {products.map((e) => (
            <ProductCard key={e._id} product={e} />
          ))}


          <Box />
          <Box />
        </SimpleGrid>

        {products.length == 0 && (
          <Text
          fontSize={'30'}
          fontWeight={'bold'}
          color={'grey.500'}
          textAlign={'center'}>
            No Products Found 😓 {" "}
            <Link to={'/create'}>
              <Text as={'span'} color={'blue'} _hover={{textDecoration: 'underline'}}>
                Create a Product
              </Text>
            </Link>
          </Text>
        )}

      </VStack>
    </Container>
  )
}

export default Homepage