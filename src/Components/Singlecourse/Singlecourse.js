import React from 'react';

const Singlecourse = (props) => {
    return (
        <div className="col-sm-4">
            <div className=" mb-5 pd-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src={props.course.cover} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.course.title}</h5>
                        <h6 className="card-text">Price :${props.course.price}</h6>
                    </div>
                    <div className="card-footer">
                        <button href="#" className="btn btn-primary"
                        onClick={ () => props.handleEnroll(props.course)}
                        >Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlecourse;