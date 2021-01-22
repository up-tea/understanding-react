import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from "axios"
import sampleData from "../../json/covidAPI.json"
import { Flex, Box, Center } from '@chakra-ui/react'
import * as Colors from "../../colors"
const UseEffectPage = () => {
  type APIDATATYPE = typeof sampleData
  const [positive, setPositive] = useState<{amount: number}>({amount: 0})
  useEffect(() => {
    // useEffect内で、async/awaitを使う場合、関数にwrappして実行する
    const fetchData = async() => {
      const { data } = await axios.get<APIDATATYPE>("https://covid19-japan-web-api.now.sh/api/v1/total")
      const { positive } = data
      setPositive({amount: positive})
    }
    // async関数を実行
    fetchData()
    // returnに処理を書くと、unmount時に実行される
    return console.log(`unmount!`)
  }, [])  // 第2引数を空配列で、class componentのdivMountとほぼ等価
  return (
    <>
      <Header />
      <Flex justify="center" align="center" pt="20px">
        <Box w="80%" borderWidth="2px" borderRadius="5px" borderColor="black" p="10px">
          <Center bg={Colors.niceGreen} mb="20px" h="50px" color="black">
            useEffectで、component mount時にapiから値を取得するやつ
          </Center>
          <Center>
            現在の日本のコロナ陽性者数: {positive.amount}人
          </Center>
        </Box>
      </Flex>      
    </> 
  )
}

export default UseEffectPage
