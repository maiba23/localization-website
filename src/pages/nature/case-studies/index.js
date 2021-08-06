import React from 'react';
import PropTypes from 'prop-types';
import NatureLayout from 'components/Nature/Layout';
import FolderButton from 'components/Nature/shared/buttons/FolderButton';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import colors from 'components/Nature/colors';

const CaseOfStudyPage = () => {
  return (
    <NatureLayout>
      <div className='case-of-study'>
        <AniLink
          to={`/nature/case-studies/koalaqa`}
          duration={0.7}
          paintDrip
          hex={colors[0]}
          className='case-of-study-item'
        >
          <FolderButton title='KoalaQA' />
        </AniLink>

        <AniLink
          to={`/nature/case-studies/triprite`}
          duration={0.7}
          paintDrip
          hex={colors[2]}
          className='case-of-study-item'
        >
          <FolderButton title='TripRite' />
        </AniLink>

        <AniLink
          to={`/nature/case-studies/swiftsole`}
          duration={0.7}
          paintDrip
          hex={colors[1]}
          className='case-of-study-item'
        >
          <FolderButton title='swiftsole' />
        </AniLink>

        <AniLink
          to={`/nature/case-studies/oilmanagement`}
          duration={0.7}
          paintDrip
          hex={colors[3]}
          className='case-of-study-item'
        >
          <FolderButton title='Oil Rig Human Safety Management' />
        </AniLink>

        <div>
          <AniLink
            to={`/nature/case-studies/energy`}
            duration={0.7}
            paintDrip
            hex={colors[0]}
            className='case-of-study-item'
          >
            <FolderButton title='energy management' />
          </AniLink>
        </div>
      </div>
    </NatureLayout>
  );
};

CaseOfStudyPage.propTypes = {
  path: PropTypes.string,
};
export default CaseOfStudyPage;
