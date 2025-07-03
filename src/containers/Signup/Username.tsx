"use client"

import Button from "@/components/Button"
import Loader from "@/components/Loader"
import { useUsernameQuery } from "@/hooks/useUsernameQuery"
import { useUserStore } from "@/store/useUserStore"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io"

const Username = () => {
    const [debouncedInput, setDebouncedInput] = useState('');
    const [showValidation, setShowValidation] = useState(false);
    const [localError, setLocalError] = useState<string | null>(null);
    const [lastErrorUsername, setLastErrorUsername] = useState<null | string>(null);

    const { data, isLoading, error } = useUsernameQuery(debouncedInput);
    const { username, setUsername, setCurrentPage } = useUserStore()

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInput(username);
            setShowValidation(username.length > 0);
        }, 500);
        return () => clearTimeout(handler);
    }, [username]);

    useEffect(() => {
        if (showValidation) {
            if (debouncedInput.length < 5 || debouncedInput.length > 30) {
                setLocalError("Username must be between 5 and 30 characters.");
            } else {
                setLocalError(null);
            }
        }
    }, [debouncedInput, showValidation]);

    useEffect(() => {
        if (error && !localError) {
            setLastErrorUsername(debouncedInput);
        } else {
            setLastErrorUsername(null);
        }
    }, [error, debouncedInput, localError]);

    // ✅ Form Submit Handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValidLength = username.length >= 5 && username.length <= 30;

        if (!isValidLength) {
            setLocalError("Username must be between 5 and 30 characters.");
            return;
        }

        if (error || !data) {
            setLastErrorUsername(username);
            return;
        }

        setCurrentPage(2);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center h-full">

            <div className="flex flex-col items-start">
                <h2 className="font-semibold md:text-3xl text-xl">Create an account</h2>
                <p className="md:text-sm text-xs text-neutral-600">
                    Choose a username for your page.
                </p>

                <div className="mt-4 relative">
                    <h3 className="font-medium md:text-sm text-xs absolute top-3 left-4">
                        buymeachiya.vercel.app/
                    </h3>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="yourname"
                        className={clsx(
                            "w-[32rem] bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs pl-[12.75rem]",
                            data ? "focus:ring-green-500" :
                                (error || localError) ? "focus:ring-red-500" :
                                    "focus:ring-black"
                        )}
                    />
                    {isLoading && <Loader className="absolute size-4 right-3 top-3.5" />}
                    {data && <IoIosCheckmarkCircle className="size-5 absolute right-2.5 top-3 text-green-500" />}
                    {(error || localError) && <IoIosCloseCircle className="size-5 absolute right-2.5 top-3 text-red-500" />}
                </div>

                {localError && (
                    <p className="text-xs text-red-400 mt-2">{localError}</p>
                )}

                {lastErrorUsername && (
                    <p className="text-xs text-red-400 mt-2">
                        The username {lastErrorUsername} is already taken.
                    </p>
                )}
            </div>

            <Button
                type="submit"
                className="absolute bottom-6 right-6 bg-[var(--yellow)] px-12 py-4"
            >
                Sign up
            </Button>
        </form>
    )
}

export default Username
