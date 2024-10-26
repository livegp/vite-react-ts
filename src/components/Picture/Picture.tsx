import type React from 'react';

interface PictureType {
  img: {
    src: string;
    w: number;
    h: number;
  };
  sources: {
    [key: string]: string;
  };
}

export const Picture = ({ img, sources }: PictureType): React.JSX.Element => (
  <picture>
    {Object.entries(sources).map(([format, srcSet]) => (
      <source key={format} srcSet={srcSet} type={`image/${format}`} />
    ))}
    <img src={img.src} alt='Example' width={img.w} height={img.h} />
  </picture>
);
