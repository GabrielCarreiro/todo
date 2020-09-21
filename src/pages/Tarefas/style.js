import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 40px;

    ul{
        display: flex;
        list-style: none;
    }

    li{
        font-size: 16px;
        font-weight: bold;

        & + li {
            margin-left: 15px;
        }

        a{
            color: #333;
            text-decoration: none;
            transition: 0.2s;

            &:hover{
                color: #04d361;
            }
        }
    }
`;

export const Form = styled.form`
    margin-top: 25px;
    max-width: 700px;
    display: flex;

    input{
        flex: 1;
        height: 50px;
        padding: 0 25px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &:placerholder{
            color: #a8a8b3;
        }
    }

    button{
        width: 120px;
        height: 50px;
        background-color: #04d361;
        border: 0;
        border-radius: 0 5px 5px 0; 
        color: #fff;
        font-weight: bold;
        transition: 0.3s;

        &:hover{
            background-color: #08a34e;

        }
    }
`;


export const ErrorMenssage = styled.span`
    display: block;
    color: #c53030;
    margin-top: 10px;
`;

export const Tasks = styled.div`
    margin-top: 40px;
    max-width: 700px;
    
    div{
        background: #fff;
        border-radius: 5px;
        display: flex;
        padding: 25px;
        text-decoration: none;
        align-items: center;
        transition: transform 0.5s;
        
        & + div{
            margin-top: 16px;
        }

        &:hover{
            transform: translateX(10px);
        }

        strong{
            font-size: 20px;
            color: #3d3d4d;
            margin-right: 25px;
        }
        span{
            margin-left: auto; 
        }

        svg{
            color: #cbcbd6;
            cursor: pointer;
        }
    }

    

`;