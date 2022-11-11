import React, { useState } from 'react'
import { FormControl, FormLabel, Input, FormHelperText, Button, InputGroup, FormErrorMessage, InputRightElement, WrapItem } from '@chakra-ui/react'
import './Login.css'
const Login = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''
    return (
        <div className='login__'>
            <div className='login__area'>
                <div className='login__img'>
                    <img src='login.jpg' alt="" />
                </div>
                <div className='login__component'>
                    <div style={{width:'80%'}}>
                        <FormControl isInvalid={isError} style={{ marginBottom: '8px' }}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type='email'
                                value={input}
                                placeholder='Enter Email Id.'
                                onChange={handleInputChange}
                            />
                            {!isError ? (
                                <FormHelperText>
                                    Enter the email you'd like to receive the newsletter on.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl style={{ marginBottom: '8px' }}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <WrapItem style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ width: "100%" }} colorScheme='red'>Login</Button>
                        </WrapItem>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login