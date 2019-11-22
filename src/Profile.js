
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
                <div className="profile-quote">"{starwars()}"</div>
                <form action="https://formspree.io/mayyzgrd" className="profile-form" method="post">
                    <div className="profile-email">
                        <input className="profile-email-style" type="email" name='email' id="email" placeholder="Your email" size="30" />
                    </div>
                    <textarea className="profile-form-text-area" id="text"></textarea>
                    <div className="profile-btn">
                        <button className="profile-btn-style" type="submit">Send <i class="fas fa-heart"></i></button>
                    </div>
                </form>

            </div>
        </div>





    )







}

export default Profile;

