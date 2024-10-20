import React from 'react'


interface Props {
    profielInfo: []   
}

const ProfileHome: React.FC<Props> = ({ profielInfo }) => {
    console.log(profielInfo, 'profielInfo')
  return (
    <div>ProfileHome landing
        
    </div>
  )
}

export default ProfileHome