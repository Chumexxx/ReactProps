import "./ProfileCard.css"

const ProfileCard = (props) => {
    return (
      <div>
        <img id="profileImage" src={props.profileImage} alt="userImage" />
        
        <p className="details">{props.Name}</p>
        <p className="details">{props.Age}</p>
        <p className="details">{props.Location}</p>
        {/* <p className="details">{props.theme}</p> */}
      </div>
    );
  };

  export default ProfileCard;