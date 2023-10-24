import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/components/menu';
import { Card } from '@/components/card';

export default function Home() {
  return (
    <main className='min-h-screen bg-background px-2 pt-9 pb-14 max-md:px-0 max-md:pt-0'>
      <div className='bg-primary pt-14 rounded-3xl px-4 max-sm:max-h-[450px] max-md:rounded-none max-md:max-h-[40rem] max-[610px]:max-h-[35rem] max-[500px]:max-h-[30rem] max-[900px]:max-h-[31rem] max-[1050px]:max-h-[45rem]'>
        <Menu />

        <strong id='identity' className='text-center my-20 text-5xl block max-md:text-4xl max-md:my-10 max-[1050px]:my-15'>
          <span className='text-text max-md:text-white'>NOSSA</span> IDENTIDADE
        </strong>

        <div className='flex flex-row gap-8 max-w-screen-xl mx-auto max-[900px]:flex-col max-[900px]:items-center'>
          <Image
            fill
            alt='img-header'
            src='/images/img-header.png'
            className='rounded-3xl -mb-10 max-w-2xl !static object-cover object-center '
          />

          <div className='flex flex-col items-center'>
            <p className='max-md:mt-4 max-[900px]:text-gray max-[900px]:mt-8'>
              Com mais de 150 anos de história, o Mackenzie é uma instituição
              educacional pioneira, agente de inovações pedagógicas.
              Comprometido com valores e princípios cristãos, o Instituto busca
              formar cidadãos capazes de discernir, realizar uma leitura do
              mundo e intervir na sociedade.
            </p>

            <div className='w-[100%] flex justify-center max-[900px]:justify-end'>
              <button 
                className='border-2 rounded-md px-5 py-2 w-fit mt-14 max-[900px]:border-0 max-[900px]:border-0 max-[900px]:mt-6  max-[900px]:text-primary max-[900px]:font-bold max-[1050px]:mt-5'
              >
                SAIBA MAIS
              </button>

            </div>
          </div>
        </div>
      </div>


      <div id="materials">
        <Card
          text='O Sistema Mackenzie de Ensino é líder na oferta de uma proposta
          educacional sustentada pela tradição cristã. Com materiais didáticos e
          soluções pedagógicas, atendemos mais de 400 escolas, incluindo
          unidades próprias e parceiras. Destacamo-nos como o primeiro sistema
          de ensino cristão e o mais relevante academicamente no país.'
          image='img-girl'
          className='mt-24   max-sm:mt-96 max-md:mt-60  max-[900px]:mt-[30rem] max-[610px]:mt-[17rem] max-[500px]:mt-[21rem]'
        />
      </div>      

      <div id="solutions">
        <Card
          text='O Sistema Mackenzie de Ensino trabalha para fornecer uma pedagogia
          cristã, com materiais e recursos didáticos, que conduza essa geração a
          glorificar a Deus por meio de uma atuação biblicamente orientada,
          social e culturalmente relevantes.'
          image='img-people'
          className='-mt-44 items-end max-[900px]:mt-8 flex-row-reverse'
          classNameImage='max-[1205px]:mt-28'
        />
      </div>

      <div>
        <Card
          button
          text=' Desenvolvemos um modelo pedagógico alinhado com a filosofia cristã e o entendimento de que todo conhecimento provém de Deus e é o ponto
          convergente de todo raciocínio.'
          image='img-child'
          className='mt-10'
        >
          <strong className='text-xl block text-primary mb-4'>
              <span className='text-text'>Histórico do</span> SME
            </strong>
        </Card>
      </div>

    </main>
  );
}
