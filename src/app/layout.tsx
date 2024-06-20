import React, { ReactNode } from 'react'
import './globals.css'

interface LayoutProps {
    children: ReactNode
}
export default function layout(props: LayoutProps) {
    const { children } = props;
    return children
}