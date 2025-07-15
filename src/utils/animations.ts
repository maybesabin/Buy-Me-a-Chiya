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