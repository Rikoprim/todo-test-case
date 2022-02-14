import React from 'react'
import imgEmpty from '../../assets/image/empty.svg'
import { ErrorContainer, ErrorDesc, ErrorImage, ErrorText } from './errorStyled'

const error = () => {
  return (
    <ErrorContainer>
      <ErrorImage src={imgEmpty} alt='imgEmpty'></ErrorImage>
      <ErrorText>Data todo is empty</ErrorText>
      <ErrorDesc>Click the button next to add</ErrorDesc>
    </ErrorContainer>
  )
}

export default error