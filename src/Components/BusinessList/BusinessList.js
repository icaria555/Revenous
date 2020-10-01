import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component {
    render() {
        const businesses = [];
        for(const b of this.props.businesses) {
            businesses.push(<Business business={b} key={b.id}/>)
        }
        if(businesses.length === 0) {
            return (
                <div className="BusinessList">
                    No Item
                </div>
            ) 
        } else {
            return (
                <div className="BusinessList">
                    {businesses}
                </div>
            )
        }
        
    }
}

BusinessList.defaultProps = {businesses: []};
export default BusinessList;