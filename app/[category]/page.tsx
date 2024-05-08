import { Brand } from "@/interfaces/IBrand";
import { getData } from "@/utils/fetchApi";
import { query } from "@/utils/queryList";
import Link from "next/link";
import React from "react";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  const result = await getData(query.fetchCategory(category));
  const { detail } = result.data;

  console.log(detail);

  return (
    <main className="page-collection bg-base-100 py-6">
      <section className="category-overview">
        <div className="container">
          <div className="p-6 bg-base">
            <h1 className="text-h3 font-semibold">{detail.name}</h1>
            <p className="mt-2 text-md max-w-[600px]">{detail.description}</p>
            <hr className="my-4" />
            <div className="brand-listing">
              <div className="t-scrollable-horizontal">
                <div className="t-scrollable-horizontal__outer">
                  <div className="t-scrollable-horizontal__wrapper">
                    <div className="flex items-center space-x-2">
                      {detail.brands.map((brand: Brand, ) => {
                        return (
                          <Link key={brand.id} href={brand.shared_url}>
                            <div className="t-tag t-tag--solid t-tag--2xl">
                              {brand.name}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
