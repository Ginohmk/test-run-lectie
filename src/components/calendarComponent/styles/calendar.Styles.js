import styled from 'styled-components';
import {
  lightGray,
  primaryColor,
} from '../../globalStyles/globalStyles.styles';

export const CalendarMainConatiner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  padding-bottom: 3.5rem;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 3rem;
  justify-content: space-between;
  width: 93%;
  margin: 0 auto;
  .edit-background {
    gap: 0.5rem;
    margin-bottom: 1.375rem;

    .img-container {
      height: 7rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      align-self: flex-end;
      justify-content: flex-end;
      font-size: 1rem;
      color: #094b5f;
      gap: 0.3rem;
      max-width: 200px;
      cursor: pointer;
      svg {
        width: 16px;
        height: 16px;
        color: #8c8c8c;
      }
    }
  }
  .weeks {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 0.90625rem;

    div:nth-child(1) {
      color: #fb7878;
    }
  }

  .month-inc-dec {
    padding-top: 10px;
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
    margin-bottom: 2.25rem;
    justify-content: space-around;

    button {
      cursor: pointer;
      padding-top: 5px;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

export const CalendarHeaderContainer = styled.header`
  width: 100vw;
  padding: 10px 2.5rem;
  margin-bottom: 1rem;
  background-color: ${primaryColor};
  color: #fff;
  .left-side-header {
    gap: 2rem;

    p {
      width: 10rem;
    }
  }

  .date-time {
    p {
      font-size: 1rem;
    }
  }

  .right-side-header {
    gap: 1.375rem;
    img {
      cursor: pointer;
    }
    .profile-image {
      width: 62px;
      height: 62px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        image-rendering: pixelated;
      }
    }
  }
`;

export const DayContainer = styled.div`
  border: 1px solid ${lightGray};
  display: flex;
  flex-direction: column;

  .day {
    margin: 0.5625rem 0.5rem;
    padding-bottom: 25px;
    text-align: right;
  }

  @media screen and (max-width: 586px) {
  }
`;

export const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  flex: 1;
`;

export const SideBarConatainer = styled.aside`
  padding: 1rem;
  width: 100%;
  max-width: 420px;

  .month-move {
    padding-top: 10px;
    width: 100%;
    max-width: 12rem;
    margin-top: 1.5rem;
    margin-bottom: 2.25rem;
    justify-content: space-between;

    button {
      cursor: pointer;
      padding-top: 5px;
    }
    p {
      font-size: 1.25rem;
    }
  }

  .my-calendar {
    width: 100%;
    header {
      cursor: pointer;
      padding: 5px 15px;
      border-radius: 4px;
      background-color: transparent;
      transition: background-color 0.05s ease-in-out;
      p {
        font-size: 1.25rem;
      }

      .rotate {
        transform: rotate(180deg);
      }

      &:hover {
        background-color: #f1f3f4;
      }
    }
  }
`;

export const SmallCalendarConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  margin-bottom: 3rem;

  .day-init {
    font-size: 1.25rem;
    padding: 4.5px 15.5px;
  }
  button {
    border: none;
    background-color: transparent;
    width: 100%;
    padding: 6px 15px 7px 13px;
    span {
      font-size: 1.25rem;
      cursor: pointer;
    }
  }

  .highlight {
    background-color: #1a73e8;
    color: #fff;
    border-radius: 50%;
    padding: 5px 6px;
    margin: 3px 0px 9.69px;
  }
`;
