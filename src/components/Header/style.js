import styled from 'styled-components';

export const Container = styled.div`
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