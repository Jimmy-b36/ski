import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Reviews from '../components/Reviews';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center m-20">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full rounded-lg h-100vh -z-10"
        >
          <source
            src="https://media.istockphoto.com/id/1362306332/video/beautiful-skiing-idyllic-mountain-winter-forest-snow-landscape-skiing-on-the-ski-slopes-on.mp4?s=mp4-640x640-is&k=20&c=Xuv5fJ-gkNi9C7U834ecFPQ6iewECcjDkWJVSsngJ60="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <h1 className="p-5 my-5 text-4xl font-bold tracking-tight text-white bg-black rounded-lg sm:text-5xl bg-opacity-20">
          About me
        </h1>
        <div className="flex flex-row justify-center w-3/4 bg-black rounded-lg bg-opacity-20">
          <img
            src="https://raw.githubusercontent.com/jhoangqm/skee/main/server/image/1664997198083.png"
            className="object-contain w-1/4 h-auto "
          />
          <div className="flex items-center w-1/2 h-auto p-5 ">
            <p className="text-white ">
              Fringilla sollicitudin congue rhoncus ligula cubilia hendrerit per
              sit venenatis molestie mi mus. Proin gravida semper pulvinar hac
              condimentum himenaeos dapibus sociosqu curae varius consequat
              sociis. Dignissim mi hendrerit nam sodales scelerisque pharetra
              sociosqu fermentum euismod mi volutpat scelerisque. Euismod sociis
              rutrum senectus mattis sociis aliquet massa massa velit vitae
              dictum primis. Ac lorem lacinia a ad commodo sociis elementum
              tempus quisque vivamus vel malesuada. Rhoncus facilisi mus metus
              curabitur aenean dui nascetur mus eu luctus nisl egestas.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center w-3/4 divider"></div>
      </div>

      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
