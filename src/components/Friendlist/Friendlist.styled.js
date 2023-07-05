import styled from "@emotion/styled";
 
export const Container = styled.ul`
    margin: 50px auto;
    width: 400px;
    /* padding: 15px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const FriendCard = styled.li`
    width: 100%;
    padding: 15px ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 20px;
    background-color: beige;

    background-color: lightgray;
`

export const Status = styled.span`
    color: ${props => {
        return (props.isOnline === true ? `red` : `green`);
    }};
`

export const Avatar = styled.img`

    border-radius: 5px;
`