import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
// import { WithAnImage } from './video.stories';

interface videoProps {
  image1: string;
  image2: string;
  text1: string;
  text2: string;
  text3: string;
}

const Video = ({ image1, image2, text1, text2, text3 }: videoProps) => {
  return (
    <>
      <Box
        bg="#222"
        fontFamily="Gotham Book"
        borderRadius="3px"
        marginBottom={{ md: "0", lg: "30px", base: "30px" }}
        mx={{ md: "10px", lg: "0" }}
      >
        <Box>
          <Image
            w="100%"
            src={image1}
            fallbackSrc={image1}
            height="auto"
            borderTopLeftRadius="3px"
            borderTopRightRadius="3px"
          />
        </Box>
        <Box p="16px" color="#fff">
          <Text my="8px" fontSize="12px" color="#c7c7c7">
            {text1}
          </Text>
          <Text
            marginBottom="30px"
            lineHeight="24px"
            fontWeight="400"
            fontSize="20px"
          >
            {text2}
          </Text>
          <Text textAlign="center" fontSize="14px">
            {text3}
          </Text>
        </Box>
      </Box>
      <Box
        bg="#222"
        fontFamily="Gotham Book"
        borderRadius="3px"
        mx={{ md: "10px", lg: "0" }}
      >
        <Box>
          <Image
            w="100%"
            src={image2}
            fallbackSrc={image2}
            height="auto"
            borderTopLeftRadius="3px"
            borderTopRightRadius="3px"
          />
        </Box>
        <Box p="16px" color="#fff">
          <Text my="8px" fontSize="12px" color="#c7c7c7">
            {text1}
          </Text>
          <Text
            marginBottom="30px"
            lineHeight="24px"
            fontWeight="400"
            fontSize="20px"
          >
            {text2}
          </Text>
          <Text textAlign="center" fontSize="14px">
            {text3}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Video;
