import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { render , cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer'

afterEach(cleanup);

it('renders without crashing', () => {
    const div  =  document.createElement('div');
    ReactDOM.render(<Button/>, div);
})

it('renders button correctly 1', () =>{
   const { getByTestId} = render(<Button label='test_label' />);
   expect(getByTestId('button')).toHaveTextContent('test_label');
});

it('renders button correctly 2', () =>{
    const { getByTestId} = render(<Button label='test_label_new' />);
    expect(getByTestId('button')).toHaveTextContent('test_label_new');
});

it('matches snapshot1', () => {
    const tree = renderer.create(<Button label='save1' />).toJSON();
    expect(tree).toMatchSnapshot();
})

it('matches snapshot2', () => {
    const tree = renderer.create(<Button label='save12' />).toJSON();
    expect(tree).toMatchSnapshot();
})