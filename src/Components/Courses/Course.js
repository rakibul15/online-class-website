import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import Singlecourse from '../Singlecourse/Singlecourse';
import Cart from '../Cart/Cart';

const Course = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const handleEnroll = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="container-fluid mt-1">
            <div className="row">
                <div className="col-sm-9">
                    <div className="row">
                        <div className="card-group">
                            {
                                courses.map(course => <Singlecourse
                                    handleEnroll={handleEnroll}
                                    course={course}></Singlecourse>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <Cart cart={cart}></Cart>

                </div>
            </div>
        </div>

    );
};

export default Course;