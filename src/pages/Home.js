import Carousel from "../components/UI/Carousel";
import carousel_image from "../assets/carousel-image.webp";

function HomePage() {
  return (
    <main>
      <Carousel image={carousel_image} />
    </main>
  );
}

export default HomePage;
