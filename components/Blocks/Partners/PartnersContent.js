import Link from 'next/link';

const PartnersContent = () => {
  return (
    <div className='partners__content' data-aos='fade-in'>
      <p>
        Aqui você encontra produtos e serviços de brasileiros para brasileiros
      </p>
      <p>
        Quer ver sua empresa aqui também?{' '}
        <Link href='/parceiros/cadastro'>
          Clique aqui para preencher o formulário
        </Link>{' '}
        ou envie um e-mail para{' '}
        <a href='mailto:business@brinca.ca'>business@brinca.ca</a> com logotipo,
        nome da empresa, endereço, telefone, e-mail, site e descrição de sua
        empresa e/ou serviço em uma frase, além do e-mail cadastrado como membro
        da BRINCA.
      </p>
      <h6>
        Atenção: A BRINCA não se responsabiliza por produtos ou serviços
        anunciados nesta página.
      </h6>
    </div>
  );
};
export default PartnersContent;
