"use client"

import { useCallback, useState } from "react"
import {
    FieldValues, 
    SubmitHandler, 
    useForm
 } from "react-hook-form"

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {

    const [ variant, setVariant ] = useState<Variant>('LOGIN')
    const [ isLoading, setIsLoading ] = useState( false )

    const toggleVariant = useCallback(() => {
        if( variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [ variant ] )

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""

        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if( variant === 'REGISTER') {
        // axios Register
        }

        if(variant === 'LOGIN') {
            // NextAuth sign In
        }

    }

  return (
    <div>
      Auth Form2
    </div>
  )
}

export default AuthForm
