import Head from 'next/head'
import Image from 'next/image';
import Logo from "../assets/logo.png"
import { BsWhatsapp } from "react-icons/bs";
import { Footer } from '@/components/footer';
import d1 from "../assets/d1.jpg";
import d3 from "../assets/d3.jpg";
import d4 from "../assets/d4.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import q1 from "../assets/q1.jpg";
import q2 from "../assets/q2.jpg";
import Link from 'next/link';


export default function Home() {
  return (
      <div className="bg-amber-50">
          <Head>
              <title>Silvio Vidraçaria - Balneário Camboriú</title>
              <meta
                  name="description"
                  content="Transforme sua casa em um verdadeiro lar com nossos serviços. Vidros para porta, box, janela, cortina de
                          vidro, fechamento de sacada, guarda corpo de piscina, pergolados, espelhos com bizote e corrimão de aço inox. Garantimos a qualidade e segurança em cada projeto, entre em contato agora e veja como podemos transformar o seu lar em um espaço ainda mais
                          confortável e elegante."
              ></meta>
              <meta
                  name="keywords"
                  content="Vidraçaria, Vidro Temperado, espelho, box, janela, pergolado, sacada, cortina de vidro, Balneário Camboriú"
              />
              <meta name="author" content="João Paulo da Silva" />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
              <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=G-RZV4TZG9R6"
              ></script>
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RZV4TZG9R6');
              `,
                  }}
              />
          </Head>
          <div className="flex flex-col min-h-screen bg-zinc-900">
              <header className="fixed w-screen flex justify-center items-center mb-3 gap-6 md:justify-between pr-8 p-3 bg-amber-50">
                  <div className="flex items-center gap-3">
                      <Image className="h-20 w-20" src={Logo} alt="logo" />
                      <p className="text-amber-900 text-4xl font-bold">
                          Silvio Vidraçaria
                      </p>
                  </div>
                  <div className="text-zinc-600  flex items-center gap-8">
                      <a
                          href="#Services"
                          className="text-xl p-3 hover:text-zinc-200 hover:bg-amber-600 hidden sm:flex bg-amber-200 rounded-xl"
                      >
                          Serviços
                      </a>
                      <a
                          href="https://api.whatsapp.com/send?phone=5547991064045"
                          target="_blank"
                          className="text-xl p-3 hover:text-zinc-200 hover:bg-amber-600 hidden sm:flex items-center gap-2 bg-amber-200 rounded-xl"
                      >
                          <p>Contato</p>
                          <BsWhatsapp />
                      </a>
                      <a
                          href="https://api.whatsapp.com/send?phone=5547991064045"
                          target="_blank"
                          className="text-xl sm:hidden p-3 hover:text-zinc-200 hover:bg-amber-600 flex items-center gap-2 bg-amber-200 rounded-xl"
                      >
                          <BsWhatsapp />
                      </a>
                  </div>
              </header>
              <section className="grow bg-zinc-300 flex flex-col items-center justify-center p-5">
                  <div className="flex flex-col items-center justify-center xl:w-2/3 gap-4 max-[500px]:mt-24">
                      <h1 className="xl:text-5xl sm:text-3xl text-xl font-bold font-serif">
                          Com 15 anos de experiência, oferecemos as melhores
                          soluções em vidro temperado.
                      </h1>
                      <p className="xl:text-3xl sm:text-xl text-base text-justify font-serif">
                          Transforme sua casa em um verdadeiro lar com nossos
                          serviços. Vidros para porta, box, janela, cortina de
                          vidro, fechamento de sacada, guarda corpo de piscina,
                          pergolados, espelhos com bizote e corrimão de aço
                          inox. Garantimos a qualidade e segurança em cada
                          projeto, Entre em contato agora e veja como podemos
                          transformar o seu lar em um espaço ainda mais
                          confortável e elegante. Executamos projetos.
                      </p>
                      <a
                          className="text-2xl uppercase p-2 rounded-lg shadow-black shadow-md hover:translate-y-1 bg-amber-500 font-mono font-bold text-zinc-100"
                          href="https://api.whatsapp.com/send?phone=5547991064045"
                          target="_blank"
                      >
                          Peça seu orçamento
                      </a>
                  </div>
              </section>
          </div>
          <div id="Services"></div>
          <div className="container mx-auto mt-24">
              <section className="max-w-5xl flex flex-col gap-2 mx-auto">
                  <div className="grid grid-cols-4 gap-2 p-2">
                      <Image
                          className="object-fill h-40 md:h-96 rounded-md"
                          src={p1}
                          alt=""
                      />
                      <Image
                          className="object-fill h-40 md:h-96 rounded-md"
                          src={p2}
                          alt=""
                      />
                      <Image
                          className="object-cover h-40 md:h-96 rounded-md"
                          src={p3}
                          alt=""
                      />
                      <Image
                          className="object-cover h-40 md:h-96 rounded-md"
                          src={p4}
                          alt=""
                      />
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2 max-h-96">
                      <Image
                          className="object-fill h-30 md:h-60 rounded-md"
                          src={d1}
                          alt=""
                      />
                      <Image
                          className="object-fill h-30 md:h-60 rounded-md"
                          src={d3}
                          alt=""
                      />
                      <Image
                          className="object-fill h-30 md:h-60 rounded-md"
                          src={d4}
                          alt=""
                      />
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-2">
                      <Image
                          className="object-fill h-40 md:h-96 rounded-md"
                          src={q1}
                          alt=""
                      />
                      <Image
                          className="object-fill h-40 md:h-96 rounded-md"
                          src={q2}
                          alt=""
                      />
                  </div>
              </section>
          </div>
          <div className="flex items-center flex-col ms gap-4 text-xl p-3 h-64">
              <Link href="/cortina">
                  <p className=" hover:text-zinc-200 hover:bg-amber-600 bg-amber-200 rounded-xl p-2">
                      Cortina de Vidro
                  </p>
              </Link>
              <Link href="/guarda">
                  <p className=" hover:text-zinc-200 hover:bg-amber-600 bg-amber-200 rounded-xl p-2">
                      Guarda Corpo Piscina
                  </p>
              </Link>
              <Link href="/box">
                  <p className=" hover:text-zinc-200 hover:bg-amber-600 bg-amber-200 rounded-xl p-2">
                      Box de banheiro
                  </p>
              </Link>
              <Link href="/pergolado">
                  <p className=" hover:text-zinc-200 hover:bg-amber-600 bg-amber-200 rounded-xl p-2">
                      Pergolados
                  </p>
              </Link>
          </div>

          <Footer author={"João Paulo da Silva"} />
      </div>
  );
}
