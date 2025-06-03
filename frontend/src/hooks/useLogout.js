import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { logout } from '../lib/api';

const useLogout = () => {
     const queryClient = useQueryClient();
    
        const {mutate, isPending, error} = useMutation({
            mutationFn: logout,
            onSuccess: () => queryClient.invalidateQueries({queryKey: ["authUser"]})
        })
  return {isPending, error, logoutMutation: mutate};
}

export default useLogout
