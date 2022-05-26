import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import Marquee from "./Marquee";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      // _hover={{ backgroundColor: "#b9985559" }}
      w="30px"
      h="30px"
      top="50%"
      right="5px"
      _before={{ content: '""' }}
      onClick={onClick}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.15" cx="18" cy="18" r="18" fill="#B99855"></circle>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2548 23.7557L21.6479 18.4073C21.8752 18.1822 21.8752 17.8184 21.6479 17.5927L16.2548 12.2443C15.9267 11.9186 15.393 11.9186 15.0644 12.2443C14.7363 12.57 14.7363 13.0987 15.0644 13.4244L19.6779 18.0003L15.0644 22.575C14.7363 22.9013 14.7363 23.43 15.0644 23.7557C15.393 24.0814 15.9267 24.0814 16.2548 23.7557Z"
          fill="#B99855"
        ></path>
      </svg>
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      w="30px"
      h="30px"
      top="50%"
      left="5px"
      _before={{ content: '""' }}
      onClick={onClick}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.15"
          r="18"
          transform="matrix(-1 0 0 1 18 18)"
          fill="#B99855"
        ></circle>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7455 23.7557L14.3523 18.4073C14.1251 18.1822 14.1251 17.8184 14.3523 17.5927L19.7455 12.2443C20.0735 11.9186 20.6072 11.9186 20.9359 12.2443C21.2639 12.57 21.2639 13.0987 20.9359 13.4244L16.3223 18.0003L20.9359 22.575C21.2639 22.9013 21.2639 23.43 20.9359 23.7557C20.6072 24.0814 20.0735 24.0814 19.7455 23.7557Z"
          fill="#B99855"
        ></path>
      </svg>
    </Box>
  );
}
export default function MarketSimplifiedCarousel() {
  const [Slick, setSlick] = useState(Number);
  const variant = useBreakpointValue({ sm: 5, md: 4, lg: 3, xl: 3 });
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
    className: "hello",
    dots: false,
    infinite: false,
    lazyLoad: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
          draggable: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
          draggable: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          draggable: true,
        },
      },
    ],
    afterChange: (slick: number) => {
      console.log("slick", slick);
      console.log("slick length", variant);
      setSlick(slick);
    },
  };
  setTimeout(() => {
    const demo = document.querySelector<HTMLElement>(".slick-list");
    if (Slick == 0) {
      demo.style.webkitMask =
        "linear-gradient(270deg, transparent 1%, #c7c7c7 20%, #c7c7c7 0, #c7c7c7 59%)";
    } else if (
      (variant == 7 && Slick == 7) ||
      (variant == 5 && Slick == 5) ||
      (variant == 4 && Slick == 4) ||
      (variant == 3 && Slick == 3)
    ) {
      demo.style.webkitMask =
        "linear-gradient(90deg, transparent 1%, #c7c7c7 20%, #c7c7c7 0, #c7c7c7 59%)";
    }
  }, 50);

  return (
    <Box>
      <Box
        as="header"
        fontStyle="normal"
        fontWeight="700"
        fontSize="18px"
        lineHeight="120%"
        color="#fff"
        pt="36px"
        mb="15px"
        mx="35px"
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
            <Box pos="absolute" right="0" bottom="0"></Box>
            <Flex justify="space-between" align="center" pb="7px">
              <Box as="h4">{item.header}</Box>
              <Box>
                <InfoIcon color="#B99855" />
              </Box>
            </Flex>
            <Box bg="#1A1A1A" p="10px 8px">
              <Flex justify="space-between" align="center" p="3px">
                {item.title1.length <= 10 ? (
                  <Text
                    fontFamily="Gotham Bold"
                    color="#C73D3D"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                  >
                    {item.title1}
                  </Text>
                ) : (
                  <Marquee color="#C73D3D" width="100px" text={item.title1} />
                )}
                {item.value1.length <= 10 ? (
                  <Text
                    fontFamily="Gotham Bold"
                    color="#C73D3D"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                  >
                    {item.value1}
                  </Text>
                ) : (
                  <Marquee color="#C73D3D" width="100px" text={item.value1} />
                )}
              </Flex>
              <Flex justify="space-between" align="center" p="3px">
                {item.title2.length <= 10 ? (
                  <Text
                    fontFamily="Gotham Book"
                    color="#C7C7C7"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                  >
                    {item.title2}
                  </Text>
                ) : (
                  <Marquee color="#C73D3D" width="100px" text={item.title2} />
                )}
                {item.value2.length <= 10 ? (
                  <Text
                    fontFamily="Gotham Bold"
                    color="#B5E361"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                  >
                    {item.value2}
                  </Text>
                ) : (
                  <Marquee color="#C73D3D" width="100px" text={item.value2} />
                )}
              </Flex>
              <Flex justify="space-between" align="center" p="3px">
                {item.title3.length <= 10 ? (
                  <Text
                    fontFamily="Gotham Book"
                    color="#C7C7C7"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                  >
                    {item.title3}
                  </Text>
                ) : (
                  <Marquee color="#C73D3D" width="100px" text={item.title3} />
                )}
                {item.value3.length <= 10 ? (
                  <Text
                    fontFamily="Gotham Bold"
                    color="#B5E361"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                  >
                    {item.value3}
                  </Text>
                ) : (
                  <Marquee color="#C73D3D" width="100px" text={item.value3} />
                )}
              </Flex>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
