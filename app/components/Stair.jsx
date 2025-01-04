import { motion } from 'framer-motion'
import React from 'react'

const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: "100%" }, // Removed array for smoother behavior
  }

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stair = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                    />
                );
            })}
        </>
    );
}

export default Stair;