import { cn } from '@/utils/className'

interface LoaderPropsType {
    className?: string
}

export default function Loader({ className }: LoaderPropsType) {
    const baseClasses = 'size-8 border-2 border-black border-t-transparent rounded-full animate-spin'

    const classes = cn(
        baseClasses,
        className
    )

    return (
        <div className="flex items-center justify-center">
            <div className={classes}></div>
        </div>
    )
}
