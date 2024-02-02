'use client';

import { useRouter } from 'next/navigation';
// import { Icons } from "@/components/icons"
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface AuthFormProps {
  buttonContent: string;
}

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1, { message: 'password is required' }),
  })
  .required({ email: true, password: true });

type AuthFormValues = z.infer<typeof formSchema>;

export default function AuthForm({ buttonContent }: AuthFormProps) {
  const router = useRouter();

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    router.push('/home');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid gap-4'>
          <div className='grid grid-cols-2 gap-6'>
            <Button variant='outline'>
              {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
              Github
            </Button>
            <Button variant='outline'>
              {/* <Icons.google className="mr-2 h-4 w-4" /> */}
              Google
            </Button>
          </div>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='m@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='*****' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='mt-4'>
          <Button type='submit' className='w-full'>
            {buttonContent}
          </Button>
        </div>
      </form>
    </Form>
  );
}
