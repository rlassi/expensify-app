export default (filteredExpenses = []) => {
    return filteredExpenses
    .map((expense) => expense.amount ? expense.amount : 0)
    .reduce((total, num) => {
        return total + num
    }, 0)
}