import Link from "next/link";

export default function ForgetPassword(){
    return(
        <main>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto"
                src="logo.png"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                
    
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                     Continue<i className="bi bi-arrow-right font-black ml-2"></i>
                  </button>
                </div>
              </form>
    
              <p className="mt-8 text-center text-sm text-gray-500">
                Remember password?{' '}
                <Link href="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                  Login
                </Link>
              </p>
              <p className="my-2 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link href="/signup" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </main>
    )
}