import React from 'react'
import './form.css'
// MATERIAL UI
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
// MATERIAL UI ICONS
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NumbersIcon from '@mui/icons-material/Numbers';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const form = () => {
    return (
        <>
            <div className="form-container">
                <form>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group">
                            <FormControlLabel value="BOL" control={<Radio />} label="BOL" />
                            <FormControlLabel value="POD" control={<Radio />} label="POD" />
                            <FormControlLabel value="J1" control={<Radio />} label="J1" />
                            <FormControlLabel value="Gas Receipts" control={<Radio />} label="Gate Receipts" />
                        </RadioGroup>
                    </FormControl>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        4 Driver
                    </InputLabel>
                    <Input sx={{
                        width: '100%',
                        marginBottom: 2
                    }}
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <NumbersIcon />
                            </InputAdornment>
                        }
                    />
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Name
                    </InputLabel>
                    <Input sx={{
                        width: '100%',
                        marginBottom: 2
                    }}
                        type='name'
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        }
                    />
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Email
                    </InputLabel>
                    <Input sx={{
                        width: '100%',
                        marginBottom: 2
                    }}
                        type='email'
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        }
                    />
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Phone
                    </InputLabel>
                    <Input sx={{
                        width: '100%'
                    }}
                        type='number'
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <LocalPhoneIcon />
                            </InputAdornment>
                        }
                    />
                    <Button sx={{
                        marginTop: 3,
                        width: '100%'
                    }}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>

                </form>
            </div>


        </>
    )
}

export default form