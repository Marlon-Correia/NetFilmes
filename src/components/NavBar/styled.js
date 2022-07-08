import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 40px 65px;
    background-color: #121212;
    margin-bottom: 30px;
    
    a{
        display: flex;
        align-items: center;
        gap: 8px;    
    }
`;
export const Input = styled.input`
    border: none;
    padding: 4px 8px;
    height: 35px;
    width: 200px;
    border-radius: 4px;
`;
export const Button = styled.button`
    background-color: #590fbf;
    border: 2px solid #590fbf;
    font-size: 20px;
    height: 36px;
    width: 40px;
    margin-left: 5px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease .5s;
    :hover{
        background-color: transparent;
        color:#590fbf;
    }
`;
export const Form = styled.form`
    display: flex;
    align-items: center;
`;