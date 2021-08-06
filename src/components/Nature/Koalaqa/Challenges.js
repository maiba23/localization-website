import React from 'react';
import ChallengesImages from 'images/nature/icons/koala/challenges-image.svg';
import ChallengesSpeaker from 'images/nature/icons/koala/challenges-speaker.svg';
import ChallengesMessage from 'images/nature/icons/koala/challenges-message.svg';

const Challenges = () => {
  return (
    <div className='challenges'>
      <h3 className='challenges-title'>Challenges</h3>
      <span className='challenges-content'>
        {`The main dashboard and the backend were really easy to make. 
        The only real challenge there was to structure the organization and user access. 
        
        The main difficulty was to have a script running on their clients website, 
        that doesn’t interfere with their regular users experience.`}
      </span>
      <div className='challenges-image'>
        <ChallengesImages />
      </div>
      <div className='challenges-explain'>
        <div className='challenges-explain-item'>
          <div className='challenges-explain-item-icon'>
            <ChallengesSpeaker />
          </div>
          <span className='challenges-explain-item-content'>
            {`We also need to extract as much information 
              as possible from the testers devices 
              and get clear screenshots. 

              The solution needed to balance: ease of use 
              for the website owner, high quality of screenshot and tight budget requirements.`}
          </span>
        </div>
        <div className='challenges-explain-item'>
          <div className='challenges-explain-item-icon'>
            <ChallengesMessage />
          </div>
          <span className='challenges-explain-item-content'>
            {`At the end we successfully allowed the clients who want feedback to simply drop a snippet in their website. 

            The snippet would detect if the current user is logged in as a tester or as a regular user. 

            If the user logged in through the Koala dashboard, it would see a new UI and be able to drop comments on the site.`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
