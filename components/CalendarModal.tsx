import React from 'react';
interface ICalendarModalProps {
  showModal: boolean;
}
const CalendarModal = ({ showModal }: ICalendarModalProps) => {
  return (
    <div
      className={`${
        showModal ? null : 'absolute hidden'
      } h-full xl:flex justify-center`}
    >
      <div className="w-full flex justify-center p-0 pt-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 h-[30rem] sticky top-0">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FVancouver&showDate=1&showTabs=0&showPrint=0&showCalendars=0&src=c2hyZWFkZXJ6MzZAZ21haWwuY29t&color=%237986CBr"
          className={`${showModal ? 'w-full' : null} h-full `}
        ></iframe>
      </div>
    </div>
  );
};

export default CalendarModal;
