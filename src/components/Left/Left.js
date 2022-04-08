import React from 'react'
import styled from 'styled-components'
import {BiHome} from 'react-icons/bi'
import {AiFillContacts, AiFillMail, AiFillLock} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const Left = () => {
    return (
       <WholeWrapper>
                <Container>
                <Wrap1>
                  <TextHold>
                  <h1>Sign Up Here</h1>
                  <h6 style ={{ marginLeft:"25px"}}>Get Started and work on your growth</h6>
                  </TextHold>
                  <Circle>+</Circle>
                  <h6 >Add Company Logo</h6>
                </Wrap1>

                <Wrap2>
                    <Fill>
                    <h6>Company Name*</h6>
                    <InputTag>
                    <Icon size="27px" color="#123456"/>
                    <input placeholder='company name'></input>
                    </InputTag>
                    </Fill>
                    <Fill>
                    <h6>Admin Name*</h6>
                    <InputTag>
                    <Icon2  size="27px" color="#123456"/>
                    <input placeholder='admin name'></input>
                    </InputTag>
                    </Fill>
                    <Fill>
                    <h6>Email*</h6>
                    <InputTag>
                    <Icon3 size="27px" color="#123456"/>
                    <input placeholder='email'></input>
                    </InputTag>
                    </Fill>
                    <Fill>
                    <h6>Password*</h6>
                    <InputTag>
                    <Icon4 size="27px" color="#123456"/>
                    <input placeholder='min 8 characters'></input>
                    </InputTag>
                    </Fill>
                </Wrap2>
                <Wrap3>
                    <Link to ="/dash"><Up>
                        <button>Sign Up</button>
                    </Up>
                    </Link>
                    <Down>
                        <Already>
                        <h4>Already Have An Account?</h4>
                        <h5 style={{color: "#3E83FF"}}> ..Sign In</h5>
                        </Already>
                        <Copyright>
                        <span>C</span>
                        <h6>2022 Set05 All Rights Reserved</h6>
                        </Copyright>
                    </Down>
                </Wrap3>
            </Container>
       </WholeWrapper>
    )
}

export default Left;

const WholeWrapper = styled.div`
width: 100%;
`;


const Container = styled.div`
    width: 900px;
    /* height: 100vh; */
    color: #5C5C5C;
    font-size: 25px;
    font-weight: 400;
    margin-left: 0px;
    /* background-color: #5C5C5C; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  
`;

const Wrap1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 90px; 

`;
const Wrap2 = styled.div`
margin-right: 150px;
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 3px dotted #3E83FF;
    background-color: #E5E5E5;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;


    :hover{
        cursor: pointer;
        transition: all 350ms;
        transform: scale(1.1);
    }
`;
const Fill = styled.div`
    width: 300px;
    height: 100px;

    h6{
        /* margin-top: 40px; */
        font-weight: 800;
        font-size: 18px;
    }

`;

const TextHold = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h1{
    color: black;
    font-weight: 600;
    margin-left: 30px;
    margin-top: 500px;
    h6{
        margin-left: 80px;
        background: red;
        ;
    }
}
`;


const InputTag = styled.div`
    display: flex;
    /* justify-content: flex-end; */
    align-items: center;
    /* background: red; */
    width: 400px;
    /* height: 300px */
input{
        padding: 15px 50px;
        font-size: 15px;

        border: 2px solid #3E83FF;
        border-radius: 40px;
        /* position: absolute; */
        /* height: 200px; */
        width: 300px;
        outline: none;
    }
    img{
        width: 60px;
        position: relative;
    }
    
`;
const Img = styled.img`
width: 30x;
height: 50px;
margin-left: 10px;
`;

const Wrap3 = styled.div`

`;
const Icon= styled(BiHome)`
position: absolute;
/* /* margin-right: 28px; */
margin-left: 10px; 
`
const Icon2= styled(AiFillContacts)`
position: absolute;
margin-left: 10px; 
`
const Icon3 = styled(AiFillMail)`
position: absolute;
margin-left: 10px; 
`
const Icon4= styled(AiFillLock)`
position: absolute;
margin-left: 10px; 
`
const Up = styled.div`
    margin-left: 40px;
    margin-top: 70px;

    button{
        padding: 20px 80px;
        background-color: #3E83FF;
        border-radius: 25px;
        font-size: 25px;
        font-weight: 600;
        outline: none;
        border: none;

        :hover{
            background-color: #3E83FF;
            cursor: pointer;
            transition: all 350ms;
            transform: scale(1.1);
        }
}


`;
const TickHold = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    /* margin-left: 45px; */
`;
const Span = styled.div`
width: 40px;
height: 40px;
background-color: #3E83FF;
border-radius: 15px;
display: flex;
justify-content: space-around;
align-items: center;
`;
const Down = styled.div`
    /* margin-left: 50px; */
 display: flex;
 justify-content:center;
 align-items: center;
 flex-direction: column;
`;
const Already = styled.div`
     display: flex;
    justify-content: space-around;
    align-items: center;

    h5{
        font-size: 25px;
        :hover{
            cursor:pointer;
            transition: all 350ms;
            transform: scale(1.1);
        }
    }
`;
 const Hold = styled.div`
 display: flex;
 align-items: center;

 h5{
        font-size: 25px;
        :hover{
            cursor:pointer;
            transition: all 350ms;
            transform: scale(1.1);
        }
    }
 
 `;
const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
        width: 40px;
        height: 40px;
        background-color: #3E83FF;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
`;