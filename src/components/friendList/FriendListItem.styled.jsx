import styled from '@emotion/styled'


export const FriendCase = styled.div`
 background-color: white;
 box-sizing: border-box;
 border-color: white;
 border-radius: 10px;
  width: 200px;
  margin: 20px auto;
  background-color: white;
  box-shadow: 0 0 15px 0 rgba(158, 154, 154, 0.4);
  
  
  
`

export const FriendItem = styled.li`
 display:flex;
 align-items: center;
 
  
`;



export const FriendStatus = styled.span`
  margin-left: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? `green` : `red`)};
`;

export const FriendAvatar = styled.img`
  margin-left: 30px;
`;
export const FriendName = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
  text-transform: capitalize;
`;