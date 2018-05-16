import React from 'react';

import Button from './Button';

export default class Search extends React.PureComponent {

    render() {
        return (
            <React.Fragment>
                <div className="form-row mt-3 mb-3">
                    <div className="col">
                        <label htmlFor="inputSearch">
                            <span className="text-light">FIND YOUR MOVIE</span>
                        </label>
                        <input type="text" className="form-control" id="inputSearch"
                               placeholder="Input your request"/>
                    </div>
                </div>
                <div className="form-row pb-4">
                    <div className="col">
                        <label className="mr-2">
                            <small className="text-light">SEARCH BY</small>
                        </label>
                        <Button title="TITLE" isActive={true} size="small" addClasses="mr-1"/>
                        <Button title="GENRE" size="small" type="secondary"/>
                    </div>
                    <div className="col-auto text-right">
                        <Button title="SEARCH"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}