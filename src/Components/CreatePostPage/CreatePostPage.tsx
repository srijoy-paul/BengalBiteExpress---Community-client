import RootLayout from "@/Layouts/RootLayout";
import CreatePostForm from "@/forms/CreatePostForm/CreatePostForm";
import { LuImagePlus } from "react-icons/lu";

export const CreatePostPage = () => {
  return (
    <RootLayout>
      <div className=" flex flex-col h-full space-y-3" style={{ flex: "1" }}>
        <div className="flex gap-1">
          <LuImagePlus size={25} />{" "}
          <h2 className="font-semibold ">What are you Cooking today ?</h2>
        </div>
        <CreatePostForm />
      </div>
    </RootLayout>
  );
};
