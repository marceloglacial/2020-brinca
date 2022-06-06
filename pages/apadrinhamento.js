import Layout from 'components/Layout/Layout'
import PadrinhoContent from 'components/Padrinho/PadrinhoContent'
import Button from 'components/Button/Button'

const Apadrinhamento = (props) => {
  return (
    <Layout pageTitle={`Torne-se um Padrinho`}>
      <PadrinhoContent title={`Apadrinhe um recém-chegado ao Canada!`} />
      <div className={`text-center`}>
        <Button title={`Quero apadrinhar um recém chegado`} link={`/apadrinhar`} type={`primary`} className={`mb-3 mr-2`} />
        <Button title={`Quero ser apadrinhado`} link={`/ser-apadrinhado`} type={`primary`} className={`mb-3`} />
      </div>
    </Layout>
  )
}

export default Apadrinhamento
