import React from 'react'
import useScroll from "../../custom-hook/use-scroll"
import Header from '../Header'
import { Box, Circle } from "@chakra-ui/react"
import * as Colors from "../../colors"
const CustomHookPage = () => {
  const { goTop, goBottom, isAtBottom, isAtTop, ref } = useScroll({
    TopThreshould: 50,
    BottomThreshould: 100
  })
  console.log(ref)
  return (
    <Box h="2000px">
      <Header />
      {/* to top button */}
      { isAtBottom ? <Circle pos="fixed" right="30px" bottom="30px"  h="80px" w="80px" bg={Colors.niceGreen} onClick={ goTop }>TOP</Circle> : false }
      { isAtTop ? <Circle pos="fixed" right="30px" bottom="30px"  h="80px" w="80px" bg={Colors.niceGreen} onClick={ goBottom }>Bottom</Circle> : false }
    </Box>
  )
}

export default CustomHookPage
