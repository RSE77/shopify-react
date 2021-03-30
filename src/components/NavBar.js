import React, { useContext } from 'react';
import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import {ShopContext} from '../context/shopContext';
import { MdMenu, MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';


const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)
    
    return (
        <Flex backgroundColor="#FFA8E2" flexDir='row' justifyContent="space-between" p="2rem">
            <Icon fill="white" as={ MdMenu } cursor="pointer" w={30} h={30} onClick={() => openMenu()}>Menu</Icon>
            <Link to='/'><Image src="https://media.istockphoto.com/vectors/bath-bombs-splash-paint-vector-id613660496?k=6&m=613660496&s=612x612&w=0&h=yWioQTSTi7yDFY8HfCt-ke4EiphsJ5u01PzmyG-Dy78=" w={100} h={100}/> </Link>
    		<Icon fill="white" as={ MdShoppingBasket } cursor="pointer" w={30} h={30}
            onClick={() => openCart()}
            />
        </Flex>
    )
}

export default NavBar;