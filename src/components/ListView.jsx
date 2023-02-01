import React from 'react';
import styled from 'styled-components';
import { DeviceSize } from './Responsive';

const Wrapper = styled.section`
    margin-top: 60px;
`;
const Container = styled.div`
display: flex;
width: 89.5%;
height: 45vh;
margin: 0 auto;
margin: 0 auto;
margin-bottom: 60px;
@media ${DeviceSize.mobile}{
    display: flex;
    flex-direction: column;
    text-align: center;
    height: inherit;
}
`;

const Left = styled.div`
flex: 1;
`;
const ImageProduct = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
`;
const Right = styled.div`
flex: 2;
`;
const Tittle = styled.h1`
font-size: 26px;
    margin-bottom: 20px;
`;
const PriceLable = styled.label`
font-size: 30px;
    color: red;
`;
const Desc = styled.p`
letter-spacing: 1px;
    font-size: 18px;
    margin-top: 24px;
`;
const HeroButton = styled.button`
  font-size: 18px;
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-top: 16px;

&:active{
  outline: 0;
}
&:hover {
  outline: 0;
}

span {
  background-color: rgb(5, 6, 45);
  padding: 10px 18px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

&:hover span {
  background: none;
}

@media ${DeviceSize.mobile} {  
    font-size: 24px;
    margin: 0 auto;  
    margin-top: 20px;
}
`

const ListView = ({ products }) => {
    return (
        <Wrapper>
            {products.map((curElem) => {
                const {id, title, img, price, description } = curElem;
                return (
                    <Container key={id}>
                        <Left>
                            <ImageProduct src={img} />
                        </Left>
                        <Right>
                            <Tittle>{title}</Tittle>
                            <PriceLable>${price}</PriceLable>
                            <Desc>{description}</Desc>
                            <HeroButton><span className="text">Show Now</span></HeroButton>
                        </Right>
                    </Container>
                )
            })}
        </Wrapper>
    )
}

export default ListView