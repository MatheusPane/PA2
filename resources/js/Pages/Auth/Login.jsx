import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { FiMail, FiLock } from 'react-icons/fi';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>

                {/* Email */}
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <div className="relative mt-1">
                        <FiMail className="absolute left-4 top-3 text-gray-400 text-lg" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="pl-12 w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg py-2 px-4"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>
                    <InputError message={errors.email} className="mt-2" />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <div className="relative mt-1">
                        <FiLock className="absolute left-4 top-3 text-gray-400 text-lg" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="pl-12 w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg py-2 px-4"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between mt-4">
                    <label className="flex items-center text-sm">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-gray-600">Remember me</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-indigo-600 font-semibold hover:underline"
                        >
                            Forgot password?
                        </Link>
                    )}
                </div>

                {/* Tombol Login */}
                <div className="mt-6">
                    <PrimaryButton
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition duration-300"
                        disabled={processing}
                    >
                        Log in
                    </PrimaryButton>
                </div>

                {/* Link ke Register */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link href={route('register')} className="text-indigo-600 font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>

            </form>
        </GuestLayout>
    );
}
