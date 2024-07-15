'use client'

import React, { useState } from 'react'

export const SubClientComponent = () => {
    const [state, setState] = useState('initial')
    return <div>{state}

    <button onClick={() => setState('clicked sub')}>Sub Click me</button>
    </div>
}
