import React, {  useState } from 'react';
import { Container } from "@mui/system"
import { CarouselProvider, Slider, Slide, ImageWithZoom, DotGroup,   ButtonBack, ButtonNext  } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Image from 'next/image';
import compStyling from '../styles/mycarousel.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function MyCarousel(props) {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageData, setImageData] = useState(props.images);

  const handleClickPreviousEvent = (event) => {
    setCurrentSlide(currentSlide - 1)
    if(currentSlide <= 0) {
        setCurrentSlide(imageData.length - 1)
    }
  }

  const handleClickNextEvent = (event) => {
    setCurrentSlide(currentSlide + 1)
    if(currentSlide >= imageData.length - 1) {
        setCurrentSlide(0)
    }
  }

  // console.log(`interval: ${props.interval}`);

  return (
    <>
    <Container maxWidth="sm" sx={compStyling.container} disableGutters={true}>
      {/* <Grid container spacing={2}> */}
{/*          <Grid item xs={2}>
           <Stack direction="column" spacing={2} sx={{ maxHeight: 60 }} >
            {props.images.map((item, index) => (
              <Box sx={{ maxWidth: 50, maxHeight: 40, cursor: 'pointer' }}  onClick={() => setCurrentSlide(index)}>
                <Image src={item} width="50" height="50" className={index===currentSlide && compStyling.glow}/>
              </Box>
            ))}            
          </Stack>
         </Grid> */}
         
         <Grid item>
          <CarouselProvider
            visibleSlides={1}
            totalSlides= {props.images.length}
            currentSlide={currentSlide}
            step={1}
            naturalSlideWidth={302}
            naturalSlideHeight={182}
            // hasMasterSpinner
            interval = {props.interval}
            infinite   
            isPlaying={props.autoPlay}      
          >
          <div className={compStyling.container}>       
            <Slider className={compStyling.slider} classNameAnimation={compStyling.omgImgTransition}> {/* classNameAnimation={compStyling.imgTransition} classNameAnimation={"transition-opacity duration-700"}*/}
            {props.images.map((item, index) => (                
                <Slide index={index} key={index} className='absolute w-full'>
                   {/* <ImageWithZoom  src={item} key={index}/> */}
                   <Container sx={compStyling.container}>
                    <Image key={index} src={item} fill className={`object-cover ${compStyling.omgImgTransition}`} alt={'test'}/>
                   </Container>
                </Slide>
              ))}            
            </Slider>
            <ButtonBack className={compStyling.buttonBack} onClick={(e) => handleClickPreviousEvent(e)}><ArrowBackIosIcon/></ButtonBack>
            <ButtonNext className={compStyling.buttonNext}  onClick={(e) => handleClickNextEvent(e)}> <ArrowForwardIosIcon/></ButtonNext>
            </div>
            {/* <DotGroup dotNumbers /> */}            
         </CarouselProvider>
       
        </Grid>
      {/* </Grid> */}
    </Container>
    </>
  )
}