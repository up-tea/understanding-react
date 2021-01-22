import React from 'react'
import { Box, Center, Flex, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Flex>
        <HStack spacing={15}>
          <Center>
            <Link to="/state">useState</Link>
          </Center>
          <Center>
            <Link to="/ref">useRef</Link>
          </Center>
          <Center>
            <Link to="/effect">useEffect</Link>
          </Center>
          <Center>
            <Link to="/memo">useMemo</Link>
          </Center>
          <Center>
            <Link to="/callback">useCallback</Link>
          </Center>
          <Center>
            <Link to="/custom-hook">customHook</Link>
          </Center>
          <Center>
            <Link to="/error-handle">errorHandle</Link>
          </Center>
        </HStack>
        
      </Flex>
    </Box>
  )
}

export default Header
