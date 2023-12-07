import React, { useState } from 'react';

interface Props {
    condition?: boolean
    children: JSX.Element|JSX.Element[]
}

export default function If({ condition, children }: Props) {
    return (condition && children);
}