import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Box, Grid, Text, Image, Center} from '@chakra-ui/react'
import Hero from '../components/Hero'
import { ShopContext } from '../context/shopContext'
import ImageWithText  from '../components/ImageWithText'
import RichText from '../components/RichText'

const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loading...</div>

    return (
        <Box>
        <Box background="blue.100">
        <Hero />
        <RichText
            
            heading="The relaxation you've been waiting for"
            text="Our bombs guarantee a fun, relaxing and colorful night"
        />
        <Grid templateColumns="repeat(3, 1fr)">
        
        {

        products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
                <Box position="relative" content="center" _hover={{ opacity: '80%'}}>
                <Center>
                <Image src={product.images[0].src} />
                <Text position="absolute" bottom="15%" w="100" fontWeight="bold"> 
                {product.title}
                </Text>
                <Text position="absolute" bottom="5%" w="100" fontWeight="strong">
                ${product.variants[0].price}
                </Text>
                </Center>
                </Box>
            </Link>
        ))    
        }
        
        </Grid>
        
        
        <RichText
            heading="Relax like never before"
            text="You deserve this moment of complete bliss"
        />
        </Box>
        <ImageWithText reverse 
            image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" 
            heading="Heading"
            text="Escape the day with relaxing bath bombs"
            />
         <ImageWithText 
            image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" 
            heading="Heading"
            text="Escape the day with relaxing bath bombs"
            />
         <ImageWithText reverse 
            image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" 
            heading="Heading"
            text="Escape the day with relaxing bath bombs"
            />
        </Box>
        
    )
}

export default Home