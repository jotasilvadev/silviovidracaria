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
                    <h2 className="text-3xl font-bold">Pergolado</h2>
                    <p className="text-xl">
                        Os pergolados de vidro são uma opção elegante e
                        sofisticada para quem deseja adicionar uma estrutura de
                        sombra e proteção ao espaço externo da casa ou empresa.
                        Com estrutura em alumínio ou aço inox, o pergolado é
                        coberto com vidro laminado ou temperado, oferecendo
                        resistência e durabilidade.
                    </p>
                    <p className="text-xl">
                        O vidro utilizado nos pergolados proporciona uma
                        sensação de amplitude ao ambiente, permitindo que a luz
                        natural se espalhe livremente, enquanto oferece proteção
                        contra as intempéries climáticas. Com diferentes tipos
                        de vidro disponíveis, é possível escolher a opção que
                        melhor se adapta às necessidades do espaço, seja para
                        reduzir a incidência de raios solares, para aumentar a
                        privacidade ou para bloquear o vento e a chuva.
                    </p>
                    <p className="text-xl">
                        Os pergolados de vidro são personalizados de acordo com
                        as preferências e estilo do cliente, tornando-se uma
                        peça exclusiva e que agrega valor à decoração do
                        ambiente externo. Com acabamento em alumínio ou aço
                        inox, os pergolados de vidro apresentam um design
                        minimalista e elegante, que se adapta facilmente a
                        diferentes estilos de decoração.
                    </p>
                    <p className="text-xl">
                        Além da beleza estética, os pergolados de vidro oferecem
                        conforto e segurança ao usuário, pois o vidro utilizado
                        é um material resistente e seguro, que suporta impactos
                        e evita quebras acidentais. Além disso, a manutenção dos
                        pergolados é fácil e prática, pois o vidro laminado ou
                        temperado é um material que não mancha e não absorve
                        umidade.
                    </p>
                    <p className="text-xl">
                        O serviço de instalação de pergolados de vidro é uma
                        escolha ideal para quem busca praticidade, segurança e
                        beleza para o espaço externo. Seja para a área da
                        piscina, jardim, varanda ou terraço, os pergolados de
                        vidro são uma solução moderna e sofisticada que agregam
                        conforto e elegância ao ambiente.
                    </p>
                    <Link href="/" className="m-4 flex items-center justify-center">
                        <div className="text-xl p-3 hover:text-zinc-200 hover:bg-amber-600 bg-amber-200 rounded-xl">
                            <BsFillHouseFill />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
