'use client';
import React, { useRef, useState } from 'react';
import CharacterBackground from '../assets/backgrounds/character.webp';

type Props = React.ComponentProps<"div">;

const CARD_COLORS = 
{
  'six' : 'from-six/90',
  'the_lady' : 'from-the_lady/90',
  'the_twins_chefs' : 'from-the_twins_chefs/90',
  'the_janitor' : 'from-the_janitor/90',
  'nomes' : 'from-nomes/90',
  'the_guests' : 'from-the_guests/90',
  'leeche' : 'from-leeche/90'
}

export default function CardSpotlight(props: Props)
{
  const { children, id } = props;

  const currentCardColor = CARD_COLORS[props.id! as keyof typeof CARD_COLORS]

  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative aspect-[4/5] flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-10% ${currentCardColor} to-70% to-black/85 shadow-2xl`}
      >
          <img
              src={CharacterBackground.src}
              alt='Character'
              className='absolute inset-0 w-full h-full object-cover -z-10'
          />
        <div
          className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
          style={{
            opacity,
            background: `radial-gradient(900px circle at ${position.x}px ${position.y}px, rgb(var(--${id}) / .8), transparent 40%)`,
          }}
        >
        </div>
          {children}
      </div>
  );
};


