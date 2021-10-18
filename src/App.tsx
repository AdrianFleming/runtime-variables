import React from 'react';
import { env } from './env'

export default function App() {
    return (
        <div style={{ backgroundColor: env.REACT_APP_COLOR }}>
            <span>{env.REACT_APP_MAIN_TEXT}</span>
        </div>
    );
}
