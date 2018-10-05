import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from '../actions';
import '../css/Calendar.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        //Moments are mutable, everyone needs their own copy
        this.state = {
            selectedDate: moment(),
            startOfWeek: moment().startOf('week'),
            endOfWeek: moment().endOf('week'),
            currentMonth: moment().startOf('month'),
            shouldShowFullMonth: this.props.showMonth
        }
    }

    componentDidMount() {
        this.props.updateDate(this.state.selectedDate.toObject());
    }

    renderHeader() {
        const dateFormat = "MMMM YYYY";
        let currentMonth = this.state.currentMonth;
        return (
            <div className="header row flex-middle">
                <div className="col col-end">
                    <div className="icon" onClick={this.prevWeek}>chevron_left</div>
                </div>
                <div className="col col-center">
                    <span>{currentMonth.format(dateFormat)}</span>
                </div>
                <div className="col col-start" onClick={this.nextWeek}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );
    }

    renderDays() {
        const weekdays = moment.weekdays();
        const days = [];
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {weekdays[i]}
            </div>
          );
        }
        return <div className="days row">{days}</div>;
    }

    renderCells() {
        const { startOfWeek, endOfWeek, selectedDate, currentMonth } = this.state;
        const dateFormat = "D";
        const rows = [];
        let formattedDate = "";
        let days = [];
        let day = startOfWeek.clone();
        let endDate = endOfWeek.clone();
        let monthStart = selectedDate.clone().startOf('month');
        let monthEnd = selectedDate.clone().endOf('month');

        if (this.props.showMonth) {
            endDate = monthEnd;
            while( day <= endDate) {
                for (let i = 0; i < 7; i++) {
                    formattedDate = day.format(dateFormat);
                    const cloneDay = day.clone();
                    days.push(
                        <div 
                            className={ `col cell ${
                                !selectedDate.clone().isSame(day, 'month') ? 
                                "disabled" : day.isSame(selectedDate, 'day') ?
                                    "selected" : ""
                            }` }
                            key={day.toString()}
                            onClick={() => this.onDateClick(cloneDay)}
                        >
                            <span>{formattedDate}</span>
                            <span className="bg">{formattedDate}</span>
                        </div>
                    )
                    day = day.add(1, 'day');
                }
            }
        }
        else {
            while( day <= endDate) {
                formattedDate = day.format(dateFormat);
                const cloneDay = day.clone();
                days.push(
                    <div 
                        className={ `col cell ${
                            day.isSame(selectedDate, 'day') ?
                                "selected" : ""
                        }` }
                        key={day.toString()}
                        onClick={() => this.onDateClick(cloneDay)}
                    >
                        <span>{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                )
                day = day.add(1, 'day');
            }
        }
        rows.push(
            <div className="row" key={day}>
                {days}
            </div>
        );
        days = [];
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
        this.props.updateDate(day.toObject());
    };
  
    nextWeek = () => {
        this.setState({
            startOfWeek: this.state.startOfWeek.add(1, 'week'),
            endOfWeek: this.state.endOfWeek.add(1, 'week'),
            currentMonth: this.state.startOfWeek.clone().add(4, 'day')
        })
    }
    
    prevWeek = () => {
        this.setState({
            startOfWeek: this.state.startOfWeek.subtract(1, 'week'),
            endOfWeek: this.state.endOfWeek.subtract(1, 'week'),
            currentMonth: this.state.startOfWeek.clone().add(4, 'day')
        })
    }

    render () {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

function mapStateToProps({ selectedDate, showMonth }) {
    return { selectedDate, showMonth };
}

export default connect(mapStateToProps, actions)(Calendar);
