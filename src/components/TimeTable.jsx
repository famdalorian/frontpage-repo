import React from 'react';
import '../styles/timetable.css'

const TimeTable = () => {
  const days = [
    {
      day: 'Monday',
      slots: [
        {
          time: '4:30 PM - 5:00 PM',
          class: 'Kids Class',
        },
        {
          time: '5:00 PM - 6:00 PM',
          class: 'Teens Striking',
        },
        {
          time: '6:00 PM - 7:00 PM',
          class: 'Muay Thai (All Levels)',
        },
        {
          time: '7:00 PM - 8:00 PM',
          class: 'Grappling',
        },
      ],
    },
    {
      day: 'Tuesday',
      slots: [
        {
          time: '10:30 AM - 11:30 AM',
          class: 'Fighters Class',
        },
        {
          time: '7:30 PM - 8:30 PM',
          class: 'Fighters Class',
        },
      ],
    },
    {
      day: 'Wednesday',
      slots: [
        {
          time: '4:30 PM - 5:00 PM',
          class: 'Kids Class',
        },
        {
          time: '5:00 PM - 6:00 PM',
          class: 'Teens Striking',
        },
        {
          time: '6:00 PM - 7:00 PM',
          class: 'Muay Thai (All Levels)',
        },
        {
          time: '7:00 PM - 8:00 PM',
          class: 'Grappling',
        },
      ],
    },
    {
      day: 'Thursday',
      slots: [
        {
          time: '10:30 AM - 11:30 AM',
          class: 'Fighters Class',
        },
        {
          time: '7:30 PM - 8:30 PM',
          class: 'Fighters Class',
        },
      ],
    },
    {
      day: 'Friday',
      slots: [
        {
          time: '4:30 PM - 5:00 PM',
          class: 'Kids Class',
        },
        {
          time: '5:00 PM - 6:00 PM',
          class: 'Teens Striking',
        },
        {
          time: '6:00 PM - 7:00 PM',
          class: 'Muay Thai (All Levels)',
        },
        {
          time: '7:00 PM - 8:00 PM',
          class: 'Grappling',
        },
      ],
    },
  ];

  return (
    <div className="timetable-container">
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <React.Fragment key={day.day}>
              {day.slots.map((slot) => (
                <tr key={slot.time}>
                  {day.slots.indexOf(slot) === 0 && (
                    <td rowSpan={day.slots.length}>{day.day}</td>
                  )}
                  <td>{slot.time}</td>
                  <td>{slot.class}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
