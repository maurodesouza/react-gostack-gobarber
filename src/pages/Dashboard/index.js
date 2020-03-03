import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  addDays,
  subDays,
  setHours,
  startOfHour,
  isBefore,
  parseISO,
  isEqual,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';
import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const formattedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    const loadSchedule = async () => {
      const response = await api.get('/schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = startOfHour(setHours(date, hour));
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a => {
            return isEqual(parseISO(a.date), compareDate);
          }),
        };
      });
      setSchedule(data);
    };

    loadSchedule();
  }, [date]);

  return (
    <Container>
      <header>
        <button type="button" onClick={() => setDate(subDays(date, 1))}>
          <MdChevronLeft color="#fff" size={36} />
        </button>

        <strong> {formattedDate} </strong>

        <button type="button" onClick={() => setDate(addDays(date, 1))}>
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
