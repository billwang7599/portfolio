// Button.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

type ButtonProps = {
    children: React.ReactNode;
    border?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, border }) => (
    <motion.button
        className={cn(
            "font-bold rounded text-accent-dark hover:text-secondary",
            border
                ? "border border-primary py-2 px-4 hover:bg-primary hover:text-bg"
                : "",
        )}
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </motion.button>
);
