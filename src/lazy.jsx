import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./Scene'));

function Lazy() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}