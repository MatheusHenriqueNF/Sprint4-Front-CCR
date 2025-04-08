'use client';
import React from "react";
import Image from "next/image";
import BotaoFiltro from "@/app/components/BotaoFiltro/botaoFiltro";
import Link from "next/link";
import ToggleSwitch from "@/app/components/ToggleSwitch/toggleswitch";

const Dash = () => {
  const linhas = [
    { pergunta: "Qual horário de funcionamento das estações?", resposta: "04:00 às 01:00", status: "Ativo" },
    { pergunta: "Qual o valor da passagem?", resposta: "R$4,30", status: "Pausada" }
  ];

  return (
    <div className="flex h-screen w-full p-10">
      
      <aside className="w-1/4 bg-[#3B48EF] text-white p-6 flex flex-col items-start border-2 rounded-l-2xl shadow-lg">
         <div className="w-full flex items-center gap-3 border-b-2 mb-4">
            <Image src="/image/logo_ccr.png" alt="CCR ViaSmart" width={60} height={60} />
            <div className='w-[2] h-[30] bg-white'></div>
            <h1 className="text-lg font-light">ViaSmart</h1>
        </div>
        
        <div className="w-full flex flex-col items-center gap-4">

            <h2 className="text-3xl font-medium">Filtros</h2>
            <BotaoFiltro src="/image/icon-pergunta.png" titulo="Pergunta"/>
            <BotaoFiltro src="/image/icon-resposta.png" titulo="Resposta"/>
            <BotaoFiltro src="/image/icon-pause.png" titulo="Desativado"/>
            <BotaoFiltro src="/image/icon-check.png" titulo="Ativado"/>
            <br />
            <h2 className="text-3xl font-medium">Ações</h2>
            <Link className="w-full flex items-center justify-center" href={"/pages/Pergunta"}><BotaoFiltro src="/image/icon-adicionar.png" titulo="Adicionar"/></Link>
           
        </div>

               
      </aside>

      {/* Main Content */}
      <main className="w-3/4 bg-white p-10 rounded-r-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">10 de Março de 2025</h2>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-center p-2">Pergunta</th>
              <th className="text-center p-2">Resposta</th>
              <th className="text-center p-2">Alterar</th>
              <th className="text-center p-2">Ação</th>
              <th className="text-center p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {linhas.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 text-center">{item.pergunta}</td>
                <td className="p-4 text-center">{item.resposta}</td>
                <td className="p-4 text-center"><Link href={"/pages/Pergunta"}>Alterar</Link></td>
                <td className="p-4 flex justify-center gap-2">
                <ToggleSwitch
                  initialState={item.status === "Ativo"}
                  onToggle={(newState) => {
                    console.log(`Usuário ${item.pergunta} está agora ${newState ? "Ativo" : "Pausada"}`);
                    // Aqui você pode atualizar o estado da estação ou fazer uma requisição à API
                  }}
                />
                </td>
                <td className={`p-2 text-center ${item.status === "Ativo" ? "text-green-500" : "text-orange-500"}`}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dash;
