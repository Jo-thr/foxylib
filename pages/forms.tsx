import { DefaultLayout } from "@components/layout/DefaultLayout";
import { Metadata } from "helpers/Metadata";

export default function Forms() {
  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <h1 className="mb-10 border-b-4 border-primary pr-6 pb-6 text-4xl font-bold capitalize">
          Forms !
        </h1>
      </DefaultLayout>
    </>
  );
}
