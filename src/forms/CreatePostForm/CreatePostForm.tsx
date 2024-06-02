import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/Components/ui/form";
import { Textarea } from "@/Components/ui/textarea";
import FileUploader from "./FileUploader";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

const formSchema = z.object({
  caption: z.string().min(20, "You should provide a caption."),
  location: z.string().min(1),
  //   tags: z.array(),
});

const CreatePostForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(formData: z.infer<typeof formSchema>) {
    console.log(formData);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Caption*</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="type..."
                  className="rounded-[10px]"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FileUploader />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} className="rounded-[10px]" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Tags (seperate by "," )</FormLabel>
              <FormControl>
                <Input {...field} className="rounded-[10px]" />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex w-full justify-around border-2 border-red-100 md:justify-center md:gap-3">
          <Button className="outline-saffron" type="button" variant="outline">
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-saffron text-white hover:bg-bgreen"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreatePostForm;
