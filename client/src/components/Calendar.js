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
            monthStart: moment().startOf('month'),
            monthEnd: moment().endOf('month'),
        }
    }

    componentDidMount() {
        this.props.updateDate(this.state.selectedDate.toObject());
    }

    renderHeader() {
        const dateFormat = "MMMM YYYY";
        let currentMonth = this.state.monthStart.clone();

        if (this.props.showMonth) {
            return (
                <div className="header row flex-middle">
                    <div className="col col-end">
                        <div className="icon" onClick={this.prevMonth}>chevron_left</div>
                    </div>
                    <div className="col col-center">
                        <span>{currentMonth.format(dateFormat)}</span>
                    </div>
                    <div className="col col-start" onClick={this.nextMonth}>
                        <div className="icon">chevron_right</div>
                    </div>
                </div>
            );
        }
        else {
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
        const { startOfWeek, endOfWeek, selectedDate, monthStart, monthEnd } = this.state;
        const dateFormat = "D";
        const rows = [];
        let formattedDate = "";
        let days = [];
        let day = startOfWeek.clone();
        let endDate = endOfWeek.clone();
        if (this.props.showMonth) {
            day = monthStart.clone().startOf('week');
            endDate = monthEnd.clone();
            while( day <= endDate) {
                for (let i = 0; i < 7; i++) {
                    formattedDate = day.format(dateFormat);
                    const cloneDay = day.clone();
                    days.push(
                        <div 
                            className={ `col cell ${
                                !monthStart.clone().isSame(day, 'month') ? 
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
            monthStart: this.state.startOfWeek.clone().add(4, 'day')
        })
    }
    
    prevWeek = () => {
        this.setState({
            startOfWeek: this.state.startOfWeek.subtract(1, 'week'),
            endOfWeek: this.state.endOfWeek.subtract(1, 'week'),
            monthStart: this.state.startOfWeek.clone().add(4, 'day')
        })
    }

    nextMonth = () => {
        const daysInNextMonth = this.state.monthEnd.clone().add(1, 'day').daysInMonth();
        this.setState({
            monthStart: this.state.monthEnd.clone().add(1, 'day'),
            monthEnd: this.state.monthEnd.clone().add(daysInNextMonth, 'day')
        })
    }
    prevMonth = () => {
        const daysInPrevMonth = this.state.monthStart.clone().subtract(1, 'day').daysInMonth();
        this.setState({
            monthStart: this.state.monthStart.clone().subtract(daysInPrevMonth, 'day'),
            monthEnd: this.state.monthStart.clone().subtract(1, 'day')
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
