export default {
  top: {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(0, -${start}px)`,
    getEndStyle: (end = 0) => `translate(0, ${end}px)`,
  },
  bottom: {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(0, ${start}px)`,
    getEndStyle: (end = 0) => `translate(0, ${end}px)`,
  },
  left: {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(-${start}px, 0)`,
    getEndStyle: (end = 0) => `translate(${end}px, 0)`,
  },
  right: {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(${start}px, 0)`,
    getEndStyle: (end = 0) => `translate(${end}px, 0)`,
  },
};