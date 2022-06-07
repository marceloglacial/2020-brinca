import { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { getData } from 'functions/getData';
import FormField from 'components/Blocks/Form/components/FormField';
import postRecord from 'functions/postRecord';
const Parceiros = (props) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e, data) => {
    e.preventDefault();
    setIsLoading(true);
    return postRecord(data);
  };

  return (
    <Layout pageTitle={`Parceiros`} {...props}>
      <section className='parceiros__form'>
        <h2 className='partners__title'>Cadastro</h2>
        <div className='parteners__body mb-4'>
          <p>Quer ver sua empresa aqui também?</p>
          <p>
            Preencha o formulário abaixo ou envie um e-mail para{' '}
            <a href='mailto:business@brinca.ca'>business@brinca.ca</a> com
            logotipo, nome da empresa, endereço, telefone, e-mail, site e
            descrição de sua empresa e/ou serviço em uma frase, além do e-mail
            cadastrado como membro da BRINCA.
          </p>
          <h6>
            Atenção: A BRINCA não se responsabiliza por produtos ou serviços
            anunciados nesta página.
          </h6>
        </div>
        <form className='form pt-4' onSubmit={(e) => handleSubmit(e, formData)}>
          {fields.map((item, index) => (
            <FormField
              key={index}
              attributes={item}
              handleOnChange={(e) => handleOnChange(e)}
            />
          ))}
          <div className='mt-4'>
            <input
              type='submit'
              value={isLoading ? 'Enviando ...' : 'Enviar'}
              className={`btn btn-primary`}
              disabled={isLoading}
            />
          </div>
        </form>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allData = (await getData()) || {};

  const {
    headerMenu = [],
    footerMenu = [],
    subscribeMenu = [],
    socialMenu = [],
  } = allData;
  return {
    props: {
      headerMenu,
      footerMenu,
      subscribeMenu,
      socialMenu,
    },

    revalidate: 30,
  };
}

export default Parceiros;

const fields = [
  {
    id: 'id',
    label: 'Nome da Empresa',
    type: 'textfield',
    validate: { required: true },
  },
  {
    id: 'category',
    label: 'Categoria',
    type: 'textfield',
    validate: false,
    validate: { required: true },
  },
  {
    id: 'description',
    label: 'Descrição',
    type: 'textarea',
    validate: false,
    validate: { required: true },
  },
  {
    id: 'description',
    label: 'Endereço',
    type: 'textfield',
    validate: false,
    validate: { required: true },
  },
  {
    id: 'membership',
    label: 'E-mail de membro',
    type: 'email',
    validate: false,
  },
  {
    id: 'phone',
    label: 'Telefone',
    type: 'phoneNumber',
    validate: false,
  },
  {
    id: 'whatsapp',
    label: 'Whatsapp',
    type: 'phoneNumber',
    validate: false,
  },
  {
    id: 'website',
    label: 'Website',
    type: 'url',
    placeholder: 'http://',
    validate: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    type: 'textfield',
    placeholder: '@',
    validate: false,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    type: 'textfield',
    placeholder: '@',
    validate: false,
  },
  {
    id: 'email',
    label: 'E-mail de contato',
    type: 'email',
    validate: false,
    validate: { required: true },
  },
  {
    id: 'image',
    label: 'Logo da empresa',
    type: 'file',
    validate: false,
  },
];
