import React from 'react';

const organization = ({ params }) => {
  const { orgId } = params;

  return (
    <div>
      <div>{orgId}</div>
    </div>
  );
};

export default organization;