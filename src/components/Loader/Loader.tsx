import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
 const Loader: React.FC = () =>  {
    return <>
    <ThreeDots
  visible={true}
  height="50"
  width="50"
  color="#0b3d91"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
</>
}
export default Loader