import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import {
  setPrevSmallMonthNumber,
  setNextSmallMonthNumber,
} from '../../redux/features/smallMonthSlice';
import { getMonth } from '../../util';
import { SideBarConatainer } from './styles/calendar.Styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Button from '../utils/utilComponents/Button';
import ButtonColoured from '../utils/utilComponents/ButtonColored';
import { buttonBlueColor } from '../globalStyles/globalStyles.styles';
import SmallCalendar from './SmallCalendar';
import { setSmallMonthNumber } from '../../redux/features/smallMonthSlice';

const SideBar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const dispatch = useDispatch();
  const smallDispatch = useDispatch();
  const { smallMonthNumber } = useSelector((state) => state.smallMonth);
  const { monthNumber } = useSelector((state) => state.month);
  let dateFormated = dayjs(new Date(dayjs().year(), smallMonthNumber)).format(
    'YYYY MMMM'
  );

  useEffect(() => {
    dispatch(setSmallMonthNumber(monthNumber));
  }, [monthNumber, dispatch]);

  useEffect(() => {
    setCurrentMonth(getMonth(smallMonthNumber));
  }, [smallMonthNumber]);

  return (
    <SideBarConatainer>
      <ButtonColoured content={'Preview'} color={buttonBlueColor} />
      <div className="month-move flex">
        <Button
          content={<FiChevronLeft />}
          func={() => smallDispatch(setPrevSmallMonthNumber())}
        />
        <p>{dateFormated.split(' ')[1]}</p>
        <p>{dateFormated.split(' ')[0]}</p>
        <Button
          content={<FiChevronRight />}
          func={() => smallDispatch(setNextSmallMonthNumber())}
        />
      </div>
      <SmallCalendar currentMonth={currentMonth} />
    </SideBarConatainer>
  );
};

export default SideBar;
