import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  Flex,
  Heading,
  Input,
  FormLabel,
  FormControl,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]*$/, "Please Enter a Proper Name")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .min(10, "Invalid Phone Number")
    .matches(/^[6789][0-9]{9}/, "Enter a valid Phone Number")
    .max(10, "Invalid Phone Number")
    .required("Required"),
  address: Yup.string().min(2, "Too Short!").required("Required"),
  pannumber: Yup.string()
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Enter a Valid Pan card number")
    .required("Required"),
  aadharnumber: Yup.string()
    .matches(
      /^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/,
      "Enter a Valid Aadhar card number"
    )
    .required("Required"),
  pob: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  dateofbirth: Yup.string().required("Required"),
});

export default function FormValidation() {
  return (
    <Box p={{ base: "25px", md: "50px" }} bg="gray.100">
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          address: "",
          phone: "",
          pannumber: "",
          aadharnumber: "",
          dateofbirth: "",
          pob: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values

          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Box
            bg="white"
            p={{ base: "20px", md: "30px" }}
            rounded="md"
            w={{ md: "60%", sm: "100%" }}
            border="2px solid #b25ff1"
            m="auto"
          >
            <Heading textAlign="center">Form Validation</Heading>

            <Form>
              <Box pt="20px">
                <Flex
                  w="100%"
                  gap={6}
                  flexDirection={{ base: "column", sm: "column", md: "row" }}
                >
                  {/* name input */}
                  <FormControl>
                    <FormLabel htmlFor="fullname">Full Name</FormLabel>
                    <Field
                      name="fullname"
                      as={Input}
                      display="block"
                      id="fullname"
                      placeholder="John Doe"
                    />
                    {errors.fullname && touched.fullname ? (
                      <Text color="red" fontSize="14px" fontWeight="600">
                        {errors.fullname}
                      </Text>
                    ) : null}
                  </FormControl>
                  {/* end */}

                  {/* email */}
                  <FormControl>
                    <FormLabel htmlFor="email" display="inline-block">
                      Email
                    </FormLabel>
                    <Field
                      name="email"
                      type="email"
                      as={Input}
                      id="email"
                      placeholder="example@gmail.com"
                    />
                    {errors.email && touched.email ? (
                      <Text color="red" fontSize="14px" fontWeight="600">
                        {errors.email}
                      </Text>
                    ) : null}
                  </FormControl>
                  {/* end */}
                </Flex>
                <Flex
                  gap={6}
                  w="100%"
                  flexDirection={{ base: "column", sm: "column", md: "row" }}
                  mt="15px"
                >
                  {/* phone. */}
                  <FormControl>
                    <FormLabel htmlFor="phone" display="inline-block">
                      Phone No
                    </FormLabel>

                    <Field
                      name="phone"
                      as={Input}
                      id="phone"
                      placeholder="1234567890"
                    />
                    {errors.phone && touched.phone ? (
                      <Text color="red" fontSize="14px" fontWeight="600">
                        {errors.phone}
                      </Text>
                    ) : null}
                  </FormControl>
                  {/* end */}
                  <FormControl>
                    {" "}
                    <FormLabel htmlFor="dateofbirth" display="inline-block">
                      Date-Of-Birth
                    </FormLabel>
                    <Field
                      name="dateofbirth"
                      as={Input}
                      type="date"
                      id="dateofbirth"
                    />
                    {errors.dateofbirth && touched.dateofbirth ? (
                      <Text color="red" fontSize="14px" fontWeight="600">
                        {errors.dateofbirth}
                      </Text>
                    ) : null}
                  </FormControl>
                </Flex>
                <Flex
                  gap={6}
                  w="100%"
                  flexDirection={{ base: "column", sm: "column", md: "row" }}
                  mt="15px"
                >
                  {/* phone. */}
                  <FormControl>
                    <FormLabel htmlFor="address" display="inline-block">
                      Address
                    </FormLabel>

                    <Field
                      name="address"
                      as={Input}
                      id="address"
                      placeholder="Enter your Address"
                    />
                    {errors.address && touched.address ? (
                      <Text color="red" fontSize="14px" fontWeight="600">
                        {errors.address}
                      </Text>
                    ) : null}
                  </FormControl>
                  {/* end */}
                  <FormControl>
                    {" "}
                    <FormLabel htmlFor="pannumber" display="inline-block">
                      Pan No
                    </FormLabel>
                    <Field
                      name="pannumber"
                      as={Input}
                      id="pannumber"
                      placeholder="AAAAA1234A"
                    />
                    {errors.pannumber && touched.pannumber ? (
                      <Text color="red" fontSize="14px" fontWeight="600">
                        {errors.pannumber}
                      </Text>
                    ) : null}
                  </FormControl>
                </Flex>
                <Flex
                  gap={6}
                  w="100%"
                  flexDirection={{ base: "column", sm: "column", md: "row" }}
                  mt="15px"
                >
                  {/* phone. */}
                  <FormControl>
                    <FormLabel htmlFor="aadharnumber" display="inline-block">
                      Aadhar No
                    </FormLabel>

                    <Field
                      name="aadharnumber"
                      as={Input}
                      id="aadharnumber"
                      placeholder="1234-1234-1234"
                    />
                    {errors.aadharnumber && touched.aadharnumber ? (
                      <Text color="red" fontSize="14px" fontWeight="600">
                        {errors.aadharnumber}
                      </Text>
                    ) : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="pob">Place of birth</FormLabel>
                    <Field
                      as={Select}
                      id="pob"
                      name="pob"
                      placeholder="select state"
                    >
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadra and Nagar Haveli">
                        Dadra and Nagar Haveli
                      </option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </Field>
                    {errors.pob && touched.pob ? (
                      <Text color="red" fontSize="14px" fontWeight="600">
                        {errors.pob}
                      </Text>
                    ) : null}
                  </FormControl>
                </Flex>
                {/* end */}
                <Box
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  p="15px"
                >
                  <Button name="Submit" type="submit" bg="#b25ff1">
                    Submit
                  </Button>
                </Box>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
