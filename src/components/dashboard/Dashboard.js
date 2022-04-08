import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Boxes from "../Boxes/Boxes";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthProvider";

const Dashboard = () => {
    const navigate = useNavigate()
  const [storedData, setStoredData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const getData = async () => {
    const url = "";
    const res = await axios.get(url);
  };

  return (
    <Components>
      <Wrap>
        <Left>
          <Profiles>
            <Image>
              <img src={currentUser && currentUser.avatar} />
            </Image>
            <Names>
              <div>{currentUser && currentUser.companyName}</div>
              <span>{currentUser && currentUser.userName}</span>
            </Names>
          </Profiles>
          <Mid>
            <Link to="/dash">
              {" "}
              <Over>
                <span>
                  <img src="/Home.png" />
                  Overview
                </span>
              </Over>
            </Link>
            <Link to="/create">
              <Add>
                <span>
                  <img src="Vector.png" />
                  Add Items
                </span>
              </Add>
            </Link>
          </Mid>
          <Link to="/">
            {" "}
            <Dwon
            onClick={() => {
                localStorage.removeItem("user")
                window.location.reload()
                navigate('/')
            }}
            >
              <span>
                <img  src="vector-1.png" />
                Logout
              </span>
            </Dwon>
          </Link>
        </Left>
        <Right>
          <Top>
            <h3> Welcome Romanus, </h3>
            <p>Your Products are in safe hands</p>
          </Top>
          <Wrapps>
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
          </Wrapps>
        </Right>
      </Wrap>
    </Components>
  );
};

export default Dashboard;
const Components = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  min-height: 100vh;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Left = styled.div`
  width: 18%;
  height: 100%;
  background: #231e71;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0px;
`;
const Right = styled.div`
  width: 85%;
  position: fixed;
  bottom: 0px;
  left: 400px;
`;
const Image = styled.div`
  width: 105px;
  height: 105px;
  border-radius: 50%;
  margin-bottom: 15px;
`;
const Names = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    font-size: 40px;
  }
  span {
    font-size: 20px;
    opacity: 0.8;
  }
`;
const Over = styled.div`
  color: white;
  font-size: 20px;
  margin-left: 30px;

  margin-bottom: 30px;

  img {
    width: 25px;
    margin-right: 30px;
    /* margin-top: 5px; */
  }
  span {
    padding: 10px 10px;
    border-radius: 3px;
    cursor: pointer;
    transition: 350ms;
    :hover {
      background: #3e82ff70;
      color: white;
    }
  }
`;
const Add = styled.div`
  color: white;
  margin-left: 33px;
  font-size: 20px;

  img {
    width: 24px;
    margin-right: 30px;
    margin-top: 5px;
  }
  span {
    padding: 10px 10px;
    border-radius: 3px;
    cursor: pointer;
    transition: 350ms;
    :hover {
      background: #3e82ff70;
      color: white;
    }
  }
`;
const Dwon = styled.div`
  color: white;
  margin-top: 400px;
  font-size: 20px;
  margin-left: 30px;

  img {
    width: 18px;
    margin-right: 40px;
  }
  span {
    padding: 10px 10px;
    border-radius: 3px;
    cursor: pointer;
    transition: 350ms;
    :hover {
      background: #3e82ff70;
      color: white;
    }
  }
`;
const Profiles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;
const Mid = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
`;
const Top = styled.div`
  margin-top: 0px;
  h3 {
    font-size: 50px;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
  }
`;
const Wrapps = styled.div`
  background: #eee;
  width: 80%;
  padding: 15px 34px;
  display: grid;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 15px;
  gap: 35px;
`;
