import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Before = () => {
  return (
    <div>
      <Navbar />
      <section className="text-white ">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-transparent sm:text-4xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text">
              Before you go
            </h2>

            <p className="text-gray-300 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-teal-500/10 hover:shadow-teal-500/10"
              href="https://drivebc.ca/directions.html?a=Taylor%20Way,%20Metro%20Vancouver,%20BC,%20Canada&b=6000%20Cypress%20Bowl%20Rd,%20West%20Vancouver,%20BC%20V7V%203N9,%20Canada&sr=1"
              target="_blank"
            >
              <h2 className="text-xl font-bold text-white ">Road conditions</h2>

              <p className="mt-1 text-sm text-gray-300">
                The road conditions up to Cypress can vary depending on the
                weather, check out the current road conditions here.
              </p>
            </a>

            <a
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-teal-500/10 hover:shadow-teal-500/10"
              href="https://www.snow-forecast.com/resorts/Cypress-Mountain/6day/mid"
              target={'_blank'}
            >
              <h2 className="text-xl font-bold text-white ">
                Weather conditions
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Please check the weather here before coming up and dress
                appropriately for the conditions.
              </p>
            </a>

            <div className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-teal-500/10 hover:shadow-teal-500/10">
              <h2 className="text-xl font-bold text-white">Food</h2>

              <p className="mt-1 text-sm text-gray-300">
                There are a few places to eat up Cypress but I would recommend
                bringing a snack and some water for the duration of the session.
              </p>
            </div>

            <div className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-teal-500/10 hover:shadow-teal-500/10">
              <h2 className="text-xl font-bold text-white ">Gear</h2>

              <p className="mt-1 text-sm text-gray-300">
                Safety is super important when skiing so make sure you're
                bringing a helmet and gloves for the lesson as well as a warm
                jacket and pants for the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Before;
