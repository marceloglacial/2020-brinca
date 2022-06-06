import filterData from 'functions/filterData';
import { getGold, getSilver } from 'functions/getPartners';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import PartnersFilter from './PartnersFilter';
import PartnersGroup from './PartnersGroup';
import PartnersTags from './PartnersTags';

const Partners = (props) => {
  const { data, filter } = props;
  const partnersGold = filterData(getGold(data), filter);
  const partnersSilver = filterData(getSilver(data), filter);
  const tags = props.categories.map((item) => item[1]);

  const hasPartners = partnersGold && partnersSilver;
  if (!hasPartners) return <section>loading...</section>;

  return (
    <section className='partners'>
      {!filter && (
        <div className='partners__header'>
          <h2 className='partners__title'>Parceiros</h2>
          <p>
            Aqui você encontra produtos e serviços de brasileiros para
            brasileiros
          </p>
          <p>
            Quer ver sua empresa aqui também?{' '}
            <Link href={'parceiros/cadastro'}>Clique aqui</Link> para preencher
            o formulário ou envie um e-mail para{' '}
            <a href='mailto:business@brinca.ca'>business@brinca.ca</a> com
            logotipo, nome da empresa, endereço, telefone, e-mail, site e
            descrição de sua empresa e/ou serviço em uma frase, além do e-mail
            cadastrado como membro da BRINCA.
          </p>
          <p>
            <strong>
              Atenção: A BRINCA não se responsabiliza por produtos ou serviços
              anunciados nesta página.
            </strong>
          </p>
        </div>
      )}
      <PartnersTags tags={tags} filter={filter} />
      <div className='partners__body'>
        <PartnersGroup title={'Membros'} partners={partnersGold} />
        <PartnersGroup title={'Comunidade'} partners={partnersSilver} />
      </div>
    </section>
  );
};
export default Partners;
