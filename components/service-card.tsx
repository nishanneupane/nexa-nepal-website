import { ArrowRight, LucideIcon } from 'lucide-react'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    link: string;
}
export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className=' flex justify-around space-x-3'>
                        <Icon className='w-10 h-10' />
                        <h2 className='font-bold text-blue-700 text-3xl'>{title}</h2>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardDescription>
                <p className='ms-16 text-slate-500'>
                    {description}
                </p>

                <Button variant={"ghost"} className='ms-12 text-blue-700 font-semibold'>
                    Discover More
                    <ArrowRight className='h-4 w-4 ml-2' />
                </Button>
            </CardDescription>
        </Card>
    )
}
