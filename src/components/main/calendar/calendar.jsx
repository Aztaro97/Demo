import React, {useState} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./calendar.css"

function Calendars() {
  const defaultValue = {
    year: 2019,
    month: 10,
    day: 5,
  };
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  return (
    <div className="calendar">
        <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
    </div>
  );
}

export default Calendars;
