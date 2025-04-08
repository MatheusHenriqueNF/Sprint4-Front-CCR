'use client';
import React from "react";
import Image from "next/image";
import BotaoFiltro from "@/app/components/BotaoFiltro/botaoFiltro";
import Link from "next/link";
import ToggleSwitch from "@/app/components/ToggleSwitch/toggleswitch";

const Dash = () => {
  const linhas = [
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Normal" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Pausada" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Normal" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Pausada" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Normal" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Pausada" },
  ];

  return (
    <div className="flex h-screen w-full  p-10">
      
      <aside className="w-1/4 bg-[#3B48EF] text-white p-6 flex flex-col items-start border-2 rounded-l-2xl shadow-lg">
         <div className="w-full flex items-center gap-3 border-b-2 mb-4">
            <Image src="/image/logo_ccr.png" alt="CCR ViaSmart" width={60} height={60} />
            <div className='w-[2] h-[30] bg-white'></div>
            <h1 className="text-lg font-light">ViaSmart</h1>
        </div>
        
        <div className="w-full flex flex-col items-center gap-4 ">

            <h2 className="text-3xl font-medium">Filtros</h2>
            <BotaoFiltro src="/image/icon-trem.png" titulo="Linha"/>
            <BotaoFiltro src="/image/icon-estacao.png" titulo="Estação"/>
            <BotaoFiltro src="/image/icon-check.png" titulo="Normal"/>
            <BotaoFiltro src="/image/icon-pause.png" titulo="Pausada"/>
            <BotaoFiltro src="/image/icon-limpar.png" titulo="Limpar"/>
            <br />
            
       
        </div>

               
      </aside>

      {/* Main Content */}
      <main className="w-3/4 bg-white p-10 rounded-r-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">10 de Março de 2025</h2>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-center p-2">Linha</th>
              <th className="text-center p-2">Estação</th>
              <th className="text-center p-2">Ação</th>
              <th className="text-center p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {linhas.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 text-center">{item.linha}</td>
                <td className="p-4 text-center">{item.estacao}</td>
                <td className="p-4 flex justify-center gap-2">
                <ToggleSwitch
                  initialState={item.status === "Normal"}
                  onToggle={(newState) => {
                    console.log(`Estação ${item.estacao} está agora ${newState ? "Normal" : "Pausada"}`);
                    // Aqui você pode atualizar o estado da estação ou fazer uma requisição à API
                  }}
                />
                </td>
                <td className={`p-2 text-center ${item.status === "Normal" ? "text-green-500" : "text-orange-500"}`}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dash;
