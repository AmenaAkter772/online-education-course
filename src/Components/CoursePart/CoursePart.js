import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import './CoursePart.css';

const CoursePart = (props) => {
    const {title, coursesFees, benefit, courseTime, img} = props.course;
    return (
        <div>
            <div className = "col-md-4">
             <div className=" card-style">
                <div className = "text-center">
                         <img className="card-img-top img-style" src={img} alt=""/>
                        <div>
                            <h4>Course : {title}</h4>
                            <p><small>Course Time : {courseTime}</small></p><br/>
                            <p><small>Coursefees : {coursesFees}</small></p>
                            <p><small>Benefit : {benefit}</small></p>
                            <button className="btn btn-primary"
                            onClick = {() => props.handleAddCourse(props.course)}><FontAwesomeIcon icon={faPlus } /> 
                            Enroll Now</button>
                        </div>
               </div>
             </div>
         </div>
       </div>
     
    );
};

export default CoursePart;