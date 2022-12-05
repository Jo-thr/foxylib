import { Gallery } from "@components/foxylib/Gallery/Gallery";
import { DefaultLayout } from "@components/layout/DefaultLayout";
import useTranslation from "@hooks/useTranslation";
import { Metadata } from "helpers/Metadata";

export default function Forms() {
  const data = useTranslation().data.forms;
  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <h1 className="mb-10 border-b-4 border-primary pr-6 pb-6 text-4xl font-bold capitalize">
          Forms !
        </h1>
        <Gallery data={data} />
      </DefaultLayout>
    </>
  );
}
