import React from 'react'
import './form.css'

const form = () => {
    return (
        <>
            <div className="page-container">
                <div className="form-container">
                    <form>
                        <i class="fa-solid fa-plus"></i>
                        <div className="mb-3">
                            <la className="form-label">4 Driver</la>
                            <input type="fordriver" required className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="name" required className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" required className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="number" required className="form-control" id="exampleInputPassword1" />
                        </div>
                        <label className="form-label">File</label>
                        <div class="input-group mb-3">
                            <input type="file" required class="form-control" id="inputGroupFile02" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default form