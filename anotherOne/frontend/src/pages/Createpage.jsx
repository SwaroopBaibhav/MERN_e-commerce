import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/Product';

function Createpage() {

  const [newProduct, setNewProduct] = useState({
    name:'',
    price:'',
    image:'',
  });

	const toast = useToast();

  const { createProduct } = useProductStore();

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);
    if (!success){
      toast({
        title: message,
        type: "error",
        duration: 5000
      })
      return;
    }
    toast({
      title: message,
      type: "success",
      duration: 5000
    });
    setNewProduct({name:'', price:'', image:''});
    console.log('Success: ', success);
    console.log('Message: ', message);
  }

  return (
    <Container maxWidth={"container.small"}>
      <VStack spacing={8}>
        <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
          Create New Product
        </Heading>

        <Box w={'full'} bg={useColorModeValue("white", 'grey.800')} p={6} rounded={'lg'} shadow={'medium'}>
          <VStack spacing={4}>

            <Input placeholder='Product Name' name='Name' type='name' value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>

            <Input placeholder='Price' name='Price' type='number' value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>

            <Input placeholder='Image URL' name='Image' value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>

            <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
              Add Product
            </Button>

          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default Createpage