import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { NewsletterFormSchema } from "@/lib/schema";
import { Spinner } from "../icons/icons";

export type FormInputs = z.infer<typeof NewsletterFormSchema>;

const NewsletterForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormInputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: FormInputs) {
    startTransition(() => {
      console.log(values)
      toast.success("You have been subscribed to our newsletter.");
      form.reset();
    });
  }

  return (
    <div className="rounded-md bg-muted px-8 py-10 shadow-lg dark:bg-slate-800 dark:shadow-slate-850/20 md:px-16 md:pb-5">
      <h2 className="mb-8 text-lg">
        Get the free checklist, 7 ways to improve your business
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="block md:flex md:space-x-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-5 flex-1 space-y-0">
                <div className="relative mb-2">
                  <FormControl>
                    <Input
                      className="material-input rounded-none border-0 border-b-[1px] border-slate-300 bg-transparent px-0 dark:border-slate-600 dark:bg-transparent"
                      placeholder="Name"
                      required
                      {...field}
                    />
                  </FormControl>
                  <span className="material-input__underline"></span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative mb-5 flex-1 space-y-0">
                <div className="relative mb-2">
                  <FormControl>
                    <Input
                      className="material-input rounded-none border-0 border-b-[1px] border-slate-300 bg-transparent px-0 dark:border-slate-600 dark:bg-transparent"
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <span className="material-input__underline"></span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Spinner className="mr-2 h-5 w-5 animate-spin" />
                <span>Free Download</span>
              </>
            ) : (
              <span>Free Download</span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsletterForm;
