import { registerBlockType } from '@wordpress/blocks';

registerBlockType('brinca-blocks/header', {
  title: 'Header',
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
      <header>
        Brinca
        <br />
        <img src='/wp-content/themes/brinca-2020/assets/images/logo.png' />
      </header>
    );
  },
  save: (props) => {
    return (
      <header>
        Brinca
        <br />
        <img src='/wp-content/themes/brinca-2020/assets/images/logo.png' />
      </header>
    );
  },
});
