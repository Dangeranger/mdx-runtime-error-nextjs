import React from 'react';
import MDX from '@mdx-js/runtime';

const components = {
  h1: props => <h1 style={{ color: 'tomato' }} { ...props } />,
  Demo: () => <h1>This is a demo component</h1>,
};

const mdx = `
# Hello, MDX Runtime!

Why can you not resolve your package?

<Demo />
`;

export default () => (
  <MDX components={components}>{ mdx }</MDX>
);
