import React from 'react';

export interface IProps {
  author: string;
  title: string;
  text: string;
  created_date: Date;
  published_date: Date;
}

const News: React.FC<IProps> = (props) => {
  return (
    <div>
      {props.author}
    </div>
  )
}

export default News;
