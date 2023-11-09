import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

const TestimonialCard = ({ image, name, comment }: any) => {
    return (
        <Card className='py-2'>
            <CardContent>
                <div className='flex items-center justify-center gap-3'>
                    <Image
                        src={image}
                        alt={name}
                        width={120}
                        height={120}
                        className='object-contain rounded-full shadow-md'
                    />
                    <div className='flex items-center justify-start text-start flex-col'>
                        <p className='text-sm text-muted-foreground'>{comment}</p>

                        <h3 className='text-start flex justify-start mt-2 font-semibold text-lg'>{name}</h3>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default TestimonialCard