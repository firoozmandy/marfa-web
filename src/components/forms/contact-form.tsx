import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema";
import { Spinner } from "@/components/icons/icons";

type FormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormInputs) {
    startTransition(() => {
      console.log(data)
      toast.success("Email sent!");
      form.reset();
    });
  }

  return (
    <div className="relative z-10 bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-950/40 mx-auto -mt-20 px-[7%] py-10 md:py-[5%] rounded-md max-w-4xl">
      <div className="container">
        <ul className="space-y-1 mb-6 text-center text-sm">
          <li>
            <address className="-mt-px leading-6">
مازندران ساری
            </address>
          </li>
          <li>
            <span>تلفن: </span>
            <a href="tel:+1-800-1554-456-123" className="hover:text-primary">
              09199270177
            </a>
          </li>
          <li>
            <span>Email: </span>
            <a href="mailto:hi@margin.com" className="hover:text-primary">
            marya.firooz.1380@gmail.com

            </a>
          </li>
        </ul>
        <Form {...form}>
          <form
            className="flex flex-col dark:text-black"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-wrap lg:flex-nowrap gap-2 lg:space-x-8">
              <div className="mb-6 w-full lg:w-1/2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold dark:text-white">نام</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-6 w-full lg:w-1/2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-white">ایمیل</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mb-6">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">پیام</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="چه کمکی برای رشد شرکت لازم دارید؟"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? (
                <>
                  <Spinner className="mr-2 w-5 h-5 animate-spin" />
                  <span>ارسال</span>
                </>
              ) : (
                <span> ارسال پیام</span>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
