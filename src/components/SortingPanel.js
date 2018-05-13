import React from 'react';

import Button from './Button';

export default class SortingPanel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isSortedByDate: true
        };

        this.props.sortByDate();
    }

    sortByDate = () => {
        this.setState({
            isSortedByDate: true
        });

        this.props.sortByDate();
    };

    sortByRating = () => {
        this.setState({
            isSortedByDate: false
        });

        this.props.sortByRating();
    };

    render() {
        return (
            <React.Fragment>
                <span className="mr-2">Sort By</span>
                <Button title={"release date"}
                        isActive={this.state.isSortedByDate}
                        size={"small"}
                        type={"outline"}
                        addClasses={"mr-1"}
                        onClick={this.sortByDate}
                />
                <Button
                    title={"rating"}
                    isActive={!this.state.isSortedByDate}
                    size={"small"}
                    type={"outline"}
                    onClick={this.sortByRating}
                />
            </React.Fragment>
        )
    }
}