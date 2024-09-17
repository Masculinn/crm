import { Inter } from "next/font/google";
import { Trailed } from "../animated-components/Trailed";

const inter = Inter({ subsets: ["latin"] });

export const About = ({ meta }) => {
  return (
    <div className="h-auto mx-auto bg-white/50 lg:max-w-4xl max-w-md text-start justify-start block rounded-lg lg:p-24 pt-12 p-4 tracking-tighter">
      <Trailed isOpen noBounce>
        {Array.from([
          <h2 className={` ${inter.className} lg:text-6xl text-4xl font-bold`}>
            Hakkında.
          </h2>,
          <p className="pt-8 lg:text-lg font-base text-medium">{meta.about}</p>,
        ])}
      </Trailed>
      {meta.place && (
        <>
          <Trailed isOpen noBounce>
            {Array.from([
              <h3 className="text-2xl lg:text-4xl font-bold pt-16">
                Konaklama
              </h3>,
              <p className="lg:text-lg pt-4 text-medium ">{meta.place}</p>,
            ])}
          </Trailed>
        </>
      )}
      {meta.grant && (
        <>
          <Trailed isOpen noBounce>
            {Array.from([
              <h3 className="text-2xl lg:text-4xl font-bold pt-8">Burs</h3>,
              <p className="lg:text-lg pt-4  text-medium ">{meta.grant}</p>,
            ])}
          </Trailed>
        </>
      )}
      {meta.sum && (
        <Trailed isOpen noBounce wrapperStyle="">
          {Array.from([
            <p className="lg:text-lg mt-12 border-l-3 border-l-slate-900 pl-2    text-medium">
              {meta.sum}
            </p>,
          ])}
        </Trailed>
      )}
    </div>
  );
};
