import React from 'react'
import Form from '../../components/Form/form'
import './forms.css'

const forms = () => {
    return (
        <>
            <div className="form-render">
                <Form />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </>
    )
}

export default forms