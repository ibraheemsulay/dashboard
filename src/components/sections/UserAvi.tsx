import userImage from '../../assets/images/user-image.png';

const UserAvi: React.FC = () => (
  <div className="user-avi">
    <img src={userImage} alt="user avi" />
    <div className="user-details">
      <h4>Hello ! Rusalba Ruiz</h4>
      <small>Welcome Back To Your Insurance Portal</small>

      <p>
        Your Plan : <span>Free</span>
      </p>
      <button>
        Create New Plan <span>+</span>
      </button>
    </div>
  </div>
);

export default UserAvi;
