
import { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
  UserPoolId: 'sa-east-1_AR3zxmEC4',
  ClientId: 'f18164dd-a177-4345-a30b-33230f839a19',
};
export default new CognitoUserPool(poolData);