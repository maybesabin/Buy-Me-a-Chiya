export const staggerText = (idx: number, duration = 0.20, delay = 0.02) => ({
    initial: { filter: "blur(10px)", opacity: 0, y: 12 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    transition: {
        duration,
        delay: delay * idx,
    },
});


export const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 100, y: 0 },
    viewport: { once: true, amount: 0.6 },
    whileInView: "animate"
}

export const fadeDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 100, y: 0 },
    viewport: { once: true, amount: 0.6 },
    whileInView: "animate"
}