import { login } from "@/api/auth"
import User from "@/types/User"
import { useMutation } from "@tanstack/react-query"

export const useLoginQuery = (options = {}) => {
    return useMutation({
        mutationFn: (formData: Partial<User>) => login(formData),
        ...options
    })
}