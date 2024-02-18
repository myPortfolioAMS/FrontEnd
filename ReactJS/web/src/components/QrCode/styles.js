import styled from 'styled-components';


export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f0f8ff;
	margin-top: 10vh;



	`

export const Content = styled.div`

	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;


	h1{
		color: #191970;
		padding: 20px;
		font-family: sans-serif;
		font-size: 25px;
		text-align: center;
		font-weight: bold;
	}
	p {

		color: #005A9C;
		padding: 20px;
	}
`

export const QrCode = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;

	

`

export const ValidationCode = styled.div`

	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 10px;

	span{
		text-transform: uppercase;
		font-weight: bold;
		color: #191970;
		padding: 10px;

	}

	input{
		font-size: 18px;
		padding: 10px;
		text-align: center;
		border:2px solid #191970;
		padding: 10px;
		

	}

	button{
		font-weight: bold;
		background-color:#005A9C;
		color: #fff;
		font-size: 18px;
		padding: 20px;
		border-radius: 30px;
		border: none;
		cursor: pointer;
		margin-top: 10px;
		
		
		&:hover{

			background-color: #191970;

		}


	}



`

