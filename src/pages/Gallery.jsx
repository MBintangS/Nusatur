import Footer from "../components/Footer";
import Galleryimg from "../components/galleryimg";
import Herogallery from "../components/Herogallery";
import HOC from "../components/HOC";

const Gallery = () => {
  return (
    <HOC headerTitle="Gallery">
      <Herogallery />
      <Galleryimg />
      <Footer />
    </HOC>
  );
};

export default Gallery;

// import HOC from "../components/HOC";

// const Gallery = () => {
//     return (
        
//             <HOC headerTitle="Gallery">
                        
//             </HOC>
        
//     );
// };

// export default Gallery;