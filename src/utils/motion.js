export const textVariant = (delay) => {
    return {
        hidden: {
            opacity: 0,
            scale: 0.5,
            y: 20,
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeOut",
            },
        },
    };
};

export const textVariant2 = (delay) => {
    return {
        hidden: {
            opacity: 0,
            scale: 1,
        
            y: -10,
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1.5,
                delay: delay,
                ease: "easeOut",
            },
        },
    };
};


export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        }
    },
};

export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

export const variants = {
    visible: {
        scale: 1.1,
        boxShadow: "10px 10px 0 rgba(0,0,0,0.2)",
        y: -50,
        x: -100,
        cursor: "pointer",
        transition: { duration: 1, type: "spring" },
    },
    hidden: { scale: 1, opacity: 0 },
};