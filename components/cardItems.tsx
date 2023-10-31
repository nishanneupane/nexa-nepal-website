import { LucideIcon } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface CardItemProps {
    icon: LucideIcon;
    title: string;
}
export default function CardItems({ icon: Icon, title }: CardItemProps) {
    return (
        <Card className='flex items-center justify-center'>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardContent>
                    <Icon className='h-10 w-10' />
                </CardContent>
            </CardHeader>
        </Card>
    )
}
