import styled from 'styled-components';


export const Container = styled.div`

	//display: flex;
	width: 100%;
	height: 100%;
	
	//background-color: yellow;

	//display: flex;
	//justify-content: center;
	//margin-top: 10%;

	//flex-direction: column;
	
	//align-items: center;
`

export const Logo = styled.div `
    width: 300px;
    height: 500px;

	display: flex;
	flex-direction: column;

	align-items: center;

	


	
	

    

`

export const Screen = styled.div `
    width: 300px;
    height: 500px;

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

export const Login = styled.div`

h3 {

    font-size: 36px;

    font-family: 'Roboto', sans-serif;
   
    color: #111111;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 5%;
    margin-left: 32%;
}

p {

    font-size: 26px;
    font-family: 'Roboto', sans-serif;
   
    color: #111111;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 15%;
    margin-left: 47%;
}

p1 {

    font-size: 20px;
    font-family: 'Roboto', sans-serif;
   
    color: #111111;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 25%;
    margin-left: 47%;
}

` 
export const username = styled.div `
        width: 250px;
        height: 40px;
    
		background: hsl(0deg 0% 100%);
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

        background: hsl(0deg 0% 100%);
		box-shadow: 0 0 2em hsl(231deg 62% 94%);
		padding: 1em;
	
       
      
		flex-direction: column;
		gap: 5px;
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