import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image';
import SignInComponent from './SignInComponent';



async function SignInPage() {
    const providers = await getProviders();


    return (
        <div className='grid justify-center p-10'>
            <div>
                <Image
                    className='rounded-full mb-10 mx-2 object-cover'
                    width={300}
                    height={300}
                    src="https://res.cloudinary.com/newztrakerapplication/image/upload/v1671651782/Offers-page-Facebook-logo-_lqfeit.png"
                    alt="Profile Picture"
                />
            </div>
            <SignInComponent providers={providers} />
        </div>
    )
}

export default SignInPage