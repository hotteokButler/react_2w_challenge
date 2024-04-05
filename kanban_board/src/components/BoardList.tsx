import React from 'react';
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

interface IBoard {
  provided: DroppableProvided;
  snapshot?: DroppableStateSnapshot;
  children?: React.ReactNode;
  key?: number;
  bd_obj: {
    bd_color: string | undefined;
    bd_title: string;
    bd_title_color: string;
  };
}

export default function BoardList({
  provided,
  snapshot,
  children,
  bd_obj: { bd_color, bd_title, bd_title_color },
}: IBoard) {
  return (
    <section className={`board ${bd_color ? bd_color : 'bg-white'}`}>
      <h3 className={`pt-2 pl-3 text-2xl font-bold ${bd_title_color}`}>
        <BsArrowUpRightSquareFill className={`inline-block align-top mr-2 ${bd_title_color}`} />
        {bd_title}
      </h3>
      <ul ref={provided.innerRef} {...provided.droppableProps}>
        {children}
        {provided.placeholder}
      </ul>
    </section>
  );
}
