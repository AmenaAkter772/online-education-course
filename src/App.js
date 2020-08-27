import React from 'react';
import './App.css';
import array from './FakeData/FakeData/FakeData';
import CoursePart from './Components/CoursePart/CoursePart';
import { useState } from 'react';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';

function App() {
  const [courses, setCourses] =useState(array);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }

  return (
    <div>
      <Header></Header>
      <div className="course-container">
      <div className="coursePart">
      {
        courses.map(education => <CoursePart course= {education} handleAddCourse = {handleAddCourse}></CoursePart>)
      }
      </div>
      <div className="cartPart">
        <Card cart ={cart}></Card>
      </div>
    </div>
    </div>
    
  );
}

export default App;
