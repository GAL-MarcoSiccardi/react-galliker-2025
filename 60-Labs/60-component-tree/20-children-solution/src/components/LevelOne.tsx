import {ReactNode} from 'react';
import {LevelTwo} from './LevelTwo';

interface LevelOneProps {
  children?: ReactNode;
}

export function LevelOne({children}: LevelOneProps) {
  return (
    <div style={{background: '#ffeb99', padding: 50}}>
      <LevelTwo>
        {children}
      </LevelTwo>
    </div>
  );
}