import styled from "styled-components"

export default function Ball({children}:any){
return <ButtonSld>{children}</ButtonSld>

}

export const ButtonSld = styled.button`
    display: flex;
    padding: 10px 20px;
    border: none;
    color: #fff;
    margin-left: 5px;
    cursor: pointer;
    background-color: #007bff;
    
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }

    border-radius: 25px;
`;