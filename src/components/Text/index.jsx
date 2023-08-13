import React from "react";

const sizeClasses = {
  txtProductSansRegular30: "font-normal font-productsans",
  txtInterSemiBold14: "font-inter font-semibold",
  txtProductSansRegular20: "font-normal font-productsans",
  txtProductSansRegular15: "font-normal font-productsans",
  txtProductSansRegular16: "font-normal font-productsans",
  txtProductSansRegular14Gray90001: "font-normal font-productsans",
  txtProductSansRegular14: "font-normal font-productsans",
  txtProductSansRegular14Gray900: "font-normal font-productsans",
  txtInterItalic12: "font-inter font-normal italic",
  txtProductSansBold14: "font-bold font-productsans",
  txtInterRegular14Gray900: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterItalic12AmberA400: "font-inter font-normal italic",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
