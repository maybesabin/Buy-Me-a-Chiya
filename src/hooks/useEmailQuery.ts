import { checkEmail } from "@/api/checkEmail"
import { useMutation } from "@tanstack/react-query"

export const useEmailQuery = (options = {}) => {
    return useMutation({
        mutationFn: (email: string) => checkEmail(email),
        ...options,
    })
}