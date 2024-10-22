import "./Home.css"
import Product from "../../Components/Product/Product";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Laptop from "../../assets/Laptop.jpg"
import Bucket from "../../assets/Bucket.jpg"
import GasCooker from "../../assets/GasCooker.jpg"
import Cup from "../../assets/Cup.jpg"
import UserImage from "../../assets/UserImage.png"
import BlogPost from "../../Components/BlogPost/BlogPost";

const Home = () => {
    return (
      <div className="Home">

        <p className="Title">Welcome to my Profile Cards Using ReactProps</p>
        <div className="PC">
        <div id="profile1" className="PC1"><ProfileCard Name = "Chukwuemeka" Age = "12" Location = "Ikorodu" profileImage = {UserImage} theme = "light-mode"/></div>
        <div id="profile2" className="PC1"><ProfileCard Name = "Uchechukwu" Age = "12" Location = "Aba" profileImage = {UserImage} theme = "light-mode"/></div>
        <div id="profile3" className="PC1"><ProfileCard Name = "Mascot" Age = "16" Location = "Kosofe" profileImage = {UserImage} theme = "light-mode"/></div>
        <div id="profile4" className="PC1"><ProfileCard Name = "Nana" Age = "14" Location = "Aba" profileImage = {UserImage} theme = "light-mode"/></div>
        </div>

        <p className="Title">Products</p>
        <div className="Products">
        <div id="product1" className="Product1"><Product productName = "Laptop" productPrice = "1,400,000" productImage = {Laptop} productDescription = "Very Good Brand New"/></div>
        <div id="product2" className="Product1"><Product productName = "Bucket" productPrice = "2,000" productImage = {Bucket} productDescription = "Affordable and Durable Plastic"/></div>
        <div id="product3" className="Product1"><Product productName = "GasCooker" productPrice = "80,000" productImage = {GasCooker} productDescription = "Multiple cooker"/></div>
        <div id="product4" className="Product1"><Product productName = "Cup" productPrice = "400" productImage = {Cup} productDescription = "Strong and durable"/></div>

        <p className="Title">Welcome to my Blog Posts where you can read my wonderful articles on React</p>
        <div className="Blog">
          <div id="blog1" className="Blog1"><BlogPost title = "Understanding React Props" author = "Chukwuemeka Obasi" content = "In this post, we will explore how React props work and why they are essential for building dynamic components..." date = "2024-10-01"/></div>
          <div id="blog2" className="Blog1"><BlogPost title = "State Management in React" author = "Uchechukwu Obasi" content = "State management is one of the most important concepts in React. We will dive into state, setState, and useState..." date = "2024-09-27"/></div>
          <div id="blog3" className="Blog1"><BlogPost title = "React Hooks Explained" author = "Mascot Obasi" content = "React hooks allow you to use state and other React features without writing a class. Lets take a closer look..." date = "2024-09-15"/></div>
          <div id="blog4" className="Blog1"><BlogPost title = "Introduction To Redux" author = "Nana Obasi" content = "Redux is a state management library for JavaScript applications, commonly used with React, to manage and centralize application state in a predictable way." date = "2024-09-21"/></div>
        </div>
    
        </div>
      </div>
    )
  }

  export default Home;