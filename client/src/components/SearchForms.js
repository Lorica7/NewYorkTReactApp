import React from "react";

const SearchForms = props => (
<div className="card">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Topic"
                        id="search"
                    />
                    <br />
                    <input
                        onChange={props.handleInputChange}
                        value={props.startYear}
                        name="startYear"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Start Year"
                        id="search"
                    />
                    <input
                        onChange={props.handleInputChange}
                        value={props.endYear}
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


) ;
export default SearchForms;