import { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { getData } from 'functions/getData';
import FormField from 'components/Blocks/Form/components/FormField';
import getRecords from 'functions/getRecords';
import { getNavigation } from 'functions/getNavigation';

// TODO: CLEAN CODE!!!

const Padrinhos = (props) => {
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
    const rawResponse = await fetch('/api/google/submitPadrinho', {
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
        subject: 'Brinca - Cadastro de Padrinhos',
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
  const options = props.padrinhos.map((item) => {
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
      id: 'in_canada_since',
      label: 'No Canadá desde',
      type: 'date',
      placeholder: 'yyyy/mm/dd',
      validate: { required: true },
    },
    {
      id: 'children',
      label: 'Tem filhos em idade escolar? Quantos e que idade?',
      type: 'textfield',
      validate: { required: true },
    },
    {
      id: 'personal_profile',
      label:
        'Descreva brevemente seu perfil profissional e porque gostaria de ser padrinho/madrinha de um recém chegado',
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
      <h5>Quero apadrinhar:</h5>
      <p>
        Para ser um padrinho ou madrinha, você precisa estar morando há pelo
        menos 3 anos no Canadá e ter disponibilidade e boa vontade para
        responder às mais diversas questões de famílias que estão chegando ou
        que chegaram recentemente em Ottawa e região.
        <br />
        Você estará lidando com sonhos e ansiedades, então se você é do tipo que
        vê o WhatsApp a cada três dias, talvez essa não seja a melhor opção de
        voluntariado pra você.
        <br />
        Preencha os dados abaixo e aguarde o nosso contato em breve!
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
    <Layout pageTitle={`Padrinhos`} navigation={props.navigation}>
      <header data-aos='fade-in'>
        <h1 className='content-title'>Padrinhos - Cadastro</h1>
      </header>
      <section className='parceiros__form pt-0'>
        <div className='partners__body'>{content}</div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const navigation = await getNavigation();
  const padrinhos =
    (await getRecords({
      spreadsheetId: process.env.GOOGLE_SHEET_PADRINHO_ID,
      range: 'Padrinhos',
    })) || [];
  return {
    props: {
      navigation,
      padrinhos,
    },

    revalidate: 30,
  };
}

export default Padrinhos;

// TODO: Make dynamic
const headers = {
  id: '',
  full_name: '',
  email: '',
  phone: '',
  in_canada_since: '',
  children: '',
  personal_profile: '',
};
