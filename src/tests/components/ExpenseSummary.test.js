import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import { filters } from '../fixtures/filters';

test('should render ExpenseSummary showing 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[ expenses[0] ]} filters={filters}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseSummary showing 0 or multiple expenses', () => {
    let wrapper = shallow(<ExpenseSummary expenses={[]} filters={filters} />);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<ExpenseSummary expenses={expenses} filters={filters} />);
    expect(wrapper).toMatchSnapshot();
})
