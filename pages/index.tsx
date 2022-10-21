import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Reviews from '../components/Reviews';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center m-20  flex-col items-center">
        <h1 className="text-5xl my-5">About me</h1>
        <div className="flex w-3/4 flex-row justify-center">
          <img
            src="https://raw.githubusercontent.com/Jimmy-b36/ski/main/assets/profile.png?token=GHSAT0AAAAAAB2HYGPALZGPRUTCUP6WHPSKY2S7OVA"
            className=" w-1/4 h-auto object-contain"
          />
          <div className=" w-1/2 h-auto p-5 flex items-center">
            <p>
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
        <div className="divider w-3/4 flex justify-center"></div>
      </div>

      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
