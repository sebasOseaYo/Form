import React from 'react'
import './form.css'

const form = () => {
    return (
        <>
            <div className="page-container">
                <div className="form-container">
                    <div className="form-checker">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">BOL</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">POD</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">J1</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">Gas Receips</label>
                        </div>
                    </div>

                    <form>
                        <div className="utilities">
                            <div className="hover-text">
                                Remove Form
                            </div>
                            <i class="fa-solid fa-xmark"></i>
                            <div className="hover-text">
                                Add Form
                            </div>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div className="mb-3">
                            <la className="form-label">4 Driver</la>
                            <input type="fordriver" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="name" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="number" required className="form-control" />
                        </div>
                        <label className="form-label">File</label>
                        <div class="input-group mb-3">
                            <input type="file" required class="form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default form