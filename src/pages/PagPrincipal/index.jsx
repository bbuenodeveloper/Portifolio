import { HashLink as Link } from "react-router-hash-link"
import { FaRegCopyright, FaLinkedin, FaGithub  } from "react-icons/fa6";
import imgMinha from '../../img/minhafoto.png'
import imgBatman from '../../img/projetobatman.png'
import imgCadastro from "../../img/cadastro.png"
import imgAcademia from "../../img/academia.png"
import { useRef } from "react"



function Home() {
    
    const nomeState = useRef()
    const mensagemState = useRef()
    const telefone = '5511960611515'

    const linkedinUrl = "https://www.linkedin.com/feed/?trk=sem-ga_campid.12619604099_asid.149519181115_crid.725790844702_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9195894"
    const gitHubUrl = "https://github.com/bbuenodeveloper"



    function handleSubmit(e) {   
        e.preventDefault()

        // validação se os campos estão preenchidos
       if(!nomeState.current.value == '' || !mensagemState.current.value == ''){

            // montando a mensagem que vou receber no whatsapp
            const texto = `Olá! Me chamo ${nomeState.current.value}, ${mensagemState.current.value}`
            // formatando a mensagem pois não pode ter espaços no texto, com o comando "encodeURIComponent"
            const msgFormatada = encodeURIComponent(texto)
            // motando a url do whatsapp que estou utilizando que precisa ser como esta abaixo
            const url = `https://wa.me/${telefone}?text=${msgFormatada}`
            // comando para abrir um nova janela com a url que estou enviando
            window.open(url, '_blank')
            // depois de tudo realizado estou pedindo para resetar os campos de input e textarea
            nomeState.current.value = ''
            mensagemState.current.value = ''

       }else{
        alert("Preencha os campos.")
       }
                  
    }

    function linkedin(){
        window.open(linkedinUrl, '_blank')
    }

    function github(){
         window.open(gitHubUrl, '_blank')
    }



    return (
        <div className="max-md:overflow-hidden">
            <header className="flex justify-around bg-gradiente h-15 items-center font-montserrat fixed top-0 right-0 left-0 z-10 shadow-lg max-md:justify-center max-md:w-screen">
                <div>
                    <h1 className="text-white text-3xl hover:scale-120 max-md:hidden"><Link to="#">Bruno Bueno</Link></h1>
                </div>
                <nav>
                    <ul className="flex gap-4 text-lg text-white">
                        <li className="hover:border-b-2 hover:border-b-red-600 hover:scale-120"><Link to="#sobre">Sobre</Link></li>
                        <li className="hover:border-b-2 hover:border-b-red-600 hover:scale-120"><Link to="#projetos">Projetos</Link></li>
                        <li className="hover:border-b-2 hover:border-b-red-600 hover:scale-120"><Link to="#contato">Contato</Link></li>
                    </ul>
                </nav>
            </header>

            <div>
                <div className="flex justify-center items-center flex-col">
                    <img src={imgMinha} alt="eu" className="w-60 h-60 rounded-full mt-50 animate-[bounce_10s_ease-in-out_infinite]" />
                    <h1 className="text-white font-montserrat mt-2 mb-2 text-2xl">Bruno Bueno</h1>
                    <p className="text-white">Desenvolvedor Full Stack</p>
                </div>
            </div>

            <div id="sobre" className="flex justify-center items-center flex-col mt-50">
                <h1 className="text-white text-3xl font-montserrat mb-5 font-bold">Sobre Mim</h1>
                <div className="border border-vidro rounded-2xl p-10 bg-vidro">
                    <p className="text-white w-150 max-md:w-screen max-md:p-4">
                        Olá! Sou Bruno Bueno, desenvolvedor especializado em full stack, apaixonado por transformar ideias em código funcional e elegante.
                        Tenho experiência com tecnologias como HTML, CSS, JavaScript, React, Node.js, Git, Tailwind, Boostrap, Mongodb e foco em criar soluções limpas, escaláveis e bem documentadas.
                        Atualmente, estou aprocura de nova oportunidades e estou sempre em busca de novos desafios que envolvam aprendizado e inovação.
                        Quando não estou codando, gosto de jogar jogos variados tanto no computador quanto no video game.
                    </p>
                </div>
            </div>

            <div id="projetos" className="m-50 px-40 max-md:p-0">
                <h1 className="text-white text-3xl font-montserrat mb-5 font-bold flex justify-center">Meus Projetos</h1>
                <div className="grid grid-cols-3 justify-items-center w-auto gap-8 max-md:grid-cols-1">
                    <div className="hover:scale-105">
                        <img src={imgBatman} alt="Projeto Batman" className="h-40 rounded-t-2xl w-full max-md:w-screen"/>
                        <div className="p-4 border border-vidro bg-vidro rounded-b-2xl max-md:w-screen">
                            <h2 className="text-white font-montserrat text-xl mb-2">Projeto Batman</h2>
                            <p className="text-white text-sm">Projeto tudo sobre o filme batman, este projeto foi utilizado HTML, CSS, JavaScript. E modo responsivo para telas menores.</p>
                        </div>
                    </div>
                    <div className="hover:scale-105">
                        <img src={imgCadastro} alt="Projeto Cadastro" className="h-40 rounded-t-2xl w-full max-md:w-screen"/>
                        <div className="p-4 border border-vidro bg-vidro rounded-b-2xl max-md:w-screen">
                            <h2 className="text-white font-montserrat text-xl mb-2">Projeto Cadastro</h2>
                            <p className="text-white text-sm">Criei uma tela de cadastro e login, utilizando React.js, Node.js, Mongodb, Tailwindcss entre outras bibliotecas como bcrypt, JWT.</p>
                        </div>
                    </div>
                    <div className="hover:scale-105">
                        <img src={imgAcademia} alt="Projeto Academia" className="h-40 rounded-t-2xl w-full max-md:w-screen"/>
                        <div className="p-4 border border-vidro bg-vidro rounded-b-2xl max-md:w-screen">
                            <h2 className="text-white font-montserrat text-xl mb-2">Projeto Academia</h2>
                            <p className="text-white text-sm">Projeto de um site para Academia, este projeto foi utlizado HTML, CSS, JAvaScript. E modo responsivo para telas menores.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contato" className="flex justify-center items-center flex-col mb-50">
                <h1 className="text-white text-3xl font-montserrat mb-5 font-bold">Contato</h1>
               <div className="flex justify-center">
                    <form className="border border-vidro bg-vidro p-4 w-150 rounded-2xl max-md:w-screen">
                        <input ref={nomeState} placeholder="Nome" type="text" className="placeholder-white border border-fundo mb-4 p-2 w-full rounded-2xl text-white"></input>
                        <textarea ref={mensagemState} placeholder="Mensagem" type="text" className="placeholder-white h-50 border border-fundo p-2 mb-4 w-full rounded-2xl text-white resize-none"></textarea>
                        <div className="flex justify-end">
                            <button onClick={handleSubmit} className="text-white border border-fundo bg-cyan-600 rounded-2xl w-35 p-2 cursor-pointer hover:bg-cyan-900">Enviar</button>
                        </div>
                    </form>
               </div>
            </div>

            <footer className="h-40 bg-gradiente  border border-t-vidro">   
                <div className="flex justify-center items-center flex-col h-30">
                    <button onClick={linkedin} className="mb-2">
                        <FaLinkedin className="text-white text-2xl cursor-pointer hover:scale-110"/>
                    </button>
                    <button onClick={github}>
                        <FaGithub  className="text-white text-2xl cursor-pointer hover:scale-110"/>
                    </button>
                </div>
             
                <div className="flex justify-center items-end">
                   <p className="flex items-center text-white">Desenvolvido por: Bruno Bueno<FaRegCopyright className="ml-2 text-white"/></p>
                </div>
            </footer>
        </div>
    )
}


export default Home