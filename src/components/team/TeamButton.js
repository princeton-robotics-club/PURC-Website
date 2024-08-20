import React from 'react';
import './TeamButton.css';

function TeamButton(props) {
  const { teamName, teamTitle, selectedTeam, toggleBlurb, archived } = props;

  const LOGO_CLASSES = ['team-logo-original', 'team-logo-selected', 'team-logo-unselected'];
  const TEXT_CLASSES = ['team-text-original', 'team-text-selected', 'team-text-unselected'];

  return (
    <div className={teamName + '-glow'} onClick={() => toggleBlurb(teamName)} id={teamName}>
      <div
        className={
          selectedTeam === teamName
            ? teamName + '-logo ' + LOGO_CLASSES[1]
            : selectedTeam === ''
            ? teamName + '-logo ' + LOGO_CLASSES[0]
            : teamName + '-logo ' + LOGO_CLASSES[2]
        }
        style={{ transition: '0.5s' }}></div>
      <div
        id={teamName + '-text'}
        className={
          selectedTeam === teamName
            ? teamName + '-text ' + TEXT_CLASSES[1]
            : selectedTeam === ''
            ? teamName + '-text ' + TEXT_CLASSES[0]
            : teamName + '-text ' + TEXT_CLASSES[2]
        }
        style={{ transition: '0.5s' }}>
        {teamTitle}
        {archived && <i style={{ marginLeft: '20px', color: 'gray' }} className="fas fa-archive" />}
      </div>
    </div>
  );
}

export default TeamButton;
