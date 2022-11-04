import styled from "styled-components";
import { IoMdArrowBack, IoIosBatteryFull, IoIosWifi } from "react-icons/io";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #e5e5e5;
   width: 100vw;
   height: 100vh;
`
export const Header = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 316px;
    text-align: center;
    background: #006557;
    padding: 10px 0;
    row-gap: 20px;
    

`
export const HeaderIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    color: #fff;
`
export const BoxIcon = styled.div`
    display: flex;
   column-gap: 5px;
`

export const BoxTitle = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 25px;
    h3{
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        margin: 0 auto;
    }
`
export const ArrowBack = styled(IoMdArrowBack)`
    position: absolute;
    color: #fff;   
`
export const Wifi = styled(IoIosWifi)`
    color: #fff;
`
export const Battery = styled(IoIosBatteryFull)`
    color: #fff;
`


export const BoxForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f8f8f8;
    width: 316px;
    
    
     p{
        width: 275px;
        margin: 10px;
        font-weight: 600;
        font-size: 14px;
        color: #424f4d;
     }

`
export const BoxInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 25px;
    padding: 15px 0;
    
`
export const Input = styled.input`
    height: 45px;
    width: 275px;   
    outline: none;
    padding-left: 15px;
    border: 1px solid #e5e5e5;
    border-bottom: none;

    &:last-child{
        border: 1px solid #e5e5e5;
    }
`
export const Button = styled.button`
    height: 35px;
    width: 275px; 
    margin-bottom: 15px;
    border: none;
    background: #07689f;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        transform: scale(1.05);
        transition: 300ms;
    }

`
export const Link = styled.a`
    color: #07689f;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        transition: 300ms;
    } 
    
`
export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 25px;
    background: #fff;
    padding: 15px;
    width: 316px;
`
export const MenuIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #6d7a78;
    font-size: 18px;
    p{
        font-size: 12px;
    }
`