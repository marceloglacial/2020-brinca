import { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { getData } from 'functions/getData';
import FormField from 'components/Blocks/Form/components/FormField';
import getRecords from 'functions/getRecords';

// TODO: CLEAN CODE!!!

const Parceiros = (props) => {
  const [formData, setFormData] = useState({ ...headers });
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const options = props.categories.map((item) => {
    return {
      value: item[1],
      label: item[1],
    };
  });

  const fields = [
    {
      id: 'title',
      label: 'Nome da Empresa',
      type: 'textfield',
      validate: { required: true },
    },
    {
      id: 'category',
      label: 'Categoria',
      type: 'dropdown',
      options,
      validate: { required: false },
    },
    {
      id: 'description',
      label: 'Descrição',
      type: 'textarea',
      validate: false,
      validate: { required: false },
    },
    {
      id: 'description',
      label: 'Endereço',
      type: 'textfield',
      validate: false,
      validate: { required: false },
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
      validate: { required: false },
    },
    {
      id: 'image',
      label: 'Logo da empresa',
      type: 'file',
      validate: false,
    },
  ];

  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const rawResponse = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const content = await rawResponse.json();
    if (content?.data?.updates?.updatedRows) {
      setStatus(true);
      setFormData({ ...headers });
    } else {
      setStatus(false);
    }
  };

  const content = status ? (
    <div className='text-center'>
      <p>Seu cadastro foi efetuado com sucesso!</p>
      <p>
        A diretoria do Brinca entrará em contato para finalizar a aprovação
        final e exibição na lista de parceiros.
      </p>
      <p>Obrigado!</p>
    </div>
  ) : (
    <>
      <p>Quer ver sua empresa aqui também?</p>
      <p>
        Preencha o formulário abaixo ou envie um e-mail para{' '}
        <a href='mailto:business@brinca.ca'>business@brinca.ca</a> com logotipo,
        nome da empresa, endereço, telefone, e-mail, site e descrição de sua
        empresa e/ou serviço em uma frase, além do e-mail cadastrado como membro
        da BRINCA.
      </p>
      <h6>
        Atenção: A BRINCA não se responsabiliza por produtos ou serviços
        anunciados nesta página.
      </h6>
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
    </>
  );

  return (
    <Layout pageTitle={`Parceiros`} {...props}>
      <section className='parceiros__form'>
        <h2 className='partners__title'>Parceiros - Cadastro</h2>
        <div className='parteners__body mb-4'>{content}</div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allData = (await getData()) || {};
  const categories =
    (await getRecords({
      spreadsheetId: '19RbFQdJZWygp-feLAmtWNK4KagWK6cHpNG_1ya2winM',
      range: 'Categories',
    })) || [];

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
      categories,
    },

    revalidate: 30,
  };
}

export default Parceiros;

// TODO: Make dynamic
const headers = {
  id: '',
  title: '',
  active: '',
  category: '',
  description: '',
  membership: '',
  address: '',
  phone: '',
  whatsapp: '',
  website: '',
  instagram: '',
  facebook: '',
  email: '',
  image: '',
};
