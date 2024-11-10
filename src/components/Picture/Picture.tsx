import type { FC } from 'react';

interface PictureType {
  picture: {
    img: {
      src: string;
      w: number;
      h: number;
    };
    sources: {
      [key: string]: string;
    };
  };
}

export const Picture: FC<PictureType> = ({
  picture: {
    img: { src, w, h },
    sources,
  },
}) => (
  <picture>
    {Object.entries(sources).map(([format, srcSet]) => (
      <source key={format} srcSet={srcSet} type={`image/${format}`} />
    ))}
    <img
      src={src}
      alt='Example'
      width={w}
      height={h}
      loading='eager'
      title='Example Image'
    />
  </picture>
);
