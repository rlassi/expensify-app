import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import visibleExpenses from '../selectors/expenses'

export const ExpenseSummary = (props) => {
    const filteredExpenses = visibleExpenses(props.expenses, props.filters);
    const totalAmount = numeral(expensesTotal(filteredExpenses) / 100).format('$0,0.00')
    return (
        <div>
            {
                filteredExpenses.length === 1 ?
                    (
                        <h1>Viewing 1 expense totalling {totalAmount}</h1>
                    ) : (
                        <h1>Viewing {filteredExpenses.length} expenses totalling {totalAmount}</h1>
                    )
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    expenses: state.expenses,
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseSummary);
