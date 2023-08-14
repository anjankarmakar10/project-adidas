import { Button } from "../ui/button";

const CreateStore = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center border py-16 px-6 shadow-sm rounded-md flex flex-col gap-6 items-center justify-center ">
        <h2 className=" text-2xl md:text-3xl font-bold">
          Do you want to sell your products on our website?
        </h2>
        <Button size={"lg"}>Create a store</Button>
      </section>
    </div>
  );
};
export default CreateStore;
