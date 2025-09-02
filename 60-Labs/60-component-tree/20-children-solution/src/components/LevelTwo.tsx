import {ReactNode} from 'react';

interface LevelTwoProps {
  children: ReactNode;
}

export function LevelTwo({children}: LevelTwoProps) {
  return (
    <div style={{background: 'gold', padding: 50}}>
      {children}
    </div>
  );
}