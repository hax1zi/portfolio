export default function About() {
    return (
        <section
            id="about"
            className="w-full h-full flex flex-col items-center max-sm:px-8 max-lg:px-14 lg:px-side-spacing py-20 space-y-4 focus"
            aria-label="Sobre mim"
        >
            <h2 className="text-3xl font-medium">Sobre Mim</h2>

            <article>
                <h4 className="font-medium text-6xl text-center">Olá, mundo</h4>

                <div className="flex gap-10 flex-row mt-16 max-sm:flex-col">
                    <p className="text-lg max-w-lg opacity-80 leading-relaxed">
                        Atualmente, sou <b className="text-blue">Desenvolvedor Full-stack na Atos Capital</b>, onde foco
                        na construção e manutenção de portais utilizando React e TypeScript. Atuo na manutenção e
                        integração de Adquirentes utilizando C#, possuo experiência em integrações com SAP, garantindo a
                        consistência de dados entre plataformas financeiras e de gestão.
                    </p>
                    <p className="text-lg max-w-[550px] opacity-80 leading-relaxed ">
                        Gosto de escrever código limpo e priorizo a performance e a segurança em cada entrega, com a
                        bagagem em cibersegurança adquirida no instituto <b className="text-blue">ATRI</b>. Minha
                        jornada começou aos 14 anos e sigo em constante evolução." .
                    </p>
                </div>
            </article>
            <div className="border p-4 space-x-4 flex flex-col items-center gap-3 mt-14">
                <div className="space-x-2">
                    <label className="font-bold">Front-End:</label>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>TypeScript</span>
                </div>
                <div className="space-x-2">
                    <label className="font-bold">Back-End:</label>
                    <span>C#</span>
                    <span>Node.js</span>
                    <span>Pyhton</span>
                    <span>TypeScript</span>
                </div>
                <div className="space-x-2 max-sm:hidden">
                    <label className="font-bold">Expertise:</label>
                    <span>Cibersegurança</span>
                    <span>Performance</span>
                    <span>Integração de Pagamentos</span>
                </div>
            </div>
        </section>
    );
}
