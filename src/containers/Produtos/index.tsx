import Produto from '../../components/Produto'
import { useGetJogosQuery } from '../../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading, error } = useGetJogosQuery()

  console.log({ jogos, isLoading, error })

  if (isLoading) return <h2>Carregando...</h2>

  if (error) return <h2>Erro ao carregar os produtos</h2>

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
