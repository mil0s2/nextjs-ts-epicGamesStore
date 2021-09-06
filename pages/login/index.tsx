import {Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react';
import LoginForm from '../../src/auth/login/Login.form';

const useStyles = makeStyles({
    loginContainer: {
        backgroundColor: '#121212',
        width: '100%',
        height: '100vh'
        
    }
})

interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {
    const classes = useStyles()
    return (
    <Container className={classes.loginContainer}>
        <LoginForm />
    </Container>
        )
}

export default Login;