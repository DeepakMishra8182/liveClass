import React from 'react'
import { APP_CONFIG } from '../../utils/constants'

const WelcomeSection = ({userName}) => {
  return (
    <div className='mb-12 text-center'>
        <h2 className='mb-3 text-4xl font-bold text-white-200'>
            {APP_CONFIG.DASHBOARD_CONTENT.WELCOME.GREETING.replace('{userName}',userName)}
        </h2>

        <p className='text-lg text-blue-600'>
            {APP_CONFIG.DASHBOARD_CONTENT.WELCOME.DESCRIPTION}
        </p>

    </div>
  )
}

export default WelcomeSection