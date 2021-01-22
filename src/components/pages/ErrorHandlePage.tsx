import React, {useEffect, useState} from 'react'
import { Box } from '@chakra-ui/react'
import Header from "../Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner'

const ErrorHandlePage = () => {
  // toast
  const notify = () => toast("error is happen!!",
  {style: {
    backgroundColor: "black",
    color: "white",
    fontSize: "18px",
    paddingLeft: "15px"
  }});

  // spinner
  let [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    notify()
    setIsLoading(true)
  },[])
  return (
    <Box>
      <Header />
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
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         display={isLoading}
         timeout={3000} //3 secs
      />
    </Box>
  )
}

export default ErrorHandlePage
