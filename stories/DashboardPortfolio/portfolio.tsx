import { Box, Flex, useMediaQuery } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

interface PortfolioProps {
  totalValue: string
  ytdValue: string
  irrValue: string
  annualizedValue: string
  itdValue: string
  mainIrrValue: string
}
const [desktopView] = useMediaQuery("(max-width: 1023px)")
const [mobileView] = useMediaQuery("(max-width: 525px)")
export const Portfolio = ({
  totalValue = "0.00%",
  ytdValue = "0.00%",
  irrValue = "0.00%",
  annualizedValue = "0.00%",
  itdValue = "6,871,692",
  mainIrrValue = "0.00%",
}: PortfolioProps) => (
  <Box bg="black" p="20px">
    <Box pt="30px">
      <Flex
        align="center"
        justify="space-between"
        fontWeight="700"
        color="#fff"
      >
        <Box>
          <Box as="h1" fontSize="20px">
            Portfolio
          </Box>
        </Box>
        <Box color="#b99855" fontSize="14px" fontWeight="400" lineHeight="120%">
          <Link href="#">
            <a style={{ display: "flex", alignItems: "center" }}>
              Show Portfolio Summary
              <svg
                style={{ marginLeft: "10px" }}
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M2.25478 11.7557L7.64793 6.4073C7.87517 6.18216 7.87517 5.81842 7.64793 5.5927L2.25478 0.244292C1.92673 -0.0814308 1.39301 -0.0814308 1.06439 0.244292C0.736349 0.570015 0.736349 1.09866 1.06439 1.42438L5.67794 6.00029L1.06439 10.575C0.736349 10.9013 0.736349 11.43 1.06439 11.7557C1.39301 12.0814 1.92673 12.0814 2.25478 11.7557Z"
                  fill="#B99855"
                ></path>
              </svg>
            </a>
          </Link>
        </Box>
      </Flex>
    </Box>
    <Box>
      <Flex
        bg="background: hsla(0,0%,100%,.12);"
        border="1px solid rgba(77, 77, 77, 0.5)"
        rounded="lg"
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        my="30px"
        p="30px"
        px={desktopView ? "15px" : "30px"}
      >
        <Box
          textAlign="center"
          flex={desktopView ? "0 0 100%" : ""}
          borderBottom={desktopView ? "1px solid #4d4d4d" : ""}
          w={desktopView ? "100%" : "50%"}
          order={desktopView ? 1 : ""}
        >
          <Box py={desktopView ? "30px" : ""}>
            <Box>
              <Box
                whiteSpace="nowrap"
                lineHeight="120%"
                fontSize="18px"
                color="#aaa"
                fontWeight="700"
              >
                Total Value(AUM)
              </Box>
              <Box mt="40px">
                <Box
                  as="span"
                  color="white"
                  fontSize="1.625rem"
                  fontWeight="100"
                  verticalAlign="2px"
                >
                  $
                </Box>
                <Box
                  as="span"
                  fontSize="1.875rem"
                  fontWeight="300"
                  color="#fff"
                  lineHeight="120%"
                  my="10px"
                  mx="4px"
                >
                  {totalValue}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          flex={desktopView ? "0 0 100%" : ""}
          borderBottom={desktopView ? "1px solid #4d4d4d" : ""}
          w={desktopView ? "100%" : "50%"}
          order={desktopView ? 3 : ""}
          textAlign="center"
        >
          <Box py={desktopView ? "30px" : ""}>
            <Box>
              <Box
                whiteSpace="nowrap"
                lineHeight="120%"
                fontSize="18px"
                color="#aaa"
                fontWeight="700"
              >
                Overall Perfomance
              </Box>
              <Flex
                align="center"
                justify="center"
                wrap={mobileView ? "wrap" : "nowrap"}
                mt="20px"
              >
                <Box px="20px">
                  <Box
                    fontWeight="400"
                    fontSize="14px"
                    textAlign="center"
                    color="#aaa"
                  >
                    YTD
                  </Box>
                  <Flex align="center" wrap="nowrap" color="#b5e361">
                    <Box mr="5px">
                      <svg
                        style={{ paddingTop: "15px" }}
                        width="12"
                        height="8"
                        viewBox="0 0 15 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.19141 0L14.1196 9H0.263203L7.19141 0Z"
                          fill="#B5E361"
                        ></path>
                      </svg>
                    </Box>
                    <Box fontSize="1.875rem">{ytdValue}</Box>
                  </Flex>
                </Box>
                <Box px="20px">
                  <Box
                    fontWeight="400"
                    fontSize="14px"
                    textAlign="center"
                    color="#aaa"
                  >
                    IRR Performance
                  </Box>
                  <Flex align="center" wrap="nowrap" color="#b5e361">
                    <Box>
                      <svg
                        style={{ paddingTop: "15px" }}
                        width="12"
                        height="8"
                        viewBox="0 0 15 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.19141 0L14.1196 9H0.263203L7.19141 0Z"
                          fill="#B5E361"
                        ></path>
                      </svg>
                    </Box>
                    <Box fontSize="1.875rem">{irrValue}</Box>
                  </Flex>
                </Box>
                <Box px="20px">
                  <Box
                    fontWeight="400"
                    fontSize="14px"
                    textAlign="center"
                    color="#aaa"
                  >
                    Annualized
                  </Box>
                  <Flex align="center" wrap="nowrap" color="#b5e361">
                    <Box>
                      <svg
                        style={{ paddingTop: "15px" }}
                        width="12"
                        height="8"
                        viewBox="0 0 15 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.19141 0L14.1196 9H0.263203L7.19141 0Z"
                          fill="#B5E361"
                        ></path>
                      </svg>
                    </Box>
                    <Box fontSize="1.875rem">{annualizedValue}</Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box
          flex={desktopView ? "0 0 100%" : ""}
          borderBottom={desktopView ? "1px solid #4d4d4d" : ""}
          w={desktopView ? "100%" : "50%"}
          order={desktopView ? 2 : ""}
        >
          <Box py={desktopView ? "30px" : ""}>
            <Box
              mt={desktopView ? "0px" : "23px"}
              borderTop={desktopView ? "none" : "1px solid #4d4d4d"}
              w={desktopView ? "100%" : "90%"}
              pt={desktopView ? "0px" : "30px"}
              textAlign="center"
            >
              <Box
                whiteSpace="nowrap"
                lineHeight="120%"
                fontSize="18px"
                color="#aaa"
                fontWeight="700"
              >
                Net Change(ITD)
              </Box>
              <Flex mt="40px" align="center" justify="center">
                <Box
                  color="white"
                  fontSize="1.625rem"
                  fontWeight="100"
                  verticalAlign="2px"
                >
                  $
                </Box>
                <Box
                  fontSize="1.875rem"
                  fontWeight="300"
                  color="#fff"
                  lineHeight="120%"
                  my="10px"
                  mx="4px"
                >
                  {itdValue}
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box
          flex={desktopView ? "0 0 100%" : ""}
          w={desktopView ? "100%" : "50%"}
          order={desktopView ? 4 : ""}
        >
          <Box py={desktopView ? "30px" : ""}>
            <Box
              mt={desktopView ? "0px" : "23px"}
              borderTop={desktopView ? "none" : "1px solid #4d4d4d"}
              w={desktopView ? "100%" : "90%"}
              pt={desktopView ? "0px" : "30px"}
              textAlign="center"
            >
              <Box
                whiteSpace="nowrap"
                lineHeight="120%"
                fontSize="18px"
                color="#aaa"
                fontWeight="700"
              >
                IRR
              </Box>
              <Flex my="22px" align="center" justify="center" color="#b5e361">
                <Box as="span" fontSize="30px" fontWeight="100" color="#b5e361">
                  <svg
                    style={{ paddingTop: "7px" }}
                    width="16"
                    height="29"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.19141 0L14.1196 9H0.263203L7.19141 0Z"
                      fill="#B5E361"
                    ></path>
                  </svg>
                </Box>
                <Box fontSize="1.875rem">{mainIrrValue}</Box>
              </Flex>
              <Box textAlign="center">
                <Box
                  as="span"
                  fontSize="14px"
                  fontStyle="italic"
                  fontWeight="400"
                  color="rgb(199, 199, 199)"
                >
                  <em>(for fully exited deals)</em>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  </Box>
)
