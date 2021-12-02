import React, {FC} from 'react';
import AvatarImage from '../../../static/img/avatar.jpg'

const Author: FC = () => {

  const name = "朱烨"

  return <div className="avatar">
    <img
      alt={name}
      className="avatar__photo"
      src={AvatarImage}
    />
    <div className="avatar__intro">
      <div className="avatar__name">{name}</div>
      <small className="avatar__subtitle">
        Talk is cheap, show me the code.
      </small>
    </div>
  </div>
}

export default Author