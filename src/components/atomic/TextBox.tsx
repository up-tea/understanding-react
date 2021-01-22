import React from 'react'
import { Center } from "@chakra-ui/react"
import * as Colors from "../../colors"

type Props = {
  label: string;
  result: number | string | null;
}

const TextBox:React.FC<Props> = ({label, result}) => {
  return (
    <Center bg={Colors.littleDarkBlue} mb="20px" h="50px" color="white">
        {label}: {result}
    </Center>
  )
}

export default TextBox
