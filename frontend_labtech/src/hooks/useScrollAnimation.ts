import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(threshold = 0.15) {
    const { ref, inView } = useInView({
        threshold,
        triggerOnce: true,   // anima solo la primera vez que entra al viewport
    })
    return { ref, inView }
}