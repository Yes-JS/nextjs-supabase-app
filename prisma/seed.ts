/* eslint-disable */
import { PrismaClient } from "@prisma/client";
import * as https2 from "https";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env["DATABASE_URL"],
    },
  },
});

export async function main() {
  https2
    .get("https://restcountries.com/v2/all", (res) => {
      const data: any[] = [];

      res.on("data", (chunk) => {
        data.push(chunk);
      });

      res.on("end", async () => {
        console.log("Response ended: ");
        const response = JSON.parse(Buffer.concat(data).toString());

        // const currencies = response
        //   .filter((c) => !!c.currencies)
        //   .filter((c, i, s) => {
        //     return (
        //       s.findIndex(
        //         (cc) => cc.currencies?.[0].name === c.currencies?.[0].name
        //       ) === i &&
        //       s.findIndex(
        //         (cc) => cc.currencies?.[0].code === c.currencies?.[0].code
        //       ) === i
        //     );
        //   })
        //   .map((c, i) => ({
        //     id: i + 1,
        //     name: c.currencies?.[0].name,
        //     code: c.currencies?.[0].code,
        //     symbol: c.currencies?.[0].symbol,
        //   }));
        // console.log(currencies);
        // currencies.push({
        //   id: 0,
        //   name: "none",
        //   code: "none",
        //   symbol: "none",
        // });

        // await prisma.currency.createMany({
        //   data: currencies,
        // });

        const newCurrencies = await prisma.currency.findMany();

        const countries = response.map((c) => ({
          id: +c.numericCode,
          name: c.name,
          alpha2code: c.alpha2Code,
          alpha3code: c.alpha3Code,
          numericCode: c.numericCode,
          domains: JSON.stringify(c.topLevelDomain),
          callingCode: c.callingCodes[0],
          capital: c.capital || null,
          population: c.population || null,
          area: c.area || null,
          currencyId:
            newCurrencies.find(
              (cur) => cur.code === (c.currencies?.[0].code || "none")
            )?.id || 0,
        }));

        await prisma.country.createMany({
          data: countries,
        });

        await prisma.category.create({
          data: {
            title: "other",
            description: "All props without category",
            emoji: "🐈",
          },
        });

        await prisma.prop.createMany({
          data: [
            {
              title: "Sun days",
              description: "Sun days description",
              units: "d",
              categoryId: 1,
            },
            {
              title: "Mediocre salary",
              description: "Mediocre salary description",
              units: "$",
              categoryId: 1,
            },
          ],
        });

        await prisma.role.create({
          data: {
            title: "USER",
          },
        });

        await prisma.role.create({
          data: {
            title: "ADMIN",
          },
        });
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
