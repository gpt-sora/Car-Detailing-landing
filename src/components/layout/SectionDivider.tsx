import { FC } from 'react';

const SectionDivider: FC = () => {
  return (
    <div className="h-24 relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay pattern-medium mix-blend-multiply" />
    </div>
  );
};

export default SectionDivider; 