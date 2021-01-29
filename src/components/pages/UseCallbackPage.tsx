import { Button, Input, Flex, Center, Box } from '@chakra-ui/react'
import React, {useCallback, useState, useEffect} from 'react'
import * as Colors from "../../colors"
import Header from '../Header'

const UseCallbackPage = () => {
  const [val, setVal] = useState(`default`)
  const [random, setRandom] = useState(Math.floor(Math.random() * 100))

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 100))
  }, [])

  const changeRandom = () => {
    const res = Math.floor(Math.random() * 100)
    setRandom(res)
    console.log(`変数ramdomの値が${res}に変更されました`)
  }

  const memorizedFunc = useCallback(() => {
    /**
    * useCallbackで、関数定義をval変更時に制限
    * random変更を実行後に実行すると、定義時のrandom値を参照している
    * valを変更すると、関数が再定義されて、その時点の最新のrandom値を参照するように
    * つまり、val変更時のみ関数の再定義をしてることが確認できた
    */
    console.log(`value: ${val}, random: ${random}`)
      // eslint-disable-next-line
  }, [val])

  const nonMemorizedFunc = () => {
    /**
     * 関数定義がrendering毎に行われる
     * random変更後に実行すると、変更後の値になっている
     */
    console.log(`value: ${val}, random: ${random}`)
  }
  
  return (
    <>
    <Box>
      <Header />
      <Flex justify="center" align="center" pt="20px">
        <Box w="80%" borderWidth="2px" borderRadius="5px" borderColor="black" p="10px">
          <Center bg={Colors.niceGreen} mb="20px" h="50px" color="black">
            useCallback動作確認
          </Center>
          <Input mb="40px" onChange={(e) => setVal(e.currentTarget.value)}/>
          <Center mb="20px">
            <Button mr="30px" onClick={ () => memorizedFunc()}>メモ化された関数を実行</Button>
            <Button mr="30px" onClick={ () => nonMemorizedFunc()}>メモ化されてない関数を実行</Button>
          </Center>
          <Center>
            <Button mr="30px" onClick={ () => changeRandom()}>random 変更</Button>
          </Center>
        </Box>
      </Flex>
    </Box>
  )
    </>
  )
}

export default UseCallbackPage
