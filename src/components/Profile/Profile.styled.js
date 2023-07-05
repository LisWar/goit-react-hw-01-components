import styled from "@emotion/styled";

export const Container = styled.div`
    margin: 50px auto;
    width: 300px;
    background-color: white;
    /* padding: 15px; */
    border: 1px lightgray solid;
    border-radius: 10px ;
    box-shadow: lightgray 4px 2px 5px;
`

export const Description = styled.div`
    /* margin: 15px;  */
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-bottom: 1px gray solid;
`

export const Name = styled.p`
    margin: 0px; 
    font-size: 24px;
    font-weight: 600;
`

export const Info = styled.p`
    margin: 0px; 
    color: gray;
`

export const Avatar = styled.img`
    width: 100px;
    margin: 15px 0;
    /* background-color: #fff; */
    border-radius: 50%;
`

export const Stats = styled.ul`
    margin: 0; 
    /* padding: 0 20px; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    min-height: 100px;
    overflow: hidden;
    background-color: gray;
    gap:1px;


    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px; 

    `

export const StatPoint = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 100%;
    background-color: lightgray;
`

export const StatLabel = styled.span`
    color: gray;
`

export const StatValue = styled.span`
    font-weight: 700;
`