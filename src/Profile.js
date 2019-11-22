
import React from 'react';
import starwars from 'starwars';
import './Profile.css';

const Profile = ({ chosenOne }) => {
    return (
        <div className="profile-container">
            <div>
                <img src={chosenOne.image} alt="" className="profile-pict" />
            </div>
            <div className="profile-description">
                <div className="profile-name"> {chosenOne.name} </div>
                <div className="profile-settings"> {chosenOne.gender} - {chosenOne.species} - {chosenOne.homeworld} </div>
                <div className="profile-quote"> {starwars()}</div>
                <form className="profile-form" method="post" action="traitement.php">
                    <input type="email" name="yourEmail" value="" id="emailLabel" placeholder="youremail@email.com" required />
                    <textarea className="profile-form-text-area" id="text"></textarea>
                    <div className="profile-btn">
                        <input className="profile-btn-style" type="submit" value="Send your love" />
                    </div>
                </form>

            </div>
        </div>


    )







}

export default Profile;

