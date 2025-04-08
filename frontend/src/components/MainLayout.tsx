import {Header} from "./Header";
import {SideBar} from "./SideBar"
import {Contents} from './Contents';
import styled from 'styled-components';
import { ButtonFunction } from "./ButtonFunction";

export const MainLayout = ()=>{
    return(
        <>
        <SHeader>
            <Header></Header>
        </SHeader>
        <SBody>
            <SSideBar>
                <SideBar></SideBar>
            </SSideBar>
            <SContents>
                <Contents></Contents>
                <ButtonFunction />
            </SContents>
        </SBody>
        </>
    )
}

const SHeader = styled.div`
	width: 100%;
	height: 32px;
    box-shadow: 0px 4px 4px #AAAAAA;
    `
const SBody = styled.div`
	width: 100%;
	height: calc(100vh - 32px);
	display: flex;
	flex-direction: row
    `
const SSideBar = styled.div`
	border-right: 1px solid #222222;
	width: 30%;
	height: 100%;
    `

const SContents = styled.div`
	width: 100%;
	height: 100%;
    background-color:rgba(98, 196, 108, 0.98);
`