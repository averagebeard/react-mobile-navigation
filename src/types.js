// @flow

export type Theme = {
  bars: {
    color: string,
    height: number,
    radius: number,
  },
  hamburger: {
    dimensions: number,
    inline: boolean,
    location: string,
    slide: boolean,
  },
  linkContainer: {
    color: string,
    maxWidth: number,
    padding: number,
    allowToggle: boolean,
    speed: number,
    transition: string,
    vertical: boolean,
    width: number,
  },
  topBar: {
    color: string,
    display: boolean,
    height: number,
    gutter: number,
    locked: boolean,
  },
};

export type Transition = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
