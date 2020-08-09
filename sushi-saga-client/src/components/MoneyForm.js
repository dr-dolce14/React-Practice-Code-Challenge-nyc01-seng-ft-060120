import React from 'react'


class MoneyForm extends React.Component {

    state = {
        amount: 0
    }

    changeAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    addMoney = (e) => {
        e.preventDefault()
        this.props.addMoney(this.state.amount)
        this.setState({
            amount: 0
        })
    }



    render () {
        return (
            <form onSubmit={this.addMoney}>
                <input type="number" name="amount" value={this.state.amount} onChange={this.changeAmount} />
                <input type="submit" value="Add money to your budget!" />
            </form>
        )

       
        }
    }
export default MoneyForm; 