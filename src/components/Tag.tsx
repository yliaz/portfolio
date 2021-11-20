import React from 'react';

interface TagProps {
  color: string;
}

const Tag: React.FC<TagProps> = (props) => {
  const { color, children } = props

  return <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
}

export default Tag