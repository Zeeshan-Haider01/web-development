import React, { memo } from 'react';

function ChildB({ Learning, count }) {
  console.log("Child Component Rendered");

  return (
    <div>
      {/* Child component content */}
    </div>
  );
}

// Wrap with React.memo to prevent unnecessary re-renders
// export default memo(ChildB);
export default memo(ChildB);