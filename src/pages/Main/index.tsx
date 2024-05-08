import styled from "styled-components";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import Ball from "../../components/Ball";

export default function Main() {
  return (
    <WrapperSld>
      <Menu>
        <Button>reset</Button>
        <Button>light</Button>
      </Menu>
      <LineSld>
        <Ball>02</Ball>
        <Ball>22</Ball>
        <Ball>22</Ball>
        <Ball>22</Ball>
        <Ball>22</Ball>
        <Ball>22</Ball>
      </LineSld>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 10px 10px 30px 10px;
  font-family: Arial, Helvetica, sans-serif;
  width: 400px;
`;

const LineSld = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;
