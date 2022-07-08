import styled from "styled-components";

export const MovieCard = styled.div`
    width: 30%;
    color: #fff;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.3);
    padding: 16px;

    img{
        max-width: 100%;
    }
    p, h2{
        margin-bottom: 16px;
        text-align: center;
    }
    a{
        color: #fff;
        font-weight: bold;
        background-color: #590fbf;
        border: 2px solid #590fbf;
        font-size: 20px;
        border-radius: 4px;
        padding: 16px 8px;
        transition: all ease .5s;
        margin-bottom: 16px;
        text-align: center;
    }
    a:hover{
        background-color: transparent;
        color:#590fbf;
    }
`;