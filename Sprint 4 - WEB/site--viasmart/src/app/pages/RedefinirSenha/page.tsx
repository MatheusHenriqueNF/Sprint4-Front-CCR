import Logo from "../../components/Logo/logo";
import Preencher from "../../components/PreenchimentoDados/preenchimentodados";


const RedefinirSenha = ()  => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-8 box-border bg-[#F4F4F4]">
      <Logo src="/image/senha_nova.png" alt="Imagem de cadastro" texto="Área para realizar cadastro de um colaborador"/>
      <Preencher
        titulo="Redefinir Senha"
        corTexto="#3B48EF"
        tipo="redefinirSenha"
        inputs={[
          { label: "Senha", placeholder: "Digite a senha",name:"senha", type:"password" },
          { label: "Senha", placeholder: "Confirme a senha",name:"confirmarSenha", type:"password"},
        ]}
        botaoTitulo="Atribuir"
      />
    </div>
  );
}

export default RedefinirSenha;