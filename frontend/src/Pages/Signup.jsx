import React from 'react'
import SignupFrame1 from '../assets/SignupImage.png'

export default function Signup() {
  return (

    <div className='Signup flex  w-full '>
      	<div className=' border-2 SignupFrame1 flex justify-center w-1/2'>
			<img src={SignupFrame1} className='border' alt="" />
      	</div>
	
      	<div className='  border  w-1/2' >

			<div id = "SignupFrame2" className='border'>
				<p className='font-bold text-2xl mt-20'>Sign Up And Start <br />Learning</p>
			</div>

			<div>
				<form action="" name = "Signupform">
					<input type="text" className='w-ful' />
					<input type="text" className='w-ful'/>
				</form>
			</div>

      	</div>
    </div>
  )
}

