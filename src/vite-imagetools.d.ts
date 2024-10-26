declare module '*&as=picture' {
  const img: {
    src: string;
    w: number;
    h: number;
  };
  const sources: {
    [key: string]: string;
  };
  export { img, sources };
}
