import styled from "@emotion/styled";

export const Container = styled.section`
    margin: 50px auto;
    width: 400px;
    background-color: lightblue;
    /* padding: 15px; */
    box-shadow: lightgray 4px 2px 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h2`
    align-self: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
`

export const Stats = styled.ul`
    margin: 0;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: gray;
    `

export const StatPoint = styled.li`
    width: 100%;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    color:white;
    background-color: gray;
    border: 1px black solid;
`