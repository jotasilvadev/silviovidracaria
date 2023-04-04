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
                    <Link href="/">
                        <div className="text-xl p-3 hover:text-zinc-200 hover:bg-amber-600 bg-amber-200 rounded-xl">
                            <BsFillHouseFill />
                        </div>
                    </Link>
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
                    <h2 className="text-3xl font-bold">Guarda corpo de Piscina</h2>
                    <p className="text-xl">
                        O Guarda Corpo de Piscina utilizando vidro temperado e
                        película de proteção é uma opção elegante e segura para
                        quem deseja manter a proteção e a estética de sua área
                        de lazer. Feito de vidro temperado de alta qualidade, o
                        guarda corpo oferece resistência e durabilidade, além de
                        proporcionar uma vista panorâmica da piscina e do
                        entorno.
                    </p>
                    <p className="text-xl">
                        A película de proteção adiciona uma camada extra de
                        segurança, ajudando a evitar que o vidro se quebre em
                        caso de impacto. Isso torna o guarda corpo de vidro
                        temperado uma escolha segura para famílias com crianças
                        ou animais de estimação.
                    </p>
                    <p className="text-xl">
                        Com design minimalista e elegante, o Guarda Corpo de
                        Piscina utilizando vidro temperado e película de
                        proteção pode ser personalizado de acordo com as
                        preferências e estilo do cliente, tornando-se uma peça
                        exclusiva que agrega valor à decoração do espaço. Com
                        instalação simples e fácil manutenção, o guarda corpo de
                        vidro temperado é a escolha ideal para quem busca
                        qualidade, segurança e beleza.
                    </p>
                    <p className="text-xl">
                        O Guarda Corpo de Piscina utilizando vidro temperado,
                        película de proteção e aço inox é uma opção ainda mais
                        resistente e durável. O aço inox é um material de alta
                        qualidade que oferece resistência à corrosão e ao
                        desgaste, além de proporcionar um acabamento sofisticado
                        e moderno. A combinação do vidro temperado, película de
                        proteção e aço inox cria um guarda corpo robusto e
                        seguro, que resiste às condições adversas do ambiente
                        externo, como sol, chuva e umidade. Além disso, o aço
                        inox é um material fácil de limpar e manter, garantindo
                        que o guarda corpo mantenha sua aparência e
                        funcionalidade por muitos anos. O uso do aço inox no
                        guarda corpo de vidro temperado e película de proteção é
                        uma escolha inteligente e de bom gosto para quem deseja
                        um espaço de lazer seguro, elegante e durável.
                    </p>
                </div>
            </div>
        </div>
    );
}
