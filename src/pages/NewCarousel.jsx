import { Container } from "@mui/material";
import BeforeLearningLayout from "src/containers/Layout/BeforeLearningLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const NewCarouselPage = () => {

    return (
        <BeforeLearningLayout>
            <Container sx={{
                maxWidth: '80%',
                mt: '75px',
                display: 'flex',
                flexDirection: 'row',
            }}
                maxWidth={false}
            >
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </Container>
        </BeforeLearningLayout>
    )
}

export default NewCarouselPage;