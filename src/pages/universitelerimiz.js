import { json_default, seo_default } from "@/lib/identification";
import jsonld from "@/lib/jsonld";
import { NextSeo } from "next-seo";
import Head from "next/head";
import seo from "@/lib/seo";
import Script from "next/script";
import Layout from "@/components/UI/Layout";
import { PageHero } from "@/components/sections/PageHero";
import universities from "@/lib/universities";
import { UniversityCard } from "@/components/UI/UniversityCard";
import { UCard } from "@/components/UI/UCard";
import { Table } from "@/components/sections/Table";
import { columns, programs } from "@/lib/university_data";
import { Contact } from "@/components/sections/Contact";

export default function Universitelermiz() {
  const heroConfig = {
    header: "Polonyada'ki Üniversiteler",
    content:
      "Polonya'da Üniversiteler, yüksek eğitim kalitesi ve geniş uluslararası öğrenci topluluğu ile tanınır. Öğrenciler, modern kampüslerde eğitim alırken, aynı zamanda çeşitli kültürel etkinliklere ve sosyal aktivitelere katılma fırsatı bulurlar.",
    exdesc: "Hemen bilgi alın",
    contentHeader: "Güncel",
    contentDescription: "Polonya'da hazırlık eğitimi",
    img: "/assets/polonyada-hazirlik-egitimi/polonyada-hazirlik-egitimi-olymposedu.webp",
    href: "/polonyada-hazirlik-egitimi",
  };

  const tableHeaderProps = [
    <h3 className="text-3xl lg:text-4xl tracking-tighter font-extrabold text-start items-center flex flex-wrap gap-2">
      <span className="bg-gradient-to-r from-sky-600 to-rose-600 bg-clip-text text-transparent">
        Olymposedu
      </span>{" "}
      <span className="text-rose-600">Üniversite</span>{" "}
      <span className=" bg-gradient-to-r from-rose-600 to-sky-600 bg-clip-text text-transparent">
        Sihirbazı!
      </span>
    </h3>,
    <span className="font-base text-stone-800  tracking-tighter text-lg">
      Dilediğiniz program hakkında 7/24 bilgi almak için üniversitenin{" "}
      <span className="underline underline-offset-2">üstüne</span> tıklayın.
      Sizi danışmanlarımıza yönlendireceğiz.
    </span>,
  ];

  return (
    <>
      <NextSeo {...seo_default} {...seo.universities} />
      <Script
        id="LDJson"
        type="
        application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json_default) }}
      />
      <Script
        id="LDJson2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonld.universitelerimiz),
        }}
      />
      <Layout>
        <PageHero {...heroConfig} />
        <ul className="grid lg:gap-x-4 gap-x-1 lg:gap-y-12 gap-y-6 mt-16 grid-cols-2 lg:grid-cols-3 mx-auto lg:max-w-6xl">
          {universities.map((university, idx) => (
            <UCard key={idx} {...university} />
          ))}
        </ul>
        <Table
          universities={universities}
          columns={columns}
          programs={programs}
          headerProps={tableHeaderProps}
        />
        <Contact />
      </Layout>
    </>
  );
}
