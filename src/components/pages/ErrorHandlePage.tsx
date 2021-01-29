import React, {useState} from 'react'
import { Box, Flex, Center, Button } from '@chakra-ui/react'
import Header from "../Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Colors from "../../colors"
import axios from "axios"

// jsonでもらう
axios.defaults.headers.common["Accept"] = "application/json"

const ErrorHandlePage = () => {
  const [result, setResult] = useState("")
  // error toast
  const errorNotify = () => toast("error is happen!!",
  {style: {
    backgroundColor: "black",
    color: "white",
    fontSize: "18px",
    paddingLeft: "15px"
  }});

  // data fetching toast
  const infoNotify = () => toast.info("data fetching!!",
  {style: {
    fontSize: "18px",
    paddingLeft: "15px"
  },
  autoClose: false,
  });

    const getData = async (isSuccess: boolean) => {
      try {
        const apiUrl = isSuccess ? 
        "https://icanhazdadjoke.com/" :
        "https://jfdsjfiojfierofmrogmirepjfpiejf"
        // 成功時
        const toastId = infoNotify()
        const { data } = await axios.get(apiUrl)
        console.log(data)
        toast.dismiss(toastId)
        setResult(data.joke)
      } catch(error) {
        console.error(error)
        // 失敗時erro toast をpopし、3秒後に消す
        toast.dismiss()
        errorNotify()
      }
    }

  return (
    <Box>
      <Header />
      <Flex justify="center" align="center" pt="20px">
        <Box w="80%" borderWidth="2px" borderRadius="5px" borderColor="black" p="10px">
          <Center bg={Colors.niceGreen} mb="20px" h="50px" color="black">
            APIからデータを取得時、失敗と成功のトースト表示
          </Center>
          <Center mb="40px">今日の小粋なジョーク: {result}</Center>
          <Center>
            <Button mr="25px" onClick={ () => getData(true)}>マスター、ジョークを1つ</Button>
            <Button onClick={ () => getData(false)}>Failed...</Button>
          </Center>
        </Box>
      </Flex>      
        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
           />
    </Box>
  )
}

export default ErrorHandlePage
