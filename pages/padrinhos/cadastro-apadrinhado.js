import { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { getData } from 'functions/getData';
import FormField from 'components/Blocks/Form/components/FormField';
import getRecords from 'functions/getRecords';
import { getNavigation } from 'functions/getNavigation';

// TODO: CLEAN CODE!!!

const Apadrinhados = (props) => {
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

    // Form Submit
    const rawResponse = await fetch('/api/google/submitApadrinhado', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData }),
    });
    const content = await rawResponse.json();
    if (content?.data?.updates?.updatedRows) {
      setStatus(true);
    } else {
      setStatus(false);
    }

    // Send e-mail
    const emailResponse = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: JSON.stringify({
        subject: 'Brinca - Cadastro de Apadrinhados',
        honeypot: '',
        replyTo: '@',
        accessKey: process.env.NEXT_PUBLIC_FORM_KEY,
        name: formData.full_name,
        email: formData.email,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const emailJson = await emailResponse.json();
    if (emailJson.success) {
      console.log('Enviado!');
    } else {
      console.error(emailJson.message);
    }
  };

  // FIELDS
  // ===================================
  const options = props.apadrinhados.map((item) => {
    return {
      value: item[1],
      label: item[1],
    };
  });

  const fields = [
    {
      id: 'full_name',
      label: 'Nome Completo',
      type: 'textfield',
      validate: { required: true },
    },
    {
      id: 'email',
      label: 'Email de contato',
      type: 'email',
      validate: false,
      validate: { required: true },
    },
    {
      id: 'phone',
      label: 'Telefone',
      type: 'phoneNumber',
      validate: { required: true },
    },
    {
      id: 'expected_travel',
      label: 'Data prevista da viagem',
      type: 'date',
      placeholder: 'yyyy/mm/dd',
      validate: { required: true },
    },
    {
      id: 'planning_stay',
      label: 'Pretende ficar quanto tempo em Ottawa?',
      type: 'textfield',
      validate: { required: true },
    },
    {
      id: 'personal_profile',
      label:
        'Descreva brevemente sua família, seu status imigratório (estudante, PR, etc) e o que você espera de um padrinho',
      type: 'textarea',
      validate: { required: true },
    },
  ];

  // CONTENT
  // ===================================
  const content = status ? (
    <div className='text-center'>
      <p>Obrigado pelo seu cadastro.</p>
      <p>Entraremos em contato em breve.</p>
    </div>
  ) : (
    <>
      <h5>Quero ser apadrinhado:</h5>
      <p>
        Você está migrando para o Canada e está cheio de dúvidas e incertezas?
        Pois saiba que todos nós já passamos por isso. Para participar do nosso
        programa de apadrinhamento você precisa estar vindo para Ottawa nos
        próximos 6 meses, com intenção de permanecer por aqui por pelo menos 6
        meses. Preencha o cadastro abaixo e faremos o máximo para encontrar
        alguém com seu perfil e disposto a te ajudar.
      </p>
      <h6>
        - A BRINCA não se responsabiliza por nenhuma informação trocada entre os
        participantes, cabendo a nós apenas a facilitação do encontro entre
        compatriotas com interesses em comum.
        <br />
        - É terminantemente proibida a venda de produtos ou oferecimento de
        serviços de qualquer espécie, sendo o apadrinhamento um trabalho
        estritamente voluntário.
        <br />
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
    <Layout pageTitle={`Apadrinhados`} navigation={props.navigation}>
      <header data-aos='fade-in'>
        <h1 className='content-title'>Apadrinhados - Cadastro</h1>
      </header>
      <section className='parceiros__form pt-0'>
        <div className='partners__body'>{content}</div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const navigation = await getNavigation();
  const apadrinhados =
    (await getRecords({
      spreadsheetId: process.env.GOOGLE_SHEET_PADRINHO_ID,
      range: 'Apadrinhados',
    })) || [];
  return {
    props: {
      navigation,
      apadrinhados,
    },

    revalidate: 30,
  };
}

export default Apadrinhados;

// TODO: Make dynamic
const headers = {
  id: '',
  full_name: '',
  email: '',
  phone: '',
  expected_travel: '',
  planning_stay: '',
  personal_profile: '',
};
