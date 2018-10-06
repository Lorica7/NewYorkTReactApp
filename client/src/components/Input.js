import React from "react";

const Input = props => (
<div className="card">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <Input
                        onChange={props.handleInputChange}
                        value={props.state.search}
                        name="search"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Topic"
                        id="search"
                    />
                    <br />
                    <Input
                        onChange={props.handleInputChange}
                        value={props.state.startYear}
                        name="startYear"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Start Year"
                        id="search"
                    />
                    <Input
                        onChange={props.handleInputChange}
                        value={props.state.endYear}
                        name="startYear"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="End Year"
                        id="search"
                    />
                    <button
                        onClick={props.handleFormSubmit}
                        className="btn btn-info">
                        Search
                    </button>
                </div>
            </form>
        </div>
    </div>


)