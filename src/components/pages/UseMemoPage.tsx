import { Button, Flex, Center, Box } from '@chakra-ui/react'
import React, {useMemo, useState} from 'react'
import * as Colors from "../../colors"
import Header from '../Header'

/**
 * useMemoとuseCallbackは等価
 * どちらも再計算を依存配列の値が変更された時にのみ実行する
 * 違いは、memoは値を値を返し、callbackは関数を返す点にある
 * (useMemoを使ってuseCallbackを再現はできるが、使い分けとしてAPIが別れてる)
 */
const UseMemoPage = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const countUp1 = () => setCount1(prev => prev + 1)
  const countUp2 = () => setCount2(prev => prev + 1)

  // count1が変更されたら再計算される
  const momorizedData = useMemo(() => {
    return new Date().toString()
  }, [count1])
  
  return (
    <>
      <Box>
        <Header />
        <Flex justify="center" align="center" pt="20px">
          <Box w="80%" borderWidth="2px" borderRadius="5px" borderColor="black" p="10px">
            <Center bg={Colors.niceGreen} mb="20px" h="50px" color="black">
              useMemo動作確認
            </Center>
            <Center mb="20px">
            {momorizedData}
            </Center>
            <Center mb="20px">
              <Box>{count1}</Box>
              </Center>
            <Center mb="20px">
              <Button onClick={countUp1}>increment(memoデータと依存関係あり)</Button>
            </Center>
            <Center mb="20px">
              <Box>{count2}</Box>
              </Center>
            <Center mb="20px">
              <Button onClick={countUp2}>increment(memoデータと依存関係なし)</Button>
            </Center>
          </Box>
        </Flex>
      </Box>
  　</>
  )
}  

export default UseMemoPage
