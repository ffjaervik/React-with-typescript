import React from 'react';

interface IProps{
    people: {
      name: string,
      age: number,
      url: string,
      note?: string
    }[]
    }

const List = ({people}: IProps) => {
  return (
    <div>
      People invited to our Party
    </div>
  );
}

export default List;