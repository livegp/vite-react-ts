import type { FC } from 'react';

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

export const Picture: FC<PictureType> = ({ img, sources }) => (
  <picture>
    {Object.entries(sources).map(([format, srcSet]) => (
      <source key={format} srcSet={srcSet} type={`image/${format}`} />
    ))}
    <img src={img.src} alt='Example' width={img.w} height={img.h} />
  </picture>
);
