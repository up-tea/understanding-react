import React from 'react'
import useScroll from "../../custom-hook/use-scroll"
import Header from '../Header'
import { Box, Circle } from "@chakra-ui/react"
import classes from "./CustomHookPage.module.css"
import * as Colors from "../../colors"
const CustomHookPage = () => {
  const { goTop, goBottom, isAtBottom, ref } = useScroll({
    threshould: 0
  })
  console.log(ref)
  return (
    <Box h="2000px">
      <Header />
      <Box className={classes.colorBox} onClick={goBottom} mt="50px" mx="auto" />
      {/* to top button */}
      { isAtBottom ? <Circle pos="fixed" right="30px" bottom="30px"  h="80px" w="80px" bg={Colors.niceGreen} onClick={ goTop }>TOP</Circle> : false }
    </Box>
  )
}

export default CustomHookPage
