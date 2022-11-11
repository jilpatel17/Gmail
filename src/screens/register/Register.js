import React, { useState } from 'react'

import { FormControl, FormLabel, Input, FormHelperText, Button, InputGroup, HStack, RadioGroup, Radio, FormErrorMessage, InputRightElement, WrapItem } from '@chakra-ui/react'
import './Register.css'
const Register = () => {


    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''
    return (
        <div className='register__'>
            <div className='register__area'>
                <div className='register__img'>
                    <img src='login.jpg' alt="" />
                </div>
                <div className='register__component'>
                    <div style={{width:'80%'}}>
                        <FormControl style={{ marginBottom: '8px' }}>
                            <FormLabel>Name</FormLabel>
                            <Input type='email' />

                        </FormControl>
                        <FormControl style={{ marginBottom: '8px' }}>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type='number' />

                        </FormControl>
                        <FormControl as='fieldset' style={{ marginBottom: '8px' }}>
                            <FormLabel as='legend'>Gender</FormLabel>
                            <RadioGroup defaultValue='Male'>
                                <HStack spacing='24px'>
                                    <Radio value='Male'>Male</Radio>
                                    <Radio value='Female'>Female</Radio>
                                    <Radio value='Other'>Other</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl isInvalid={isError} style={{ marginBottom: '8px' }}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type='email'
                                value={input}
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
                            <FormLabel>Email address</FormLabel>
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

export default Register