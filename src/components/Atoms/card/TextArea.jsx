import { useState } from "react";
import { db } from "../../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import styled from "styled-components";
import { Button } from "../Button";

export const TextArea = () => {
  const user = useSelector(selectUser);
  const [memo, setMemo] = useState("");

  const saveMemo = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      text: memo,
    });
  };

  return (
    <>
      <form onSubmit={saveMemo}>
        <SContainer>
          <SLabel>Memo</SLabel>
          <STextarea
            type="text"
            autoFocus
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
          <SContainer>
            <Button type="submit">SAVE</Button>
          </SContainer>
        </SContainer>
      </form>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SLabel = styled.label`
  display: block;
  text-align: left;
  color: grey;
  font-family: "Lobster", cursive;
  font-family: "Rampart One", cursive;
  font-weight: bold;
`;

const STextarea = styled.textarea`
  max-width: 100%;
  border: none;
  line-height: 1.5;
  height: 120px;
  width: 270px;
  outline: none;
  resize: none;
  color: grey;
  font-family: "Rampart One", cursive;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
    -ms-filter: "alpha(opacity=70";
    border: 1px gray dashed;
  }
`;
