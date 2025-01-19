import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

interface FramerTransitionProps {
  children: ReactElement;
}

const FramerTransition: FC<FramerTransitionProps> = ({children}) => (
	<>
		{children}
		<motion.div
			className="slide-in"
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 0 }}
			exit={{ scaleY: 1 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
		/>
		<motion.div
			className="slide-out"
			initial={{ scaleY: 1 }}
			animate={{ scaleY: 0 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
		/>
	</>
)

const useFramerTransition = (OgComponent: ReactElement): FC => {
  const DynamicComponent: FC = () => (
    <FramerTransition>{OgComponent}</FramerTransition>
  );

  return DynamicComponent;
};

export default useFramerTransition