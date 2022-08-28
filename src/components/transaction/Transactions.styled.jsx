import styled from '@emotion/styled'

export const TransactionListHistory = styled.table`
    width: 80%;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse; 
    margin:auto;
    
`

export const TransactionHeader = styled.tr`
   font-weight: bold;
	padding: 5px;
	background: #00BFFF;
	border: 1px solid #dddddd;
    color: white;
    
`
export const TransactionHeaderCase = styled.th`
   border-radius: 10px;
    
`


export const TransactionString = styled.td`
   border: 1px solid #dddddd;
   padding: 5px;
  
     
}
`
export const TransactionColumn = styled.tbody`
 background-color: white;
 
 
 
 tr:nth-of-type(even) {
    background-color: #edf5ef;  
`