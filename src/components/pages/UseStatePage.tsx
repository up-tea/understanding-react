import React, {useState} from 'react'
import Header from '../Header'
import { Center, Box, Flex, Input } from "@chakra-ui/react"
import * as Colors from "../../colors"
import TextBox from '../atomic/TextBox'
const UseStatePage = () => {
  // 空文字で初期化してもいいけど、初期値をnullにするならgenericsでnullも許容しとく
  const [inputText, setInputText] = useState<string | null>(null)
  return (
    <>
      <Header />
      <Flex justify="center" align="center" pt="20px">
        <Box w="80%" borderWidth="2px" borderRadius="5px" borderColor="black" p="10px">
          <Center bg={Colors.niceGreen} mb="20px" h="50px" color="black">
            text inputに入った値をstateに格納して表示するだけ
          </Center>
          <Input
            mb="20px"
            placeholder="insert text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // nullも許容しとかないと、下段でnullにstring入らないと怒られる
              setInputText(e.currentTarget.value)
            }} />
            <TextBox label="e.currentTarget.value" result={inputText} />
        </Box>
      </Flex>      
    </>
  )
}

export default UseStatePage
