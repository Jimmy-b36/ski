import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Levels = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full m-20 sm:m-10 xs:m-2">
        <div
          tabIndex={0}
          className="w-1/2 mt-5 bg-green-600 border sm:w-3/4 xs:w-full collapse collapse-plus border-base-300 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">
            First time discovery
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem rem provident illo facere sunt, neque quo, ipsum
              iure fugiat laudantium nemo hic doloremque laborum at error?
              Consectetur non nulla vitae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione dolore, ipsa fuga atque sed
              molestiae at sunt cum. Necessitatibus eaque, consectetur minus
              eligendi iure ipsa veniam! Quod ipsam necessitatibus excepturi.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="w-1/2 mt-5 bg-green-600 border sm:w-3/4 xs:w-full collapse collapse-plus border-base-300 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">
            Learn To Turn
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem rem provident illo facere sunt, neque quo, ipsum
              iure fugiat laudantium nemo hic doloremque laborum at error?
              Consectetur non nulla vitae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione dolore, ipsa fuga atque sed
              molestiae at sunt cum. Necessitatibus eaque, consectetur minus
              eligendi iure ipsa veniam! Quod ipsam necessitatibus excepturi.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="w-1/2 mt-5 bg-green-600 border sm:w-3/4 xs:w-full collapse collapse-plus border-base-300 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">
            Feel The Greens
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem rem provident illo facere sunt, neque quo, ipsum
              iure fugiat laudantium nemo hic doloremque laborum at error?
              Consectetur non nulla vitae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione dolore, ipsa fuga atque sed
              molestiae at sunt cum. Necessitatibus eaque, consectetur minus
              eligendi iure ipsa veniam! Quod ipsam necessitatibus excepturi.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="w-1/2 mt-5 border sm:w-3/4 xs:w-full bg-gradient-to-r from-green-600 to-blue-600 collapse collapse-plus border-base-300 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">
            Learn To Parallel
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem rem provident illo facere sunt, neque quo, ipsum
              iure fugiat laudantium nemo hic doloremque laborum at error?
              Consectetur non nulla vitae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione dolore, ipsa fuga atque sed
              molestiae at sunt cum. Necessitatibus eaque, consectetur minus
              eligendi iure ipsa veniam! Quod ipsam necessitatibus excepturi.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="w-1/2 mt-5 bg-blue-600 border sm:w-3/4 xs:w-full collapse collapse-plus border-base-300 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">
            Cruise The Blues
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem rem provident illo facere sunt, neque quo, ipsum
              iure fugiat laudantium nemo hic doloremque laborum at error?
              Consectetur non nulla vitae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione dolore, ipsa fuga atque sed
              molestiae at sunt cum. Necessitatibus eaque, consectetur minus
              eligendi iure ipsa veniam! Quod ipsam necessitatibus excepturi.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="w-1/2 mt-5 border sm:w-3/4 xs:w-full bg-gradient-to-r from-blue-600 to-black collapse collapse-plus border-base-300 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">
            Advanced lessons
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem rem provident illo facere sunt, neque quo, ipsum
              iure fugiat laudantium nemo hic doloremque laborum at error?
              Consectetur non nulla vitae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione dolore, ipsa fuga atque sed
              molestiae at sunt cum. Necessitatibus eaque, consectetur minus
              eligendi iure ipsa veniam! Quod ipsam necessitatibus excepturi.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Levels;
