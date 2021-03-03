import React from 'react';

import {IProps as News} from './News';

interface IProps {
  newsList: Array<News>
}

const NewsList: React.FC<IProps> = (props) => {
  return(
    <div>
      {props.newsList.map(
        (news) =>
          <div>{news}</div>
      )
      }
    </div>
  )
}

export default NewsList;
