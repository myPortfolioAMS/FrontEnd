import styled from 'styled-components';


export const Container = styled.div`

	display: flex;
	width: 100%;
	height: 100%;
	background-color: #FF2299;
`

export const Screen = styled.div `
    width: 10vw;
    height: 50vh;
    background-color: blue;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	

   	position: absolute;
   	top: 150px;
    margin-left: -1400px;
  	background: hsl(213deg 85% 97%);
	
	
	
	border-radius: 30px;
	box-shadow: 0 0 2em hsl(231deg 62% 94%);
    

`
export const Register = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	
    position: absolute;
	top: 50px;
	margin-left: 70px;

    $p: hsl(213deg 85% 97%);
    $s: hsl(233deg 36% 38%);
    font-family: 'Roboto', sans-serif;

    `  
export const username = styled.div `
        width: 250px;
        height: 40px;
		background-color: yellow;
		//background: hsl(0deg 0% 100%);
		box-shadow: 0 0 2em hsl(231deg 62% 94%);
		padding: 1em;
	
       
		gap: 0.5em;
		border-radius: 20px;
		color: hsl(0deg 0% 30%);
        
		input {
			outline: none;
			border: none;
			
			&::placeholder {
				
				color: hsl(0deg 0% 0%);
				font-size: 0.9em;
			}
		}
`

export const password = styled.div `
        
    	width: 250px;
        height: 40px;

		background-color: red;

        //background: hsl(0deg 0% 100%);
		box-shadow: 0 0 2em hsl(231deg 62% 94%);
		padding: 1em;
		position: absolute;
		margin-top: 15vh;
       
		
		flex-direction: column;
		gap: 1px;
		border-radius: 20px;
		color: hsl(0deg 0% 30%);
		input {
			outline: none;
			border: none;
			&::placeholder {
				
				color: hsl(0deg 0% 0%);
				font-size: 0.9em;
			}
		}
		ion-icon {
			color: hsl(0deg 0% 30%);
			margin-bottom: -.2em;
		}
		.show-hide {
			margin-right: -5em;
		}
`

export const button = styled.button `
	    padding: 15px;
		width: 250px;
	//	background: hsl(233deg 36% 38%);
		background:#33ff00;
	
		border: none;
		border-radius: 30px;
		font-weight: 600;

        position: absolute;  
        margin-left: 5px;
        margin-top: 370px;

		font-size: 1em;
		color: 	 #993399;
	
  		padding: 0.25em 1em;
  	

		

`

export const body = styled.div `
user-select: none;
	overflow-y: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background: hsl(218deg 50% 11%);
	height: 100vh;
`