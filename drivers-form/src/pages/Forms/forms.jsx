import React from 'react'
import Form from '../../components/Form/form'
import './forms.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const forms = () => {
    return (
        <>
            <div className="form-render">
                <Form className="form" />
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </div>
        </>
    )
}

export default forms