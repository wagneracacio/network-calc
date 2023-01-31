export const ipv4_calc = () => {
  const ip = "10.0.0.1/24";
  const matches = ip.matchAll(/(\d*).(\d*).(\d*).(\d*)/g);
  console.log(matches);
};
