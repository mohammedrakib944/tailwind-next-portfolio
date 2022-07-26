export const pAnimate = {
  offscreen: { opacity: 0, y: -50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

export const pAnimateY = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

export const Iam = {
  offscreen: { opacity: 0, x: 200 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

export const emoji = {
  offscreen: { scale: 0 },
  onscreen: {
    scale: 1,
    transition: { type: "spring", bounce: 0.4, delay: 1 },
  },
};
export const popUp = {
  offscreen: { scale: 0 },
  onscreen: {
    scale: 1,
    transition: { type: "spring", bounce: 0.4 },
  },
};

export const imgAnimate = {
  offscreen: { rotate: 30, opacity: 0, x: 100 },
  onscreen: {
    rotate: 0,
    opacity: 1,
    x: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};
