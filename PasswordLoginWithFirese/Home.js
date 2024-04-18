import { signOut } from "firebase/auth";
import React from "react";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import './home.css'
import img1 from '../images/first.jpg'
import img2 from '../images/second.jpg'
import img3 from '../images/third.jpg'
import img5 from '../images/fifth.jpg'

import tyle from "./navbar.css"
import About from '../pages/about'
import Contact from '../pages/contact'

function HomeScreen(){
    const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
    return(
        <div>
           <div>
           <nav class="navbar">
    <div class="container">
      <a href="#" class="logo">Diabetic Retinopathy Detection</a>
      <ul class="nav-links">
        <li><a href="http://localhost:3000/home" class="nav-link">Home</a></li>
        <li><a href="http://localhost:3000/about" class="nav-link">About</a></li>
        <li><a href="http://localhost:3000/result" class="nav-link">Test</a></li>
        <li><a href="http://localhost:3000/contact" class="nav-link">Contact</a></li>
        <li><a href="#" class="nav-link-signout" onClick={handleClick}>SignOut</a></li>
      </ul>
    </div>
  </nav>
           </div>
           <div>
           <div class="details">
    <img src={img1} alt="Big Image" height="450px" width="100%" />
    <h1 class="tag">Transforming Healthcare</h1>
    
    <div class="details-data first-des">
    <h2>Early Detection Saves Vision</h2>
    <p>Our deep learning-based system for Diabetic Retinopathy Detection aims to identify signs of DR from retinal images with high accuracy. Early detection can help prevent vision loss and improve patient outcomes.</p>
    <p>Diabetic retinopathy (DR) is a leading cause of blindness among adults worldwide. By detecting DR at an early stage, our system can enable timely intervention and treatment, preventing irreversible vision loss and preserving the patient's quality of life.</p>
    <p>Through continuous monitoring and analysis of retinal images, our system provides healthcare professionals with valuable insights into the progression of diabetic retinopathy, allowing for personalized treatment plans tailored to each patient's needs.</p>
    </div>
    <div><img src={img2} alt="Image 1" height="300px" width="50%"></img>
    <img src={img3} alt="Image 2" height="300px" width="50%"></img></div>
    


    <div class="details-data first-des-reverse">
    <h2>Accurate and Reliable Diagnosis</h2>
    <img src={img5} alt="Image 3" width="400px"></img>
    <br></br><p>Using advanced deep learning algorithms, our system analyzes retinal images and classifies them into different stages of diabetic retinopathy, allowing for timely intervention and treatment. Early diagnosis and treatment are key to preventing vision loss.</p>
    <p>Our deep learning model, powered by convolutional neural networks (CNNs), leverages state-of-the-art image analysis techniques to accurately identify subtle signs of diabetic retinopathy, ensuring reliable diagnosis even in complex cases.</p>
    <p>Through continuous refinement and validation against large datasets of retinal images, our system achieves high accuracy and robustness, providing healthcare professionals with confidence in their diagnostic decisions and enabling effective patient management strategies.</p>
</div>


</div>

           </div>

            <div>

            <div className="footer">
    <div className="bottom">
        <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/service">Community Service</a>
            <a href="/contact">Contact Us</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/about">About Us</a>
        </div>
    </div>
</div>


            </div>
        </div>
    )
}
export default HomeScreen;