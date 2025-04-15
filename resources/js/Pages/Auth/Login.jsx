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

            <div className="min-h-screen bg-[#FFF9F0] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-lg p-10 border border-[#E0D4B9]">
                    <div>
                        <h2 className="text-center text-3xl font-bold text-[#4B2E2E]">
                            Welcome <span className="text-[#A0522D]">Admin</span> ☕
                        </h2>
                        <p className="mt-2 text-center text-sm text-[#6B4F4F]">
                            Log in to continue your journey
                        </p>
                        {status && (
                            <div className="mt-4 text-sm font-medium text-green-600 text-center">
                                {status}
                            </div>
                        )}
                    </div>

                    <form onSubmit={submit} className="mt-8 space-y-6">
                        {/* Email */}
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <div className="relative mt-1">
                                <FiMail className="absolute left-4 top-3 text-[#A0522D]" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="pl-12 w-full border-[#D2B48C] focus:ring-[#A0522D] focus:border-[#A0522D] rounded-md py-2 px-4 text-[#4B2E2E]"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                            </div>
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        {/* Password */}
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <div className="relative mt-1">
                                <FiLock className="absolute left-4 top-3 text-[#A0522D]" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="pl-12 w-full border-[#D2B48C] focus:ring-[#A0522D] focus:border-[#A0522D] rounded-md py-2 px-4 text-[#4B2E2E]"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                            </div>
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm text-[#6B4F4F]">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2">Remember me</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-[#A0522D] hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        {/* Tombol Login */}
                        <div>
                            <PrimaryButton
                                className="w-full bg-[#A0522D] hover:bg-[#8B4513] text-white py-2 rounded-md font-semibold transition duration-300"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </div>

                        {/* Link ke Register */}
                        <p className="text-center text-sm text-[#6B4F4F] mt-4">
                            Don't have an account?{' '}
                            <Link href={route('register')} className="text-[#A0522D] font-semibold hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
