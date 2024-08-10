'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { EmailAddress } from '@clerk/nextjs/server';
import { Input } from '../ui/input';

export default function Setup () {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      website:""
    },
  });


  const onSubmit = async (data : any) => {
      console.log(data.website)
      router.push(`/chat/${data.website}`)
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
             Chatbot Service By Lindy 
          </h1>
          <p className="mb-4">Enter the website to use as a context</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="website"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>website</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full hover:bg-slate-500' type="submit">Generate</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}