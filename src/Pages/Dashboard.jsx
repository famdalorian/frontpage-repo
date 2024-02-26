import React from 'react';
import '../App.css';

const Dashboard = () => {
  // Sample data for demonstration purposes
  const memberStats = {
    totalMembers: 500,
    activeMembers: 450,
    newSignUps: 20,
    averageAttendance: 75,
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Muay Thai Workshop",
      date: "2023-07-25",
      location: "Gym Hall 1",
    },
    {
      id: 2,
      title: "Brazilian Jiu-Jitsu Tournament",
      date: "2023-08-10",
      location: "Gym Hall 2",
    },
    // Add more events as needed
  ];

  const classSchedule = [
    {
      id: 1,
      day: "Monday",
      time: "18:00 - 19:30",
      className: "Muay Thai",
      instructor: "John Doe",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "17:30 - 18:30",
      className: "Brazilian Jiu-Jitsu",
      instructor: "Jane Smith",
    },
    // Add more classes and schedule data
  ];

  return (
    <div className="dashboard">
      <h1>Welcome to the MMA Gym Dashboard</h1>

      {/* Member Statistics */}
      <div className="member-stats">
        <h2>Member Statistics</h2>
        <p>Total Members: {memberStats.totalMembers}</p>
        <p>Active Members: {memberStats.activeMembers}</p>
        <p>New Sign-ups: {memberStats.newSignUps}</p>
        <p>Average Attendance: {memberStats.averageAttendance}%</p>
      </div>

      {/* Upcoming Events */}
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        {upcomingEvents.map((event) => (
          <div key={event.id} className="event-item">
            <p>{event.title}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>

      {/* Class Schedule */}
      <div className="class-schedule">
        <h2>Class Schedule</h2>
        {classSchedule.map((classItem) => (
          <div key={classItem.id} className="class-item">
            <p>{classItem.day} - {classItem.time}</p>
            <p>{classItem.className}</p>
            <p>Instructor: {classItem.instructor}</p>
          </div>
        ))}
      </div>

      {/* Add more dashboard components and data visualization */}
    </div>
  );
};

export default Dashboard;
