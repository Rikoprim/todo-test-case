import styled from 'styled-components';

export const SearchBar = styled.div`
    width: auto;
    position: relative;
    flex: 1 1 auto;
`
export const SearchIcon = styled.div`
    padding: 0px 16px;
    height: 100%;
    font-size: 22px;
    color: #BDBDBD;
    position: absolute;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`
export const FormControl = styled.input`
    height: 50px;
    width: 97%;
    color: #969696;
    border: 0px;
    margin-bottom: 0px;
    -webkit-appearance: none;
    background-size: 20px 20px;
    text-align: left;
    font-weight: 500;
    padding: 0px 0px 0px 55px;
    font-size: 16px;
    border-radius: 8px;

    &:focus {
        outline: none;
    }
`