import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Text, Flex } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

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
export default function MarketSimplifiedCarousel() {
  const [Slick, setSlick] = useState();
  const [Edge, setEdge] = useState();
  const data = [
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
    {
      header: "Main",
      subHeader: "",
      title1: "Dow Jones",
      title2: "S&P 500",
      title3: "NASDAQ",
      value1: "-1.84%",
      value2: "+1.20%",
      value3: "+0.96%",
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (slick) => {
      setSlick(slick);
      if (slick === 1) {
        setEdge(slick - 2);
      } else {
        setEdge(0);
      }
    },
  };
  const demo = document.querySelector(".slick-list");
  if (Slick == 1) {
    demo.style.webkitMaskImage =
      "linear-gradient(270deg, transparent 1%, #c7c7c7 20%, #c7c7c7 0, #c7c7c7 59%)";
  } else if (Edge) {
    demo.style.webkitMaskImage =
      "linear-gradient(90deg, transparent 1%, #c7c7c7 20%, #c7c7c7 0, #c7c7c7 59%)";
  } else {
    demo.style.webkitMaskImage =
      "linear-gradient(270deg, transparent 1%, #c7c7c7 20%, #c7c7c7 0, #c7c7c7 59%)";
    demo.style.webkitMaskImage =
      "linear-gradient(90deg, transparent 1%, #c7c7c7 20%, #c7c7c7 0, #c7c7c7 59%)";
  }
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
        Categories
      </Box>
      <Slider
        {...settings}
        style={{
          color: "#fff",
          padding: "20px 35px",
        }}
      >
        {data.map((item, i) => (
          <Box
            mx="12px"
            mb="28px"
            w="auto !important"
            display="block !important"
            key={i}
          >
            <Flex justify="space-between" align="center" pb="7px">
              <Box as="h4">{item.header}</Box>
              <Box>
                <InfoIcon color="#B99855" />
              </Box>
            </Flex>
            <Box bg="#1A1A1A" p="10px 8px">
              <Flex justify="space-between" align="center" p="3px">
                <Text
                  fontFamily="Gotham Book"
                  color="#C7C7C7"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                >
                  {item.title1}
                </Text>
                <Text
                  fontFamily="Gotham Bold"
                  color="#C73D3D"
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="700"
                >
                  {item.value1}
                </Text>
              </Flex>
              <Flex justify="space-between" align="center" p="3px">
                <Text
                  fontFamily="Gotham Book"
                  color="#C7C7C7"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                >
                  {item.title2}
                </Text>
                <Text
                  fontFamily="Gotham Bold"
                  color="#B5E361"
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="700"
                >
                  {item.value2}
                </Text>
              </Flex>
              <Flex justify="space-between" align="center" p="3px">
                <Text
                  fontFamily="Gotham Book"
                  color="#C7C7C7"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                >
                  {item.title3}
                </Text>
                <Text
                  fontFamily="Gotham Bold"
                  color="#B5E361"
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="700"
                >
                  {item.value3}
                </Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
