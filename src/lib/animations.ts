export const animImageLeftVariants = {
  hidden: {
    x: -160,
    opacity: 0,
    scale: 0.94,
    filter: "blur(10px)"
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 45,
      damping: 14,
      duration: 0.9
    }
  }
};

export const animImageRightVariants = {
  hidden: {
    x: 160,
    opacity: 0,
    scale: 0.94,
    filter: "blur(10px)"
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 45,
      damping: 14,
      duration: 0.9
    }
  }
};

export const animTextLeftVariants = (delay = 0) => ({
  hidden: {
    x: -180,
    y: 10,
    opacity: 0,
    filter: "blur(4px)"
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 45,
      damping: 14,
      duration: 0.8,
      delay
    }
  }
});

export const animTextRightVariants = (delay = 0) => ({
  hidden: {
    x: 180,
    y: 10,
    opacity: 0,
    filter: "blur(4px)"
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 45,
      damping: 14,
      duration: 0.8,
      delay
    }
  }
});
