"use client";
import React, { useState, useEffect } from "react";
import Input from "../Input/input";
import Botao from "../Botao/botao";
import { useRouter } from "next/navigation"; // Para redirecionamento
import SelecionarUsuario from "../SelecionarUsuario/selecionarusuario";

type InputConfig = {
    label: string;
    placeholder: string;
    name: string;
    type?: string;
};

type PreencherProps = {
    titulo?: string;
    corTexto?: string;
    inputs: InputConfig[];
    botaoTitulo: string;
    type?: string;
    tipo: "login" | "cadastro" | "redefinirSenha";  // NOVA PROP
};


const Preencher: React.FC<PreencherProps> = ({
    titulo = "Título",
    corTexto = "green",
    inputs = [],
    botaoTitulo = "Enviar",
    type = "text",
    tipo
}) => {
    const router = useRouter(); // Hook para redirecionamento

    // Inicializar os estados com os inputs fornecidos
    const initialFormData = inputs.reduce((acc, input) => {
        acc[input.name] = "";
        return acc;
    }, {} as { [key: string]: string });

    const [formData, setFormData] = useState<{ [key: string]: string }>(initialFormData);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Atualizar o estado quando os inputs mudarem
    useEffect(() => {
        setFormData(initialFormData);
    }, [inputs]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); 
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let validationErrors: { [key: string]: string } = {};

        if (tipo === "cadastro" && !formData["cargo"]) {
            validationErrors["cargo"] = "Selecione um cargo";
          }
    
        inputs.forEach((input) => {
            if (!formData[input.name] || formData[input.name].trim().length === 0) {
                validationErrors[input.name] = `${input.label} é obrigatório.`;
            } else if (input.name === "usuario" && formData[input.name].length < 3) {
                validationErrors[input.name] = "Usuário deve ter pelo menos 3 caracteres.";
            } else if (input.name === "senha" && formData[input.name].length < 6) {
                validationErrors[input.name] = "A senha deve ter pelo menos 6 caracteres.";
            } else if (input.name === "confirmarSenha" && formData[input.name] !== formData["senha"]) {
                validationErrors[input.name] = "As senhas não conferem.";
            }
        });
    
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    
        if (tipo === "login") { 
            // Apenas no login verificamos as credenciais
            if (formData.usuario === "admin" && formData.senha === "admin123") {
                router.push("/pages/Menu");
            } else {
                setErrors({ geral: "Usuário ou senha inválidos, caso esteja com problemas de login entre em contato com um adminstrador." });
            }
        } else {
            // Cadastro: Redireciona para outra página ou exibe mensagem de sucesso
            console.log("Cadastro realizado com sucesso!", formData);
        }
    };
    return (
        <div className="w-[600px] h-[735px] bg-white rounded-r-3xl p-6 shadow-2xl">
            <h1 className="text-[30px] font-semibold mb-4" style={{ color: corTexto }}>
                {titulo}
            </h1>

            <form onSubmit={handleSubmit} className="h-[600px] flex flex-col justify-center items-center mt-4 ">
                <div className="w-full mb-10">
                    {tipo === "cadastro" && (
                        <>
                    
                            <SelecionarUsuario
                                name="cargo"
                                value={formData["cargo"] || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, [e.target.name]: e.target.value })
                                }
                            />
                            {errors["cargo"] && (
                                <p className="text-red-500 text-sm">{errors["cargo"]}</p>
                            )}
                        </>
                        
                    )}
                </div>


                {inputs.map((input, index) => (
                    <div key={index} className="w-full mb-10">
                        <Input
                            label={input.label}
                            placeholder={input.placeholder}
                            type={input.type || "text"}
                            name={input.name}
                            value={formData[input.name] || ""}
                            onChange={handleChange}
                        />
                        {errors[input.name] && <p className="text-red-500 text-sm">{errors[input.name]}</p>}
                    </div>
                ))}

                {errors.geral && <p className="text-red-500 text-sm">{errors.geral}</p>}

                <button type="submit" className="w-full bg-[#3B48EF] text-2xl font-semibold text-white py-2 rounded-2xl mt-4">
                    {botaoTitulo}
                </button>
            </form>
        </div>
    );
};

export default Preencher;
