import React, { useState } from "react";
import "./Contato.css"
import { Button, Grid, Snackbar, TextField, Typography } from "@material-ui/core";
import { Box, useTheme } from "@mui/material";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contato() {

    const theme =  useTheme();
    
    const [enviado, setEnviado] = useState(false);

    const handleEnviar = () => {
        setEnviado(true);
    };

    const handleFecharSnackbar = () => {
        setEnviado(false);
    };

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' style={{ backgroundColor: theme.palette.background.paper}} className="gridContato">
                <Grid item xs={12} sm={6} className="alinhamento">
                    <Box textAlign='center'>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' className='textoPrimario' >Contato</Typography>
                        <Typography variant='h6' color='textPrimary' align='center' className='textoSecundario'paragraph  >Se preferir, preencha o formulário ao lado para nos contatar.</Typography>
                        <Typography variant='h6' color='textPrimary' align='center' className="telicon" paragraph >
                            <PermPhoneMsgIcon /> (11) 2123-8000
                        </Typography>
                        <Typography variant='h6' color='textPrimary' align='center' className="emailicon" paragraph >
                            <MailOutlineIcon />goodhandsprojetogeneration@gmail.com
                        </Typography>
                        <Typography variant='h6' color='textPrimary' align='center' className="emailicon" paragraph >
                            <WhereToVoteIcon /> Endereço: São Paulo - SP
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} alignItems='center' style={{ backgroundColor: theme.palette.background.default }} className="teste">
                    <main className="contato">
                        <form className="formulario">
                            <TextField
                                className="textFieldCont"
                                id="nome"
                                type="text"
                                label="Nome"
                                margin="dense"
                                placeholder="Insira o seu nome completo..."
                                fullWidth
                            />
                            <TextField
                                className="textFieldCont"
                                id="email"
                                type="text"
                                label="Email"
                                margin="dense"
                                placeholder="Insira o seu email completo..."
                                fullWidth
                            />
                            <TextField
                                className="textFieldCont"
                                id="assunto"
                                type="text"
                                label="Assunto"
                                margin="dense"
                                placeholder="Insira o assunto da mensagem..."
                                fullWidth
                            />
                            <Box my={2}>
                                <TextField
                                    className="textFieldCont"
                                    id="mensagem"
                                    label="Mensagem"
                                    multiline
                                    rows={8}
                                    placeholder="Insira a sua mensagem..."
                                    fullWidth
                                />
                            </Box>
                            <Box textAlign='center' my={2}>
                                <Button variant='contained' color='primary' type='submit' onClick={handleEnviar} >Enviar</Button>
                            </Box>
                        </form>
                    </main>
                </Grid>
            </Grid>
            <Snackbar
                open={enviado}
                autoHideDuration={3000}
                onClose={handleFecharSnackbar}
                message="Mensagem enviada com sucesso!"
            />


        </>
    )
}

export default Contato;