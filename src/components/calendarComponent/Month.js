import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Day from './Day';
import dayjs from 'dayjs';
import {
  setPrevMonthNumber,
  setNextMonthNumber,
} from '../../redux/features/monthSlice';
import { setSelectedDate, setStartTime } from '../../redux/features/timeSlice';
import Button from '../utils/utilComponents/Button';
import { FiChevronLeft, FiChevronRight, FiEdit } from 'react-icons/fi';
import {
  MonthContainer,
  RightSideCalendarContainer,
} from './styles/calendar.Styles';
import BgImage from '../../Assets/Images/background_edit.png';
import { setShowEventModel } from '../../redux/features/modalSlice';
import { getTime } from '../../util';
import { getCalendarEvent } from '../../redux/features/calendarSlice';

const Month = ({ month }) => {
  const dispatch = useDispatch();
  const { monthNumber } = useSelector((state) => state.month);
  const { months } = useSelector((state) => state.calendar);
  let dateFormated = dayjs(new Date(dayjs().year(), monthNumber)).format(
    'YYYY MMMM'
  );

  const handleEvent = (date) => {
    dispatch(setSelectedDate(date));
    dispatch(setShowEventModel(true));
    dispatch(setStartTime(getTime()));
  };

  const handleEventEdit = (event) => {
    dispatch(getCalendarEvent(event));
  };
  return (
    <React.Fragment>
      <RightSideCalendarContainer className="flex flex-col">
        <div className="edit-background flex flex-col">
          <div className="img-container">
            <img src={BgImage} alt="background cover" />
          </div>
          <p className="flex a-center t-sm">
            Edit
            <FiEdit />
          </p>
        </div>

        <div className="month-inc-dec flex a-center">
          <Button
            content={<FiChevronLeft />}
            func={() => dispatch(setPrevMonthNumber())}
          />
          <p className="t-sm">{dateFormated.split(' ')[1]}</p>
          <p className="t-sm date-show-small-screen">
            {dateFormated.split(' ')[0]}
          </p>
          <Button
            content={<FiChevronRight />}
            func={() => dispatch(setNextMonthNumber())}
          />
        </div>
        <div className="weeks">
          {month[0].map((row, i) => (
            <div className="t-center t-sm" key={i}>
              {row.format('ddd')}
            </div>
          ))}
        </div>

        <MonthContainer>
          {month.map((row, id) => (
            <React.Fragment key={id}>
              {row.map((day, idx) => (
                <Day
                  day={day}
                  key={idx}
                  func={handleEvent}
                  months={months}
                  funcEvent={handleEventEdit}
                />
              ))}
            </React.Fragment>
          ))}
        </MonthContainer>
      </RightSideCalendarContainer>
    </React.Fragment>
  );
};

export default Month;
