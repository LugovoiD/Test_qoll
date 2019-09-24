import React from 'react';
// import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function Article(){
    return <div className="card card-body mb-3">

        <div className="row">
            <div className="col-md-9">
                {/*<h4>{title}</h4>*/}
                {/*<p>Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>*/}
            </div>
            <div className="col-md-3">
                <p>test</p>
                {/*<Link to={`/launch/${url}`} className="btn btn-secondary">Launch Details</Link>*/}
            </div>
        </div>
    </div>;
};