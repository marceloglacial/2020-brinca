import { registerBlockType } from '@wordpress/blocks';
import Text from './Test';

registerBlockType('myguten/test-block', {
  title: 'Basic Example',
  icon: 'smiley',
  category: 'design',
  attributes: {
    content: {
      type: 'string',
      default: 'Testiiiiiing',
    },
  },
  edit: (props) => {
    const { content } = props.attributes;
    const textProps = { title: content };

    return (
      <>
        <h2>Add</h2>
        <Text {...textProps} />
      </>
    );
  },
  save: (props) => {
    const { content } = props.attributes;
    const textProps = { title: content };
    return <Text {...textProps} />;
  },
});
