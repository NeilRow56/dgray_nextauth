"use client"

import { useCallback, useState } from "react"
import {
    FieldValues, 
    SubmitHandler, 
    useForm
 } from "react-hook-form"
import Input from "./Input"


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
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form
         onSubmit={handleSubmit(onSubmit)}
         className="space-y-6"
         >
            { variant === 'REGISTER' && (
         <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id='name'
              label='Name'
            />
            )}
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id='email'
            label='Email address'
            type='email'
          />
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id='password'
            label='Password'
            type='password'
          />
          
        </form>
      </div>
    </div>
  )
}

export default AuthForm
