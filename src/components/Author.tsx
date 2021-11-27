import React, {FC} from 'react';
import AvatarImage from '../../static/img/avatar.jpg'

interface AuthorProps {
  name: string;
  avatar: string;
  description?: string;
  url?: string;
}

const Author: FC<AuthorProps> = (props) => {

  const { name, avatar, description = '', url } = props

  return <div className="avatar">
    <img
      alt={name}
      className="avatar__photo"
      src={avatar}
    />
    <div className="avatar__intro">
      <div className="avatar__name">{name}</div>
      <small className="avatar__subtitle">
        {
          url ? <a href={url}>
            {description}
          </a> : description
        }
      </small>
    </div>
  </div>
}

export default Author