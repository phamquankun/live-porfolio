import { MotionProps, motion } from "framer-motion";
import * as React from "react";
import { useInView } from "react-intersection-observer";

interface IMotionDivProps {
  children: React.ReactNode;
  className: string;
  motionProps?: MotionProps;
}

export const MotionDiv: React.FunctionComponent<IMotionDivProps> = ({
  children,
  className,
  motionProps,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        repeat: 0,
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
