import React from "react";

export default function PreLoader() {
  const Loaders = [
    "lf20_skubx35o",
    "lf20_zjihqths",
    "lf20_ajnj9aqh",
    "lf20_mniampqn",
    "lf20_z2jkGi",
    "lf20_fwabdv2k",
    "lf20_xpJbLw",
    "lf20_RGolH6",
    "lf20_odwhwstq",
    "lf20_ccpdxyfc",
    "lf20_cgxasnue",
    "lf20_q7uarxsb",
    "lf20_wvwimamz",
    "lf20_kk62um5v",
    "lf20_lyw2wdhp",
    "lf20_mlf754me",
    "lf20_tndxgun7",
    "lf20_zwijnhaz",
    "lf20_garuasok",
    "lf20_hgyzozdw",
    "lf20_s2hgc4i9",
  ];
  return (
    <lottie-player
      src={`https://assets9.lottiefiles.com/packages/${
        Loaders[Math.floor(Math.random() * Loaders.length)]
      }.json`}
      background="transparent"
      speed="1"
      style={{ width: "300px", height: "300px" }}
      loop
      autoplay
    ></lottie-player>
  );
}
