import React from 'react';

export interface ExampleComponentProps {
  showMessage?: boolean;
}

export default function ExampleComponent({
  showMessage,
}: ExampleComponentProps): React.ReactElement {
  return (
    <div className="example-component">
      <>{showMessage && 'HELLO WORLD'}</>
    </div>
  );
}
