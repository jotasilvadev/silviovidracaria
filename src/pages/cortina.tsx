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
                    <h2 className="text-3xl font-bold">Cortina de Vidro</h2>
                    <p className="text-xl">
                        Bem-vindo à Silvio Vidraçaria! Nós somos uma empresa
                        especializada em soluções de vidro personalizadas para
                        sua casa ou empresa. Uma de nossas especialidades é o
                        fechamento de sacadas com cortinas de vidro. As cortinas
                        de vidro são fabricadas com vidro temperado, o que
                        garante sua resistência e segurança. Elas também são
                        altamente duráveis e de fácil manutenção.
                    </p>
                    <p className="text-xl">
                        As cortinas de vidro são uma opção moderna e elegante
                        para quem deseja aproveitar a sacada em todas as
                        estações do ano. Elas permitem a entrada de luz natural
                        e protegem o ambiente contra ventos e chuvas. Além
                        disso, a instalação é rápida e não requer grandes
                        reformas na estrutura da sacada.
                    </p>
                    <p className="text-xl">
                        Na Silvio Vidraçaria, trabalhamos com uma equipe de
                        profissionais qualificados e experientes para garantir a
                        instalação correta e segura das cortinas de vidro em sua
                        sacada. Nós oferecemos uma ampla variedade de opções de
                        design e personalização para atender às suas
                        necessidades específicas.
                    </p>
                    <p className="text-xl">
                        Não importa se você quer proteger sua sacada do vento e
                        da chuva ou criar um espaço confortável para relaxar e
                        apreciar a vista, as cortinas de vidro são uma excelente
                        opção para você. Entre em contato conosco para obter
                        mais informações sobre nossos serviços de fechamento de
                        sacadas com cortinas de vidro e solicitar um orçamento
                        personalizado para sua casa ou empresa. Estamos ansiosos
                        para ajudá-lo a tornar sua sacada um espaço ainda mais
                        especial!
                    </p>
                </div>
            </div>
        </div>
    );
}
