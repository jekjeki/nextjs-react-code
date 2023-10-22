import React, { useRef } from 'react'
import Button from '../ui/Button'
import classes from './event-search.module.css'


function EventsSearch(props) {

    const inputYearRef = useRef()
    const inputMonthRef = useRef()

    function SubmitHandler(){

        console.log(inputYearRef.current.value)

        const selectYear = inputYearRef.current.value
        const selectMonth = inputMonthRef.current.value 

        props.onSearch(selectYear, selectMonth);
    }

  return (
    <div className={classes.form}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor='year'>Year</label>
                <select id='year' ref={inputYearRef}>
                    <option value={'2021'}>2021</option>
                    <option value={'2022'}>2022</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor='month'>Month</label>
                <select id='month' ref={inputMonthRef}>
                    <option value={'1'}>January</option>
                    <option value={'2'}>February</option>
                    <option value={'3'}>March</option>
                    <option value={'4'}>April</option>
                    <option value={'5'}>May</option>
                    <option value={'6'}>June</option>
                    <option value={'7'}>July</option>
                    <option value={'8'}>August</option>
                    <option value={'9'}>September</option>
                    <option value={'10'}>October</option>
                    <option value={'11'}>November</option>
                    <option value={'12'}>December</option>
                </select>
            </div>
        </div>
        <Button onClick={SubmitHandler}>Filter Data</Button>
    </div>
  )
}

export default EventsSearch