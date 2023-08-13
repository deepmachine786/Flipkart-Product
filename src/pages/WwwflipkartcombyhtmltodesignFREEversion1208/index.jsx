import React from "react";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const WwwflipkartcombyhtmltodesignFREEversion1208Page = () => {
  const [formvalue, setFormvalue] = React.useState("");

  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto pb-1 w-full">
        <div className="h-[2083px] md:h-[5576px] md:px-5 relative w-[1599px] md:w-full">
          <div className="bg-white-A700 h-[1896px] mx-auto rounded-[30px] w-full"></div>
          <div className="absolute h-[2083px] md:h-[5576px] inset-[0] m-auto w-[1599px] md:w-full">
            <div className="bg-gray-100 h-[2083px] m-auto w-full"></div>
            <div className="absolute h-[2083px] md:h-[5576px] inset-[0] m-auto w-full">
              <div className="absolute bg-gray-100 flex-1 h-[2083px] inset-[0] m-auto w-full"></div>
              <div className="absolute flex flex-col h-[1728px] md:h-auto inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-10 px-40 sm:px-5 w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col items-start justify-center max-w-[1598px] md:px-10 px-40 sm:px-5 rounded-tl-[20px] rounded-tr-[20px] w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-between sm:px-5 px-7 py-3 w-full">
                      <div className="flex md:flex-col flex-row gap-9 items-center justify-start w-full">
                        <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                          <Img
                            className="h-[22px] w-[130px]"
                            src="images/img_linkflipkart.svg"
                            alt="linkflipkart"
                          />
                          <div className="flex flex-row items-center justify-end md:pl-10 sm:pl-5 pl-[41.41px] w-auto">
                            <div className="flex flex-col items-start justify-start pr-[4.84px] w-auto">
                              <Text
                                className="italic text-gray-500 text-xs w-auto"
                                size="txtInterItalic12"
                              >
                                Explore
                              </Text>
                            </div>
                            <Text
                              className="italic text-amber-A400 text-xs w-auto"
                              size="txtInterItalic12AmberA400"
                            >
                              Plus
                            </Text>
                            <Img
                              className="h-2.5 md:h-auto object-cover w-4"
                              src="images/img_imgmargin.png"
                              alt="imgmargin"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col font-productsans items-start justify-start md:pr-10 sm:pr-5 pr-[111.94px] w-full">
                          <Input
                            name="form"
                            placeholder="Search for Products, Brands and More"
                            value={formvalue}
                            onChange={(e) => setFormvalue(e)}
                            className="leading-[normal] p-0 placeholder:text-gray-700 sm:pr-5 text-[17px] text-gray-700 text-left w-full"
                            wrapClassName="flex pr-[35px] rounded-lg w-full"
                            prefix={
                              <Img
                                className="cursor-pointer my-auto"
                                src="images/img_search.svg"
                                alt="search"
                              />
                            }
                            suffix={
                              <CloseSVG
                                fillColor="#666666"
                                className="cursor-pointer my-auto"
                                onClick={() => setFormvalue("")}
                                style={{
                                  visibility:
                                    formvalue?.length <= 0
                                      ? "hidden"
                                      : "visible",
                                }}
                                height={40}
                                width={44}
                                viewBox="0 0 44 40"
                              />
                            }
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-row font-productsans h-[68px] md:h-auto items-center justify-start w-[379px] sm:w-full">
                    <div className="flex flex-col items-center justify-start px-5 w-auto">
                      <div className="flex flex-row gap-[7.78px] items-center justify-start p-[9px] w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_profile815786svg.svg"
                            alt="profile815786sv"
                          />
                          <div className="flex flex-col items-start justify-center w-auto">
                            <a
                              href="javascript:"
                              className="text-base text-black-900 text-center w-auto"
                            >
                              <Text size="txtProductSansRegular16">
                                Sign in
                              </Text>
                            </a>
                          </div>
                        </div>
                        <Img
                          className="h-3 w-3"
                          src="images/img_arrowdown_gray_900_01.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row font-inter items-center justify-start pl-5 pr-[19.44px] w-auto">
                      <Img
                        className="h-6 w-8"
                        src="images/img_cart.svg"
                        alt="cart"
                      />
                      <div className="flex flex-col items-center justify-center w-auto">
                        <Text
                          className="text-base text-black-900 text-center w-auto"
                          size="txtInterRegular16"
                        >
                          Cart
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[68px] md:h-auto object-cover w-[82px]"
                      src="images/img_div38vf5e.png"
                      alt="div38vf5e"
                    />
                  </div>
                </header>
                <div className="flex flex-col font-productsans h-full items-center justify-start pt-2 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="h-[127px] md:h-[1283px] relative w-[1599px] md:w-full">
                        <div className="bg-white-A700 h-[106px] mx-auto w-full"></div>
                        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-start m-auto w-auto md:w-full">
                          <div className="flex flex-col items-start justify-start w-auto md:w-full">
                            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-center pl-[175.34px] pr-[175.36px] md:px-10 sm:px-5 w-auto md:w-full">
                              <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pr-4 py-4 w-auto">
                                <div className="flex flex-col gap-3 items-center justify-start px-[13px] w-auto">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_29327f40e9c4d26bpng.png"
                                    alt="29327f40e9c4dTwentySix"
                                  />
                                  <Text
                                    className="text-blue_gray-900 text-center text-sm w-auto"
                                    size="txtProductSansRegular14"
                                  >
                                    Grocery
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start p-4 w-auto">
                                <div className="flex flex-col gap-[11px] items-center justify-start px-[13px] w-full">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_22fddf3c7da4c4f4png.png"
                                    alt="22fddf3c7da4c4f"
                                  />
                                  <Text
                                    className="text-blue_gray-900 text-center text-sm"
                                    size="txtProductSansRegular14"
                                  >
                                    Mobiles
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start p-4 w-auto">
                                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_0d75b34f7d8fbcb3png.png"
                                    alt="0d75b34f7d8fbcb"
                                  />
                                  <div className="flex flex-row gap-[7.56px] items-center justify-center pl-[10.39px] pr-[8.73px] w-auto">
                                    <Text
                                      className="text-center text-gray-900_01 text-sm w-auto"
                                      size="txtProductSansRegular14Gray90001"
                                    >
                                      Fashion
                                    </Text>
                                    <Img
                                      className="h-[17px] w-[11px]"
                                      src="images/img_arrowdown.svg"
                                      alt="arrowdown_One"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start p-4 w-auto">
                                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_69c6589653afdb9apng.png"
                                    alt="69c6589653afdbNine"
                                  />
                                  <div className="flex flex-row gap-[7.23px] items-center justify-center w-auto">
                                    <Text
                                      className="text-center text-gray-900_01 text-sm w-auto"
                                      size="txtProductSansRegular14Gray90001"
                                    >
                                      Electronics
                                    </Text>
                                    <Img
                                      className="h-[17px] w-[11px]"
                                      src="images/img_arrowdown.svg"
                                      alt="arrowdown_Two"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start p-4 w-auto">
                                <div className="flex flex-col gap-[11px] items-center justify-start px-0.5 w-full">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_ab7e2b022a4587ddjpg.png"
                                    alt="ab7e2b022a4587d"
                                  />
                                  <div className="flex flex-row gap-[7.52px] items-center justify-center w-auto">
                                    <Text
                                      className="text-center text-gray-900_01 text-sm w-auto"
                                      size="txtProductSansRegular14Gray90001"
                                    >
                                      Home & Furniture
                                    </Text>
                                    <Img
                                      className="h-[17px] w-[11px]"
                                      src="images/img_arrowdown.svg"
                                      alt="arrowdown_Three"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start p-4 w-auto">
                                <div className="flex flex-col gap-3 items-center justify-start pl-[8.2px] pr-[8.8px] w-auto">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_0ff199d1bd27eb98png.png"
                                    alt="0ff199d1bd27ebNine"
                                  />
                                  <Text
                                    className="text-blue_gray-900 text-center text-sm w-auto"
                                    size="txtProductSansRegular14"
                                  >
                                    Appliances
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start p-4 w-auto">
                                <div className="flex flex-col gap-3 items-center justify-start px-[13px] w-auto">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_71050627a56b4693png.png"
                                    alt="71050627a56b469"
                                  />
                                  <Text
                                    className="text-blue_gray-900 text-center text-sm w-auto"
                                    size="txtProductSansRegular14"
                                  >
                                    Travel
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start p-4 w-auto">
                                <div className="flex flex-col gap-3 items-center justify-start px-[5px] w-full">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_dff3f7adcf3a90c6png.png"
                                    alt="dff3f7adcf3a90c"
                                  />
                                  <div className="flex flex-row gap-[8.16px] items-center justify-center w-auto">
                                    <Text
                                      className="text-center text-gray-900_01 text-sm w-auto"
                                      size="txtProductSansRegular14Gray90001"
                                    >
                                      Beauty, Toys & More
                                    </Text>
                                    <Img
                                      className="h-[17px] w-[11px]"
                                      src="images/img_arrowdown.svg"
                                      alt="arrowdown_Four"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-inter items-start justify-start sm:pl-5 pl-6 pr-4 py-4 w-auto">
                                <div className="flex flex-col gap-3 items-center justify-start w-full">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_05d708653beff580png.png"
                                    alt="05d708653beffFiftyEight"
                                  />
                                  <div className="flex flex-row gap-[8.75px] items-center justify-center w-auto">
                                    <Text
                                      className="text-center text-gray-900_01 text-sm w-auto"
                                      size="txtInterRegular14"
                                    >
                                      Two Wheelers
                                    </Text>
                                    <Img
                                      className="h-[17px] w-[11px]"
                                      src="images/img_arrowdown.svg"
                                      alt="arrowdown_Five"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-gray-200 h-px w-full" />
                          </div>
                        </div>
                      </div>
                      <div className="h-[265px] relative w-[1599px] md:w-full">
                        <div className="bg-white-A700 h-[244px] mx-auto w-full"></div>
                        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-start m-auto w-auto md:w-full">
                          <div className="bg-gray-100_01 flex flex-col items-start justify-start w-auto md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                                <div className="bg-gray-100_01 h-[265px] relative w-[1599px] md:w-full">
                                  <Img
                                    className="absolute h-[265px] inset-[0] justify-center m-auto object-cover w-[1599px] md:w-full"
                                    src="images/img_picturec2d85.png"
                                    alt="picturec2dEightyFive"
                                  />
                                  <div className="absolute bg-white-A700 flex flex-col md:h-auto h-max inset-y-[0] items-center justify-center my-auto pb-[37.35px] pt-[39.34px] px-[14.34px] right-[0] rounded-bl rounded-tl shadow-bs w-10">
                                    <Img
                                      className="h-[11px] w-[11px]"
                                      src="images/img_arrowleft.svg"
                                      alt="arrowleft"
                                    />
                                  </div>
                                  <Img
                                    className="absolute bottom-[0] h-2.5 inset-x-[0] mx-auto object-cover md:w-full"
                                    src="images/img_divcss1dbjc4n.png"
                                    alt="divcss1dbjc4n_One"
                                  />
                                  <div className="absolute bg-white-A700 flex flex-col md:h-auto h-max inset-y-[0] items-center justify-center left-[0] my-auto pb-[37.35px] pt-[39.34px] px-[14.34px] rounded-br rounded-tr shadow-bs w-10">
                                    <Img
                                      className="h-[11px] w-[11px]"
                                      src="images/img_reply.svg"
                                      alt="reply"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col h-[352px] md:h-auto items-start justify-start max-w-[1599px] pb-[29.06px] w-full">
                        <div className="bg-white-A700 flex flex-col items-start justify-start w-auto md:w-full">
                          <div className="flex flex-col items-start justify-start max-w-[1599px] w-full">
                            <div className="flex md:flex-col flex-row gap-1 items-center justify-start max-w-[1599px] pl-4 pr-5 py-[26px] w-full">
                              <div className="flex flex-1 flex-col items-start justify-start max-w-[1491px] md:pr-10 sm:pr-5 pr-[1330px] w-full">
                                <Text
                                  className="text-gray-900 text-xl tracking-[0.50px] w-auto"
                                  size="txtProductSansRegular20"
                                >
                                  Your recently viewed items
                                </Text>
                              </div>
                              <a
                                href="javascript:"
                                className="text-[15px] text-blue-800_cc tracking-[0.50px] w-auto"
                              >
                                <Text size="txtProductSansRegular15">
                                  view all
                                </Text>
                              </a>
                            </div>
                            <div className="bg-white-A700 flex flex-col items-start justify-start w-auto md:w-full">
                              <div className="flex flex-col items-start justify-start max-w-[1599px] w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pb-[3px] pl-[3px] w-full">
                                  <div className="flex flex-col items-start justify-start mb-[9px] px-2 w-[216px]">
                                    <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                      <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                        <Img
                                          className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                          src="images/img_pictureorig.png"
                                          alt="pictureorig"
                                        />
                                      </div>
                                      <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                        <div className="flex flex-col items-start justify-center pl-[35.67px] pr-[35.33px] sm:px-5 w-full">
                                          <Text
                                            className="text-center text-gray-900 text-sm tracking-[0.50px] w-auto"
                                            size="txtProductSansRegular14Gray900"
                                          >
                                            OPPO Reno10 5G
                                          </Text>
                                        </div>
                                        <div className="md:h-5 h-[21px] relative w-full">
                                          <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                          <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.14px] w-auto">
                                            <Text
                                              className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                              size="txtProductSansBold14"
                                            >
                                              incl of offers
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[252px] md:h-[257px] mb-[9px] px-2 relative w-[216px]">
                                    <div className="border border-gray-300 border-solid flex flex-col h-full items-center justify-start m-auto p-[7px] rounded-[10px] w-[200px]">
                                      <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                        <Img
                                          className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                          src="images/img_pictureorig_186x186.png"
                                          alt="pictureorig_One"
                                        />
                                      </div>
                                      <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                        <div className="flex flex-col items-start justify-center pl-[51.22px] pr-[52.78px] md:px-10 sm:px-5 w-full">
                                          <Text
                                            className="text-center text-gray-900 text-sm tracking-[-0.01px] w-auto"
                                            size="txtProductSansRegular14Gray900"
                                          >
                                            Vivo V27 5G
                                          </Text>
                                        </div>
                                        <div className="md:h-5 h-[21px] relative w-full">
                                          <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                          <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.14px] w-auto">
                                            <Text
                                              className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                              size="txtProductSansBold14"
                                            >
                                              incl of offers
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_pictureorig_186x186.png"
                                            alt="pictureorig_Two"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <List
                                    className="md:flex-1 sm:flex-col flex-row font-inter gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 mb-[9px] w-[68%] md:w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="flex flex-col items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_picturegalax.png"
                                            alt="picturegalax"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[11.86px] pr-[11.14px] w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[0.50px] w-auto"
                                              size="txtInterRegular14Gray900"
                                            >
                                              <span className="text-gray-900 font-inter font-normal">
                                                Samsung Galaxy{" "}
                                              </span>
                                              <span className="text-gray-900 font-productsans font-normal">
                                                F54
                                              </span>
                                              <span className="text-gray-900 font-inter font-normal">
                                                {" "}
                                                5G
                                              </span>
                                            </Text>
                                          </div>
                                          <div className="md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.14px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtInterSemiBold14"
                                              >
                                                <span className="text-green-600 font-inter font-semibold">
                                                  incl{" "}
                                                </span>
                                                <span className="text-green-600 font-productsans font-bold">
                                                  of
                                                </span>
                                                <span className="text-green-600 font-inter font-semibold">
                                                  {" "}
                                                  offers
                                                </span>
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col font-productsans items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_pictureg735.png"
                                            alt="pictureg735"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[59.3px] pr-[60.7px] md:px-10 sm:px-5 w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[0.50px] w-auto"
                                              size="txtProductSansRegular14Gray900"
                                            >
                                              Moto G73
                                            </Text>
                                          </div>
                                          <div className="md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.14px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                incl of offers
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col font-inter items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_picturervl3.png"
                                            alt="picturervlThree"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[28.83px] pr-[29.17px] sm:px-5 w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[0.50px] w-auto"
                                              size="txtInterRegular14Gray900"
                                            >
                                              The World of Music
                                            </Text>
                                          </div>
                                          <div className="font-productsans md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pr-[3.41px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                Up to 80% off
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col font-inter items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_pictureg735_186x186.png"
                                            alt="pictureg735"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[47.92px] pr-[48.08px] md:px-10 sm:px-5 w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[0.50px] w-auto"
                                              size="txtInterRegular14Gray900"
                                            >
                                              <span className="text-gray-900 font-inter font-normal">
                                                Motorola
                                              </span>
                                              <span className="text-gray-900 font-productsans font-normal">
                                                {" "}
                                              </span>
                                              <span className="text-gray-900 font-inter font-normal">
                                                G73
                                              </span>
                                            </Text>
                                          </div>
                                          <div className="font-productsans md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.14px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                incl of offers
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col font-inter items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_pictureorig_1.png"
                                            alt="pictureorig"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[47.92px] pr-[48.08px] md:px-10 sm:px-5 w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[0.50px] w-auto"
                                              size="txtInterRegular14Gray900"
                                            >
                                              OPPO Reno8 T 5G
                                            </Text>
                                          </div>
                                          <div className="font-productsans md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.14px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                incl of offers
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </List>
                                  <div
                                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[252px] items-end justify-center mb-[9px] md:pl-10 sm:pl-5 pl-[46px] py-[46px] w-[6%] md:w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group28.png')",
                                    }}
                                  >
                                    <div className="bg-white-A700 flex flex-col h-[88px] md:h-auto items-start justify-center mb-[29px] mt-[41px] pb-[37.35px] pt-[39.34px] px-[14.34px] rounded-bl rounded-tl shadow-bs w-[37px]">
                                      <Img
                                        className="h-[11px] w-[11px]"
                                        src="images/img_arrowleft.svg"
                                        alt="arrowleft_One"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between w-[99%] md:w-full">
                        <div className="bg-white-A700 border border-black-900 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between p-8 sm:px-5 rounded-[20px] w-[68%] md:w-full">
                          <Text
                            className="mb-[409px] ml-1 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[0.50px]"
                            size="txtProductSansRegular30"
                          >
                            Up to 50% off |Sneak peek at the latest arrivals
                            from Local shops
                          </Text>
                          <a
                            href="javascript:"
                            className="text-green-600 text-sm tracking-[0.50px]"
                          >
                            <Text size="txtProductSansBold14">See all</Text>
                          </a>
                        </div>
                        <div className="flex md:h-[509px] h-[512px] sm:h-[911px] justify-end relative w-[32%] md:w-full">
                          <div className="flex flex-col md:gap-10 gap-[174px] h-full items-center justify-start mb-[22px] mt-auto mx-auto w-[68%]">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="mt-[15px] text-center text-gray-900 text-sm tracking-[0.50px]"
                                size="txtProductSansRegular14Gray900"
                              >
                                OPPO Reno10 5G
                              </Text>
                              <Text
                                className="mb-[15px] text-center text-gray-900 text-sm tracking-[0.50px]"
                                size="txtProductSansRegular14Gray900"
                              >
                                OPPO Reno10 5G
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                              <Text
                                className="text-center text-gray-900 text-sm tracking-[0.50px]"
                                size="txtProductSansRegular14Gray900"
                              >
                                OPPO Reno10 5G
                              </Text>
                              <Text
                                className="text-center text-gray-900 text-sm tracking-[0.50px]"
                                size="txtProductSansRegular14Gray900"
                              >
                                OPPO Reno10 5G
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bg-white-A700 border border-black-900 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[21px] sm:px-5 rounded-[20px] w-full">
                            <div className="flex flex-col gap-[35px] justify-start ml-1.5 md:ml-[0] mt-1.5 w-[93%] md:w-full">
                              <Text
                                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[0.50px]"
                                size="txtProductSansRegular30"
                              >
                                Keep shopping for
                              </Text>
                              <div className="flex sm:flex-col flex-row gap-[49px] items-center justify-end md:ml-[0] ml-[25px] w-[95%] md:w-full">
                                <Img
                                  className="h-[177px] md:h-auto object-cover w-[44%] sm:w-full"
                                  src="images/img_rectangle3.png"
                                  alt="rectangleThree"
                                />
                                <Img
                                  className="h-[177px] md:h-auto object-cover w-[44%] sm:w-full"
                                  src="images/img_rectangle4.png"
                                  alt="rectangleFour"
                                />
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[39px] items-start justify-end md:ml-[0] ml-[31px] w-[92%] md:w-full">
                                <Img
                                  className="h-[137px] md:h-auto sm:mt-0 mt-2.5 object-cover w-[45%] sm:w-full"
                                  src="images/img_rectangle5.png"
                                  alt="rectangleFive"
                                />
                                <Img
                                  className="h-[177px] md:h-auto object-cover w-[45%] sm:w-full"
                                  src="images/img_rectangle6.png"
                                  alt="rectangleSix"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:h-[1168px] h-[336px] sm:h-[344px] relative w-[1599px] md:w-full">
                        <div className="bg-white-A700 h-[323px] m-auto w-full"></div>
                        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-start m-auto rounded-[30px] w-auto md:w-full">
                          <div className="flex flex-col items-start justify-start rounded-[30px] w-auto md:w-full">
                            <div className="flex md:flex-col flex-row gap-1 items-center justify-start max-w-[1599px] pl-4 pr-5 py-[26px] w-full">
                              <div className="flex flex-1 flex-col items-start justify-start max-w-[1495px] md:pr-10 sm:pr-5 pr-[1330px] w-full">
                                <Text
                                  className="text-gray-900 text-xl tracking-[-0.02px] w-auto"
                                  size="txtProductSansRegular20"
                                >
                                  <>Related to items you&#39;ve viewed </>
                                </Text>
                              </div>
                              <a
                                href="javascript:"
                                className="text-[15px] text-blue-800_cc tracking-[0.50px] w-auto"
                              >
                                <Text size="txtProductSansRegular15">
                                  view all
                                </Text>
                              </a>
                            </div>
                            <div className="bg-white-A700 flex flex-col items-start justify-start w-auto md:w-full">
                              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pb-1 pl-1 w-full">
                                  <List
                                    className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 mb-2 w-[82%] md:w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="flex flex-col items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_pictureyes2.png"
                                            alt="pictureyesTwo"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[45.39px] pr-[45.61px] md:px-10 sm:px-5 w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[-0.01px] w-auto"
                                              size="txtProductSansRegular14Gray900"
                                            >
                                              Dress Material
                                            </Text>
                                          </div>
                                          <div className="md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[3.5px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                Min 70% Off
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_picture324ee.png"
                                            alt="picture324ee"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[29.75px] pr-[29.25px] sm:px-5 w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[-0.01px] w-auto"
                                              size="txtProductSansRegular14Gray900"
                                            >
                                              Sparx, Bata & more
                                            </Text>
                                          </div>
                                          <div className="md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.22px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                From ₹149
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_picture12y.png"
                                            alt="picture12y"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[14.47px] pr-[15.53px] w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[-0.01px] w-auto"
                                              size="txtProductSansRegular14Gray900"
                                            >
                                              Flaunt in Ethnic Look 🌹
                                            </Text>
                                          </div>
                                          <div className="md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.55px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                Min. 70% Off
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_pictureorig_2.png"
                                            alt="pictureorig"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[4.77px] pr-[4.23px] w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[-0.01px] w-auto"
                                              size="txtProductSansRegular14Gray900"
                                            >
                                              NIKE, New Balance & more
                                            </Text>
                                          </div>
                                          <div className="md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.13px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                Min 50% Off
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_pictureorig_3.png"
                                            alt="pictureorig"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[4.77px] pr-[4.23px] w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[-0.01px] w-auto"
                                              size="txtProductSansRegular14Gray900"
                                            >
                                              NIKE, New Balance & more
                                            </Text>
                                          </div>
                                          <div className="md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.64px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                Min 40-70% Off
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col font-inter items-start justify-start px-2 w-[216px]">
                                      <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[200px]">
                                        <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                          <Img
                                            className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                            src="images/img_picture3254.png"
                                            alt="picture3254"
                                          />
                                        </div>
                                        <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                          <div className="flex flex-col items-start justify-center pl-[26.41px] pr-[27.59px] sm:px-5 w-full">
                                            <Text
                                              className="text-center text-gray-900 text-sm tracking-[-0.01px] w-auto"
                                              size="txtInterRegular14Gray900"
                                            >
                                              Wrangler, Lee, Pepe{" "}
                                            </Text>
                                          </div>
                                          <div className="font-productsans md:h-5 h-[21px] relative w-full">
                                            <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.41px] w-auto">
                                              <Text
                                                className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                                size="txtProductSansBold14"
                                              >
                                                Min. 60% Off
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </List>
                                  <List
                                    className="flex sm:flex-col flex-row justify-start mb-2 overflow-auto px-2 w-[216px]"
                                    orientation="horizontal"
                                  >
                                    <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded w-[216px]">
                                      <div className="flex flex-col items-start justify-center rounded-sm w-[186px]">
                                        <Img
                                          className="h-[186px] md:h-auto object-cover rounded-sm w-[186px]"
                                          src="images/img_picture5aa98.png"
                                          alt="picture5aaNinetyEight"
                                        />
                                      </div>
                                      <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                        <div className="flex flex-col items-start justify-center pl-[19.55px] sm:pr-5 pr-[20.45px] w-full">
                                          <Text
                                            className="text-center text-gray-900 text-sm tracking-[-0.01px] w-auto"
                                            size="txtProductSansRegular14Gray900"
                                          >
                                            Woodland, Crocs, Red{" "}
                                          </Text>
                                        </div>
                                        <div className="md:h-5 h-[21px] relative w-full">
                                          <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                          <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.66px] w-auto">
                                            <Text
                                              className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                              size="txtProductSansBold14"
                                            >
                                              Min. 40% Off
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="border border-gray-300 border-solid flex flex-col items-start justify-start p-[7px] rounded-[10px] w-[216px]">
                                      <div className="relative rounded-sm w-[186px]">
                                        <Img
                                          className="h-[186px] m-auto object-cover rounded-sm w-[186px]"
                                          src="images/img_pictureorig_4.png"
                                          alt="pictureorig"
                                        />
                                        <div className="absolute bg-white-A700 bottom-[9%] flex flex-col h-[88px] md:h-auto items-center justify-center left-[16%] pb-[37.34px] pt-[39.35px] px-[14.34px] rounded-bl-[80px] rounded-tl-[80px] shadow-bs w-10">
                                          <Img
                                            className="h-[11px] w-[11px]"
                                            src="images/img_arrowleft.svg"
                                            alt="arrowleft"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-[52px] md:h-auto items-start justify-start pt-[11px] w-full">
                                        <div className="flex flex-col items-start justify-center pl-[17.38px] pr-[17.62px] w-full">
                                          <Text
                                            className="text-center text-gray-900 text-sm tracking-[-0.01px] w-auto"
                                            size="txtProductSansRegular14Gray900"
                                          >
                                            ADIDAS, PUMA & more
                                          </Text>
                                        </div>
                                        <div className="font-inter md:h-5 h-[21px] relative w-full">
                                          <div className="absolute bg-white-A700 bottom-[0] h-5 inset-x-[0] mx-auto w-full"></div>
                                          <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[4.13px] w-auto">
                                            <Text
                                              className="text-center text-green-600 text-sm tracking-[-0.01px] w-auto"
                                              size="txtInterSemiBold14"
                                            >
                                              Min 50% Off
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </List>
                                  <div className="h-[252px] mb-2 w-[6%]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WwwflipkartcombyhtmltodesignFREEversion1208Page;
