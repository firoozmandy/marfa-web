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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { QuotationFormSchema } from "@/lib/schema";
import { Spinner } from "@/components/icons/icons";
import SectionTitle from "@/components/sections/section-title";

type FormInputs = z.infer<typeof QuotationFormSchema>;

export default function QuotationForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormInputs>({
    resolver: zodResolver(QuotationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(formData: FormInputs) {
    startTransition(() => {
      console.log(formData)
      toast.success("Email sent!");
      form.reset();
    });
  }

  return (
    <div className="relative z-[1] bg-white dark:bg-slate-900 mx-auto px-[12%] py-[8%] rounded max-w-4xl">
      <SectionTitle
        subtitle="تو لیاقت بیشتری داری ما ثابت کرده ایم که ارائه می دهیم"
        sectionClasses="mx-auto max-w-xl text-center mb-12"
        titleClasses="mb-3 text-center"
        subtitleClasses="text-md font-medium"
      >
        آنالیز رایگان سئو را دریافت کنید
      </SectionTitle>
      <Form {...form}>
        <form
          className="flex flex-col mt-10 dark:text-black"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
            <div className="mb-6 w-full lg:w-1/2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">نام</FormLabel>
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
          <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
            <div className="mb-6 w-full lg:w-1/2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">تلفن</FormLabel>
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
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">وب سایت</FormLabel>
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
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">
                  (های)علاقه مند به خدمات 
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="لطفا یک گزینه را انتاب کنید." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="SEO">SEO</SelectItem>
                      <SelectItem value="PPC">PPC</SelectItem>
                      <SelectItem value="Content Marketing">
                        Content Marketing
                      </SelectItem>
                      <SelectItem value="Google Ads">Google Ads</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      placeholder="چه کمکی برای رشد شرکت خود لازم دارید؟"
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
              <span>سوالات متداول</span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
