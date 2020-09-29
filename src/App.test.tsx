
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("Render test", ()=>{
  const {getByText}=render(<App></App>);
  const linkElement=getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
})

test("Find word",()=>{
  const response=render(<App/>);
  const word=response.getByText(/World/);
  expect(word).toBeInTheDocument();
})

test("Find placeholder",()=>{
  const response=render(<App/>);
  const word=response.getByPlaceholderText("Enter your name");
  expect(word).toBeInTheDocument();
})