'use client'

import React, { useState } from 'react'

export type Props = {
    SubComponent?: React.FC<any>
}

export const ClientComponent: React.FC<Props> = (props) => {
    const {SubComponent} = props
    const [state, setState] = useState('initial')
    return <div>{state}

    <button onClick={() => setState('clicked')}>Click me</button>
        <div>
            Child:
            {SubComponent ? <SubComponent /> : <p>None</p>}
        </div>
    </div>
}
