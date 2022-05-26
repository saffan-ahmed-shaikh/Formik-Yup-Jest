import {
  Box,
  Flex,
  Spacer,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import InsightsCarousel from "./InsightsCarousel";
import Marquee from "./Marquee";
import Video from "./video";
export default function Insights() {
  const [TextLength, setTextLength] = useState(String);
  const Boxes = [
    {
      country: "Nasdaq",
      place: "NADQ",
      cost: "130.23",
      value: "+12.4%",
      color: "#B5E361",
    },
    {
      country: "Dow Jones",
      place: "DOW",
      cost: "130.23",
      value: "-12.4%",
      color: "#C73D3D",
    },
    {
      country: "Russell 2000",
      place: "RUT",
      cost: "130.23",
      value: "12.4%",
      color: "#B5E361",
      arrow: <TriangleUpIcon />,
    },
    {
      country: "S&P 500",
      place: "SPX",
      cost: "130.23",
      value: "12.4%",
      color: "#B5E361",
      arrow: <TriangleUpIcon />,
    },
    {
      country: "NYSE",
      place: "NYA",
      cost: "130.23",
      value: "12.4%",
      color: "#C73D3D",
      arrow: <TriangleDownIcon />,
    },
    {
      country: "Russell 2000",
      place: "RUT",
      cost: "130.23",
      value: "12.4%",
      color: "#B5E361",
      arrow: <TriangleUpIcon />,
    },
    {
      country: "S&P 500",
      place: "SPX",
      cost: "130.23",
      value: "12.4%",
      color: "#B5E361",
      arrow: <TriangleUpIcon />,
    },
    {
      country: "NYSE",
      place: "NYA",
      cost: "130.23",
      value: "12.4%",
      color: "#C73D3D",
      arrow: <TriangleDownIcon />,
    },
    {
      country: "Russell 2000",
      place: "RUT",
      cost: "130.23",
      value: "12.4%",
      color: "#B5E361",
      arrow: <TriangleUpIcon />,
    },
  ];

  const Boxes2 = [
    {
      country: "Apple",
      place: "AAPL",
      cost: "130.23",
      value: "12.4%",
      color: "#B5E361",
    },
    {
      country: "Microsoft",
      place: "MSFT SFT MSFT",
      cost: "130.23",
      value: "-12.4%",
      color: "#C73D3D",
      arrow: <TriangleDownIcon />,
    },
    {
      country: "USA",
      place: "5 - Year",
      cost: "+11",
      value: "12.4%",
      arrow: <TriangleUpIcon />,
      color: "#B5E361",
      img: "/usa.jpg",
      mr: "6px",
    },
    {
      country: "USA",
      place: "5 - Year",
      cost: "+11",
      value: "12.4%",
      arrow: <TriangleUpIcon />,
      mr: "6px",
      color: "#B5E361",
      img: "/usa.jpg",
    },
    {
      country: "GRC",
      place: "5 - Year",
      cost: "-12",
      value: "-12.4",
      arrowdown: <TriangleDownIcon />,
      color: "#C73D3D",
      mr: "6px",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZQm0OnpcdtVcGtNaQXjdZa9-4Srk2_tq5g&usqp=CAU",
    },
    {
      country: "JPN",
      place: "5 - Year",
      cost: "130.23",
      value: "12.4%",
      arrow: <TriangleUpIcon />,
      mr: "6px",
      color: "#B5E361",
      img: "https://worldpopulationreview.com/s3_files/images/flag-pages/png1000/jp.png",
    },
    {
      country: "USA",
      place: "5 - Year",
      cost: "+11",
      value: "12.4%",
      arrow: <TriangleUpIcon />,
      color: "#B5E361",
      mr: "6px",
      img: "/usa.jpg",
    },
    {
      country: "GRC",
      place: "5 - Year",
      cost: "-12",
      value: "-12.4",
      color: "#C73D3D",
      arrowdown: <TriangleDownIcon />,
      mr: "6px",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZQm0OnpcdtVcGtNaQXjdZa9-4Srk2_tq5g&usqp=CAU",
    },
    {
      country: "JPN",
      place: "5 - Year",
      cost: "130.23",
      value: "12.4%",
      arrow: <TriangleUpIcon />,
      color: "#B5E361",
      mr: "6px",
      img: "https://worldpopulationreview.com/s3_files/images/flag-pages/png1000/jp.png",
    },
  ];

  return (
    <Box
      fontFamily="Gotham Book"
      mx={{ xl: "40px", lg: "20px", md: "40px", base: "16px" }}
      pb="80px"
    >
      <Box
        as="header"
        fontStyle="normal"
        fontWeight="700"
        fontSize="30px"
        lineHeight="120%"
        color="#fff"
        pt="25px"
      >
        Insights
      </Box>
      <Text color="#c7c7c7" fontSize="18px" mt="6px" fontWeight="400">
        A collection of articles and market insights from The Family Office
      </Text>

      <Grid
        templateColumns="repeat(7, 1fr)"
        gridGap="1.5rem"
        display={{ lg: "grid", md: "block" }}
      >
        <GridItem gridColumn="span 5 / span 5">
          <Box>
            <InsightsCarousel />
          </Box>
          <Flex paddingBottom="12px" mt="24px">
            <Text color="#fff" fontSize="18px" fontWeight="700">
              Market Simplified
            </Text>
            <Spacer />
            <Box as="p" color="#fff">
              Week 3 • May 21st, 2021
            </Box>
          </Flex>
          <Box px={{ base: "5px", md: "24px" }} py="20px" bg="#222">
            <Text color="#fff" fontWeight="700">
              Indices
            </Text>
            <Grid
              templateColumns={{ xl: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
              gap={{ xl: "32px", base: "10px" }}
              py="8px"
            >
              {Boxes.map((paste, i) => (
                <GridItem
                  w="100%"
                  p="8px"
                  borderRadius="6px"
                  bg="#1A1A1A"
                  color="#fff"
                  fontSize="14px"
                  key={i}
                >
                  <Flex>
                    <Text fontSize="14px">{paste.country}</Text>
                    <Spacer />
                    <Text fontSize="16px">{paste.cost}</Text>
                  </Flex>

                  <Flex pt="6px">
                    <Box color="#C7C7C7">{paste.place}</Box>
                    <Spacer />
                    <Text color={paste.color} fontSize="16px">
                      {paste.arrow}
                      {paste.value}
                    </Text>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
            <Text color="#fff" fontWeight="700">
              Stocks & Bonds
            </Text>
            <Grid
              templateColumns={{ xl: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
              gap={{ xl: "32px", base: "10px" }}
              py="8px"
            >
              {Boxes2.map((paste, i) => (
                <GridItem
                  w="100%"
                  p="8px"
                  borderRadius="6px"
                  bg="#1A1A1A"
                  color="#fff"
                  fontSize="14px"
                  key={i}
                >
                  <Flex alignItems="center">
                    <Text fontSize="14px">{paste.country}</Text>
                    <Image
                      height="12px"
                      border="none"
                      boxShadow="none"
                      ml={paste.mr}
                      src={paste.img}
                    />
                    <Spacer />
                    <Text fontSize="16px">{paste.cost}</Text>
                  </Flex>

                  <Flex pt="6px">
                    {paste.place.length <= 10 ? (
                      <Text style={{ color: "#C7C7C7" }}>{paste.place}</Text>
                    ) : (
                      <Marquee
                        color="#C7C7C7"
                        width="100px"
                        text={paste.place}
                      />
                    )}
                    <Spacer />
                    <Text fontSize="16px" color={paste.color}>
                      {paste.arrow}
                      {paste.value}
                    </Text>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
            <Flex
              justify="center"
              mt="32px"
              fontWeight="600"
              fontSize="14px"
              fontFamily="Gotham Book"
            >
              <Text color="#C4C4C4" maxW="500px" textAlign="center">
                All figures are updated on Friday afternoon of the previous week
                after closing. Figures are week to date unless otherwise stated.
              </Text>
            </Flex>
          </Box>
          <Flex
            justify="center"
            mt="32px"
            fontWeight="600"
            fontSize="14px"
            fontFamily="Gotham Book"
          >
            <Button color="primary" variant="outlined">
              View Markets Simplified
            </Button>
          </Flex>
        </GridItem>
        <GridItem gridColumn="span 2 / span 2">
          <Box mt="72px" pb="60px">
            <Flex flexDirection={{ lg: "column", md: "row", base: "column" }}>
              <Video
                image1="/videoPic1.jpeg"
                image2="/videoPic2.jpeg"
                text1="Feature Article | 12/14/20"
                text2="Quarterly Market Economic Overview - Q2 2020"
                text3="Summary of the quarterly economic and market review - Q2 2020"
              />
            </Flex>
            <Flex
              justify="center"
              mt="32px"
              pb={{ base: "35px" }}
              fontWeight="600"
              fontSize="14px"
              fontFamily="Gotham Book"
            >
              <Button color="primary" variant="outlined">
                View Markets Archive
              </Button>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
