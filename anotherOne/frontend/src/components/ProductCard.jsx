import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/Product';
import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
    VStack,
} from "@chakra-ui/react";


function ProductCard({product}) {

    const [updatedProduct, setUpdatedProduct] = useState(product)
    
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const bg = useColorModeValue('white', 'gray.800');
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const toaster = useToast();

    const {updateProduct} = useProductStore();
    const{ deleteProducts } = useProductStore();

    const handleDelete = async (id) => {
        const {success, message} = await deleteProducts(id);
        if(!success){
            toaster({
                title: message,
                status: "error",
                duration: 5000,
                isCloseable: true
            });
        }else{
            toaster({
                title: message,
                status: "success",
                duration: 5000,
                isCloseable: true
            });
        }
        console.log('Deleting product');
    }

    const handleUpdateProduct = async (id,updatedProduct) => {
        const {success, message} = await updateProduct(id, updatedProduct);
        onClose();
        if(!success){
            toaster({
                title: message,
                status: "error",
                duration: 5000,
                isCloseable: true
            });
        }else{
            toaster({
                title: message,
                status: "success",
                duration: 5000,
                isCloseable: true
            });
        }
    }

  return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />
        <Box p={4}>
            <Heading as={'h3'} size={'md'} mb={2}>
                {product.name}
            </Heading>
            
            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>

            <HStack spacing={2}>
                <IconButton onClick={onOpen}>
                    <MdEdit/ >
                </IconButton>

                <IconButton onClick={() => handleDelete(product._id)}>
                    <MdDelete/ >    
                </IconButton>
            </HStack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Edit Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                            placeholder='Product Name' 
                            name='name'
                            value={updatedProduct.name}
                            onChange={(e) => setUpdatedProduct({...updatedProduct, name:e.target.value})}
                            />
                            <Input
                            placeholder='Price' 
                            name='price'
                            value={updatedProduct.price}
                            onChange={(e) => setUpdatedProduct({...updatedProduct, price:e.target.value})}
                            />
                            <Input
                            placeholder='Image URL' 
                            name='img_url'
                            value={updatedProduct.image}
                            onChange={(e) => setUpdatedProduct({...updatedProduct, image:e.target.value})}
                            />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
                        <Button colorScheme='blue' variant='ghost' mr={3} onClick={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>

    </Box>
  )
}

export default ProductCard