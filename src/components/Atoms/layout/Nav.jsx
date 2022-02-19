import styled from "styled-components";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav = () => {
  const user = useSelector(selectUser);
  return (
    <SContainer>
      <SItem>
        <Avatar
          src={user.photoUrl}
          onClick={async () => {
            await auth.signOut();
          }}
        />
        <SLink to="/user">
          <SName>{user.displayName}</SName>
        </SLink>
      </SItem>
      <SItem>
        <SLink to="/">
          <SButton>HOME</SButton>
        </SLink>
      </SItem>
      <SItem>
        <SButton onClick={() => auth.signOut()}>LOGOUT</SButton>
      </SItem>
    </SContainer>
  );
};

const SLink = styled(Link)`
  text-decoration: none;
`;

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
`;

const SName = styled.p`
  color: gray;
  margin-left: 10px;
  font-weight: bold;
  font-family: "Rampart One", cursive;
  font-size: 15px;
  :hover {
    text-decoration: underline;
    opacity: 0.7;
    filter: alpha(opacity=70);
    -ms-filter: "alpha(opacity=70";
  }
`;

const SButton = styled.button`
  display: inline-block;
  margin: 0 20px;
  color: grey;
  font-weight: bold;
  font-family: "Rampart One", cursive;
  border: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    opacity: 0.7;
    filter: alpha(opacity=70);
    -ms-filter: "alpha(opacity=70";
  }
`;
