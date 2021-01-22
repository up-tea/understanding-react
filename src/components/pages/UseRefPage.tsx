import React, { useRef, useEffect } from 'react'
import Header from '../Header'
import { Center, Box, Flex, Input, Button } from "@chakra-ui/react"
import * as Colors from "../../colors"

const UseRefPage = () => {
  // ts使うなら、useState同様にuseRef実行時にgenericsの型指定が必要
  const inputRef = useRef<HTMLInputElement>(null)

  // dom mount時に、auto focus(第2引数を空配列にしてるので)
  useEffect(() => {
    /*
      inputRef.currentにはref={inputRef}を指定した要素の生domが入ってる
      また、inputRefがnullの時のためにfocusのレシーバをoptionalにする必要がある
    */
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <Header />
      <Flex justify="center" align="center" pt="20px">
        <Box w="80%" borderWidth="2px" borderRadius="5px" borderColor="black" p="10px">
          <Center bg={Colors.niceGreen} mb="20px" h="50px" color="black">
            useRefで生DOM引っ張って、画面遷移時に任意のinputにfocus()するやつ
          </Center>
          <Box mb="20px">
            <Input type="text"/>
          </Box>
          {/* 次のinputにauto focus */}
          <Box mb="20px">
            <Input ref={inputRef} type="number"/>
          </Box>
          <Box mb="20px">
            <Input type="text"/>
          </Box>
          <Box mb="20px">
            <Input type="number"/>
          </Box>
          <Box align="center">
            <Button w="180px" colorScheme="blue">display data</Button>
          </Box>
          
        </Box>
        <Box>
          {/* submit押下時にmapでform dataを展開 */}
        </Box>
      </Flex>      
    </>
  )
}

export default UseRefPage
