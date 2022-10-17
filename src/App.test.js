import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('ToDo', () => {
  const {getByText,getByLabelText} = render(<App/>);
  
  //after rendering our component 
  
  getByText('TODO');
  getByLabelText('Add todo:');
});