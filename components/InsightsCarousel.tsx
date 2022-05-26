import React from "react";
import Slider from "react-slick";
import { Box, Text } from "@chakra-ui/react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style }}
      w="30px"
      h="30px"
      top="40%"
      right="0"
      _before={{ content: '""' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
        width={30}
        height={30}
      >
        <path
          fill="#C7C7C7"
          d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
        />
      </svg>
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style }}
      w="30px"
      h="30px"
      top="40%"
      left="0"
      zIndex="5"
      onClick={onClick}
      _before={{ content: '""' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
        width={30}
        height={30}
      >
        <path
          fill="#C7C7C7"
          d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
        />
      </svg>
    </Box>
  );
}

export default function InsightsCarousel() {
  const data = [
    "S+P has gained 14.6% YTD in 2020, but without Facebook, Amazon,Netflix, Microsoft, Apple, and Alphabet (Google), it would onlybe up by 2.3% YTD. This group of 6 stocks peaked on Sept 2nd and (except Alphabet) has refused to confirm the S+P 500's recent new highs.",
    "S+P has gained 14.6% YTD in 2020, but without Facebook, Amazon,Netflix, Microsoft, Apple, and Alphabet (Google), it would onlybe up by 2.3% YTD. This group of 6 stocks peaked on Sept 2nd and (except Alphabet) has refused to confirm the S+P 500's recent new highs.",
    "S+P has gained 14.6% YTD in 2020, but without Facebook, Amazon,Netflix, Microsoft, Apple, and Alphabet (Google), it would onlybe up by 2.3% YTD. This group of 6 stocks peaked on Sept 2nd and (except Alphabet) has refused to confirm the S+P 500's recent new highs.",
  ];

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box>
      <Box
        as="header"
        fontStyle="normal"
        fontWeight="700"
        fontSize="18px"
        lineHeight="120%"
        color="#fff"
        mt="36px"
        mb="15px"
      >
        Highlights
      </Box>
      <Slider {...settings}>
        {data.map((item, i) => (
          <Box
            py="20px"
            px="50px"
            mb="16px"
            bg="#222"
            key={i}
            textAlign="center"
            color="#fff"
          >
            <Box>
              <Text
                // fontFamily="Gotham Bold"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="21px"
              >
                {item}
                highs.",
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
