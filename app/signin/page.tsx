import { Metadata } from 'next'
import { LoginGoogleButton } from '@/components/ui/LoginButton'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: "Sign In",
}

const SignPage = () => {
  return (
    <div className="min-h-screen flex items-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription className="text-gray-500">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginGoogleButton />
        </CardContent>
      </Card>
    </div>
  )
}

export default SignPage