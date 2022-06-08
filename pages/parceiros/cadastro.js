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
  const [imageSrc, setImageSrc] = useState();

  // CHANGE
  // ===================================
  const handleOnChange = (e) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = function (onLoadEvent) {
        setImageSrc(onLoadEvent.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  // SUBMIT
  // ===================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // File Upload
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    );
    const formFieldsData = new FormData();
    for (const file of fileInput.files) {
      formFieldsData.append('file', file);
    }
    formFieldsData.append('upload_preset', 'brinca');
    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dw2wjwhuv/image/upload',
      {
        method: 'POST',
        body: formFieldsData,
      }
    ).then((r) => r.json());

    // Form Submit
    const rawResponse = await fetch('/api/google/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, image: data.secure_url }),
    });
    const content = await rawResponse.json();
    if (content?.data?.updates?.updatedRows) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  // FIELDS
  // ===================================
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
      required: true,
    },
    {
      id: 'description',
      label: 'Descrição',
      type: 'textarea',
      validate: { required: true },
    },
    {
      id: 'address',
      label: 'Endereço',
      type: 'textfield',
      validate: false,
      validate: { required: true },
    },
    {
      id: 'membership',
      label: 'E-mail de membro',
      type: 'email',
      validate: { required: false },
    },
    {
      id: 'phone',
      label: 'Telefone',
      type: 'phoneNumber',
      validate: { required: true },
    },
    {
      id: 'whatsapp',
      label: 'Whatsapp',
      type: 'phoneNumber',
      validate: { required: false },
    },
    {
      id: 'website',
      label: 'Website',
      type: 'url',
      placeholder: 'http://',
      validate: { required: false },
    },
    {
      id: 'instagram',
      label: 'Instagram',
      type: 'textfield',
      placeholder: '@',
      validate: { required: false },
    },
    {
      id: 'facebook',
      label: 'Facebook',
      type: 'textfield',
      placeholder: '@',
      validate: { required: false },
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
      name: 'file',
      label: 'Logo da empresa',
      type: 'file',
      validate: { required: true },
    },
  ];

  // CONTENT
  // ===================================
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
        {imageSrc && (
          <div className='my-4'>
            <img src={imageSrc} width={200} height={200} />
          </div>
        )}
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

  // RETURN
  // ===================================
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
