import React, { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FiMenu } from 'react-icons/fi';

interface ICard {
  index: number;
  card: string;
}

const Card = memo(function Card({ card, index }: ICard) {
  console.log(card + 'is rendered');
  return (
    <Draggable draggableId={card} index={index}>
      {(provided) => (
        <li className='card' ref={provided.innerRef} {...provided.draggableProps}>
          <span className='card_btn' {...provided.dragHandleProps}>
            <FiMenu />
          </span>
          {card}
        </li>
      )}
    </Draggable>
  );
});
export default Card;
