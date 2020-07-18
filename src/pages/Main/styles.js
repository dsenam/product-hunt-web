import styled from 'styled-components'

export const ProductList = styled.div`
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 20px;

    li {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
        color: #999;
        margin-top: 5px;
        line-height: 24px;
    }

    a {
        height: 42px;
        border-radius: 5px;
        border: 2px solid #da552f;
        background: none;
        margin-top: 10px;
        color: #da552f;
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;

        :hover {
            background: #da552f;
            color: #fff;
        }
    }
`;