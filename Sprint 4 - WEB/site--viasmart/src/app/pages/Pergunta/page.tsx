import Logo from "@/app/components/Logo/logo";
import Preencher from "@/app/components/PreenchimentoDados/preenchimentodados";

const Pergunta =() => {
    return (
        <div className="w-full h-screen flex justify-center items-center p-8 box-border bg-[#F4F4F4]">
            <Logo src="/image/FAQ.png" alt="Imagem de um computador com cadeado" texto="Área FAQ responda as dúvidas que as pessoas possam ter."/>
            <Preencher
                titulo="Pergunta"
                corTexto="#3B48EF"
                tipo="login"
                inputs={[
                    { label: "Pergunta", placeholder: "Digite a pergunta", name: "pergunta" },
                    { label: "Resposta", placeholder: "Digite a respota", name: "resposta" },
                ]}
                botaoTitulo="Salvar"
            />
        </div>
    );
}

export default Pergunta;