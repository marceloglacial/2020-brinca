import { registerBlockType } from '@wordpress/blocks';

registerBlockType('brinca-blocks/menu', {
  title: 'Menu',
  icon: 'smiley',
  category: 'design',
  attributes: {
    content: {
      type: 'string',
      default: 'Testiiiiiing',
    },
  },
  edit: (props) => {
    return (
      <ul>
        <li>Home</li>
        <li>Page</li>
        <li>Page</li>
        <li>Page</li>
      </ul>
    );
  },
  save: (props) => {
    return (
      <ul>
        <li>Home</li>
        <li>Page</li>
        <li>Page</li>
        <li>Page</li>
      </ul>
    );
  },
});
