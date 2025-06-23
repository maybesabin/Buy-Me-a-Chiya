import { checkUsername } from "@/api/checkUsername"
import { useQuery } from "@tanstack/react-query"

export const useUsernameQuery = (username: string, options = {}) => {
    return useQuery({
        queryKey: ['check-username', username],
        queryFn: () => checkUsername(username),
        retry: 1,
        enabled: !!username && username.length >= 5 && username.length <= 30,
        ...options,
    })
}