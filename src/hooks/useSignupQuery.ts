import { signup } from "@/api/auth"
import User from "@/types/User"
import { useMutation } from "@tanstack/react-query"

export const useSignupQuery = (options = {}) => {
    return useMutation({
        mutationFn: (formData: Partial<User>) => signup(formData),
        ...options,
    })
}
