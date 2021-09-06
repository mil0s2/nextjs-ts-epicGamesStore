import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, TextField, Typography} from '@material-ui/core'
import {LogoIcon} from '../../../assets/icons'

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = () => {

    const classes = useStyles()
    return (
        <Box className={classes.container} >
            <LogoIcon className={classes.logo}/>
            <Typography variant="subtitle2" className={classes.signIn} >
                SIGN IN WITH AN EPIC GAMES ACCOUNT
            </Typography>
            <form className={classes.form}>
                <TextField classes={{root: classes.textFieldRoot}} variant="outlined" label = "Email Adress" />
                <TextField variant="outlined" label = "Password"  />

            </form>

        </Box>
    );
}

const useStyles = makeStyles({
    container: {
        maxHeight: '500px',
        maxWidth: '470px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '32px',
        backgroundColor: '#202020',
        padding: '50px 60px',
        flexDirection: 'column'
    },
    logo: {
        color: 'white',
        width: '48px',
        height: '48px',
        marginBottom: '30px'
    },
    signIn: {
        color: 'white',
        textAlign: 'left',
        marginTop: '20px',
        width: '100%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'space-between',
        maxWidth: '380px',
        width: '100%',
        marginTop: '20px',
    },
    textFieldRoot: {
        height: '85px',
        color: 'white'
    }
})

export default LoginForm;