import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-scroll';

const Booking = () => {
  return (
    <div id="booking-container" className="scroll-smooth">
      <Navbar />

      <section className="text-white ">
        <div className="py-20 mx-auto px-7 lg:flex lg:items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text sm:text-5xl">
              Book a Lesson
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:text-xl sm:leading-relaxed">
              If you would like to book a lesson with me please check my
              availability on the left and then fill out the form below
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                activeClass="active"
                to="booking"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
              >
                <div className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded hover:bg-gradient-to-r hover:from-green-300 hover:via-blue-500 hover:to-purple-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                  Book lesson
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full h-[1200px] p-10" id="booking">
        <div className="sticky top-0 w-20 p-10 h-[30rem]  ">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FVancouver&showDate=1&showTabs=0&showPrint=0&showCalendars=0&src=c2hyZWFkZXJ6MzZAZ21haWwuY29t&color=%237986CBr"
            className="h-full -ml-72"
          ></iframe>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf1JzlcjjIehQ9J6DVx4axB19QWL-B4OI1G4TDVC8IiZcw00A/viewform"
          className="w-1/2 h-full mr-16"
        />
      </div>
      <div className="flex justify-center w-full" id="availability"></div>
      <Footer />
    </div>
  );
};

export default Booking;
