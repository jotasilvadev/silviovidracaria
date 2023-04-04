import { BsWhatsapp, BsFillHouseFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <div className="bg-zinc-300 flex flex-col min-h-screen items-center">
            <header className="fixed w-screen flex justify-center items-center gap-6 md:justify-between pr-8 p-3 bg-amber-50">
                <div className="flex items-center gap-3">
                    <Image className="h-20 w-20" src={Logo} alt="logo" />
                    <p className="text-amber-900 text-4xl font-bold">
                        Silvio Vidraçaria
                    </p>
                </div>
                <div className="text-zinc-600  flex items-center gap-8">
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
            <div className="flex justify-center items-center mt-40 w-4/5 md:w-1/2 md:flex gap-3 text-justify">
                <div className="flex-col flex gap-2">
                    <h2 className="text-3xl font-bold">Box de vidro</h2>
                    <p className="text-xl">
                        O serviço de Box com vidro temperado é uma opção moderna
                        e sofisticada para quem deseja uma solução prática e
                        elegante para o banheiro. Feito de vidro temperado de
                        alta qualidade, o Box oferece resistência e
                        durabilidade, além de proporcionar uma sensação de
                        amplitude ao ambiente, permitindo que a luz natural se
                        espalhe livremente pelo espaço.
                    </p>
                    <p className="text-xl">
                        Com uma ampla variedade de modelos, o Box com vidro
                        temperado pode ser personalizado de acordo com as
                        preferências e estilo do cliente, tornando-se uma peça
                        única e exclusiva que agrega valor à decoração do
                        ambiente. Com acabamento em alumínio ou aço inox, o Box
                        de vidro temperado apresenta um design minimalista e
                        elegante, que se adapta facilmente a diferentes estilos
                        de decoração.
                    </p>
                    <p className="text-xl">
                        Além da beleza estética, o Box com vidro temperado
                        oferece segurança ao usuário, pois o vidro temperado é
                        um material resistente que evita quebras acidentais,
                        reduzindo assim o risco de acidentes no banheiro. Além
                        disso, o Box é fácil de limpar e manter, pois o vidro
                        temperado é um material que não mancha e não absorve
                        umidade, garantindo a durabilidade e a funcionalidade do
                        produto por muitos anos.
                    </p>
                    <p className="text-xl">
                        Com instalação rápida e fácil, o serviço de Box com
                        vidro temperado é a escolha ideal para quem busca
                        praticidade, segurança e beleza para o seu banheiro.
                        Seja para uma reforma ou construção do espaço, o Box com
                        vidro temperado é uma solução moderna e elegante que
                        agrega valor e conforto ao ambiente.
                    </p>
                </div>
                <Link href="/" className="m-4 flex items-center justify-center">
                    <div className="text-xl p-3 hover:text-zinc-200 hover:bg-amber-600 bg-amber-200 rounded-xl">
                        <BsFillHouseFill />
                    </div>
                </Link>
            </div>
        </div>
    );
}
